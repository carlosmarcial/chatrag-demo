import { getAppName } from '@/lib/env';

export const lt = {
  // Main chat
  mainPrompt: "Kuo galiu padėti?",
  
  // Navigation and common UI
  settings: "Nustatymai",
  general: "Bendri",
  logout: "Atsijungti",
  modelSelector: "Pasirinkti AI modelį",
  textSize: "Teksto dydis",
  themeToggle: "Perjungti temą",
  shareChat: "Dalintis pokalbiu",
  uploadDocument: "Įkelti dokumentą",
  viewDocuments: "Peržiūrėti dokumentus",
  
  // Settings modal
  language: "Kalba",
  theme: "Tema",
  customBackground: "Individualus fonas",
  customBackgroundDesc: "Įkelkite paveikslėlį, kad pritaikytumėte pokalbio foną",
  upload: "Įkelti",
  uploading: "Įkeliama...",
  currentBackground: "Dabartinis fonas:",
  notificationSound: "Pranešimų garsas",
  notificationSoundDesc: "Groti garsą, kai AI baigia atsakymą",
  soundType: "Garso tipas",
  playSound: "Groti garsą",
  highBell: "Aukštas skambutis",
  mediumBell: "Vidutinis skambutis",
  deepBell: "Gilus skambutis",
  subtleBell: "Subtilus skambutis",
  
  // Admin settings
  admin: "Administratorius",
  adminLogin: "Administratoriaus prisijungimas",
  adminPassword: "Administratoriaus slaptažodis",
  adminPasswordRequired: "Būtinas administratoriaus slaptažodis",
  adminLoginFailed: "Administratoriaus prisijungimas nepavyko",
  adminPasswordIncorrect: "Slaptažodis neteisingas",
  notAuthorizedAsAdmin: "Jūsų paskyra nėra įgaliota kaip administratoriaus",
  loginRequired: "Turite prisijungti, kad galėtumėte naudotis administratoriaus funkcijomis",
  adminVerification: "Administratoriaus patvirtinimas",
  adminVerificationDesc: "Spustelėkite žemiau esantį mygtuką, kad patvirtintumėte savo administratoriaus statusą",
  adminVerificationSuccess: "Administratoriaus prieiga sėkmingai suaktyvinta",
  adminVerificationFailed: "Nepavyko patvirtinti administratoriaus",
  verifying: "Tikrinama...",
  activateAdminAccess: "Aktyvuoti administratoriaus prieigą",
  loggingIn: "Jungiamasi...",
  loggingOut: "Atsijungiama...",
  logoutAdmin: "Atsijungti kaip administratorius",
  login: "Prisijungti",
  adminAuthenticated: "Administratoriaus tapatybė patvirtinta",
  adminAuthenticatedDesc: "Dabar turite prieigą prie administratoriaus funkcijų",
  docDashboardReadOnly: "Tik skaitymui skirta dokumentų peržiūra",
  docDashboardReadOnlyDesc: "Leisti vartotojams peržiūrėti dokumentus tik skaitymo režimu",
  documentViewer: "Dokumentų peržiūros programa",
  readOnlyMode: "Įjungtas tik skaitymo režimas - dokumentų keisti negalima",
  documents: "Dokumentai",
  
  // Text size settings
  small: "Mažas",
  default: "Numatytasis",
  large: "Didelis",
  
  // Font family settings
  fontFamily: "Šrifto šeima",
  interDefault: "Inter (Numatytasis)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "Sistemos",
  lightTheme: "Šviesus",
  darkTheme: "Tamsus",
  
  // Language settings
  languageSelector: "Pasirinkti kalbą",
  english: "Anglų (JAV)",
  spanish: "Ispanų",
  portuguese: "Portugalų",
  lithuanian: "Lietuvių",
  
  // UI switches
  alwaysShowCode: "Visada rodyti kodą naudojant duomenų analitiką",
  showFollowUp: "Rodyti tolesnių patarimų pasiūlymus pokalbiuose",
  
  // Archived chats
  archivedChats: "Archyvuoti pokalbiai",
  archiveAll: "Archyvuoti visus pokalbius",
  deleteAll: "Ištrinti visus pokalbius",
  logOut: "Atsijungti šiame įrenginyje",
  
  // Other UI elements
  notifications: "Pranešimai",
  personalization: "Asmeniniai nustatymai",
  speech: "Kalba",
  dataControls: "Duomenų valdymas",
  builderProfile: "Kūrėjo profilis",
  connectedApps: "Prijungtos programos",
  security: "Saugumas",
  subscription: "Prenumerata",
  
  // Input and actions
  messagePlaceholder: "Klauskite bet ko",
  sendPrompt: "Siųsti užklausą",
  stopGenerating: "Sustabdyti generavimą",
  useVoice: "Diktuoti",
  stopRecording: "Sustabdyti įrašymą",
  processing: "Apdorojama...",
  
  // Document handling
  documentReady: "Dokumentas paruoštas",
  processingDocument: "Apdorojamas dokumentas...",
  errorProcessingDocument: "Klaida apdorojant dokumentą",
  imageReady: "Vaizdas paruoštas",
  
  // 3D generation
  generate3DModel: "Paspauskite ENTER, kad sukurtumėte 3D modelį",
  readyFor3DGeneration: "Paspauskite ENTER, kad sukurtumėte 3D modelį",
  modelFrom3DImage: "Paveikslėlis 3D modeliui",
  
  // Media buttons
  searchWeb: "Ieškoti internete",
  uploadFiles: "Įkelti failą(-us)",
  imageGenerate: "Generuoti paveikslėlius",
  videoGenerate: "Generuoti vaizdo įrašą",
  threeDGenerate: "3D generavimas",
  webSearch: "Paieška",
  reasoningText: "Samprotavimas",
  reasoningNotSupported: "Modelis nepalaiko samprotavimo",
  reasoningEffort: "Samprotavimo pastangos",
  maxReasoningTokens: "Maksimalus žetonas",
  hideReasoning: "Slėpti samprotavimą",
  model: "Modelis",
  reasoningMethod: "Metodas",
  low: "Žemas",
  medium: "Vidutinis",
  high: "Aukštas",
  
  // Suggestion categories
  write: "Rašyti",
  plan: "Planuoti",
  design: "Kurti",
  backToCategories: "← Grįžti į kategorijas",
  
  // Write suggestions
  writeSummary: "santrauką apie",
  writeEmail: "el. laišką",
  writeBlog: "tinklaraščio įrašą apie",
  writeSocial: "socialinių tinklų atnaujinimą",
  
  // Plan suggestions
  planMarketing: "rinkodaros kampaniją",
  planBusiness: "verslo pasiūlymą",
  planProduct: "produkto pristatymą",
  planLearning: "mokymosi planą apie",
  
  // Design suggestions
  designLogo: "nedidelį logotipą",
  designHero: "pagrindinę sekciją",
  designLanding: "nukreipimo puslapį",
  designSocial: "socialinių tinklų įrašą",
  
  // Sidebar
  pinnedChats: "Prisegti pokalbiai",
  recentChats: "Naujausi pokalbiai",
  searchResults: "Paieškos rezultatai",
  noChats: "Nėra pokalbių",
  noPinnedChats: "Nėra prisegtų pokalbių",
  noChatsAvailable: "Nėra prieinamų pokalbių",
  closeSidebar: "Uždaryti šoninę juostą",
  openSidebar: "Atidaryti šoninę juostą",
  searchChats: "Ieškoti pokalbių...",
  
  // Chat actions
  pin: "Prisegti",
  unpin: "Atsegti",
  rename: "Pervadinti",
  delete: "Ištrinti",
  newChat: "Naujas pokalbis",
  useIncognitoChat: "Naudoti inkognito pokalbį",
  incognitoChatActive: "Inkognito Pokalbis Aktyvus",
  incognitoChatActiveMessage: "Inkognito Pokalbis Aktyvus - Žinutės nebus išsaugotos",
  search: "Paieška",
  github: "GitHub",
  enterChatTitle: "Įveskite pokalbio pavadinimą...",
  
  // Folder management
  folders: "Aplankai",
  newFolder: "Naujas aplankas",
  createNewFolder: "Sukurti naują aplanką",
  organizeChatsFolders: "Organizuokite pokalbius aplankuose geresniam valdymui",
  folderName: "Aplanko pavadinimas",
  folderColor: "Aplanko spalva",
  folderNameRequired: "Aplanko pavadinimas yra būtinas",
  failedToCreateFolder: "Nepavyko sukurti aplanko",
  creating: "Kuriama...",
  create: "Sukurti",
  cancel: "Atšaukti",
  moveToFolder: "Perkelti į aplanką",
  removeFromFolder: "Pašalinti iš aplanko",
  moveToRoot: "Perkelti į šaknį",
  noFolders: "Nėra aplankų",
  noChatsInFolder: "Aplanke nėra pokalbių",
  enterFolderName: "Įveskite aplanko pavadinimą...",
  confirmDeleteFolder: "Ar tikrai norite ištrinti šį aplanką?",
  deleteFolder: "Ištrinti aplanką",
  confirmDeleteFolderMessage: "Ar tikrai norite ištrinti šį aplanką?",
  deleteFolderWithChats: "Taip pat ištrinti visus pokalbius šiame aplanke",
  deleteFolderKeepChats: "Pokalbiai bus perkelti į šakninį lygį",
  chats: "pokalbiai",
  
  // Disclaimer
  disclaimer: `${getAppName()} gali daryti klaidų. Apsvarstykite svarbios informacijos patikrinimą.`,

  // Document Dashboard
  documentManagement: "Dokumentų valdymas",
  uploadNew: "Įkelti naują",
  storedDocuments: "Saugomi dokumentai",
  dragDropDocuments: "Tempkite ir paleiskite dokumentus",
  supportedFileTypes: "PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB failai",
  selectFiles: "Pasirinkti failus",
  searchDocuments: "Ieškoti dokumentų...",
  noDocumentsFound: "Dokumentų nerasta",
  processingStatus: "apdorojama",
  readyStatus: "paruošta",
  failedStatus: "nepavyko",
  partialStatus: "dalinis",
  uploadDate: "Įkėlimo data",
  docName: "Pavadinimas",
  docStatus: "Būsena",
  docSize: "Dydis",
  errorPrefix: "Klaida:",
  uploadButton: "Įkelti",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "Dokumentas apdorotas su daliniu fragmentų sėkmingumu",
  deleteDocument: "Ištrinti dokumentą",
  confirmDeleteDocument: "Ar tikrai norite ištrinti šį dokumentą?",
  confirmDeleteChat: "Patvirtinti Trynimo",
  confirmDeleteChatMessage: "Ar tikrai norite ištrinti",
  actionCannotBeUndone: "Šis veiksmas negali būti atšauktas.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "Įkelti laikiną dokumentą",
  uploadImage: "Įkelti paveikslėlį",
  
  // MCP Tools
  mcpToolsButton: "MCP Įrankiai",
  availableMcpTools: "Galimi MCP įrankiai",
  loadingTools: "Įrankiai kraunami...",
  noToolsAvailable: "Nėra galimų įrankių",
  zapierTools: "Zapier įrankiai",
  otherTools: "Kiti įrankiai",
  learnMore: "Sužinoti daugiau",
  fromServer: "Iš serverio:",
  runTool: "Paleisti įrankį",
  cancelTool: "Atšaukti",
  waitingForApproval: "Laukiama jūsų patvirtinimo...",
  executingTool: "Vykdomas įrankis, palaukite...",
  toolError: "Įvyko klaida vykdant įrankį.",
  
  // Chat message action tooltips
  copyTooltip: "Kopijuoti",
  copiedTooltip: "Nukopijuota!",
  textToSpeechTooltip: "Atkurti tekstą balsu",
  downloadPdfTooltip: "Atsisiųsti kaip PDF",
  sendToKnowledgeBase: "Pridėti į RAG",
  
  // 3D Model Viewer
  clickDragRotateModel: "Spustelėkite ir tempkite, kad pasisuktų modelis",
  download: "Atsisiųsti",
  threeDModel: "3D modelis",
  // Image Generation Modal
  imageGeneration: "Vaizdo generavimas",
  generateImage: "Generuoti vaizdą",
  size: "Dydis",
  numberOfImages: "Vaizdų skaičius",
  sourceImages: "Šaltinio vaizdai",
  safetyChecker: "Saugumo tikrinimas",
  editImage: "Redaguoti vaizdą",
  editImageInstructions: "Redagavimo instrukcijos",
  uploadSourceImage: "Įkelti šaltinio vaizdą",
  uploadImage: "Įkelti vaizdą",
  addChangeImage: "Pridėti/Pakeisti vaizdą",
  clearAll: "Išvalyti viską",
  upToImagesLimit: "(iki 10 vaizdų < 50MB kiekvienas)",
  strength: "Stiprumas",
  strengthTooltip: "Kiek transformuoti vaizdą",
  imageSafetyNote: "Šis teikėjas pagal numatytuosius nustatymus įtraukia saugumo patikrinimus",
  generating: "Generuojama...",

  // Video Generation Modal
  videoGeneration: "Vaizdo įrašo generavimas",
  generateVideo: "Generuoti vaizdo įrašą",
  mode: "Režimas",
  fastMode: "Greitas režimas",
  fasterGenerationMode: "Greitesnis generavimas (žemesnė kokybė)",
  standardQualityMode: "Standartinė kokybė (lėtesnis)",
  aspectRatio: "Kraštinių santykis",
  resolution: "Raiška",
  duration: "Trukmė",
  seconds: "sekundės",
  enhancePrompt: "Patobulinti užklausą",
  enhancePromptTooltip: "Automatiškai patobulinti užklausą geresniam rezultatui",
  autoFix: "Automatinis taisymas",
  autoFixTooltip: "Automatiškai ištaisyti sugeneruoto vaizdo įrašo problemas",
  generateAudio: "Generuoti garsą",
  generateAudioTooltip: "Generuoti garsą vaizdo įrašui",
  loopVideo: "Ciklinis vaizdo įrašas",
  loopVideoTooltip: "Padaryti sklandžiai besikartojantį vaizdo įrašą",
  sourceImage: "Šaltinio vaizdas",
  changeImage: "Pakeisti vaizdą",
  videoSizeLimit: "(< 50MB)",
  videoWithContext: "Vaizdo įrašas + Kontekstas",
  useDocumentContext: "Naudoti dokumento kontekstą",
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
  today: "Šiandien",
  yesterday: "Vakar",
  thisWeek: "Šią savaitę",
  older: "Senesni",
  
  // Relative time
  justNow: "Ką tik",
  minutesAgo: "minutės atgal",
  oneHourAgo: "prieš 1 valandą",
  hoursAgo: "valandos atgal",
  oneDayAgo: "prieš 1 dieną",
  daysAgo: "dienos atgal",
  oneWeekAgo: "prieš 1 savaitę",
  weeksAgo: "savaitės atgal",
  
  // Share chat
  shareChatTitle: "Dalintis pokalbiu",
  shareChatDescription: "Jūsų pokalbis buvo pasidalintas. Nukopijuokite nuorodą žemiau, kad pasidalintumėte su kitais.",
  generateShareLink: "Generuoti dalinimosi nuorodą",
  generateShareLinkDescription: "Sukurti bendrą nuorodą šiam pokalbiui.",
  generatingLink: "Generuojama nuoroda...",
  copy: "Kopijuoti",
  
  // Shared chat layout
  sharedChatReadOnly: "Tai yra tik skaitymui skirtas bendrinamo pokalbio vaizdas.",
  created: "Sukurta",
  
  // Mobile toolbar
  themeLabel: "Tema",
  textSizeLabel: "Teksto dydis",
  shareLabel: "Dalintis",
  documentsLabel: "Dokumentai",
  
  // WhatsApp Integration
  connectWhatsApp: "Prijungti WhatsApp",
  whatsAppConnected: "WhatsApp: Prijungta",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: Skenuoti QR",
  whatsAppProcessing: "Apdorojama...",
  whatsAppModalTitle: "Prijungti WhatsApp",
  whatsAppModalDescription: "Nuskenuokite šį QR kodą su WhatsApp savo telefone, kad prisijungtumėte",
  whatsAppStatusTitle: "WhatsApp prijungtas",
  whatsAppStatusDescription: "Jūsų WhatsApp sėkmingai prijungtas prie ChatRAG",
  whatsAppInstructions1: "1. Atidarykite WhatsApp savo telefone",
  whatsAppInstructions2: "2. Bakstelėkite Meniu arba Nustatymai",
  whatsAppInstructions3: "3. Bakstelėkite Susieti įrenginiai",
  whatsAppInstructions4: "4. Bakstelėkite Susieti įrenginį",
  whatsAppInstructions5: "5. Nukreipkite telefoną į šį ekraną",
  whatsAppRefreshQR: "Atnaujinti QR kodą",
  whatsAppTryAgain: "Bandyti dar kartą",
  whatsAppFailedLoad: "Nepavyko įkelti QR kodo",
  whatsAppExpiresIn: "Baigiasi po: {time}",
  whatsAppPhoneNumber: "Telefono numeris",
  whatsAppStatus: "Būsena",
  whatsAppActive: "Aktyvus",
  whatsAppConnectedFor: "Prijungta",
  whatsAppWorkingMessage: "Viskas veikia teisingai. Pranešimai, išsiųsti į jūsų WhatsApp, bus automatiškai apdorojami ChatRAG.",
  whatsAppDisconnect: "Atsijungti nuo WhatsApp",
  whatsAppDisconnecting: "Atsijungiama...",
  whatsAppConfirmDisconnect: "Patvirtinti atsijungimą",
  whatsAppDisconnectWarning: "Ar tikrai norite atsijungti? Norėdami vėl prisijungti, turėsite nuskenuoti QR kodą.",
  whatsAppJustNow: "Ką tik",
  whatsAppConnecting: "Jungiamasi...",
  whatsAppMinute: "minutė",
  whatsAppMinutes: "minutės",
  whatsAppHour: "valanda",
  whatsAppHours: "valandos",
  whatsAppDay: "diena",
  whatsAppDays: "dienos",
  
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