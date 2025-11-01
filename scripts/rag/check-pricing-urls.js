#!/usr/bin/env node

/**
 * Check if pricing-related chunks have URL metadata
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function checkPricingURLs() {
  console.log('Searching for pricing-related chunks...\n');

  // Search for chunks containing pricing info
  const { data: chunks, error } = await supabase
    .from('document_chunks')
    .select('id, content, metadata')
    .ilike('content', '%pricing%');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Found ${chunks.length} chunks mentioning pricing\n`);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    console.log(`\n=== Pricing Chunk ${i + 1} ===`);
    console.log(`Document: ${chunk.metadata?.document_title || 'Unknown'}`);
    console.log(`Has URLs: ${chunk.metadata?.has_urls || false}`);
    console.log(`URL Count: ${chunk.metadata?.url_count || 0}`);

    if (chunk.metadata?.urls && chunk.metadata.urls.length > 0) {
      console.log(`\nURLs found:`);
      chunk.metadata.urls.forEach((urlData, idx) => {
        console.log(`  ${idx + 1}. ${urlData.url}`);
        console.log(`     Category: ${urlData.category}`);
      });
    } else {
      console.log(`\n❌ No URLs in this pricing chunk`);
    }

    console.log(`\nFull content:\n${chunk.content}\n`);
    console.log('='.repeat(80));
  }

  // Also check for "starter" or "complete" or "$199" or "$269"
  const { data: purchaseChunks } = await supabase
    .from('document_chunks')
    .select('id, content, metadata')
    .or('content.ilike.%starter%,content.ilike.%complete%,content.ilike.%$199%,content.ilike.%$269%,content.ilike.%polar%');

  console.log(`\n\nFound ${purchaseChunks?.length || 0} chunks with purchase-related terms`);

  if (purchaseChunks && purchaseChunks.length > 0) {
    for (const chunk of purchaseChunks) {
      if (chunk.metadata?.has_urls) {
        console.log(`\n✅ Chunk with purchase terms HAS URLs:`);
        console.log(`   Document: ${chunk.metadata.document_title}`);
        console.log(`   URLs: ${chunk.metadata.url_count}`);
        chunk.metadata.urls.forEach(u => console.log(`   - ${u.url}`));
      }
    }
  }
}

checkPricingURLs().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
