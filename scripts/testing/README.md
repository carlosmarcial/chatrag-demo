# Test Scripts

This folder contains various test scripts for debugging and validating ChatRAG functionality.

## Organization

### `/mcp` - MCP (Model Context Protocol) Tests
Test scripts for MCP tool integration, approval flows, and multi-step query processing.

- **test-approval-marker.js** - Tests the MCP tool approval marker format and processing
- **test-multi-step.js** - Tests multi-step query handling (RAG → MCP sequential processing)
- **test-rag-combined.js** - Tests combined RAG document search + MCP tool execution
- **test-zapier.js** - Tests Zapier MCP server connection and tool discovery
- **test-zapier-sdk.js** - Tests Zapier MCP using the official SDK

### Running MCP Tests
```bash
# Test approval marker formatting
node scripts/testing/mcp/test-approval-marker.js

# Test multi-step query processing
node scripts/testing/mcp/test-multi-step.js

# Test combined RAG + MCP
node scripts/testing/mcp/test-rag-combined.js

# Test Zapier MCP connection
node scripts/testing/mcp/test-zapier.js
node scripts/testing/mcp/test-zapier-sdk.js
```

## WhatsApp Tests
WhatsApp-specific test scripts are located in `/scripts/whatsapp/tests/`

## RAG Tests
RAG system test scripts are located in `/scripts/rag/`

## Notes
- These are debugging/validation scripts, not unit tests
- Ensure dev server is running on correct port before testing
- Check `.env.local` for required API keys and endpoints