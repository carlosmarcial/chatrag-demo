#!/usr/bin/env node

const axios = require('axios');
const { EventSourceParserStream } = require('eventsource-parser/stream');

async function testMCPApprovalMarker() {
  const API_URL = 'http://localhost:3000/api/chat';

  // Multi-step query that should trigger RAG first, then MCP tools
  const query = "Please first look for this answer: How has Apple's total net sales changed over time? And then afterwards use the Zapier MCP to create a gmail email draft with the subject 'Apple Sales Analysis' and body containing the sales information";

  console.log('🧪 Testing MCP approval marker with multi-step query...');
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
    let approvalMarkerFormat = '';

    // Process the stream
    for await (const chunk of response.data) {
      const text = decoder.decode(chunk, { stream: true });
      buffer += text;

      // Check for approval marker pattern
      const approvalMatch = text.match(/__REQUIRES_APPROVAL__:[^:]+:[^"]+/);
      if (approvalMatch) {
        foundApprovalMarker = true;
        approvalMarkerFormat = approvalMatch[0];
        console.log('✅ Found approval marker:', approvalMarkerFormat);

        // Parse the format
        const parts = approvalMarkerFormat.split(':');
        if (parts.length === 3) {
          console.log('✅ Marker format is correct!');
          console.log('  - Marker:', parts[0]);
          console.log('  - Tool Call ID:', parts[1]);
          console.log('  - Tool Name:', parts[2]);
        } else {
          console.log('❌ Marker format is incorrect!');
          console.log('  - Expected: __REQUIRES_APPROVAL__:toolCallId:toolName');
          console.log('  - Got:', approvalMarkerFormat);
          console.log('  - Parts count:', parts.length);
        }
      }

      // Also log any debug output
      if (text.includes('[DEBUG]') || text.includes('[CACHED TOOL]') || text.includes('[MCP TOOL]') || text.includes('[STUB TOOL]')) {
        console.log('Debug:', text);
      }
    }

    if (!foundApprovalMarker) {
      console.log('⚠️ No approval marker found in response');
      console.log('Response snippet:', buffer.substring(0, 500));
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the test
testMCPApprovalMarker().catch(console.error);