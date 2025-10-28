#!/usr/bin/env node

/**
 * Clear MCP Tool Cache Script
 *
 * This script clears the MCP tool cache to force fresh tool discovery
 * from all MCP servers on the next request.
 */

// Clear in-memory cache directly
const clearMemoryCache = () => {
  try {
    // Clear globalThis cache
    if (globalThis.mcpToolsCache) {
      globalThis.mcpToolsCache.clear();
      console.log('✅ Cleared globalThis.mcpToolsCache');
    }

    // Clear any persistent MCP client instances
    if (globalThis.persistentMcpClient) {
      globalThis.persistentMcpClient = null;
      console.log('✅ Cleared persistentMcpClient');
    }

    // Clear module caches
    const cacheModulePath = require.resolve('../src/lib/mcp-cache');
    if (require.cache[cacheModulePath]) {
      delete require.cache[cacheModulePath];
      console.log('✅ Cleared MCP cache module from require.cache');
    }

    console.log('\n🎯 MCP cache cleared successfully!');
    console.log('The next MCP request will perform fresh tool discovery.\n');
  } catch (error) {
    console.error('❌ Error clearing cache:', error);
  }
};

// Clear file-based cache if any
const clearFileCache = () => {
  const fs = require('fs');
  const path = require('path');

  // Check for any cache files in temp directories
  const cacheLocations = [
    path.join(process.cwd(), '.cache', 'mcp'),
    path.join(process.cwd(), 'tmp', 'mcp-cache'),
    path.join(require('os').tmpdir(), 'chatrag-mcp-cache')
  ];

  cacheLocations.forEach(location => {
    if (fs.existsSync(location)) {
      try {
        fs.rmSync(location, { recursive: true, force: true });
        console.log(`✅ Cleared cache directory: ${location}`);
      } catch (error) {
        console.log(`⚠️ Could not clear ${location}:`, error.message);
      }
    }
  });
};

// Main execution
console.log('🔧 Clearing MCP Tool Cache...\n');

clearMemoryCache();
clearFileCache();

console.log('💡 Tip: Restart your development server to ensure all caches are cleared.');
console.log('💡 You may also want to clear your browser cache for best results.\n');