import { getAppName } from '@/lib/env';

export const pt = {
  // Main chat
  mainPrompt: "Como posso ajudar você?",
  
  // Navigation and common UI
  settings: "Configurações",
  general: "Geral",
  logout: "Sair",
  modelSelector: "Seletor de modelo",
  textSize: "Tamanho do texto",
  themeToggle: "Alternar tema",
  shareChat: "Compartilhar conversa",
  uploadDocument: "Carregar documento",
  viewDocuments: "Ver documentos",
  
  // Settings modal
  language: "Idioma",
  theme: "Tema",
  customBackground: "Plano de fundo personalizado",
  customBackgroundDesc: "Carregue uma imagem para personalizar o plano de fundo do seu chat",
  upload: "Carregar",
  uploading: "Carregando...",
  currentBackground: "Plano de fundo atual:",
  notificationSound: "Som de notificação",
  notificationSoundDesc: "Reproduzir um som quando a IA completa sua resposta",
  soundType: "Tipo de som",
  playSound: "Reproduzir som",
  highBell: "Sino alto",
  mediumBell: "Sino médio",
  deepBell: "Sino profundo",
  subtleBell: "Sino sutil",
  
  // Admin settings
  admin: "Admin",
  adminLogin: "Login de Admin",
  adminPassword: "Senha de Admin",
  adminPasswordRequired: "Senha de admin é necessária",
  adminLoginFailed: "Falha no login de admin",
  adminPasswordIncorrect: "Senha está incorreta",
  notAuthorizedAsAdmin: "Sua conta não está autorizada como admin",
  loginRequired: "Você deve estar logado para acessar recursos de admin",
  adminVerification: "Verificação de Admin",
  adminVerificationDesc: "Clique no botão abaixo para verificar seu status de admin",
  adminVerificationSuccess: "Acesso de admin ativado com sucesso",
  adminVerificationFailed: "Falha na verificação de admin",
  verifying: "Verificando...",
  activateAdminAccess: "Ativar acesso de Admin",
  loggingIn: "Entrando...",
  loggingOut: "Saindo...",
  logoutAdmin: "Sair como Admin",
  login: "Entrar",
  adminAuthenticated: "Admin Autenticado",
  adminAuthenticatedDesc: "Agora você tem acesso aos recursos de admin",
  docDashboardReadOnly: "Painel de Documentos Somente Leitura",
  docDashboardReadOnlyDesc: "Permitir que usuários vejam documentos no modo somente leitura",
  documentViewer: "Visualizador de Documentos",
  readOnlyMode: "Modo somente leitura ativado - documentos não podem ser modificados",
  documents: "Documentos",
  
  // Text size settings
  small: "Pequeno",
  default: "Padrão",
  large: "Grande",
  
  // Font family settings
  fontFamily: "Família da Fonte",
  interDefault: "Inter (Padrão)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "Sistema",
  lightTheme: "Claro",
  darkTheme: "Escuro",
  
  // Language settings
  languageSelector: "Selecionar idioma",
  english: "Inglês (EUA)",
  spanish: "Espanhol",
  portuguese: "Português",
  
  // UI switches
  alwaysShowCode: "Sempre mostrar código ao usar o analista de dados",
  showFollowUp: "Mostrar sugestões de acompanhamento nos chats",
  
  // Archived chats
  archivedChats: "Conversas arquivadas",
  archiveAll: "Arquivar todas as conversas",
  deleteAll: "Excluir todas as conversas",
  logOut: "Sair neste dispositivo",
  
  // Other UI elements
  notifications: "Notificações",
  personalization: "Personalização",
  speech: "Fala",
  dataControls: "Controles de dados",
  builderProfile: "Perfil do construtor",
  connectedApps: "Aplicativos conectados",
  security: "Segurança",
  subscription: "Assinatura",
  
  // Input and actions
  messagePlaceholder: "Pergunte qualquer coisa",
  sendPrompt: "Enviar prompt",
  stopGenerating: "Parar geração",
  useVoice: "Ditar",
  stopRecording: "Parar gravação",
  processing: "Processando...",
  
  // Document handling
  documentReady: "Documento pronto",
  processingDocument: "Processando documento...",
  errorProcessingDocument: "Erro ao processar documento",
  imageReady: "Imagem pronta",
  
  // 3D generation
  generate3DModel: "Pressione ENTER para criar modelo 3D",
  readyFor3DGeneration: "Pressione ENTER para criar modelo 3D",
  modelFrom3DImage: "Imagem para modelo 3D",
  
  // Media buttons
  searchWeb: "Pesquisar na web",
  uploadFiles: "Carregar arquivo(s)",
  imageGenerate: "Gerar imagens",
  videoGenerate: "Gerar vídeo",
  threeDGenerate: "Geração 3D",
  webSearch: "Pesquisar",
  reasoningText: "Raciocínio",
  reasoningNotSupported: "O modelo não suporta raciocínio",
  reasoningEffort: "Esforço de raciocínio",
  maxReasoningTokens: "Tokens máximos",
  hideReasoning: "Ocultar raciocínio",
  model: "Modelo",
  reasoningMethod: "Método",
  low: "Baixo",
  medium: "Médio",
  high: "Alto",
  
  // Suggestion categories
  write: "Escrever",
  plan: "Planejar",
  design: "Desenhar",
  backToCategories: "← Voltar às categorias",
  
  // Write suggestions
  writeSummary: "um resumo sobre",
  writeEmail: "um email para",
  writeBlog: "uma postagem de blog sobre",
  writeSocial: "uma atualização para redes sociais",
  
  // Plan suggestions
  planMarketing: "campanha de marketing para",
  planBusiness: "proposta de negócio para",
  planProduct: "lançamento de produto para",
  planLearning: "roteiro de aprendizado sobre",
  
  // Design suggestions
  designLogo: "um pequeno logotipo",
  designHero: "uma seção principal",
  designLanding: "uma página de destino",
  designSocial: "uma postagem para redes sociais",
  
  // Sidebar
  pinnedChats: "Conversas Fixadas",
  recentChats: "Conversas Recentes",
  searchResults: "Resultados da Pesquisa",
  noChats: "Sem conversas",
  noPinnedChats: "Sem conversas fixadas",
  noChatsAvailable: "Nenhuma conversa disponível",
  closeSidebar: "Fechar barra lateral",
  openSidebar: "Abrir barra lateral",
  searchChats: "Pesquisar conversas...",
  
  // Chat actions
  pin: "Fixar",
  unpin: "Desafixar",
  rename: "Renomear",
  delete: "Excluir",
  newChat: "Nova conversa",
  useIncognitoChat: "Usar chat incógnito",
  incognitoChatActive: "Chat Incógnito Ativo",
  incognitoChatActiveMessage: "Chat Incógnito Ativo - As mensagens não serão salvas",
  search: "Pesquisar",
  github: "GitHub",
  enterChatTitle: "Digite o título da conversa...",
  
  // Folder management
  folders: "Pastas",
  newFolder: "Nova pasta",
  createNewFolder: "Criar Nova Pasta",
  organizeChatsFolders: "Organize suas conversas em pastas para melhor gerenciamento",
  folderName: "Nome da Pasta",
  folderColor: "Cor da Pasta",
  folderNameRequired: "O nome da pasta é obrigatório",
  failedToCreateFolder: "Falha ao criar pasta",
  creating: "Criando...",
  create: "Criar",
  cancel: "Cancelar",
  moveToFolder: "Mover para pasta",
  removeFromFolder: "Remover da pasta",
  moveToRoot: "Mover para raiz",
  noFolders: "Sem pastas",
  noChatsInFolder: "Não há conversas na pasta",
  enterFolderName: "Digite o nome da pasta...",
  confirmDeleteFolder: "Tem certeza de que deseja excluir esta pasta?",
  deleteFolder: "Excluir Pasta",
  confirmDeleteFolderMessage: "Tem certeza de que deseja excluir esta pasta?",
  deleteFolderWithChats: "Também excluir todas as conversas nesta pasta",
  deleteFolderKeepChats: "As conversas serão movidas para o nível raiz",
  chats: "conversas",
  
  // Disclaimer
  disclaimer: `${getAppName()} pode cometer erros. Considere verificar informações importantes.`,

  // Document Dashboard
  documentManagement: "Gerenciamento de Documentos",
  uploadNew: "Carregar Novo",
  storedDocuments: "Documentos Armazenados",
  dragDropDocuments: "Arraste e solte seus documentos",
  supportedFileTypes: "Arquivos PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB",
  selectFiles: "Selecionar arquivos",
  searchDocuments: "Pesquisar documentos...",
  noDocumentsFound: "Nenhum documento encontrado",
  processingStatus: "processando",
  readyStatus: "pronto",
  failedStatus: "falhou",
  partialStatus: "parcial",
  uploadDate: "Data de Upload",
  docName: "Nome",
  docStatus: "Estado",
  docSize: "Tamanho",
  errorPrefix: "Erro:",
  uploadButton: "Carregar",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "Documento processado com sucesso parcial de fragmentos",
  deleteDocument: "Excluir documento",
  confirmDeleteDocument: "Tem certeza de que deseja excluir este documento?",
  confirmDeleteChat: "Confirmar Exclusão",
  confirmDeleteChatMessage: "Tem certeza de que deseja excluir",
  actionCannotBeUndone: "Esta ação não pode ser desfeita.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "Carregar documento temporário",
  uploadImage: "Carregar imagem",
  
  // MCP Tools
  mcpToolsButton: "Ferramentas MCP",
  availableMcpTools: "Ferramentas MCP disponíveis",
  loadingTools: "Carregando ferramentas...",
  noToolsAvailable: "Nenhuma ferramenta disponível",
  zapierTools: "Ferramentas Zapier",
  otherTools: "Outras ferramentas",
  learnMore: "Saiba mais",
  fromServer: "Do servidor:",
  runTool: "Executar ferramenta",
  cancelTool: "Cancelar",
  waitingForApproval: "Aguardando sua aprovação...",
  executingTool: "Executando ferramenta, por favor aguarde...",
  toolError: "Ocorreu um erro ao executar a ferramenta.",
  
  // Chat message action tooltips
  copyTooltip: "Copiar",
  copiedTooltip: "Copiado!",
  textToSpeechTooltip: "Reproduzir texto em fala",
  downloadPdfTooltip: "Baixar como PDF",
  sendToKnowledgeBase: "Adicionar ao RAG",
  
  // 3D Model Viewer
  clickDragRotateModel: "Clique e arraste para girar o modelo",
  download: "Baixar",
  threeDModel: "Modelo 3D",
  // Image Generation Modal
  imageGeneration: "Geração de Imagem",
  generateImage: "Gerar Imagem",
  size: "Tamanho",
  numberOfImages: "Número de Imagens",
  sourceImages: "Imagens de Origem",
  safetyChecker: "Verificador de segurança",
  editImage: "Editar Imagem",
  editImageInstructions: "Instruções para editar",
  uploadSourceImage: "Carregar imagem de origem",
  uploadImage: "Carregar Imagem",
  addChangeImage: "Adicionar/Alterar Imagem",
  clearAll: "Limpar Tudo",
  upToImagesLimit: "(até 10 imagens < 50MB cada)",
  strength: "Intensidade",
  strengthTooltip: "O quanto transformar a imagem",
  imageSafetyNote: "Este provedor inclui verificações de segurança por padrão",
  generating: "Gerando...",

  // Video Generation Modal
  videoGeneration: "Geração de Vídeo",
  generateVideo: "Gerar Vídeo",
  mode: "Modo",
  fastMode: "Modo Rápido",
  fasterGenerationMode: "Geração mais rápida (menor qualidade)",
  standardQualityMode: "Qualidade padrão (mais lento)",
  aspectRatio: "Proporção de Tela",
  resolution: "Resolução",
  duration: "Duração",
  seconds: "segundos",
  enhancePrompt: "Melhorar Prompt",
  enhancePromptTooltip: "Melhorar automaticamente seu prompt para melhores resultados",
  autoFix: "Auto-correção",
  autoFixTooltip: "Corrigir automaticamente problemas no vídeo gerado",
  generateAudio: "Gerar Áudio",
  generateAudioTooltip: "Gerar áudio para o vídeo",
  loopVideo: "Vídeo em Loop",
  loopVideoTooltip: "Fazer o vídeo repetir continuamente",
  sourceImage: "Imagem de Origem",
  changeImage: "Alterar Imagem",
  videoSizeLimit: "(< 50MB)",
  videoWithContext: "Vídeo + Contexto",
  useDocumentContext: "Usar contexto do documento",
  aspectRatios: {
    "16:9": "16:9",
    "9:16": "9:16",
    "1:1": "1:1"
  },
  resolutionOptions: {
    "720p": "720p",
    "1080p": "1080p"
  },

  // Time groups
  today: "Hoje",
  yesterday: "Ontem",
  thisWeek: "Esta semana",
  older: "Mais antigos",
  
  // Relative time
  justNow: "Agora mesmo",
  minutesAgo: "minutos atrás",
  oneHourAgo: "há 1 hora",
  hoursAgo: "horas atrás",
  oneDayAgo: "há 1 dia",
  daysAgo: "dias atrás",
  oneWeekAgo: "há 1 semana",
  weeksAgo: "semanas atrás",
  
  // Share chat
  shareChatTitle: "Compartilhar Conversa",
  shareChatDescription: "Sua conversa foi compartilhada. Copie o link abaixo para compartilhá-la com outros.",
  generateShareLink: "Gerar link de compartilhamento",
  generateShareLinkDescription: "Gerar um link compartilhável para esta conversa.",
  generatingLink: "Gerando link...",
  copy: "Copiar",
  
  // Shared chat layout
  sharedChatReadOnly: "Esta é uma visualização somente leitura de uma conversa compartilhada.",
  created: "Criado",
  
  // Mobile toolbar
  themeLabel: "Tema",
  textSizeLabel: "Tamanho do Texto",
  shareLabel: "Compartilhar",
  documentsLabel: "Documentos",
  
  // WhatsApp Integration
  connectWhatsApp: "Conectar WhatsApp",
  whatsAppConnected: "WhatsApp: Conectado",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: Escanear QR",
  whatsAppProcessing: "Processando...",
  whatsAppModalTitle: "Conectar WhatsApp",
  whatsAppModalDescription: "Escaneie este código QR com o WhatsApp no seu telefone para conectar",
  whatsAppStatusTitle: "WhatsApp Conectado",
  whatsAppStatusDescription: "Seu WhatsApp está conectado com sucesso ao ChatRAG",
  whatsAppInstructions1: "1. Abra o WhatsApp no seu telefone",
  whatsAppInstructions2: "2. Toque em Menu ou Configurações",
  whatsAppInstructions3: "3. Toque em Aparelhos Conectados",
  whatsAppInstructions4: "4. Toque em Conectar Aparelho",
  whatsAppInstructions5: "5. Aponte seu telefone para esta tela",
  whatsAppRefreshQR: "Atualizar Código QR",
  whatsAppTryAgain: "Tentar Novamente",
  whatsAppFailedLoad: "Falha ao carregar código QR",
  whatsAppExpiresIn: "Expira em: {time}",
  whatsAppPhoneNumber: "Número de Telefone",
  whatsAppStatus: "Status",
  whatsAppActive: "Ativo",
  whatsAppConnectedFor: "Conectado há",
  whatsAppWorkingMessage: "Tudo está funcionando corretamente. Mensagens enviadas para seu WhatsApp serão processadas automaticamente pelo ChatRAG.",
  whatsAppDisconnect: "Desconectar WhatsApp",
  whatsAppDisconnecting: "Desconectando...",
  whatsAppConfirmDisconnect: "Confirmar Desconexão",
  whatsAppDisconnectWarning: "Tem certeza de que deseja desconectar? Você precisará escanear um código QR novamente para reconectar.",
  whatsAppJustNow: "Agora mesmo",
  whatsAppConnecting: "Conectando...",
  whatsAppMinute: "minuto",
  whatsAppMinutes: "minutos",
  whatsAppHour: "hora",
  whatsAppHours: "horas",
  whatsAppDay: "dia",
  whatsAppDays: "dias",
  
  // System Prompts (Auto-populated from English - Please translate)
  systemPrompts: {
    helpful: {
      name: "Helpful Assistant",
      description: "A friendly and helpful AI assistant",
      preContext: `You are a helpful and friendly AI assistant. Your primary goal is to provide accurate, useful information based on the documents and knowledge available to you.

When answering questions:
1. ALWAYS check the context first for relevant information
2. Provide clear, well-structured answers
3. If information is not available in the context, say so clearly`,
      postContext: `Remember to:
- Be friendly and conversational
- Cite specific sources when referencing documents
- Offer to clarify or provide more details if needed`
    },
    professional: {
      name: "Professional",
      description: "Formal and business-oriented communication",
      preContext: `You are a professional AI assistant focused on delivering high-quality, business-appropriate responses. Maintain a formal yet approachable tone.

Guidelines:
1. Use professional language and proper grammar
2. Structure responses clearly with bullet points when appropriate
3. Base answers primarily on the provided context`,
      postContext: `Ensure your responses are:
- Concise and to the point
- Professional without being overly technical
- Backed by evidence from the provided documents`
    },
    educational: {
      name: "Educational Tutor",
      description: "Patient teacher focused on learning",
      preContext: `You are an educational AI tutor dedicated to helping users learn and understand concepts. Your approach should be patient, encouraging, and thorough.

Teaching approach:
1. Break down complex topics into manageable parts
2. Use examples from the context to illustrate points
3. Check understanding with follow-up questions`,
      postContext: `Remember to:
- Encourage questions and curiosity
- Provide step-by-step explanations
- Suggest related topics for further learning`
    },
    technical: {
      name: "Technical Expert",
      description: "Detailed technical and programming assistance",
      preContext: `You are a technical expert AI assistant specializing in programming, software development, and technical documentation. Provide detailed, accurate technical guidance.

Technical guidelines:
1. Reference specific documentation from the context
2. Include code examples when relevant
3. Explain technical concepts precisely`,
      postContext: `Ensure technical responses include:
- Best practices and recommendations
- Potential pitfalls or considerations
- Links to relevant documentation when available`
    },
    chatragSales: {
      name: "ChatRAG Sales",
      description: "Sales-focused assistant for ChatRAG",
      preContext: `You are a sales assistant for ChatRAG, an advanced AI-powered chat application with RAG capabilities. Help potential customers understand the product's value and features.

Sales approach:
1. Highlight key features mentioned in the context
2. Address customer pain points
3. Provide clear pricing and plan information`,
      postContext: `Remember to:
- Be enthusiastic but not pushy
- Focus on value proposition
- Offer demos or trial information when relevant`
    },
    customerSupport: {
      name: "Customer Support",
      description: "Helpful support for troubleshooting",
      preContext: `You are a customer support specialist providing assistance with technical issues and questions. Your goal is to resolve problems efficiently and ensure customer satisfaction.

Support approach:
1. Acknowledge the user's issue empathetically
2. Search the context for relevant solutions
3. Provide step-by-step troubleshooting`,
      postContext: `Always:
- Remain patient and understanding
- Offer alternative solutions if the first doesn't work
- Escalate to human support when necessary`
    },
    researchAssistant: {
      name: "Research Assistant",
      description: "Academic and research support",
      preContext: `You are an academic research assistant helping with scholarly work and research projects. Provide thorough, well-cited responses based on available sources.

Research methodology:
1. Prioritize information from the provided context
2. Clearly distinguish between sourced facts and general knowledge
3. Maintain academic integrity`,
      postContext: `Ensure research assistance includes:
- Proper citation of sources
- Critical analysis when appropriate
- Suggestions for further research directions`
    },
    codeAssistant: {
      name: "Code Assistant",
      description: "Programming and code review help",
      preContext: `You are a specialized coding assistant focused on helping developers write better code. Provide practical coding solutions and explanations.

Coding assistance approach:
1. Analyze code snippets from the context
2. Suggest improvements and optimizations
3. Explain complex code clearly`,
      postContext: `Include in code responses:
- Code comments for clarity
- Performance considerations
- Security best practices when relevant`
    },
    legalAnalyst: {
      name: "Legal Analyst",
      description: "Legal document analysis (not legal advice)",
      preContext: `You are a legal document analyst providing information about legal documents. Note: You do not provide legal advice, only document analysis and general information.

Analysis approach:
1. Reference specific sections from provided documents
2. Explain legal terminology clearly
3. Always include disclaimers about not providing legal advice`,
      postContext: `Important reminders:
- This is document analysis, not legal advice
- Recommend consulting qualified legal professionals
- Cite specific document sections when referencing`
    },
    medicalInformation: {
      name: "Medical Information",
      description: "Health information (not medical advice)",
      preContext: `You are a medical information assistant providing general health information based on reliable sources. Note: You do not provide medical advice, diagnosis, or treatment recommendations.

Information approach:
1. Share evidence-based health information from the context
2. Explain medical terms in accessible language
3. Always emphasize consulting healthcare providers`,
      postContext: `Critical disclaimers:
- This is general information only, not medical advice
- Always consult qualified healthcare providers
- Emergency situations require immediate medical attention`
    },
    whatsappConversational: {
      name: "WhatsApp Conversational",
      description: "Casual and mobile-friendly responses",
      preContext: `You are a friendly WhatsApp assistant optimized for mobile messaging. Keep responses concise, conversational, and easy to read on small screens.

WhatsApp style:
1. Use short paragraphs and bullet points
2. Be casual but helpful
3. Reference context information naturally`,
      postContext: `Remember for WhatsApp:
- Keep messages brief and scannable
- Use emojis sparingly for friendliness 😊
- Break long responses into multiple messages if needed`
    }
  }
};