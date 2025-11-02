#!/usr/bin/env node

/**
 * Check for duplicate documents in the database
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function checkDuplicateDocs() {
  console.log('Checking for duplicate documents...\n');

  // Get all documents
  const { data: documents, error } = await supabase
    .from('documents')
    .select('id, filename, created_at, metadata')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Total documents: ${documents.length}\n`);

  // Group by filename
  const byFilename = new Map();
  for (const doc of documents) {
    const filename = doc.filename.toLowerCase();
    if (!byFilename.has(filename)) {
      byFilename.set(filename, []);
    }
    byFilename.get(filename).push(doc);
  }

  // Find duplicates
  console.log('=== DUPLICATE CHECK ===\n');
  for (const [filename, docs] of byFilename.entries()) {
    if (docs.length > 1) {
      console.log(`⚠️  DUPLICATE: "${filename}" - ${docs.length} copies`);
      docs.forEach((doc, i) => {
        console.log(`   ${i + 1}. ID: ${doc.id.substring(0, 8)}... Created: ${new Date(doc.created_at).toLocaleString()}`);
      });
      console.log('');
    }
  }

  // Check for knowledge base specifically
  const kbDocs = documents.filter(d => d.filename.toLowerCase().includes('knowledge-base') || d.filename.toLowerCase().includes('chatrag'));
  if (kbDocs.length > 0) {
    console.log('\n=== KNOWLEDGE BASE DOCUMENTS ===\n');
    for (const doc of kbDocs) {
      console.log(`Document: ${doc.filename}`);
      console.log(`  ID: ${doc.id}`);
      console.log(`  Created: ${new Date(doc.created_at).toLocaleString()}`);

      // Count chunks for this document
      const { count } = await supabase
        .from('document_chunks')
        .select('*', { count: 'exact', head: true })
        .eq('document_id', doc.id);

      console.log(`  Chunks: ${count}`);

      // Check first chunk for URLs
      const { data: firstChunk } = await supabase
        .from('document_chunks')
        .select('metadata')
        .eq('document_id', doc.id)
        .order('chunk_index', { ascending: true })
        .limit(1)
        .single();

      if (firstChunk?.metadata?.has_urls) {
        console.log(`  Has URLs: Yes (${firstChunk.metadata.url_count} URLs)`);
      } else {
        console.log(`  Has URLs: No`);
      }
      console.log('');
    }
  }
}

checkDuplicateDocs().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
