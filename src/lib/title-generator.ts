import { DBMessage } from '@/types/chat';
import { getOpenRouterClient } from '@/lib/openrouter';
import { env } from '@/lib/env';
import type { Language } from '@/translations';
import {
  generateMultimodalTitle,
  hasMultimodalContent,
  analyzeImageForTitle,
  ImageAnalysis
} from './title-generator-multimodal';
import {
  detectGenerationType,
  generateTextToImageTitle,
  generateImageToImageTitle,
  generateTextToVideoTitle,
  generateImageToVideoTitle,
  generateImageTo3DTitle,
  analyzeCreativePrompt
} from './title-generator-creative';

/**
 * Entity types that can be extracted from conversations
 */
interface ExtractedEntities {
  technologies: string[];
  products: string[];
  concepts: string[];
  actions: string[];
  problems: string[];
  solutions: string[];
  features: string[];
  companies: string[];
  financialTerms: string[];
  businessConcepts: string[];
}

/**
 * Conversation analysis result
 */
interface ConversationAnalysis {
  type: 'tutorial' | 'troubleshooting' | 'explanation' | 'implementation' | 'analysis' | 'comparison' | 'configuration' | 'inquiry' | 'creation';
  primaryTopic: string;
  secondaryTopics: string[];
  outcome?: string;
  entities: ExtractedEntities;
  complexity: 'basic' | 'intermediate' | 'advanced';
  resolution: 'resolved' | 'partial' | 'ongoing';
}

/**
 * Detects the primary language of a text
 * @param text The text to analyze
 * @returns The detected language code
 */
function detectLanguage(text: string): Language {
  // Common language indicators for all 12 supported languages
  const indicators = {
    es: {
      // Spanish question words, articles, and common words
      patterns: /\b(qué|cómo|cuándo|dónde|por qué|quién|cuál|cuánto|para qué|el|la|los|las|un|una|es|son|está|están|puede|puedo|hacer|tiene|tengo|hay|sobre|con|sin|desde|hasta|después|antes|mientras|aunque|porque|entonces|también|además|ahora|hoy|ayer|mañana|aquí|allí|muy|más|menos|todo|nada|algo|alguien|nadie)\b/gi,
      questionMarks: /¿|¡/g
    },
    fr: {
      // French question words, articles, and common words
      patterns: /\b(que|quoi|comment|quand|où|pourquoi|qui|quel|quelle|combien|le|la|les|un|une|des|est|sont|être|avoir|faire|peut|peux|je|tu|il|elle|nous|vous|ils|elles|avec|sans|pour|dans|sur|sous|après|avant|pendant|mais|donc|alors|aussi|très|plus|moins|tout|rien)\b/gi,
      questionMarks: null
    },
    de: {
      // German question words, articles, and common words
      patterns: /\b(was|wie|wann|wo|warum|wer|welche|welcher|welches|wie viel|der|die|das|ein|eine|ist|sind|bin|bist|haben|hat|kann|kannst|können|machen|macht|ich|du|er|sie|es|wir|ihr|mit|ohne|für|bei|nach|vor|während|aber|denn|oder|und|auch|sehr|mehr|weniger|alles|nichts)\b/gi,
      questionMarks: null
    },
    pt: {
      // Portuguese question words, articles, and common words
      patterns: /\b(que|o que|como|quando|onde|por que|porquê|quem|qual|quanto|o|a|os|as|um|uma|é|são|está|estão|pode|posso|fazer|tem|tenho|há|sobre|com|sem|desde|até|depois|antes|enquanto|mas|porque|então|também|além|agora|hoje|ontem|amanhã|aqui|ali|muito|mais|menos|tudo|nada)\b/gi,
      questionMarks: null
    },
    lt: {
      // Lithuanian question words, articles, and common words
      patterns: /\b(kas|kaip|kada|kur|kodėl|ar|kuris|kuri|kiek|yra|tai|su|be|ir|bet|arba|nes|kad|jei|nuo|iki|po|prieš|per|apie|dėl|dabar|šiandien|vakar|rytoj|čia|ten|labai|daugiau|mažiau|viskas|nieko)\b/gi,
      questionMarks: null
    },
    zh: {
      // Chinese question words and common characters
      patterns: /[什么|怎么|怎样|为什么|哪里|哪个|谁|什麽|是|的|了|吗|呢|吧|在|有|没有|不|很|都|也|就|和|与|或|但是|因为|所以|如果|现在|今天|昨天|明天|这|那|这里|那里]/g,
      questionMarks: /？|！/g
    },
    hi: {
      // Hindi question words and common words
      patterns: /\b(क्या|कैसे|कब|कहाँ|कहां|क्यों|कौन|किसका|कितना|है|हैं|था|थे|थी|में|से|को|के|का|की|पर|और|या|लेकिन|क्योंकि|अगर|तो|अब|आज|कल|यहाँ|वहाँ|बहुत|ज्यादा|कम|सब|कुछ)\b/gi,
      questionMarks: /？|！/g
    },
    ar: {
      // Arabic question words and common words (RTL)
      patterns: /\b(ما|كيف|متى|أين|لماذا|من|أي|كم|هل|هو|هي|هم|في|على|إلى|من|مع|عن|بعد|قبل|عند|كان|يكون|أو|و|لكن|لأن|إذا|الآن|اليوم|أمس|غدا|هنا|هناك|جدا|أكثر|أقل|كل|شيء)\b/gi,
      questionMarks: /؟|!/g
    },
    ja: {
      // Japanese particles, question words, and common patterns
      patterns: /[は|が|を|に|で|と|から|まで|より|の|です|ます|だ|である|か|ね|よ|わ|な|さ|ぞ|こそ|でも|しかし|そして|または|なぜ|どう|いつ|どこ|だれ|何|どれ|どの|今|今日|昨日|明日|ここ|そこ|あそこ|とても|もっと|少ない|すべて|なにも]/g,
      questionMarks: /？|！/g
    },
    ru: {
      // Russian question words and common words
      patterns: /\b(что|как|когда|где|почему|кто|какой|сколько|зачем|куда|откуда|это|есть|был|была|были|в|на|с|из|к|от|по|за|под|над|при|у|о|и|или|но|а|потому|что|если|сейчас|сегодня|вчера|завтра|здесь|там|очень|больше|меньше|все|ничего)\b/gi,
      questionMarks: null
    },
    ko: {
      // Korean question words and common patterns
      patterns: /[무엇|뭐|어떻게|언제|어디|왜|누구|어느|얼마나|입니다|입니까|이다|있다|없다|하다|되다|을|를|이|가|에|에서|으로|와|과|하고|그리고|또는|하지만|그러나|왜냐하면|만약|지금|오늘|어제|내일|여기|거기|매우|더|덜|모든|아무것도]/g,
      questionMarks: /？|！/g
    }
  };

  // Count matches for each language
  const scores: Record<string, number> = { 
    en: 0, es: 0, fr: 0, de: 0, pt: 0, lt: 0, 
    zh: 0, hi: 0, ar: 0, ja: 0, ru: 0, ko: 0 
  };
  
  for (const [lang, config] of Object.entries(indicators)) {
    const matches = text.match(config.patterns);
    scores[lang] = matches ? matches.length : 0;
    
    // Bonus points for language-specific punctuation
    if (config.questionMarks) {
      const punctMatches = text.match(config.questionMarks);
      if (punctMatches) scores[lang] += punctMatches.length * 3; // Weight punctuation heavily
    }
  }
  
  // Check for English patterns
  const englishPatterns = /\b(what|how|when|where|why|who|which|can|could|would|should|is|are|the|a|an|in|on|at|to|for|with|without|from|about|have|has|had|will|shall|may|might|must|very|more|less|all|nothing|something|someone|nobody)\b/gi;
  const englishMatches = text.match(englishPatterns);
  scores.en = englishMatches ? englishMatches.length : 0;
  
  // Find the language with the highest score
  let maxScore = 0;
  let detectedLang: Language = 'en';
  
  for (const [lang, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      detectedLang = lang as Language;
    }
  }
  
  // If no clear language detected (very low scores), default to English
  if (maxScore < 2) {
    return 'en';
  }
  
  return detectedLang;
}

