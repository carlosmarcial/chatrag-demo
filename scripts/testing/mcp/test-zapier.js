#!/usr/bin/env node

/**
 * Test script for Zapier MCP connection
 * Tests connection, lists available tools, and verifies Gmail draft creation
 */

require('dotenv').config({ path: '.env.local' });
const fetch = require('node-fetch');

const ZAPIER_ENDPOINT = process.env.MCP_ZAPIER_ENDPOINT;

console.log('🧪 Testing Zapier MCP Connection\n');
console.log('=' .repeat(50));

if (!ZAPIER_ENDPOINT) {
  console.error('❌ MCP_ZAPIER_ENDPOINT not found in .env.local');
  process.exit(1);
}

console.log('✅ Zapier endpoint found:', ZAPIER_ENDPOINT);

/**
 * Test 1: List available tools from Zapier MCP
 */
async function testListTools() {
  console.log('\n📋 Test 1: Listing available tools from Zapier MCP...\n');

  try {
    const response = await fetch(ZAPIER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/list',
        params: {},
        id: 1
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`Zapier error: ${JSON.stringify(data.error)}`);
    }

    const tools = data.result?.tools || [];
    console.log(`✅ Found ${tools.length} tools from Zapier MCP:\n`);

    // Group tools by category
    const gmailTools = tools.filter(t => t.name.includes('gmail'));
    const calendarTools = tools.filter(t => t.name.includes('calendar') || t.name.includes('event'));
    const driveTools = tools.filter(t => t.name.includes('drive'));
    const otherTools = tools.filter(t =>
      !t.name.includes('gmail') &&
      !t.name.includes('calendar') &&
      !t.name.includes('event') &&
      !t.name.includes('drive')
    );

    if (gmailTools.length > 0) {
      console.log('📧 Gmail Tools:');
      gmailTools.forEach(tool => {
        console.log(`   - ${tool.name}: ${tool.description?.substring(0, 80)}...`);
      });
      console.log();
    }

    if (calendarTools.length > 0) {
      console.log('📅 Calendar Tools:');
      calendarTools.forEach(tool => {
        console.log(`   - ${tool.name}: ${tool.description?.substring(0, 80)}...`);
      });
      console.log();
    }

    if (driveTools.length > 0) {
      console.log('📁 Drive Tools:');
      driveTools.forEach(tool => {
        console.log(`   - ${tool.name}: ${tool.description?.substring(0, 80)}...`);
      });
      console.log();
    }

    if (otherTools.length > 0) {
      console.log('🔧 Other Tools:');
      otherTools.forEach(tool => {
        console.log(`   - ${tool.name}: ${tool.description?.substring(0, 80)}...`);
      });
      console.log();
    }

    // Check specifically for gmail_create_draft
    const createDraftTool = tools.find(t =>
      t.name === 'gmail_create_draft' ||
      t.name.includes('create') && t.name.includes('draft')
    );

    if (createDraftTool) {
      console.log('✅ Found Gmail draft creation tool:', createDraftTool.name);
      console.log('   Description:', createDraftTool.description);
      console.log('   Parameters:', JSON.stringify(createDraftTool.inputSchema?.properties || {}, null, 2));
    } else {
      console.log('⚠️  Warning: gmail_create_draft tool not found!');
      console.log('   Available Gmail tools:', gmailTools.map(t => t.name).join(', '));
    }

    return tools;
  } catch (error) {
    console.error('❌ Error listing tools:', error.message);
    console.error('   Full error:', error);
    return [];
  }
}

/**
 * Test 2: Test gmail_create_draft execution
 */
async function testCreateDraft(toolName) {
  console.log(`\n✉️  Test 2: Testing ${toolName} execution...\n`);

  try {
    const testParams = {
      to: 'test@example.com',
      subject: 'Test Draft from ChatRAG',
      body: 'This is a test draft created to verify Zapier MCP integration.',
      instructions: 'Create a test email draft'
    };

    console.log('Sending test parameters:', JSON.stringify(testParams, null, 2));

    const response = await fetch(ZAPIER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: toolName,
          arguments: testParams
        },
        id: 2
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`Zapier error: ${JSON.stringify(data.error)}`);
    }

    console.log('✅ Tool execution response:', JSON.stringify(data.result, null, 2));

    if (data.result && Object.keys(data.result).length > 0) {
      console.log('\n✅ Draft creation appears successful!');
      console.log('   Check your Gmail drafts folder to verify.');
    } else {
      console.log('\n⚠️  Warning: Tool execution returned empty result');
    }

    return data.result;
  } catch (error) {
    console.error('❌ Error executing tool:', error.message);
    console.error('   Full error:', error);

    if (error.message.includes('404')) {
      console.log('\n💡 Hint: Tool might not exist with this exact name.');
      console.log('   Check the tool list above for the correct name.');
    }

    return null;
  }
}

/**
 * Test 3: Test connection with simple ping
 */
async function testConnection() {
  console.log('\n🏓 Test 3: Testing basic connection...\n');

  try {
    const response = await fetch(ZAPIER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'initialize',
        params: {
          protocolVersion: '0.1.0',
          capabilities: {},
          clientInfo: {
            name: 'chatrag-test',
            version: '1.0.0'
          }
        },
        id: 0
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Connection successful!');
    console.log('   Server info:', JSON.stringify(data.result?.serverInfo || {}, null, 2));
    return true;
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    return false;
  }
}

/**
 * Run all tests
 */
async function runTests() {
  // Test basic connection first
  const connected = await testConnection();
  if (!connected) {
    console.log('\n❌ Cannot proceed without connection. Please check:');
    console.log('   1. Your MCP_ZAPIER_ENDPOINT is correct');
    console.log('   2. Your internet connection');
    console.log('   3. The Zapier MCP server is running');
    return;
  }

  // List available tools
  const tools = await testListTools();

  // Find the draft creation tool name
  const draftTool = tools.find(t =>
    t.name === 'gmail_create_draft' ||
    (t.name.includes('gmail') && t.name.includes('create') && t.name.includes('draft'))
  );

  if (draftTool) {
    // Test draft creation with the correct tool name
    await testCreateDraft(draftTool.name);
  } else {
    console.log('\n⚠️  Skipping draft creation test - tool not found');
  }

  console.log('\n' + '=' .repeat(50));
  console.log('✨ Testing complete!\n');

  // Summary
  console.log('📊 Summary:');
  console.log(`   - Connection: ${connected ? '✅' : '❌'}`);
  console.log(`   - Tools found: ${tools.length}`);
  console.log(`   - Gmail tools: ${tools.filter(t => t.name.includes('gmail')).length}`);
  console.log(`   - Draft tool: ${draftTool ? '✅ ' + draftTool.name : '❌ Not found'}`);
}

// Run the tests
runTests().catch(console.error);