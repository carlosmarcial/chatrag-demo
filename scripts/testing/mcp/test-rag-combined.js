#!/usr/bin/env node

const axios = require('axios');

async function testRagMcpCombined() {
  const API_URL = 'http://localhost:3000/api/chat';

  // Multi-step query that should trigger RAG first, then MCP tools
  const query = "Please first look for this answer: How has Apple's total net sales changed over time? And then afterwards use the Zapier MCP to create a gmail email draft with the subject 'Apple Sales Analysis' and body containing the sales information";

  console.log('🧪 Testing combined RAG + MCP response...');
  console.log('Query:', query);
  console.log('');

  try {
    const response = await axios.post(API_URL, {
      messages: [
        { role: 'user', content: query }
      ],
      userId: 'test-user',
      chatId: 'test-chat-' + Date.now(),
      sessionId: 'test-session-' + Date.now(),
      useRAG: true,
      model: 'openai/gpt-4o-mini'
    }, {
      responseType: 'stream',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const decoder = new TextDecoder();
    let buffer = '';
    let foundApprovalMarker = false;
    let ragContent = '';
    let approvalMarkerFormat = '';

    // Process the stream
    for await (const chunk of response.data) {
      const text = decoder.decode(chunk, { stream: true });
      buffer += text;

      // Extract content before approval marker (RAG content)
      if (!foundApprovalMarker) {
        const approvalMatch = text.match(/__REQUIRES_APPROVAL__:[^:]+:[^"]+/);
        if (approvalMatch) {
          foundApprovalMarker = true;
          approvalMarkerFormat = approvalMatch[0];

          // Get content before the marker
          const approvalIndex = buffer.indexOf('__REQUIRES_APPROVAL__');
          if (approvalIndex > 0) {
            ragContent = buffer.substring(0, approvalIndex).trim();
          }

          console.log('✅ Found approval marker:', approvalMarkerFormat);
          console.log('');

          // Check if we have RAG content
          if (ragContent) {
            console.log('✅ RAG content preserved! Length:', ragContent.length, 'characters');
            console.log('RAG content preview (first 200 chars):');
            console.log(ragContent.substring(0, 200) + '...');
          } else {
            console.log('❌ No RAG content found before approval marker');
          }

          console.log('');

          // Parse the approval marker format
          const parts = approvalMarkerFormat.split(':');
          if (parts.length === 3) {
            console.log('✅ Approval marker format is correct!');
            console.log('  - Marker:', parts[0]);
            console.log('  - Tool Call ID:', parts[1]);
            console.log('  - Tool Name:', parts[2]);
          } else {
            console.log('❌ Approval marker format is incorrect!');
            console.log('  - Expected: __REQUIRES_APPROVAL__:toolCallId:toolName');
            console.log('  - Got:', approvalMarkerFormat);
          }
        }
      }
    }

    if (!foundApprovalMarker) {
      console.log('⚠️ No approval marker found in response');
      console.log('Response snippet:', buffer.substring(0, 500));
    }

    console.log('');
    console.log('Summary:');
    console.log('--------');
    console.log('- RAG content present:', ragContent.length > 0 ? '✅ Yes' : '❌ No');
    console.log('- Approval marker found:', foundApprovalMarker ? '✅ Yes' : '❌ No');
    console.log('- Expected behavior:', ragContent.length > 0 && foundApprovalMarker ? '✅ WORKING' : '❌ NEEDS FIX');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the test
testRagMcpCombined().catch(console.error);