/**
 * Extracts entities from conversation text
 */
function extractEntities(text: string): ExtractedEntities {
  const entities: ExtractedEntities = {
    technologies: [],
    products: [],
    concepts: [],
    actions: [],
    problems: [],
    solutions: [],
    features: [],
    companies: [],
    financialTerms: [],
    businessConcepts: []
  };

  // Technology patterns - programming languages, frameworks, tools
  const techPatterns = [
    /\b(React|Vue|Angular|Next\.?js|Nuxt|Gatsby|Svelte|SvelteKit)\b/gi,
    /\b(Node\.?js|Express|Fastify|Nest\.?js|Koa|Hapi)\b/gi,
    /\b(TypeScript|JavaScript|Python|Java|C\+\+|C#|Go|Rust|Ruby|PHP|Swift|Kotlin)\b/gi,
    /\b(Docker|Kubernetes|K8s|Helm|Jenkins|GitLab|GitHub|CircleCI|Travis)\b/gi,
    /\b(AWS|Azure|GCP|Google Cloud|Vercel|Netlify|Heroku|Fly\.io|Railway)\b/gi,
    /\b(PostgreSQL|MySQL|MongoDB|Redis|Elasticsearch|DynamoDB|Firestore|Supabase)\b/gi,
    /\b(GraphQL|REST|gRPC|WebSocket|Socket\.io|WebRTC)\b/gi,
    /\b(Tailwind|Bootstrap|Material.UI|Chakra|Ant Design|Shadcn)\b/gi,
    /\b(Webpack|Vite|Rollup|Parcel|esbuild|Turbopack)\b/gi,
    /\b(Git|SVN|Mercurial|Perforce)\b/gi,
    /\b(OpenAI|Claude|Anthropic|GPT-4|GPT-3|DALL-E|Midjourney|Stable Diffusion)\b/gi,
    /\b(Stripe|PayPal|Square|Razorpay|Polar)\b/gi,
    /\b(Auth0|Clerk|Supabase Auth|Firebase Auth|NextAuth|Lucia)\b/gi,
    /\b(Prisma|Drizzle|TypeORM|Sequelize|Mongoose|Knex)\b/gi,
    /\b(pgvector|HNSW|IVFFlat|embeddings?|vector search|RAG)\b/gi,
    /\b(MCP|Model Context Protocol|Baileys|WhatsApp)\b/gi
  ];

  techPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.technologies.push(...new Set(matches.map(m => m.trim())));
    }
  });

  // Product/Service patterns
  const productPatterns = [
    /\b([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+){0,2})\s+(?:API|SDK|Platform|Service|Tool|Framework|Library|Package|Module)\b/g,
    /\b(?:ChatRAG|ChatGPT|Claude|Gemini|Copilot|CodeWhisperer)\b/gi
  ];

  productPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.products.push(...new Set(matches.map(m => m.trim())));
    }
  });

  // Action patterns - what the user wants to do
  const actionPatterns = [
    /\b(?:implement|create|build|develop|design|deploy|configure|setup|install|integrate|migrate|upgrade|optimize|debug|fix|troubleshoot|analyze|test|refactor|document)\b/gi
  ];

  actionPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.actions.push(...new Set(matches.map(m => m.toLowerCase())));
    }
  });

  // Problem patterns
  const problemPatterns = [
    /\b(?:error|issue|problem|bug|crash|failure|exception|warning|deprecated|slow|performance|memory leak|security vulnerability|breaking change)\b/gi,
    /\b(?:not working|doesn't work|fails to|unable to|can't|cannot|won't)\b/gi
  ];

  problemPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.problems.push(...new Set(matches.map(m => m.toLowerCase())));
    }
  });

  // Feature patterns
  const featurePatterns = [
    /\b(?:authentication|authorization|payment|subscription|billing|search|filter|pagination|caching|logging|monitoring|analytics|notifications|messaging|chat|video|audio|upload|download|export|import|backup|restore|sync)\b/gi,
    /\b(?:dark mode|light mode|theme|responsive|mobile|desktop|tablet|accessibility|i18n|localization|SEO|performance|security)\b/gi
  ];

  featurePatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.features.push(...new Set(matches.map(m => m.toLowerCase())));
    }
  });

  // Concept patterns - abstract ideas and methodologies
  const conceptPatterns = [
    /\b(?:microservices|monolithic|serverless|event.driven|domain.driven|test.driven|behavior.driven)\b/gi,
    /\b(?:CI\/CD|DevOps|GitOps|Infrastructure as Code|IaC|containerization|orchestration)\b/gi,
    /\b(?:machine learning|deep learning|neural network|NLP|computer vision|reinforcement learning)\b/gi,
    /\b(?:blockchain|cryptocurrency|NFT|smart contract|DeFi|Web3)\b/gi,
    /\b(?:SOLID|DRY|KISS|YAGNI|design patterns|clean code|clean architecture)\b/gi,
    /\b(?:agile|scrum|kanban|waterfall|lean|six sigma)\b/gi
  ];

  conceptPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.concepts.push(...new Set(matches.map(m => m.trim())));
    }
  });

  // Company patterns - major tech and business companies
  const companyPatterns = [
    /\b(?:Apple|Microsoft|Google|Amazon|Meta|Facebook|Tesla|Netflix|Adobe|Oracle|IBM|Intel|AMD|NVIDIA|Qualcomm|Samsung|Sony|Nintendo)\b/gi,
    /\b(?:OpenAI|Anthropic|DeepMind|Stability AI|Midjourney|Cohere|Hugging Face|Replicate)\b/gi,
    /\b(?:JP ?Morgan|Goldman Sachs|Morgan Stanley|Bank of America|Wells Fargo|Citigroup|BlackRock|Vanguard|Berkshire Hathaway)\b/gi,
    /\b(?:Walmart|Target|Costco|Home Depot|Lowe's|CVS|Walgreens|Kroger)\b/gi,
    /\b(?:Pfizer|Johnson & Johnson|Merck|AstraZeneca|Moderna|Bristol.Myers|Eli Lilly|AbbVie)\b/gi,
    /\b(?:ExxonMobil|Chevron|Shell|BP|ConocoPhillips|Marathon|Valero)\b/gi,
    /\b(?:Boeing|Airbus|Lockheed Martin|Northrop Grumman|Raytheon|General Dynamics)\b/gi,
    /\b(?:Ford|General Motors|GM|Toyota|Honda|Volkswagen|BMW|Mercedes.Benz|Stellantis|Rivian|Lucid)\b/gi
  ];

  companyPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.companies.push(...new Set(matches.map(m => m.trim())));
    }
  });

  // Financial terms patterns
  const financialPatterns = [
    /\b(?:10-K|10-Q|8-K|S-1|DEF 14A|proxy statement|annual report|quarterly report|earnings report)\b/gi,
    /\b(?:SEC filing|financial statement|balance sheet|income statement|cash flow statement|statement of equity)\b/gi,
    /\b(?:revenue|earnings|EBITDA|net income|gross profit|operating income|free cash flow|FCF)\b/gi,
    /\b(?:P\/E ratio|EPS|ROI|ROE|ROA|ROIC|gross margin|operating margin|net margin|profit margin)\b/gi,
    /\b(?:assets|liabilities|equity|debt|leverage|liquidity|solvency|working capital)\b/gi,
    /\b(?:GAAP|non-GAAP|IFRS|accounting policy|accounting policies|accounting standard|disclosure)\b/gi,
    /\b(?:audit|auditor|internal control|material weakness|restatement|amendment)\b/gi,
    /\b(?:dividend|buyback|share repurchase|stock split|acquisition|merger|divestiture)\b/gi,
    /\b(?:guidance|forecast|outlook|projection|estimate|consensus)\b/gi,
    /\b(?:fiscal year|fiscal quarter|FY|Q1|Q2|Q3|Q4|YoY|QoQ|year.over.year|quarter.over.quarter)\b/gi,
    /\b(?:market cap|valuation|enterprise value|book value|fair value|goodwill|intangible assets)\b/gi,
    /\b(?:risk factors|material risk|compliance|regulatory|litigation|contingency)\b/gi
  ];

  financialPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.financialTerms.push(...new Set(matches.map(m => m.trim())));
    }
  });

  // Business concepts patterns
  const businessPatterns = [
    /\b(?:strategy|strategic plan|business model|competitive advantage|moat|market share|TAM|SAM|SOM)\b/gi,
    /\b(?:supply chain|logistics|procurement|vendor management|inventory management|JIT|lean manufacturing)\b/gi,
    /\b(?:customer acquisition|retention|churn|LTV|CAC|ARPU|MRR|ARR|ACV)\b/gi,
    /\b(?:go.to.market|GTM|product.market fit|PMF|MVP|pivot|scale|growth)\b/gi,
    /\b(?:corporate governance|board of directors|executive compensation|shareholder|stakeholder)\b/gi,
    /\b(?:ESG|sustainability|carbon footprint|diversity|inclusion|corporate responsibility|CSR)\b/gi,
    /\b(?:digital transformation|innovation|disruption|transformation|modernization)\b/gi,
    /\b(?:B2B|B2C|B2B2C|SaaS|PaaS|IaaS|marketplace|platform|ecosystem)\b/gi,
    /\b(?:IPO|SPAC|private equity|venture capital|funding round|Series [A-E]|seed funding)\b/gi,
    /\b(?:restructuring|turnaround|bankruptcy|Chapter 11|liquidation|reorganization)\b/gi
  ];

  businessPatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      entities.businessConcepts.push(...new Set(matches.map(m => m.trim())));
    }
  });

  return entities;
}

