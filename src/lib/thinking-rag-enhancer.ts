import { REASONING_MODELS, ReasoningConfig } from '@/lib/types';
import { searchSimilarChunks } from '@/lib/supabase';
import { getQueryEmbedding } from '@/lib/document-processor';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText } from 'ai';
import { env } from '@/lib/env';

export interface QueryUnderstanding {
  key_concepts: string[];
  search_queries: string[];
  context_needed: string;
  search_strategy: 'broad' | 'specific' | 'hybrid';
}

export interface EnhancedRAGResult {
  chunks: Array<{
    chunk_id: string;
    document_id: string;
    content: string;
    similarity: number;
  }>;
  reasoning_applied: boolean;
  search_strategy_used: string;
  total_chunks_considered: number;
}

/**
 * Uses a reasoning model to better understand the user's query for more effective document search
 */
export async function enhanceQueryWithReasoning(
  query: string,
  modelId: string,
  quickReasoningConfig: { effort?: string; max_tokens?: number } = {}
): Promise<QueryUnderstanding> {
  try {
    console.log('[ENHANCED RAG] Using reasoning to understand query:', query);
    
    const thinkingPrompt = `Analyze this user query for document search. Think step by step about what information would be most helpful to answer this query.

Query: "${query}"

Consider:
1. What are the key concepts and topics mentioned?
2. What alternative ways might this information be described in documents?
3. What type of context would be most valuable?
4. Should we search broadly or focus on specific terms?

Output your analysis as JSON in this exact format:
{
  "key_concepts": ["concept1", "concept2", "concept3"],
  "search_queries": ["alternative phrase 1", "alternative phrase 2"],
  "context_needed": "description of what type of information would help",
  "search_strategy": "broad|specific|hybrid"
}`;

    // Use the same model for quick query analysis
    const openRouter = createOpenRouter({
      apiKey: env.OPENROUTER_API_KEY,
    });

    // Prepare reasoning config for quick analysis (direct structure for OpenRouter)
    const reasoningConfig: any = {};
    const modelCapability = REASONING_MODELS[modelId];
    
    if (modelCapability?.supported) {
      // Always enable reasoning
      reasoningConfig.enabled = true;
      
      if (modelCapability.method === 'effort' || modelCapability.method === 'both') {
        reasoningConfig.effort = quickReasoningConfig.effort || 'low';
        console.log('[ENHANCED RAG] Using effort for query enhancement:', reasoningConfig.effort);
      }
      if (modelCapability.method === 'max_tokens' || modelCapability.method === 'both') {
        reasoningConfig.max_tokens = Math.min(quickReasoningConfig.max_tokens || 2000, modelCapability.maxTokensLimit || 2000);
        console.log('[ENHANCED RAG] Using max_tokens for query enhancement:', reasoningConfig.max_tokens);
      }
    }

    const response = await generateText({
      model: openRouter(modelId),
      prompt: thinkingPrompt,
      temperature: 0.3, // Lower temperature for more consistent analysis
      maxOutputTokens: 500,
      ...reasoningConfig
    });

    // Parse the JSON response, handling potential markdown wrapping
    let cleanedResponse = response.text.trim();
    if (cleanedResponse.includes('```json')) {
      cleanedResponse = cleanedResponse
        .replace(/```json\s*/, '')
        .replace(/```\s*$/, '');
    }

    const understanding = JSON.parse(cleanedResponse) as QueryUnderstanding;
    
    console.log('[ENHANCED RAG] Query understanding:', understanding);
    return understanding;

  } catch (error) {
    console.error('[ENHANCED RAG] Error in query enhancement:', error);
    
    // Fallback to basic understanding
    return {
      key_concepts: [query],
      search_queries: [query],
      context_needed: 'General information about the query topic',
      search_strategy: 'hybrid'
    };
  }
}

/**
 * Performs intelligent document search using reasoning-enhanced query understanding
 */
