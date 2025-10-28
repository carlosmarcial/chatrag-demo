#!/usr/bin/env node

/**
 * Test script for Zapier MCP connection using the MCP SDK
 * Tests connection, lists available tools, and verifies Gmail draft creation
 */

require('dotenv').config({ path: '.env.local' });

const ZAPIER_ENDPOINT = process.env.MCP_ZAPIER_ENDPOINT;

console.log('🧪 Testing Zapier MCP Connection with SDK\n');
console.log('=' .repeat(50));

if (!ZAPIER_ENDPOINT) {
  console.error('❌ MCP_ZAPIER_ENDPOINT not found in .env.local');
  process.exit(1);
}

console.log('✅ Zapier endpoint found:', ZAPIER_ENDPOINT);

async function runTests() {
  try {
    // Import MCP SDK
    const { Client } = await import('@modelcontextprotocol/sdk/client/index.js');
    const { StreamableHTTPClientTransport } = await import('@modelcontextprotocol/sdk/client/streamableHttp.js');

    console.log('\n🔗 Creating MCP client...');

    // Create transport
    const transport = new StreamableHTTPClientTransport(new URL(ZAPIER_ENDPOINT));

    // Create client
    const client = new Client(
      {
        name: 'chatrag-test',
        version: '1.0.0',
      },
      {
        capabilities: {},
      }
    );

    console.log('🔌 Connecting to Zapier MCP...');

    // Connect
    await client.connect(transport);

    console.log('✅ Connected successfully!\n');

    // List tools
    console.log('📋 Listing available tools...\n');
    const toolsResponse = await client.listTools();
    const tools = toolsResponse.tools || [];

    console.log(`Found ${tools.length} tools:\n`);

    // Group tools by category
    const gmailTools = tools.filter(t => t.name.includes('gmail'));
    const calendarTools = tools.filter(t => t.name.includes('calendar') || t.name.includes('event'));
    const driveTools = tools.filter(t => t.name.includes('drive'));

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

    // Find Gmail draft tool
    const createDraftTool = tools.find(t =>
      t.name === 'gmail_create_draft' ||
      (t.name.includes('gmail') && t.name.includes('create') && t.name.includes('draft'))
    );

    if (createDraftTool) {
      console.log('✅ Found Gmail draft creation tool:', createDraftTool.name);
      console.log('   Description:', createDraftTool.description);

      if (createDraftTool.inputSchema?.properties) {
        console.log('   Required parameters:');
        Object.entries(createDraftTool.inputSchema.properties).forEach(([key, schema]) => {
          const required = createDraftTool.inputSchema.required?.includes(key) ? '(required)' : '(optional)';
          console.log(`     - ${key}: ${schema.type} ${required}`);
        });
      }

      // Test creating a draft
      console.log('\n✉️  Testing draft creation...\n');

      const testParams = {
        to: 'test@example.com',
        subject: 'Test Draft from ChatRAG SDK',
        body: 'This is a test draft created to verify Zapier MCP integration is working correctly.',
        instructions: 'Create a test email draft'
      };

      console.log('Sending parameters:', JSON.stringify(testParams, null, 2));

      try {
        const result = await client.callTool({
          name: createDraftTool.name,
          arguments: testParams
        });

        console.log('\n✅ Tool execution response:', JSON.stringify(result, null, 2));

        if (result && Object.keys(result).length > 0) {
          console.log('\n✅ Draft creation appears successful!');
          console.log('   Check your Gmail drafts folder to verify.');
        } else {
          console.log('\n⚠️  Warning: Tool execution returned empty result');
          console.log('   The draft may not have been created.');
        }
      } catch (error) {
        console.error('\n❌ Error executing tool:', error.message);
        console.error('   This might mean:');
        console.error('   1. Your Gmail is not connected to Zapier');
        console.error('   2. The tool parameters are incorrect');
        console.error('   3. There\'s an issue with the Zapier MCP server');
      }
    } else {
      console.log('\n⚠️  Gmail draft creation tool not found!');
      console.log('   Available Gmail tools:', gmailTools.map(t => t.name).join(', '));
    }

    // Disconnect
    console.log('\n🔌 Disconnecting...');
    await client.close();
    console.log('✅ Disconnected successfully');

    console.log('\n' + '=' .repeat(50));
    console.log('✨ Testing complete!\n');

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    console.error('   Full error:', error);

    if (error.message.includes('Failed to fetch')) {
      console.log('\n💡 Connection tips:');
      console.log('   1. Check your internet connection');
      console.log('   2. Verify the MCP_ZAPIER_ENDPOINT is correct');
      console.log('   3. Make sure you have access to the Zapier MCP server');
    }
  }
}

// Run the tests
runTests().catch(console.error);