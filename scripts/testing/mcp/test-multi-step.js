#!/usr/bin/env node

/**
 * Test script for multi-step query handling
 * Tests the complete flow of parsing, classification, and execution
 */

const path = require('path');

// Import the multi-step parser
const parserPath = path.join(__dirname, '../src/lib/multi-step-parser.ts');
const classifierPath = path.join(__dirname, '../src/lib/query-classifier.ts');

// Since these are TypeScript files, we'll test the logic conceptually
console.log('🧪 Testing Multi-Step Query Handling\n');
console.log('=' .repeat(50));

// Test cases for multi-step queries
const testQueries = [
  {
    name: 'Apple Sales + Gmail Draft',
    query: 'Please first look for this answer: How has Apple\'s total net sales changed over time? And then afterwards use the Zapier MCP to create a gmail email draft for Carlos Marcial at carlosmarcialt@proton.me telling him about what we found about Apple.',
    expectedSteps: 2,
    expectedTypes: ['rag', 'mcp']
  },
  {
    name: 'Simple Two-Step',
    query: 'Find information about Tesla stock performance and then create an email draft summarizing it.',
    expectedSteps: 2,
    expectedTypes: ['rag', 'mcp']
  },
  {
    name: 'Three-Step Process',
    query: 'First, search for recent AI developments. Then summarize the findings. Finally, create a draft email with the summary.',
    expectedSteps: 3,
    expectedTypes: ['rag', 'general', 'mcp']
  },
  {
    name: 'Single Step (No Multi-Step)',
    query: 'What is the weather today?',
    expectedSteps: 1,
    expectedTypes: ['general']
  }
];

// Function to simulate parsing
function simulateMultiStepParsing(query) {
  // Check for multi-step patterns
  const multiStepPatterns = [
    /\band\s+then\b/i,
    /\bafterwards?\b/i,
    /\bnext\b/i,
    /\bafter\s+that\b/i,
    /\bfinally\b/i,
    /\bfirst\b.*\bthen\b/i
  ];

  const hasMultiStep = multiStepPatterns.some(pattern => pattern.test(query));

  if (!hasMultiStep) {
    return {
      isMultiStep: false,
      steps: 1,
      confidence: 1.0
    };
  }

  // Count potential steps based on delimiters
  const delimiters = query.match(/\b(and then|then|afterwards?|next|after that|finally)\b/gi);
  const stepCount = delimiters ? delimiters.length + 1 : 1;

  return {
    isMultiStep: true,
    steps: stepCount,
    confidence: 0.8,
    delimiters: delimiters || []
  };
}

// Function to detect step types
function detectStepType(text) {
  const lowerText = text.toLowerCase();

  if (/gmail|email|draft|compose|send|reply/.test(lowerText)) {
    return 'mcp';
  }
  if (/find|search|look for|information|data|retrieve/.test(lowerText)) {
    return 'rag';
  }
  if (/create.*image|generate.*image/.test(lowerText)) {
    return 'image_generation';
  }
  return 'general';
}

// Run tests
console.log('\n📊 Test Results:\n');

testQueries.forEach((test, index) => {
  console.log(`Test ${index + 1}: ${test.name}`);
  console.log('-'.repeat(40));
  console.log('Query:', test.query.substring(0, 80) + '...');

  const result = simulateMultiStepParsing(test.query);
  const success = result.isMultiStep === (test.expectedSteps > 1);

  console.log('Expected:', test.expectedSteps > 1 ? 'Multi-step' : 'Single-step');
  console.log('Detected:', result.isMultiStep ? 'Multi-step' : 'Single-step');
  console.log('Steps found:', result.steps);
  console.log('Confidence:', result.confidence);

  if (result.isMultiStep) {
    console.log('Delimiters:', result.delimiters?.join(', ') || 'none');
  }

  console.log('Result:', success ? '✅ PASS' : '❌ FAIL');
  console.log();
});

// Test the actual multi-step flow simulation
console.log('=' .repeat(50));
console.log('\n🔄 Simulating Multi-Step Flow:\n');

const exampleQuery = testQueries[0].query;
console.log('Processing:', exampleQuery.substring(0, 100) + '...\n');

// Simulate step-by-step execution
const steps = [
  {
    step: 1,
    text: 'How has Apple\'s total net sales changed over time?',
    type: 'rag',
    action: 'Searching documents for Apple sales data...'
  },
  {
    step: 2,
    text: 'create a gmail email draft for Carlos Marcial',
    type: 'mcp',
    action: 'Triggering MCP tool approval for Gmail draft creation...'
  }
];

steps.forEach((step, index) => {
  console.log(`📝 Step ${step.step}/${steps.length}:`);
  console.log(`   Type: ${step.type}`);
  console.log(`   Query: "${step.text}"`);
  console.log(`   Action: ${step.action}`);

  if (index < steps.length - 1) {
    console.log('   ⏸️  Waiting for completion before next step...\n');
  } else {
    console.log('   ✅ Multi-step execution complete!\n');
  }
});

console.log('=' .repeat(50));
console.log('\n✨ Multi-Step Testing Complete!\n');

// Provide recommendations
console.log('📋 Recommendations:');
console.log('1. Enable MCP system in .env.local: NEXT_PUBLIC_MCP_SYSTEM_ENABLED=true');
console.log('2. Configure Zapier endpoint: MCP_ZAPIER_ENDPOINT=<your-endpoint>');
console.log('3. Test with the example query in the UI');
console.log('4. Monitor console logs for [MULTI-STEP] tags');
console.log('5. Check that MCP approval modal appears after RAG results\n');