export async function intelligentSearch(
  queryUnderstanding: QueryUnderstanding,
  originalQuery: string,
  options: {
    matchCount?: number;
    similarityThreshold?: number;
    performanceMode?: 'fast' | 'balanced' | 'accurate';
  } = {}
): Promise<EnhancedRAGResult> {
  try {
    console.log('[ENHANCED RAG] Performing intelligent search with strategy:', queryUnderstanding.search_strategy);
    
    // Get similarity threshold from options or environment variable
    const similarityThreshold = options.similarityThreshold || parseFloat(env.RAG_SIMILARITY_THRESHOLD || '0.5');
    console.log('[ENHANCED RAG] Using similarity threshold:', similarityThreshold);
    
    const searchPromises: Promise<any[]>[] = [];
    
    // Always search with the original query
    const originalQueryEmbedding = await getQueryEmbedding(originalQuery);
    searchPromises.push(
      searchSimilarChunks(
        originalQueryEmbedding,
        Math.ceil((options.matchCount || 10) / 2),
        similarityThreshold
      )
    );

    // Add enhanced searches based on strategy
    if (queryUnderstanding.search_strategy === 'broad' || queryUnderstanding.search_strategy === 'hybrid') {
      // Search with broader key concepts
      for (const concept of queryUnderstanding.key_concepts.slice(0, 2)) {
        const conceptEmbedding = await getQueryEmbedding(concept);
        searchPromises.push(
          searchSimilarChunks(
            conceptEmbedding,
            3,
            similarityThreshold
          )
        );
      }
    }

    if (queryUnderstanding.search_strategy === 'specific' || queryUnderstanding.search_strategy === 'hybrid') {
      // Search with alternative specific queries
      for (const altQuery of queryUnderstanding.search_queries.slice(0, 2)) {
        const altQueryEmbedding = await getQueryEmbedding(altQuery);
        searchPromises.push(
          searchSimilarChunks(
            altQueryEmbedding,
            3,
            similarityThreshold
          )
        );
      }
    }

    // Execute all searches in parallel
    const searchResults = await Promise.all(searchPromises);
    
    // Combine and deduplicate results
    const allChunks = new Map<string, any>();
    let totalChunksConsidered = 0;
    
    for (const results of searchResults) {
      totalChunksConsidered += results.length;
      for (const chunk of results) {
        if (!allChunks.has(chunk.chunk_id)) {
          allChunks.set(chunk.chunk_id, chunk);
        } else {
          // Keep the one with higher similarity
          const existing = allChunks.get(chunk.chunk_id);
          if (chunk.similarity > existing.similarity) {
            allChunks.set(chunk.chunk_id, chunk);
          }
        }
      }
    }

    // Convert back to array and sort by similarity
    const finalChunks = Array.from(allChunks.values())
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, options.matchCount || 10);

    console.log(`[ENHANCED RAG] Intelligent search completed: ${finalChunks.length} unique chunks from ${totalChunksConsidered} total considered`);

    return {
      chunks: finalChunks.map(result => ({
        chunk_id: result.chunk_id,
        document_id: result.document_id,
        content: result.content,
        similarity: result.similarity
      })),
      reasoning_applied: true,
      search_strategy_used: queryUnderstanding.search_strategy,
      total_chunks_considered: totalChunksConsidered
    };

  } catch (error) {
    console.error('[ENHANCED RAG] Error in intelligent search:', error);
    
    // Fallback to standard search
    const fallbackEmbedding = await getQueryEmbedding(originalQuery);
    const fallbackThreshold = options.similarityThreshold || parseFloat(env.RAG_SIMILARITY_THRESHOLD || '0.5');
    const fallbackResults = await searchSimilarChunks(
      fallbackEmbedding,
      options.matchCount || 10,
      fallbackThreshold
    );

    return {
      chunks: fallbackResults.map(result => ({
        chunk_id: result.chunk_id,
        document_id: result.document_id,
        content: result.content,
        similarity: result.similarity
      })),
      reasoning_applied: false,
      search_strategy_used: 'fallback',
      total_chunks_considered: fallbackResults.length
    };
  }
}

