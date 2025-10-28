import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    if (!supabase) {
      throw new Error('Supabase client not initialized');
    }
    
    // Get all documents
    const { data: documents, error: docError } = await supabase
      .from('documents')
      .select('id, filename, created_at');

    if (docError) {
      console.error('Error fetching documents:', docError);
      throw new Error(`Error fetching documents: ${docError.message}`);
    }

    const statusFixEnabled = process.env.CONFIG_UI_STATUS_FIX !== 'false';

    // Get chunk counts for each document in batch
    const documentsWithChunks = await Promise.all(
      documents.map(async (doc: any) => {
        const { count, error: countError } = await supabase
          .from('document_chunks')
          .select('*', { count: 'exact', head: true })
          .eq('document_id', doc.id);

        if (countError) {
          console.error(`Error counting chunks for document ${doc.id}:`, countError);
          return {
            ...doc,
            chunk_count: 0,
            // Include status only if the feature flag is enabled
            ...(statusFixEnabled && { status: 'unknown' as const })
          };
        }

        // Derive a basic status from the presence of processed chunks.
        // If no chunks have been stored yet, we assume the document is still processing. Otherwise it's ready.
        const status = count && count > 0 ? 'ready' : 'processing';

        return {
          ...doc,
          chunk_count: count,
          ...(statusFixEnabled && { status })
        };
      })
    );

    // Log summary only when requested
    const totalChunks = documentsWithChunks.reduce((sum, doc) => sum + (doc.chunk_count || 0), 0);
    if (process.env.NODE_ENV === 'development') {
      console.log(`Documents: ${documents.length} docs, ${totalChunks} total chunks`);
    }
    return NextResponse.json({ 
      documents: documentsWithChunks.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
    });
  } catch (error) {
    console.error("Error listing documents:", error);
    return NextResponse.json({ 
      error: "Failed to list documents",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 