/**
 * Validates a generated title to ensure it's well-formed
 */
function validateTitle(title: string): { valid: boolean; reason?: string } {
  // Check if title is empty or too short
  if (!title || title.trim().length < 3) {
    return { valid: false, reason: 'Title is too short' };
  }

  // Check if title is too long (more than 100 characters is excessive)
  if (title.length > 100) {
    return { valid: false, reason: 'Title is too long' };
  }

  // Special grammar validation for "There" sentences FIRST
  if (/^There\s+/i.test(title)) {
    // Must have proper verb structure: "There are changes" not "There significant changes"
    const properVerbPattern = /^There\s+(are|is|was|were|has been|have been|had been|will be|would be|could be|should be|may be|might be|must be)/i;
    if (!properVerbPattern.test(title)) {
      console.log(`[Title Validation] Malformed "There" sentence detected: "${title}"`);
      return { valid: false, reason: 'Malformed "There" sentence structure - missing proper verb' };
    }
  }

  // Check for incomplete sentences or parenthetical fragments
  const incompletePatterns = [
    /\(yes,?\s*this\)?\s*$/i,  // Matches "(yes, this)" at the end
    /\(?\s*this\s*\)?\s*$/i,    // Matches variations of "this)" at the end
    /^There\s+(are|is|was|were|has|have|had)\s+\w+$/i, // Incomplete "There are/is..." sentences (only single word after)
    /\.\.\.\s*\)?$/,            // Matches trailing ellipsis with optional paren
    /,\s*$/,                    // Ends with comma
    /;\s*$/,                    // Ends with semicolon
    /[:\u2014\u2013-]\s*$/,     // Ends with colon, em dash, en dash, or hyphen
    /\s+\(?$|^\)?\s+/,          // Hanging parenthesis
    /^[^A-Z]/,                  // Doesn't start with capital letter
    /^(Yes|No|OK|Sure|Maybe),?\s+/i, // Responses as titles
  ];

  for (const pattern of incompletePatterns) {
    if (pattern.test(title)) {
      return { valid: false, reason: 'Title appears incomplete or malformed' };
    }
  }

  // Check for common grammar issues
  const grammarIssues = [
    /\b(a|an)\s+(a|an)\b/i,     // Double articles
    /\b(the)\s+(the)\b/i,        // Double "the"
    /\b(is|are|was|were)\s+(is|are|was|were)\b/i, // Double verbs
  ];

  for (const pattern of grammarIssues) {
    if (pattern.test(title)) {
      return { valid: false, reason: 'Title has grammar issues' };
    }
  }

  // Check if title is just generic filler text
  const genericPatterns = [
    /^(yes|no|ok|okay|sure|maybe|perhaps)[\s,.]?$/i,
    /^(this|that|these|those)[\s,.]?$/i,
    /^(here|there|where|when|how|why|what)[\s,.]?$/i,
    /^(title|heading|name|label)[\s,.]?$/i,
    /^There\s+\w+$/i,  // Single word after "There"
  ];

  for (const pattern of genericPatterns) {
    if (pattern.test(title)) {
      return { valid: false, reason: 'Title is too generic' };
    }
  }

  // Check for balanced parentheses and quotes
  const openParens = (title.match(/\(/g) || []).length;
  const closeParens = (title.match(/\)/g) || []).length;
  if (openParens !== closeParens) {
    return { valid: false, reason: 'Unbalanced parentheses' };
  }

  const quotes = (title.match(/[\"'`]/g) || []).length;
  if (quotes % 2 !== 0) {
    return { valid: false, reason: 'Unbalanced quotes' };
  }

  // Check word count (should be between 2 and 15 words for a good title)
  const wordCount = title.trim().split(/\s+/).length;
  if (wordCount < 2) {
    return { valid: false, reason: 'Title needs at least 2 words' };
  }
  if (wordCount > 15) {
    return { valid: false, reason: 'Title is too wordy (max 15 words)' };
  }

  return { valid: true };
}

/**
 * Analyzes the conversation to determine its type and key elements
 */
function analyzeConversation(messages: DBMessage[]): ConversationAnalysis {
  const userMessages = messages.filter(m => m.role === 'user').map(m => extractTextContent(m.content));
  const assistantMessages = messages.filter(m => m.role === 'assistant').map(m => extractTextContent(m.content));
  
  const allUserText = userMessages.join(' ');
  const allAssistantText = assistantMessages.join(' ');
  const fullConversation = allUserText + ' ' + allAssistantText;

  // Extract entities from the entire conversation
  const entities = extractEntities(fullConversation);

  // Determine conversation type based on patterns
  let conversationType: ConversationAnalysis['type'] = 'inquiry';
  
  // Check if this is a financial/business conversation first
  const isFinancialConversation = entities.companies.length > 0 || 
                                  entities.financialTerms.length > 0 || 
                                  entities.businessConcepts.length > 0;
  
  // Check for specific conversation patterns
  if (/\b(?:how to|how do i|how can i|guide|tutorial|step.by.step|walkthrough)\b/i.test(allUserText)) {
    conversationType = 'tutorial';
  } else if (/\b(?:error|issue|problem|bug|not working|fails|crashed|exception)\b/i.test(allUserText)) {
    conversationType = 'troubleshooting';
  } else if (/\b(?:what is|what are|explain|describe|definition|meaning)\b/i.test(allUserText)) {
    conversationType = 'explanation';
  } else if (/\b(?:implement|create|build|develop|code|write|generate)\b/i.test(allUserText) && !isFinancialConversation) {
    conversationType = 'implementation';
  } else if (/\b(?:analyze|review|evaluate|assess|examine|investigate|changes?|disclosure|report)\b/i.test(allUserText)) {
    conversationType = 'analysis';
  } else if (/\b(?:compare|versus|vs|difference|better|choose between)\b/i.test(allUserText)) {
    conversationType = 'comparison';
  } else if (/\b(?:configure|setup|install|deploy|settings|options)\b/i.test(allUserText)) {
    conversationType = 'configuration';
  } else if (/\b(?:create|generate|make|produce|design)\b/i.test(allUserText) && entities.actions.includes('create')) {
    conversationType = 'creation';
  }

  // Determine primary topic with financial priority
  let primaryTopic = '';
  if (entities.companies.length > 0) {
    primaryTopic = entities.companies[0];
  } else if (entities.financialTerms.length > 0) {
    primaryTopic = entities.financialTerms[0];
  } else if (entities.technologies.length > 0) {
    primaryTopic = entities.technologies[0];
  } else if (entities.products.length > 0) {
    primaryTopic = entities.products[0];
  } else if (entities.businessConcepts.length > 0) {
    primaryTopic = entities.businessConcepts[0];
  } else if (entities.features.length > 0) {
    primaryTopic = entities.features[0];
  } else if (entities.concepts.length > 0) {
    primaryTopic = entities.concepts[0];
  }

  // Determine secondary topics
  const secondaryTopics = [
    ...entities.companies.slice(1, 2),
    ...entities.financialTerms.slice(1, 2),
    ...entities.technologies.slice(1, 3),
    ...entities.features.slice(0, 2),
    ...entities.businessConcepts.slice(0, 1),
    ...entities.concepts.slice(0, 1)
  ].filter(Boolean).slice(0, 3);

  // Determine complexity
  let complexity: ConversationAnalysis['complexity'] = 'basic';
  if (entities.technologies.length > 3 || entities.concepts.length > 2) {
    complexity = 'advanced';
  } else if (entities.technologies.length > 1 || entities.concepts.length > 0) {
    complexity = 'intermediate';
  }

  // Determine resolution status
  let resolution: ConversationAnalysis['resolution'] = 'ongoing';
  if (allAssistantText.length > 500) {
    if (/\b(?:here's the solution|this should work|problem solved|fixed|resolved|successfully)\b/i.test(allAssistantText)) {
      resolution = 'resolved';
    } else if (/\b(?:might work|could try|possible solution|partially|some issues)\b/i.test(allAssistantText)) {
      resolution = 'partial';
    }
  }

  // Extract outcome if available
  let outcome: string | undefined;
  if (conversationType === 'troubleshooting' && resolution === 'resolved') {
    const solutionMatch = allAssistantText.match(/(?:solution is|fix is|resolved by)\s+([^.!?]+)/i);
    if (solutionMatch) {
      outcome = solutionMatch[1].trim();
    }
  }

  return {
    type: conversationType,
    primaryTopic,
    secondaryTopics,
    outcome,
    entities,
    complexity,
    resolution
  };
}

/**
 * Generates a sophisticated title based on conversation analysis
 */
function generateAnalyticalTitle(analysis: ConversationAnalysis, language: Language = 'en'): string {
  const { type, primaryTopic, secondaryTopics, outcome, entities, complexity } = analysis;

  // If no primary topic identified, use fallback
  if (!primaryTopic && entities.technologies.length === 0 && entities.features.length === 0) {
    return 'Technical Discussion';
  }

  // Build title based on conversation type
  let title = '';
  
  switch (type) {
    case 'tutorial':
      if (primaryTopic) {
        if (entities.features.length > 0) {
          title = `${primaryTopic} ${entities.features[0]} Implementation Guide`;
        } else if (secondaryTopics.length > 0) {
          title = `${primaryTopic} with ${secondaryTopics[0]} Tutorial`;
        } else {
          title = `${primaryTopic} Complete Setup Guide`;
        }
      }
      break;

    case 'troubleshooting':
      if (primaryTopic) {
        if (entities.problems.length > 0) {
          const problem = entities.problems[0];
          if (outcome) {
            title = `${primaryTopic} ${problem} Resolution: ${outcome}`;
          } else {
            title = `Debugging ${primaryTopic} ${problem} Issue`;
          }
        } else {
          title = `${primaryTopic} Troubleshooting & Solutions`;
        }
      }
      break;

    case 'explanation':
      if (primaryTopic) {
        if (complexity === 'advanced' && entities.concepts.length > 0) {
          title = `${primaryTopic} Architecture: ${entities.concepts[0]}`;
        } else if (secondaryTopics.length > 0) {
          title = `${primaryTopic} and ${secondaryTopics[0]} Explained`;
        } else {
          title = `Understanding ${primaryTopic} Fundamentals`;
        }
      }
      break;

    case 'implementation':
      if (primaryTopic) {
        if (entities.features.length > 0) {
          title = `Building ${entities.features[0]} with ${primaryTopic}`;
        } else if (entities.actions.includes('integrate') && secondaryTopics.length > 0) {
          title = `${primaryTopic} + ${secondaryTopics[0]} Integration`;
        } else {
          title = `${primaryTopic} Implementation Strategy`;
        }
      }
      break;

    case 'analysis':
      if (primaryTopic) {
        if (entities.concepts.length > 0) {
          title = `${primaryTopic} ${entities.concepts[0]} Analysis`;
        } else if (complexity === 'advanced') {
          title = `Deep Dive: ${primaryTopic} Architecture`;
        } else {
          title = `${primaryTopic} Performance Analysis`;
        }
      }
      break;

    case 'comparison':
      if (primaryTopic && secondaryTopics.length > 0) {
        title = `${primaryTopic} vs ${secondaryTopics[0]}: Evaluation`;
      } else if (entities.technologies.length >= 2) {
        title = `${entities.technologies[0]} vs ${entities.technologies[1]} Comparison`;
      } else {
        title = `Technology Comparison & Selection`;
      }
      break;

    case 'configuration':
      if (primaryTopic) {
        if (entities.features.length > 0) {
          title = `${primaryTopic} ${entities.features[0]} Configuration`;
        } else if (entities.actions.includes('deploy')) {
          title = `${primaryTopic} Deployment Configuration`;
        } else {
          title = `${primaryTopic} Setup & Configuration`;
        }
      }
      break;

    case 'creation':
      if (primaryTopic) {
        if (entities.features.length > 0) {
          title = `Creating ${entities.features[0]} System with ${primaryTopic}`;
        } else if (secondaryTopics.length > 0) {
          title = `${primaryTopic} & ${secondaryTopics[0]} Project`;
        } else {
          title = `Building with ${primaryTopic}`;
        }
      }
      break;

    default:
      if (primaryTopic) {
        if (secondaryTopics.length > 0) {
          title = `${primaryTopic} & ${secondaryTopics[0]} Discussion`;
        } else {
          title = `${primaryTopic} Consultation`;
        }
      }
  }

  // Fallback if no title generated
  if (!title) {
    // Check for financial/business context first
    if (entities.companies.length > 0 && entities.financialTerms.length > 0) {
      title = `${entities.companies[0]} ${entities.financialTerms[0]} Analysis`;
    } else if (entities.companies.length > 0) {
      title = `${entities.companies[0]} Business Analysis`;
    } else if (entities.financialTerms.length > 0) {
      title = `${entities.financialTerms[0]} Financial Review`;
    } else if (entities.businessConcepts.length > 0) {
      title = `${entities.businessConcepts[0]} Strategy Discussion`;
    } else if (entities.technologies.length > 0) {
      title = `${entities.technologies[0]} Technical Discussion`;
    } else if (entities.features.length > 0) {
      title = `${entities.features[0]} Implementation`;
    } else {
      title = 'Professional Consultation';
    }
  }

  // Clean and format the title
  title = title
    .replace(/\s+/g, ' ')
    .replace(/\b(undefined|null|false|true)\b/gi, '')
    .trim();

  // Apply language-specific formatting
  return formatTitleByLanguage(title, language);
}

/**
 * Format title according to language conventions
 */
function formatTitleByLanguage(title: string, language: Language): string {
  // For non-Latin scripts, return as-is
  if (['zh', 'ja', 'ko', 'hi', 'ar'].includes(language)) {
    return title;
  }

  // Split into words
  const words = title.split(/\s+/);
  
  switch (language) {
    case 'es':
    case 'pt':
    case 'fr':
      // Romance languages: capitalize first word; preserve proper nouns and acronyms
      return words.map((word, i) => {
        if (i === 0) return capitalizeWord(word);
        // Preserve acronyms, hyphenated, dotted terms, and words that appear to be proper nouns (leading capital)
        if (word.match(/^[A-Z]+$/) || word.includes('.') || word.includes('-') || /^[A-Z][a-z]/.test(word)) return word;
        return word.toLowerCase();
      }).join(' ');

    case 'de':
      // German: capitalize nouns (heuristic) and preserve technical terms
      return words.map((word, i) => {
        if (i === 0) return capitalizeWord(word);
        // Technical terms and longer words likely to be nouns
        if (word.length > 4 || /^[A-Z]/.test(word) || word.includes('.')) {
          return capitalizeWord(word);
        }
        return word.toLowerCase();
      }).join(' ');

    case 'ru':
    case 'lt':
      // Slavic/Baltic: capitalize first word only; preserve acronyms and proper nouns
      return words.map((word, i) => {
        if (i === 0) return capitalizeWord(word);
        if (word.match(/^[A-Z]+$/) || /^[A-Z][a-z]/.test(word)) return word;
        return word.toLowerCase();
      }).join(' ');

    default:
      // English: title case
      const smallWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'of', 'in', 'with', 'from', 'as', 'via', 'vs'];
      return words.map((word, i) => {
        if (i === 0 || i === words.length - 1) return capitalizeWord(word);
        if (smallWords.includes(word.toLowerCase()) && !word.match(/^[A-Z]+$/)) {
          return word.toLowerCase();
        }
        return capitalizeWord(word);
      }).join(' ');
  }
}

/**
 * Capitalize a single word properly
 */
function capitalizeWord(word: string): string {
  if (!word) return word;
  
  // Preserve acronyms and special formats
  if (word.match(/^[A-Z]+$/) || word.includes('.')) {
    return word;
  }
  
  // Handle hyphenated words
  if (word.includes('-')) {
    return word.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    ).join('-');
  }
  
  // Regular capitalization
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function capitalizePhrase(str: string): string {
  if (!str) return '';
  return str
    .replace(/^[\s'"`]+|[\s'"`]+$/g, '')
    .split(/\s+/)
    .map(capitalizeWord)
    .join(' ');
}

/**
 * Clamp title to a maximum character length at word boundaries
 */
function clampTitle(title: string, maxLen: number): string {
  if (title.length <= maxLen) return title;
  const truncated = title.slice(0, maxLen + 1);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated.slice(0, maxLen)).trim();
}

/**
 * Main title generation function that uses the best available method
 * @param messages Array of messages in the conversation
 * @param onSmartTitleGenerated Optional callback to handle the async smart title
 * @returns A descriptive title for the conversation
 */
export function generateTitle(
  messages: DBMessage[],
  onSmartTitleGenerated?: (smartTitle: string) => void | Promise<void>
): string {
  // Check if specialized handlers are enabled and applicable
  if (env.CHAT_TITLE_SPECIALIZED_HANDLERS === 'true') {
    const specializedTitle = trySpecializedHandlers(messages);
    if (specializedTitle) {
      // Still trigger async smart title for potential improvement
      if (hasEnoughContentForTitle(messages)) {
        generateEnhancedSmartTitle(messages)
          .then(smartTitle => {
            const ensured = ensureValidTitle(cleanMarkdown(smartTitle), messages);
            console.log('Enhanced smart title generated:', ensured);
            if (onSmartTitleGenerated) {
              Promise.resolve(onSmartTitleGenerated(ensured)).catch(error => {
                console.error('Error in smart title callback:', error);
              });
            }
          })
          .catch(error => {
            console.error('Error generating enhanced smart title:', error);
          });
      }
      return ensureValidTitle(specializedTitle, messages);
    }
  }

  // Check for multimodal content
  if (hasMultimodalContent(messages) && env.CHAT_TITLE_ENABLE_VISION === 'true') {
    // Trigger async multimodal title generation
    generateMultimodalTitle(messages)
      .then(multimodalTitle => {
        if (multimodalTitle && onSmartTitleGenerated) {
          const ensured = ensureValidTitle(cleanMarkdown(multimodalTitle), messages);
          console.log('Multimodal title generated:', ensured);
          Promise.resolve(onSmartTitleGenerated(ensured)).catch(error => {
            console.error('Error in multimodal title callback:', error);
          });
        }
      })
      .catch(error => {
        console.error('Error generating multimodal title:', error);
      });
  }

  // Always trigger smart title generation if we have enough content
  if (hasEnoughContentForTitle(messages)) {
    generateSmartTitle(messages)
      .then(smartTitle => {
        const ensured = ensureValidTitle(cleanMarkdown(smartTitle), messages);
        console.log('Smart title generated:', ensured);
        if (onSmartTitleGenerated) {
          Promise.resolve(onSmartTitleGenerated(ensured)).catch(error => {
            console.error('Error in smart title callback:', error);
          });
        }
      })
      .catch(error => {
        console.error('Error generating smart title:', error);
      });
  }

  // Perform conversation analysis for immediate title
  const analysis = analyzeConversation(messages);
  const language = detectLanguage(extractTextContent(messages[0]?.content || ''));

  // Generate analytical title based on conversation analysis
  const analyticalTitle = generateAnalyticalTitle(analysis, language);
  if (analyticalTitle && analyticalTitle !== 'Technical Discussion') {
    // ALWAYS validate and fix titles before returning
    const cleanedTitle = cleanMarkdown(analyticalTitle);
    return ensureValidTitle(cleanedTitle, messages);
  }

  // Fallback to basic title with validation
  const basicTitle = generateBasicTitle(messages);
  return ensureValidTitle(basicTitle, messages);
}

/**
 * Tries specialized handlers for different content types
 */
function trySpecializedHandlers(messages: DBMessage[]): string | null {
  // RAG-specific handler: if documents were referenced, generate a RAG title
  const rag = extractRAGContext(messages);
  if (rag.docName || rag.userTopic) {
    const parts: string[] = [];
    if (rag.userTopic) parts.push(rag.userTopic);
    if (rag.docName) parts.push(`(Docs: ${rag.docName.split('/').pop()})`);
    const ragTitle = parts.join(' ');
    if (ragTitle) return ragTitle;
  }

  const generationType = detectGenerationType(messages);
  if (!generationType) return null;

  const userMessage = messages.find(m => m.role === 'user');
  if (!userMessage) return null;

  const textContent = extractTextContent(userMessage.content);

  // Extract images if present
  const images = extractImagesFromContent(userMessage.content);
  let imageAnalysis: ImageAnalysis | null = null;

  // For transformations, we need the source image
  if (images.length > 0 && (generationType === 'transformation' || generationType === '3d')) {
    // This would ideally be async, but for immediate title we use a simplified analysis
    imageAnalysis = {
      description: 'Source Image',
      subjects: [],
      colors: [],
      technical: []
    };
  }

  switch (generationType) {
    case 'image':
      if (images.length > 0) {
        // Image-to-image
        return generateImageToImageTitle(imageAnalysis, textContent);
      } else {
        // Text-to-image
        return generateTextToImageTitle(textContent);
      }

    case 'video':
      if (images.length > 0) {
        // Image-to-video
        return generateImageToVideoTitle(imageAnalysis, textContent);
      } else {
        // Text-to-video
        return generateTextToVideoTitle(textContent);
      }

    case '3d':
      // Image-to-3D only (no text-to-3D)
      if (images.length > 0) {
        return generateImageTo3DTitle(imageAnalysis);
      }
      break;

    case 'transformation':
      // Generic transformation
      return generateImageToImageTitle(imageAnalysis, textContent);
  }

  return null;
}

/**
 * Enhanced smart title generation with multimodal and creative support
 */
async function generateEnhancedSmartTitle(messages: DBMessage[]): Promise<string> {
  try {
    // First try multimodal if applicable
    if (hasMultimodalContent(messages) && env.CHAT_TITLE_ENABLE_VISION === 'true') {
      const multimodalTitle = await generateMultimodalTitle(messages);
      if (multimodalTitle) {
        return multimodalTitle;
      }
    }

    // Then try specialized handlers
    if (env.CHAT_TITLE_SPECIALIZED_HANDLERS === 'true') {
      const specializedTitle = trySpecializedHandlers(messages);
      if (specializedTitle) {
        return specializedTitle;
      }
    }

    // Fall back to smart title with enhanced prompting
    return await generateSmartTitle(messages);
  } catch (error) {
    console.error('Error in enhanced smart title generation:', error);
    // Fall back to regular smart title
    return generateSmartTitle(messages);
  }
}

/**
 * Extracts images from message content
 */
function extractImagesFromContent(content: string | any[]): string[] {
  const images: string[] = [];

  if (Array.isArray(content)) {
    content.forEach(part => {
      if (part.type === 'image_url' && part.image_url?.url) {
        images.push(part.image_url.url);
      } else if (part.type === 'generated_image' && part.generated_images) {
        images.push(...part.generated_images);
      }
    });
  }

  return images;
}

/**
 * Extracts RAG context (documents used) and user topic
 */
function extractRAGContext(messages: DBMessage[]): { docName?: string; userTopic?: string } {
  let docName: string | undefined;
  let userTopic: string | undefined;

  for (const msg of messages) {
    if (Array.isArray(msg.content)) {
      for (const part of msg.content) {
        if (part.type === 'document_reference' && part.documents && part.documents.length > 0) {
          docName = part.documents[0].filename || part.documents[0].name;
          break;
        }
        if (part.type === 'tool_result' && part.tool === 'query_documents') {
          const docs = part.result?.documents || [];
          if (docs.length > 0) {
            docName = docs[0].filename || docs[0].name;
            break;
          }
        }
      }
    }
  }

  const firstUser = messages.find(m => m.role === 'user');
  if (firstUser) {
    const userText = extractTextContent(firstUser.content);
    userTopic = extractTopicFromQuestion(userText);
  }

  return { docName, userTopic };
}

/**
 * Generates a title by combining user intent and AI response
 */
function generateCombinedTitle(messages: DBMessage[]): string | null {
  const firstUserMessage = messages.find(msg => msg.role === 'user');
  const firstAssistantMessage = messages.find(msg => msg.role === 'assistant');
  
  if (!firstUserMessage || !firstAssistantMessage) return null;
  
  const userContent = extractTextContent(firstUserMessage.content);
  const assistantContent = extractTextContent(firstAssistantMessage.content);
  
  if (!userContent || !assistantContent) return null;
  
  // Analyze both messages
  const analysis = analyzeConversation([firstUserMessage, firstAssistantMessage]);
  const language = detectLanguage(userContent);
  
  // Generate title based on analysis
  return generateAnalyticalTitle(analysis, language);
}

/**
 * Extract topic from question with better synthesis
 */
function extractTopicFromQuestion(question: string, language?: Language): string {
  const lang = language || detectLanguage(question);
  let cleanQuestion = question.trim();

  // Remove leading inverted punctuation (Spanish, etc.) and trailing question marks
  cleanQuestion = cleanQuestion.replace(/[¿¡]/g, '').replace(/\?+$/g, '').trim();

  // If there's a leading prepositional clause ending with a comma (e.g., "In the latest X, ..."), strip it
  const firstComma = cleanQuestion.indexOf(',');
  const hasQWord = /\b(what|how|why|which|who|where|when)\b/i.test(cleanQuestion);
  if (firstComma > -1 && firstComma < 80 && hasQWord) {
    const preamble = cleanQuestion.slice(0, firstComma);
    if (/^(in|on|for|within|from|regarding|about|concerning|based on|according to)\b/i.test(preamble)) {
      cleanQuestion = cleanQuestion.slice(firstComma + 1).trim();
    }
  }

  // English-specific general patterns
  if (lang === 'en') {
    // Effects/Impact between factors
    let m = cleanQuestion.match(/\bwhat\s+(?:effects?|impact)\s+did\s+(.+?)\s+have\s+on\s+(.+?)$/i);
    if (m) {
      return `Effects of ${capitalizePhrase(m[1])} on ${capitalizePhrase(m[2])}`;
    }

    m = cleanQuestion.match(/\bhow\s+(?:do|does|did|will)\s+(.+?)\s+affect\s+(.+?)$/i);
    if (m) {
      return `Impact of ${capitalizePhrase(m[1])} on ${capitalizePhrase(m[2])}`;
    }

    // How-to / procedural
    m = cleanQuestion.match(/\bhow\s+(?:to|can\s+i|do\s+i|should\s+i)\s+(.+?)$/i);
    if (m) {
      return `How to ${capitalizePhrase(m[1])}`;
    }

    m = cleanQuestion.match(/\b(?:what's|what\s+is)\s+the\s+best\s+way\s+to\s+(.+?)$/i);
    if (m) {
      return `How to ${capitalizePhrase(m[1])}`;
    }

    m = cleanQuestion.match(/\b(?:steps|procedure|process)\s+(?:to|for)\s+(.+?)$/i);
    if (m) {
      return `Steps to ${capitalizePhrase(m[1])}`;
    }

    m = cleanQuestion.match(/\b(?:guide|tutorial)\s+(?:to|for)\s+(.+?)$/i);
    if (m) {
      return `Guide to ${capitalizePhrase(m[1])}`;
    }

    // How X works
    m = cleanQuestion.match(/\bhow\s+(?:does|do|did|will)\s+(.+?)\s+work$/i);
    if (m) {
      return `How ${capitalizePhrase(m[1])} Works`;
    }

    // Troubleshooting/fixing
    m = cleanQuestion.match(/\b(?:how\s+to\s+)?(?:fix|resolve|troubleshoot)\s+(.+?)$/i);
    if (m) {
      return `Troubleshooting ${capitalizePhrase(m[1])}`;
    }

    m = cleanQuestion.match(/\b(?:why|how)\s+(?:does|do|did|is|are|was|were)\s+(.+?)\s+(?:fail|failing|not\s+work(?:ing)?|break|broken|crash(?:ing)?|error(?:ing)?)\b/i);
    if (m) {
      return `Debugging ${capitalizePhrase(m[1])}`;
    }

    // Comparisons
    m = cleanQuestion.match(/\b(?:differences?|difference)\s+(?:between|btw)\s+(.+?)\s+(?:and|&|vs|versus)\s+(.+?)$/i);
    if (m) {
      return `${capitalizePhrase(m[1])} vs ${capitalizePhrase(m[2])}`;
    }

    m = cleanQuestion.match(/\bwhen\s+to\s+use\s+(.+?)\s+(?:vs|versus|or)\s+(.+?)$/i);
    if (m) {
      return `${capitalizePhrase(m[1])} vs ${capitalizePhrase(m[2])}`;
    }

    m = cleanQuestion.match(/\b(?:compare|comparison of)\s+(.+?)\s+(?:and|vs|versus)\s+(.+?)$/i);
    if (m) {
      return `${capitalizePhrase(m[1])} vs ${capitalizePhrase(m[2])}`;
    }

    m = cleanQuestion.match(/\b(.+?)\s+(?:vs|versus)\s+(.+?)$/i);
    if (m) {
      return `${capitalizePhrase(m[1])} vs ${capitalizePhrase(m[2])}`;
    }

    // Explanations/definitions
    m = cleanQuestion.match(/\bwhat\s+(?:is|are)\s+(?:the\s+)?(.+?)$/i);
    if (m) {
      return capitalizePhrase(m[1]);
    }

    m = cleanQuestion.match(/\b(?:explain|explanation\s+of)\s+(.+?)\s+(?:for|to)\s+(.+?)$/i);
    if (m) {
      return `${capitalizePhrase(m[1])} for ${capitalizePhrase(m[2])} Explained`;
    }

    // Pros/cons, benefits, risks
    m = cleanQuestion.match(/\b(?:pros\s+and\s+cons|advantages\s+and\s+disadvantages)\s+(?:of|for)\s+(.+?)$/i);
    if (m) {
      return `Pros and Cons of ${capitalizePhrase(m[1])}`;
    }

    m = cleanQuestion.match(/\bbenefits?\s+(?:of|for)\s+(.+?)$/i);
    if (m) {
      return `Benefits of ${capitalizePhrase(m[1])}`;
    }

    m = cleanQuestion.match(/\brisks?\s+(?:of|for)\s+(.+?)$/i);
    if (m) {
      return `Risks of ${capitalizePhrase(m[1])}`;
    }

    // Using X for Y
    m = cleanQuestion.match(/\b(?:using|use)\s+(.+?)\s+for\s+(.+?)$/i);
    if (m) {
      return `${capitalizePhrase(m[1])} for ${capitalizePhrase(m[2])}`;
    }
  }

  // Entity-based topic (technology-oriented) remains as secondary hint, but we keep it general
  const entities = extractEntities(cleanQuestion);
  if (entities.technologies.length > 0) {
    const tech = entities.technologies[0];
    if (entities.features.length > 0) {
      return `${tech} ${entities.features[0]}`;
    }
    if (entities.actions.length > 0) {
      const action = entities.actions[0];
      if (action === 'implement' || action === 'create') {
        return `${tech} Implementation`;
      } else if (action === 'troubleshoot' || action === 'debug' || action === 'fix') {
        return `${tech} Troubleshooting`;
      } else if (action === 'configure' || action === 'setup') {
        return `${tech} Configuration`;
      }
    }
    return tech;
  }

  // Generic fallback: keep significant words without common stopwords
  const words = cleanQuestion
    .replace(/[\"'`]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 2 && !/^(what|how|when|where|why|who|which|can|could|would|should|is|are|the|a|an|in|on|at|to|for|with|from|about|have|has|had|of|and|or)$/i.test(w));

  return words.slice(0, 6).join(' ');
}

/**
 * Cleans markdown formatting and other artifacts from text
 */
export function cleanMarkdown(text: string): string {
  if (!text) return '';
  
  let cleanText = text
    // Remove markdown formatting
    .replace(/\*\*([^*]+)\*\*/g, '$1')         // Remove bold
    .replace(/\*([^*]+)\*/g, '$1')             // Remove italic
    .replace(/`([^`]+)`/g, '$1')               // Remove code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')   // Remove links, keep text
    .replace(/^#\s+/, '')                      // Remove heading marker at start
    .replace(/#/g, '')                         // Remove all hash symbols
    .replace(/^>\s+/, '')                      // Remove blockquote marker
    .replace(/^[-*+]\s+/, '')                  // Remove list item markers
    .replace(/^```[a-z]*\n[\s\S]*?\n```$/gm, '') // Remove code blocks
    .trim();
  
  // Normalize whitespace
  cleanText = cleanText.replace(/\s+/g, ' ').trim();
  
  // Ensure proper capitalization
  if (cleanText) {
    cleanText = cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
  }
  
  return cleanText;
}

/**
 * Determines if there's enough conversation content to generate a meaningful title
 */
export function hasEnoughContentForTitle(messages: DBMessage[]): boolean {
  const assistantMessages = messages.filter(m => m.role === 'assistant');
  return assistantMessages.some(m => extractTextContent(m.content).length >= 50);
}

/**
 * Generates a basic title from a user query as a fallback
 */
export function generateBasicTitle(messages: DBMessage[]): string {
  const firstUser = messages.find(m => m.role === 'user');
  if (!firstUser) return 'New Chat';
  
  const userContent = extractTextContent(firstUser.content).trim();
  if (!userContent) return 'New Chat';
  
  // Analyze the user message
  const entities = extractEntities(userContent);
  const language = detectLanguage(userContent);
  
  // Build title from entities
  if (entities.technologies.length > 0) {
    const mainTech = entities.technologies[0];
    if (entities.actions.length > 0) {
      const action = entities.actions[0];
      const actionWord = action.charAt(0).toUpperCase() + action.slice(1);
      const title = formatTitleByLanguage(`${actionWord} ${mainTech}`, language);
      // Validate even basic titles
      return ensureValidTitle(title, messages);
    }
    const title = formatTitleByLanguage(`${mainTech} Discussion`, language);
    return ensureValidTitle(title, messages);
  }
  
  if (entities.features.length > 0) {
    const feature = entities.features[0];
    const title = formatTitleByLanguage(`${feature} Implementation`, language);
    return ensureValidTitle(title, messages);
  }
  
  // Extract topic from question if it's a question
  if (userContent.includes('?') || userContent.includes('¿')) {
    const title = extractTopicFromQuestion(userContent, language);
    return ensureValidTitle(title, messages);
  }
  
  // Use first few significant words
  const words = userContent.split(/\s+/).filter(w => 
    w.length > 3 && !['what', 'how', 'when', 'where', 'why', 'who', 'which'].includes(w.toLowerCase())
  );
  
  if (words.length > 0) {
    const title = formatTitleByLanguage(words.slice(0, 4).join(' '), language);
    return ensureValidTitle(title, messages);
  }
  
  return 'New Chat';
}

/**
 * Ensures a title is valid and provides a safe fallback if not
 */
function ensureValidTitle(title: string, messages: DBMessage[]): string {
  // Initial cleanup
  let candidate = cleanMarkdown(title).replace(/[\u201C\u201D\u2018\u2019]/g, '"').trim();

  // Validate initial candidate
  let validation = validateTitle(candidate);

  const analysis = analyzeConversation(messages);
  const language = detectLanguage(extractTextContent(messages[0]?.content || ''));

  if (!validation.valid) {
    console.log(`[Title Fix] Invalid title detected: "${candidate}" - Reason: ${validation.reason}`);

    // Try to fix common issues before falling back
    const fixed = attemptTitleFix(candidate, analysis).trim();
    const revalidation = validateTitle(fixed);
    if (revalidation.valid) {
      const formatted = formatTitleByLanguage(fixed, language);
      return clampTitle(formatted, 80);
    }

    // Extract entities ONLY from user messages to prevent hallucination from RAG context
    const userOnlyText = messages.filter(m => m.role === 'user').map(m => extractTextContent(m.content)).join(' ');
    const entities = extractEntities(userOnlyText);

    console.log(`[Title Fix] Extracting entities from user text only:`, userOnlyText.substring(0, 200));
    console.log(`[Title Fix] Found entities:`, {
      technologies: entities.technologies.slice(0, 3),
      features: entities.features.slice(0, 3),
      companies: entities.companies.slice(0, 3)
    });

    // Generate SIMPLE fallback based on entities from user question only
    let fallbackTitle = '';

    // Build title from detected entities - keep it simple, no assumptions
    const titleParts = [];

    if (entities.companies.length > 0) {
      titleParts.push(entities.companies[0]);
    }
    if (entities.technologies.length > 0 && entities.technologies.length < 3) {
      titleParts.push(entities.technologies[0]);
    }
    if (entities.products.length > 0) {
      titleParts.push(entities.products[0]);
    }

    // Add one descriptive term if available
    if (entities.financialTerms.length > 0) {
      titleParts.push(entities.financialTerms[0]);
    } else if (entities.features.length > 0) {
      titleParts.push(entities.features[0]);
    } else if (entities.actions.length > 0) {
      titleParts.push(capitalizeWord(entities.actions[0]));
    }

    if (titleParts.length >= 2) {
      fallbackTitle = titleParts.slice(0, 4).join(' ');
    } else if (titleParts.length === 1) {
      // Only one entity found - be smarter about what we found
      const firstUserMsg = messages.find(m => m.role === 'user');
      const userText = firstUserMsg ? extractTextContent(firstUserMsg.content).toLowerCase() : '';
      const entity = titleParts[0].toLowerCase();

      // If the single entity is a verb like "create", skip it and extract from question
      if (['create', 'use', 'make', 'get', 'set', 'build', 'add', 'remove'].includes(entity)) {
        // Don't use verb as entity, extract subject from question instead
        const words = extractTextContent(firstUserMsg!.content).split(/\s+/).filter(w =>
        !['how', 'what', 'when', 'where', 'why', 'who', 'which', 'is', 'are', 'the', 'a', 'an',
        'do', 'does', 'can', 'could', 'will', 'would', 'should', 'i', 'my', 'me', 'many', 'much'].includes(w.toLowerCase()) &&
        !['create', 'use', 'make', 'get', 'set', 'build'].includes(w.toLowerCase())
        );
        const subject = words[0];
        if (subject && userText.includes('how many')) {
          fallbackTitle = `${subject} Limits`;
        } else if (subject) {
          fallbackTitle = `${subject} Information`;
        } else {
          fallbackTitle = 'New Chat';
        }
      } else if (userText.includes('cost') || userText.includes('price') || userText.includes('pricing')) {
        fallbackTitle = `${titleParts[0]} Pricing`;
      } else if (userText.includes('database') || userText.includes('vector')) {
        // Asking about what database/tech is used
        fallbackTitle = `${titleParts[0]} Database`;
      } else if (userText.includes('how many') || userText.includes('limit')) {
        fallbackTitle = `${titleParts[0]} Limits`;
      } else if (userText.includes('how') && (userText.includes('work') || userText.includes('use'))) {
        fallbackTitle = `${titleParts[0]} Overview`;
      } else {
        fallbackTitle = `${titleParts[0]} Information`;
      }
    } else {
      // Last resort: smart extraction from user question
      const firstUserMsg = messages.find(m => m.role === 'user');
      if (firstUserMsg) {
        const userText = extractTextContent(firstUserMsg.content);
        const lowerText = userText.toLowerCase();

        // Extract meaningful words (remove question words and common words)
        const questionWords = ['how', 'what', 'when', 'where', 'why', 'who', 'which',
          'is', 'are', 'was', 'were', 'do', 'does', 'did', 'can', 'could', 'will', 'would',
          'should', 'may', 'might', 'the', 'a', 'an', 'i', 'my', 'me', 'to', 'for', 'of', 'in'];

        const words = userText.split(/\s+/).filter(w =>
          !questionWords.includes(w.toLowerCase()) && w.length > 1
        );

        // Detect question type and create appropriate title
        if (lowerText.includes('how many') || lowerText.includes('how much')) {
          // Quantity question: "How many X can I..." → "X Limits" or "X Quantity"
          const subject = words.find(w => !['many', 'much', 'create', 'make', 'get', 'have'].includes(w.toLowerCase()));
          if (subject) {
            // Check if it's asking about creation/building
            if (lowerText.includes('create') || lowerText.includes('build') || lowerText.includes('make')) {
              fallbackTitle = `${subject} Creation Limits`;
            } else {
              fallbackTitle = `${subject} Limits`;
            }
          } else {
            fallbackTitle = words.slice(0, 2).join(' ') + ' Limits';
          }
        } else if (lowerText.includes('cost') || lowerText.includes('price') || lowerText.includes('pricing')) {
          // Pricing question
          const subject = words.filter(w => !['cost', 'price', 'pricing'].includes(w.toLowerCase())).slice(0, 2).join(' ');
          fallbackTitle = subject ? `${subject} Pricing` : 'Pricing Information';
        } else if (lowerText.includes('what') && (lowerText.includes('database') || lowerText.includes('use'))) {
          // "What X does Y use?" → "Y X"
          const mainSubject = words.find(w =>
            ['chatrag', 'system', 'platform', 'app', 'application'].includes(w.toLowerCase())
          );
          const aspect = words.find(w =>
            !['use', 'uses', 'using', 'does'].includes(w.toLowerCase()) && w !== mainSubject
          );
          if (mainSubject && aspect) {
            fallbackTitle = `${mainSubject} ${aspect}`;
          } else {
            fallbackTitle = words.slice(0, 3).join(' ');
          }
        } else {
          // Generic: take first meaningful words
          fallbackTitle = words.slice(0, 3).join(' ') || 'New Chat';
        }
      } else {
        fallbackTitle = 'New Chat';
      }
    }

    console.log(`[Title Fix] Generated fallback: "${fallbackTitle}"`);
    return clampTitle(formatTitleByLanguage(fallbackTitle, language), 80);
  }

  // If valid, still normalize formatting and length
  const formatted = formatTitleByLanguage(candidate, language);
  return clampTitle(formatted, 80);
}

/**
 * Generates an AI-powered title using pure AI approach with retry logic
 *
 * This function uses GPT-4o to generate professional, semantic titles.
 * If the AI generates an invalid title, it retries up to 3 times with feedback.
 * The system ensures quality through validation and never falls back to
 * deterministic logic - it's 100% AI-driven.
 */
export async function generateSmartTitle(messages: DBMessage[]): Promise<string> {
  try {
    // Extract the first user message only (to prevent hallucination from RAG context)
    const userMessages = messages.filter(m => m.role === 'user');

    if (userMessages.length === 0) {
      return 'New Chat';
    }

    const firstUserMsg = userMessages[0];
    const mainQuestion = extractTextContent(firstUserMsg.content).trim();

    if (!mainQuestion) {
      return 'New Chat';
    }

    console.log('=== AI TITLE GENERATION ===');
    console.log('Question:', mainQuestion);

    // General AI prompt for title generation - no hardcoded examples
    const prompt = `Generate a concise, professional title for the user's question.

Requirements:
- 2-5 words maximum
- Noun phrase (no verbs at the end)
- Professional and semantic
- Capture the core meaning of the question
- Domain-agnostic (works for any topic)

Examples of good titles:
- "ChatRAG Pricing" for pricing questions
- "Aspirin Side Effects" for medical questions
- "Passport Renewal" for procedural questions
- "Chatbot Limits" for quantity/capability questions

Question: "${mainQuestion}"

Generate only the title, nothing else:`;

    // Pure AI approach with retry logic
    const client = getOpenRouterClient();
    if (!client) {
      throw new Error('OpenRouter client not available for title generation');
    }

    const maxRetries = 3;
    let lastError = '';

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        let currentPrompt = prompt;

        // Add feedback from previous attempts
        if (lastError && attempt > 1) {
          currentPrompt += `\n\nPrevious attempt failed: ${lastError}\nPlease try again with a valid title.`;
        }

        const response = await client.chat.completions.create({
          model: env.CHAT_TITLE_MODEL,
          messages: [{ role: 'user', content: currentPrompt }],
          temperature: parseFloat(env.CHAT_TITLE_TEMPERATURE),
          max_tokens: parseInt(env.CHAT_TITLE_MAX_TOKENS)
        });

        const aiTitle = response.choices[0].message.content?.trim();

        if (!aiTitle) {
          lastError = 'Empty response from AI';
          continue;
        }

        console.log(`AI Generated title (attempt ${attempt}):`, aiTitle);

        // Validate the AI-generated title
        const validation = validateTitle(aiTitle);
        if (validation.valid) {
          return aiTitle;
        }

        lastError = validation.reason || 'Validation failed';
        console.log(`[AI Title Validation] Attempt ${attempt} failed: ${lastError}`);

      } catch (aiError: any) {
        console.error(`[AI Title] Attempt ${attempt} error:`, aiError.message);
        lastError = `API error: ${aiError.message}`;

        // If it's the last attempt, throw the error
        if (attempt === maxRetries) {
          throw aiError;
        }
      }
    }

    // If all retries failed, throw an error
    throw new Error(`Failed to generate valid title after ${maxRetries} attempts. Last error: ${lastError}`);

  } catch (err) {
  console.error('generateSmartTitle error:', err);
  // Return a basic fallback if AI completely fails
  return 'New Chat';
  }
}

/**
 * Attempts to fix common title issues
 */
function attemptTitleFix(title: string, analysis: ConversationAnalysis): string {
  let fixed = title;
  
  // Remove trailing incomplete parenthetical content
  fixed = fixed.replace(/\s*\([^)]*$/, '');
  fixed = fixed.replace(/\s*\([^)]*\)\s*$/, match => {
    // Keep complete parenthetical content if it makes sense
    if (match.includes('yes') || match.includes('this')) {
      return ''; // Remove meta-commentary
    }
    return match;
  });
  
  // Fix incomplete "There [word]" patterns
  if (/^There\s+\w+\s*$/i.test(fixed)) {
    // Try to complete the sentence based on context
    const primaryTopic = analysis.primaryTopic || 'Changes';
    fixed = `${primaryTopic} Analysis`;
  }
  
  // Remove trailing punctuation issues
  fixed = fixed.replace(/[,;:\u2014\u2013-]\s*$/, '');
  
  // Ensure first letter is capitalized
  if (fixed.length > 0) {
    fixed = fixed.charAt(0).toUpperCase() + fixed.slice(1);
  }
  
  // If still too short or generic, create a better title from analysis
  if (fixed.length < 10 || /^(this|that|these|those|here|there)\s*$/i.test(fixed)) {
    const topics = [
      ...analysis.entities.companies.slice(0, 1),
      ...analysis.entities.technologies.slice(0, 1),
      ...analysis.entities.financialTerms.slice(0, 1),
      analysis.primaryTopic
    ].filter(Boolean);
    
    if (topics.length > 0) {
      fixed = topics.join(' ') + ' ' + (analysis.type === 'analysis' ? 'Analysis' : 'Discussion');
    }
  }
  
  return fixed;
}

/** Helper to extract plain text from message content */
function extractTextContent(content: string | any[]): string {
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) {
    return content.filter(p => p.type === 'text' && p.text).map(p => p.text).join(' ');
  }
  return '';
}