/**
 * Checks if enhanced RAG should be used for the given model and settings
 * In ChatRAG, enhanced RAG is ALWAYS used when reasoning is enabled (it's a RAG app!)
 */
export function shouldUseEnhancedRAG(
  modelId: string,
  reasoningSettings?: ReasoningConfig,
  disableRAG: boolean = false
): boolean {
  // If RAG is explicitly disabled, respect that
  if (disableRAG) {
    return false;
  }

  // Check if reasoning is enabled - this is the main toggle now
  if (!reasoningSettings?.enabled) {
    return false;
  }

  // Check if the model supports reasoning
  const modelCapability = REASONING_MODELS[modelId];
  if (!modelCapability?.supported) {
    // Try pattern matching as fallback with enhanced Claude Sonnet 4 detection
    const lowerModelId = modelId.toLowerCase();
    const hasReasoningPattern = 
      lowerModelId.includes('o1') || 
      lowerModelId.includes('o3') || 
      lowerModelId.includes('o4') ||
      lowerModelId.includes('claude-3.7') ||
      lowerModelId.includes('claude-3.8') ||
      lowerModelId.includes('claude-sonnet-4') ||
      // Enhanced Claude Sonnet 4 detection
      (lowerModelId.includes('claude') && lowerModelId.includes('sonnet') && lowerModelId.includes('4')) ||
      (lowerModelId.includes('claude-3.5') && lowerModelId.includes('sonnet-4')) ||
      lowerModelId.includes('deepseek-r1') ||
      (lowerModelId.includes('gemini') && lowerModelId.includes('thinking'));
    
    console.log(`[Enhanced RAG] Pattern matching for ${modelId}:`, hasReasoningPattern);
    console.log(`[Enhanced RAG] Detailed checks:`, {
      includes_claude_sonnet_4: lowerModelId.includes('claude-sonnet-4'),
      includes_claude_and_sonnet_and_4: (lowerModelId.includes('claude') && lowerModelId.includes('sonnet') && lowerModelId.includes('4')),
      includes_claude35_sonnet4: (lowerModelId.includes('claude-3.5') && lowerModelId.includes('sonnet-4'))
    });
    
    if (!hasReasoningPattern) {
      return false;
    }
  }

  // If we get here, reasoning is enabled and model supports it
  // In ChatRAG, we ALWAYS use enhanced RAG when reasoning is available
  return true;
}

/**
 * Creates an enhanced system prompt for thinking models with RAG
 */
export function createEnhancedRAGPrompt(basePrompt: string, context: string): string {
  const enhancedRAGPrompt = `You are an AI assistant with advanced reasoning capabilities and access to a knowledge base.

CRITICAL RULES - YOU MUST FOLLOW THESE:
1. You MUST ONLY use information from the "Context from knowledge base" section below
2. DO NOT use any external knowledge or make up information not in the context
3. If information is not in the context, explicitly state "This information is not in my knowledge base"
4. NEVER hallucinate or invent details - stick STRICTLY to the provided context

Use your thinking/reasoning abilities to:
1. Carefully analyze ONLY the provided context from the knowledge base
2. Identify the most relevant information from the context for the user's query
3. Reason through the context to find accurate answers
4. If the context doesn't contain the answer, clearly state this limitation
5. Quote or reference specific parts of the context when possible

Context from knowledge base (THIS IS YOUR ONLY SOURCE OF INFORMATION):
${context}

Instructions from base prompt:
${basePrompt.replace('{{context}}', '').replace(/Context:\s*$/i, '').trim()}

REMEMBER: You must base your ENTIRE response on the Context from knowledge base above. Do not add any information not explicitly stated in that context. If asked about payment integrations, features, or any specific details - ONLY mention what is in the context above.`;

  return enhancedRAGPrompt;
}