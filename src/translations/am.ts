import { getAppName } from '@/lib/env';

export const am = {
  // Main chat
  mainPrompt: "ምን ልረዳዎ?",
  
  // Navigation and common UI
  settings: "ቅንብሮች",
  general: "አጠቃላይ",
  logout: "ዘግተ ውጣ",
  modelSelector: "የAI ሞዴል ይምረጡ",
  textSize: "የጽሑፍ መጠን",
  themeToggle: "ገጽታ ቀይር",
  shareChat: "ውይይት አካፍል",
  uploadDocument: "ሰነድ አስቀምጥ",
  viewDocuments: "ሰነዶችን ይመልከቱ",
  
  // Settings modal
  language: "ቋንቋ",
  theme: "ገጽታ",
  customBackground: "ብጁ ዳራ",
  customBackgroundDesc: "የውይይትዎን ዳራ ለማበጀት ምስል አስቀምጡ",
  upload: "አስቀምጥ",
  uploading: "በመጫን ላይ...",
  currentBackground: "የአሁኑ ዳራ:",
  notificationSound: "የማሳወቂያ ድምፅ",
  notificationSoundDesc: "AI መልሱ ሲጨርስ ድምፅ እንዲያጫውት",
  soundType: "የድምፅ አይነት",
  playSound: "ድምፅ አጫውት",
  highBell: "ከፍተኛ መደወል",
  mediumBell: "መካከለኛ መደወል",
  deepBell: "ጥልቅ መደወል",
  subtleBell: "ለስላሳ መደወል",
  
  // Admin settings
  admin: "አስተዳዳሪ",
  adminLogin: "የአስተዳዳሪ መግቢያ",
  adminPassword: "የአስተዳዳሪ የይለፍ ቃል",
  adminPasswordRequired: "የአስተዳዳሪ የይለፍ ቃል ያስፈልጋል",
  adminLoginFailed: "የአስተዳዳሪ መግቢያ አልተሳካም",
  adminPasswordIncorrect: "የይለፍ ቃሉ ትክክል አይደለም",
  notAuthorizedAsAdmin: "መለያዎ እንደ አስተዳዳሪ አልተፈቀደለትም",
  loginRequired: "የአስተዳዳሪ ተግባሮችን ለመድረስ መግባት አለብዎ",
  adminVerification: "የአስተዳዳሪ ማረጋገጥ",
  adminVerificationDesc: "ከታች ያለውን አዝራር በመጫን የአስተዳዳሪ ሁኔታዎን ያረጋግጡ",
  adminVerificationSuccess: "የአስተዳዳሪ መዳረሻ በተሳካ ሁኔታ ነቅቷል",
  adminVerificationFailed: "የአስተዳዳሪ ማረጋገጥ አልተሳካም",
  verifying: "በማረጋገጥ ላይ...",
  activateAdminAccess: "የአስተዳዳሪ መዳረሻ አንቃ",
  loggingIn: "በመግባት ላይ...",
  loggingOut: "በመውጣት ላይ...",
  logoutAdmin: "ከአስተዳዳሪ መውጫ",
  login: "መግቢያ",
  adminAuthenticated: "አስተዳዳሪ ተረጋግጧል",
  adminAuthenticatedDesc: "አሁን የአስተዳዳሪ ተግባሮችን መዳረስ ትችላለህ",
  docDashboardReadOnly: "የሰነድ ዳሽቦርድ (ለንባብ ብቻ)",
  docDashboardReadOnlyDesc: "ተጠቃሚዎች ሰነዶችን በለንባብ ብቻ እንዲመለከቱ ይፍቀዱ",
  documentViewer: "የሰነድ መመልከቻ",
  readOnlyMode: "የለንባብ ብቻ ሁነታ ተነስቷል - ሰነዶች ማሻሻል አይቻልም",
  documents: "ሰነዶች",
  
  // Text size settings
  small: "ትንሽ",
  default: "ነባሪ",
  large: "ትልቅ",
  
  // Font family settings
  fontFamily: "የፊደል ቤተሰብ",
  interDefault: "Inter (ነባሪ)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "ስርአት",
  lightTheme: "ብርሃን",
  darkTheme: "ጨለማ",
  
  // Language settings
  languageSelector: "ቋንቋ ይምረጡ",
  english: "እንግሊዝኛ (US)",
  spanish: "ስፓንኛ",
  
  // UI switches
  alwaysShowCode: "የዳታ ተንታኝን ሲጠቀሙ ኮድ ሁልጊዜ አሳይ",
  showFollowUp: "በውይይቶች ውስጥ የተከታታይ ጥቆማዎችን አሳይ",
  
  // Archived chats
  archivedChats: "የተቀመጡ ውይይቶች",
  archiveAll: "ሁሉንም ውይይቶች አስቀምጥ",
  deleteAll: "ሁሉንም ውይይቶች ሰርዝ",
  logOut: "በዚህ መሣሪያ ላይ ዘግተ ውጣ",
  
  // Other UI elements
  notifications: "ማሳወቂያዎች",
  personalization: "ግል ማበጀት",
  speech: "ንግግር",
  dataControls: "የውሂብ መቆጣጠሪያዎች",
  builderProfile: "ገንቢ መግለጫ",
  connectedApps: "የተገናኙ መተግበሪያዎች",
  security: "ደህንነት",
  subscription: "መመዝገብ",
  
  // Input and actions
  messagePlaceholder: "ማንኛውንም ነገር ጠይቁ",
  sendPrompt: "ፕሮምፕት ላክ",
  stopGenerating: "መፍጠር አቁም",
  useVoice: "ድምፅ ተጠቀም",
  stopRecording: "መመዝገብ አቁም",
  processing: "በሂደት ላይ...",
  
  // Document handling
  documentReady: "ሰነድ ዝግጁ ነው",
  processingDocument: "ሰነድ በማስኬድ ላይ...",
  errorProcessingDocument: "ሰነድ ሲሰራ ስህተት ተፈጥሯል",
  imageReady: "ምስል ዝግጁ ነው",
  
  // 3D generation
  generate3DModel: "3D ሞዴል ለመፍጠር ENTER ይጫኑ",
  readyFor3DGeneration: "3D ሞዴል ለመፍጠር ENTER ይጫኑ",
  modelFrom3DImage: "ለ3D ሞዴል ምስል",
  
  // Media buttons
  searchWeb: "ድረ-መረብ ፈልግ",
  uploadFiles: "ፋይል(ሎች) አስቀምጥ",
  imageGenerate: "ምስሎች ፍጠር",
  videoGenerate: "ቪዲዮ ፍጠር",
  threeDGenerate: "3D ፍጠር",
  webSearch: "ፈልግ",
  reasoningText: "አመክንዮ",
  reasoningNotSupported: "ሞዴሉ አመክንዮን አይደግፍም",
  reasoningEffort: "የአመክንዮ ጥረት",
  maxReasoningTokens: "ከፍተኛ ቶክኖች",
  hideReasoning: "አመክንዮ ሰውር",
  model: "ሞዴል",
  reasoningMethod: "ዘዴ",
  low: "ዝቅተኛ",
  medium: "መካከለኛ",
  high: "ከፍተኛ",
  
  // Suggestion categories
  write: "ጻፍ",
  plan: "ዕቅድ",
  design: "ንድፍ",
  backToCategories: "← ወደ ምድቦች ተመለስ",
  
  // Write suggestions
  writeSummary: "ስለ ... ማጠቃለያ",
  writeEmail: "ኢሜይል ለ ...",
  writeBlog: "የብሎግ ልጥፍ ስለ ...",
  writeSocial: "የማህበራዊ ሚዲያ እውቂያ",
  
  // Plan suggestions
  planMarketing: "ለ ... የግብይት ካምፔይን",
  planBusiness: "ለ ... የንግድ ጥቅስ",
  planProduct: "ለ ... የምርት መጀመሪያ",
  planLearning: "ስለ ... የመማር መንገድ",
  
  // Design suggestions
  designLogo: "አነስተኛ አርማ",
  designHero: "ዋና ክፍል",
  designLanding: "የማረፊያ ገፅ",
  designSocial: "የማህበራዊ ሚዲያ ፖስት",
  
  // Sidebar
  pinnedChats: "የተጣበቁ ውይይቶች",
  recentChats: "የቅርብ ዘመን ውይይቶች",
  searchResults: "የፍለጋ ውጤቶች",
  noChats: "ውይይት የለም",
  noPinnedChats: "የተጣበቁ ውይይቶች የሉም",
  noChatsAvailable: "የሚገኙ ውይይቶች የሉም",
  closeSidebar: "የጎን ማስታወቂያ ዝጋ",
  openSidebar: "የጎን ማስታወቂያ ክፈት",
  searchChats: "ውይይቶችን ፈልግ...",
  
  // Chat actions
  pin: "ጣብቅ",
  unpin: "አልቀም",
  rename: "እንደገና ሰይም",
  delete: "ሰርዝ",
  newChat: "አዲስ ውይይት",
  useIncognitoChat: "የማይታወቅ ውይይት ተጠቀም",
  incognitoChatActive: "የማይታወቅ ውይይት ንቁ ነው",
  incognitoChatActiveMessage: "የማይታወቅ ውይይት ንቁ ነው - መልዕክቶች አይቀመጡም",
  search: "ፈልግ",
  github: "GitHub",
  enterChatTitle: "የውይይት ርዕስ ያስገቡ...",
  
  // Folder management
  folders: "ፎልደሮች",
  newFolder: "አዲስ ፎልደር",
  createNewFolder: "አዲስ ፎልደር ፍጠር",
  organizeChatsFolders: "ውይይቶችዎን ወደ ፎልደሮች በማደራጀት ቀላል አድርጉ",
  folderName: "የፎልደር ስም",
  folderColor: "የፎልደር ቀለም",
  folderNameRequired: "የፎልደር ስም አስፈላጊ ነው",
  failedToCreateFolder: "ፎልደር መፍጠር አልተሳካም",
  creating: "በመፍጠር ላይ...",
  create: "ፍጠር",
  cancel: "ይቅር",
  moveToFolder: "ወደ ፎልደር አንቀሳቅር",
  removeFromFolder: "ከፎልደር አውጣ",
  moveToRoot: "ወደ ስር አንቀሳቅር",
  noFolders: "ፎልደር የለም",
  noChatsInFolder: "በፎልደር ውስጥ ውይይት የለም",
  enterFolderName: "የፎልደር ስም ያስገቡ...",
  confirmDeleteFolder: "ይህን ፎልደር ማጥፋት ይፈልጋሉ?",
  deleteFolder: "ፎልደር ሰርዝ",
  confirmDeleteFolderMessage: "ይህን ፎልደር ማጥፋት ይፈልጋሉ?",
  deleteFolderWithChats: "በዚህ ፎልደር ውስጥ ያሉ ሁሉንም ውይይቶች አስወግዱ",
  deleteFolderKeepChats: "ውይይቶች ወደ ስር ደረጃ ይገባሉ",
  chats: "ውይይቶች",
  
  // Disclaimer
  disclaimer: `${getAppName()} ስህተት ሊኖረው ይችላል። አስፈላጊ መረጃ ማረጋገጥ ይመከራል።`,

  // Document Dashboard
  documentManagement: "የሰነድ አስተዳደር",
  uploadNew: "አዲስ አስቀምጥ",
  storedDocuments: "የተቀመጡ ሰነዶች",
  dragDropDocuments: "ሰነዶችዎን ይጎትቱና ይጣሉ",
  supportedFileTypes: "PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB ፋይሎች",
  selectFiles: "ፋይሎች ይምረጡ",
  searchDocuments: "ሰነዶችን ፈልግ...",
  noDocumentsFound: "ሰነዶች አልተገኙም",
  processingStatus: "በሂደት",
  readyStatus: "ዝግጁ",
  failedStatus: "አልተሳካም",
  partialStatus: "ከፊል",
  uploadDate: "የመጫን ቀን",
  docName: "ስም",
  docStatus: "ሁኔታ",
  docSize: "መጠን",
  errorPrefix: "ስህተት:",
  uploadButton: "አስቀምጥ",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "ሰነድ ከፊል በተሳካ ሁኔታ ተከትሎ ተሰርቷል",
  deleteDocument: "ሰነድ ሰርዝ",
  confirmDeleteDocument: "ይህን ሰነድ ማጥፋት እርግጠኛ ነዎት?",
  confirmDeleteChat: "ሰርዝ አረጋግጥ",
  confirmDeleteChatMessage: "እርግጠኛ ነዎት መሰረዝ",
  actionCannotBeUndone: "ይህ ቀዶ ጥገና መመለስ አይቻልም።",
  
  // Unified Upload Button
  uploadTemporaryDocument: "ጊዜያዊ ሰነድ አስቀምጥ",
  uploadImage: "ምስል አስቀምጥ",
  
  // MCP Tools
  mcpToolsButton: "የMCP መሳሪያዎች",
  availableMcpTools: "የሚገኙ የMCP መሳሪያዎች",
  loadingTools: "መሳሪያዎች በመጫን ላይ...",
  noToolsAvailable: "መሳሪያ የለም",
  zapierTools: "የZapier መሳሪያዎች",
  otherTools: "ሌሎች መሳሪያዎች",
  learnMore: "ተጨማሪ መረጃ",
  fromServer: "ከአገልጋይ:",
  runTool: "መሳሪያ አስኪድ",
cancelTool: "ተው",
  waitingForApproval: "ማጽደቅዎን በመጠበቅ ላይ...",
  executingTool: "መሳሪያ በሂደት ላይ፣ እባክዎ ይጠብቁ...",
  toolError: "መሳሪያውን በመስራት ጊዜ ስህተት ተፈጥሯል.",
  
  // Chat message action tooltips
  copyTooltip: "ኮፒ አድርግ",
  copiedTooltip: "ተከፍቷል!",
  textToSpeechTooltip: "ጽሁፍን ወደ ንግግር አጫውት",
  downloadPdfTooltip: "እንደ PDF አውርድ",
  sendToKnowledgeBase: "ወደ RAG ያክሉ",
  
  // 3D Model Viewer
  clickDragRotateModel: "ሞዴሉን ለማዞር ጠቅ አድርገው ይጎትቱ",
  download: "አውርድ",
  threeDModel: "3D ሞዴል",

  // Image Generation Modal
  imageGeneration: "የምስል ፍጠር",
  generateImage: "ምስል ፍጠር",
  size: "መጠን",
  numberOfImages: "የምስሎች ብዛት",
  sourceImages: "የምንጭ ምስሎች",
  safetyChecker: "የደህንነት ማረጋገጫ",
  editImage: "ምስል አርም",
  editImageInstructions: "ለማርማት መመሪያዎች",
  uploadSourceImage: "የምንጭ ምስል አስቀምጥ",
  addChangeImage: "ምስል አክል/ቀይር",
  addImage: "ምስል አክል",
  clearAll: "ሁሉንም አፅዳ",
  upToImagesLimit: "(እስከ 10 ምስሎች < 50MB እያንዳንዱ)",
  strength: "ጥንካሬ",
  strengthTooltip: "ምስሉ ምን ያህል እንዲቀየር",
  imageSafetyNote: "ይህ አቅራቢ ነባሪ የደህንነት ምርመራዎችን ያካትታል",
  generating: "በመፍጠር ላይ...",

  // Video Generation Modal
  videoGeneration: "የቪዲዮ ፍጠር",
  generateVideo: "ቪዲዮ ፍጠር",
  mode: "ሁነታ",
  fastMode: "ፈጣን ሁነታ",
  fasterGenerationMode: "በፍጥነት ፍጠር (ዝቅተኛ ጥራት)",
standardQualityMode: "መደበኛ ጥራት (ዝቅተኛ ፍጥነት)",
  aspectRatio: "የመጠን ሬሾ",
  resolution: "ሬዞሉሽን",
  duration: "ቆይታ",
  seconds: "ሰከንዶች",
  enhancePrompt: "ፕሮምፕት አሻሽል",
  enhancePromptTooltip: "የተሻለ ውጤት ለማግኘት ፕሮምፕትዎን በራስ-ሰር ያሻሽሉ",
  autoFix: "በራስ-ሰር ጥገና",
  autoFixTooltip: "በተፈጠረው ቪዲዮ ውስጥ ችግኝ በራስ-ሰር ይክሩ",
  generateAudio: "ድምፅ ፍጠር",
  generateAudioTooltip: "ለቪዲዮው ድምፅ ፍጠር",
  loopVideo: "ቪዲዮ ይዞር",
  loopVideoTooltip: "ቪዲዮው ያለ ክፍተት እንዲዞር አድርግ",
  sourceImage: "የምንጭ ምስል",
  changeImage: "ምስል ቀይር",
  videoSizeLimit: "(< 50MB)",
videoWithContext: "ቪዲዮ + አካባቢ",
useDocumentContext: "የሰነድ አካባቢ ተጠቀም",
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
  today: "ዛሬ",
  yesterday: "ትላንትና",
  thisWeek: "ይህ ሳምንት",
  older: "አሮጌ",
  
  // Relative time
  justNow: "አሁን አሁን",
  minutesAgo: "ደቂቃዎች በፊት",
  oneHourAgo: "1 ሰዓት በፊት",
  hoursAgo: "ሰዓታት በፊት",
  oneDayAgo: "1 ቀን በፊት",
  daysAgo: "ቀናት በፊት",
  oneWeekAgo: "1 ሳምንት በፊት",
  weeksAgo: "ሳምንታት በፊት",
  
  // Share chat
  shareChatTitle: "ውይይት አካፍል",
  shareChatDescription: "ውይይትዎ ተጋርቷል። ከታች ያለውን ሊንክ ቅጂ አድርገው ከሌሎች ጋር ያካፍሉት።",
  generateShareLink: "ሊንክ ይፍጠሩ",
  generateShareLinkDescription: "ለዚህ ውይይት የሚካፈል ሊንክ ይፍጠሩ.",
  generatingLink: "ሊንክ በመፍጠር ላይ...",
  copy: "ኮፒ አድርግ",
  
  // Shared chat layout
  sharedChatReadOnly: "ይህ የተጋራ ውይይት ንባብ-ብቻ እይታ ነው.",
  created: "ተፈጥሯል",
  
  // Mobile toolbar
  themeLabel: "ገጽታ",
  textSizeLabel: "የጽሑፍ መጠን",
  shareLabel: "አካፍል",
  documentsLabel: "ሰነዶች",
  
  // WhatsApp Integration
  connectWhatsApp: "WhatsApp አገናኝ",
  whatsAppConnected: "WhatsApp: ተገናኝቷል",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: QR ኮድ ስካን",
  whatsAppProcessing: "በሂደት ላይ...",
  whatsAppModalTitle: "WhatsApp አገናኝ",
  whatsAppModalDescription: "በስልክዎ ላይ ያለውን WhatsApp በመጠቀም ይህን የQR ኮድ ያስስ እና ያገናኙ",
  whatsAppStatusTitle: "WhatsApp ተገናኝቷል",
  whatsAppStatusDescription: "WhatsAppዎ በተሳካ ሁኔታ ከChatRAG ጋር ተገናኝቷል",
  whatsAppInstructions1: "1. በስልክዎ ላይ WhatsApp ይክፈቱ",
  whatsAppInstructions2: "2. ማውጫ ወይም ቅንብሮች ይጫኑ",
  whatsAppInstructions3: "3. የተገናኙ መሣሪያዎች ይጫኑ",
  whatsAppInstructions4: "4. መሣሪያ ያገናኙ",
  whatsAppInstructions5: "5. ስልክዎን ወደዚህ ማያ ገጽ ያመሩ",
  whatsAppRefreshQR: "QR ኮድ አድስ",
  whatsAppTryAgain: "እንደገና ሞክር",
  whatsAppFailedLoad: "QR ኮድ መጫን አልተቻለም",
  whatsAppExpiresIn: "ይጠናቀቃል በ: {time}",
  whatsAppPhoneNumber: "የስልክ ቁጥር",
  whatsAppStatus: "ሁኔታ",
  whatsAppActive: "ንቁ",
  whatsAppConnectedFor: "ተገናኝቷል ለ",
  whatsAppWorkingMessage: "ሁሉም ነገር በትክክል እየሰራ ነው። ወደ WhatsAppዎ የሚላኩ መልዕክቶች በChatRAG በራስ-ሰር ይተካሉ።",
  whatsAppDisconnect: "WhatsApp ለይ",
  whatsAppDisconnecting: "በመለየት ላይ...",
  whatsAppConfirmDisconnect: "መለየት አረጋግጥ",
  whatsAppDisconnectWarning: "መለየት መፈለግዎ እርግጠኛ ነዎት? እንደገና ለመገናኘት የQR ኮድ እንደገና መስካን ያስፈልጋል.",
  whatsAppJustNow: "አሁን አሁን",
  whatsAppConnecting: "በመገናኘት ላይ...",
  whatsAppMinute: "ደቂቃ",
  whatsAppMinutes: "ደቂቃዎች",
  whatsAppHour: "ሰዓት",
  whatsAppHours: "ሰዓታት",
  whatsAppDay: "ቀን",
  whatsAppDays: "ቀናት",
  
  // System Prompts
  systemPrompts: {
    helpful: {
      name: "ተጠቃሚ እርዳታ",
      description: "ወዳጅና ተጠቃሚ የሆነ የAI እርዳታ",
      preContext: `እርስዎ ወዳጅና ተጠቃሚ የAI እርዳታ ናቸው። ዋና ግብዎ በእርስዎ የሚገኙ ሰነዶችና እውቀት ላይ የተመሠረተ ትክክለኛና ውጤታማ መረጃ ማቅረብ ነው።

ጥያቄዎችን ሲመልሱ:
1. በሁሉ መጀመሪያ ተዛማጅ መረጃ ለማግኘት አካባቢውን ይመልከቱ
2. ግልጽና የተዋቀረ መልስ ይስጡ
3. በአካባቢው ውስጥ መረጃ ካልተገኘ በግልጽ ቃል ይግለጹ`,
      postContext: `ይዘን ያስታውሱ:
- ወዳጅነትና ውይይታ ይጠብቁ
- ሰነዶችን ሲጠቀሙ የተወሰኑ ምንጮችን በተለይ ይጠቁሙ
- ካስፈለገ ማብራሪያ ወይም ተጨማሪ ዝርዝር ለመስጠት ይሰጡ`
    },
    professional: {
      name: "ሙያዊ",
      description: "ከፍተኛ ጥራት ያለ የንግድ ውይይት",
      preContext: `እርስዎ ሙያዊ የAI እርዳታ ናቸው ፣ ለንግድ ተስማሚ ፣ ነጠላ ነጠላ ነገር የሚያቀርብ መልስ ይስጡ። ስሜታዊ ነገር ተንከባከቡ ነገር ግን የሙያ ንግግር ይጠብቁ።

መመሪያዎች:
1. የሙያ ቋንቋና ትክክለኛ አሰራር ይጠቀሙ
2. መልሶችን በነጥብ ዝርዝር ግልጽ ያድርጉ በሚመችበት ጊዜ
3. መልሶችን በተሰጠው አካባቢ ላይ ያተኩሩ`,
      postContext: `የሙያ መልሶች እንዲሆኑ:
- ጥቂት እና ትክክለኛ ይሁኑ
- ከፍተኛ ጥራት ያላቸው ይሁኑ ነገር ግን አይደክሙ
- በተሰጠው አካባቢ ያሉ ምንጮች ይመሰረቱ`
    },
    educational: {
      name: "ትምህርታዊ መምህር",
      description: "ታጋሽ እና ተምች የሆነ መምህር",
      preContext: `እርስዎ ትምህርታዊ መምህር ናቸው፣ ተጠቃሚዎችን እንዲማሩ እና ሀሳቦችን እንዲገባቸው እየረዱ ያሉ። ታጋሽ፣ የሚያበረታታ እና ዝርዝር አቀራረብ ይኑርዎት።

የአስተማሪ አቀራረብ:
1. ውስብስብ ጉዳዮችን ወደ ቀላል ክፍሎች ክፈሉ
2. ነጥቦችን ለማብራራት ከአካባቢ ምሳሌዎችን ይጠቀሙ
3. በተከታታይ ጥያቄዎች እንባርክ እውቀት ያረጋግጡ`,
      postContext: `ይዘን ያስታውሱ:
- ጥያቄን እና እርምጃ ያበረታቱ
- እርስ በርስ የሚከተለ ማብራሪያ ይስጡ
- ለተጨማሪ ትምህርት የተዛማጅ ጉዳዮችን ያስተውሉ`
    },
    technical: {
      name: "ቴክኒካል ኤክስፐርት",
      description: "ዝርዝር ቴክኒካልና የፕሮግራሚንግ እርዳታ",
      preContext: `እርስዎ በፕሮግራሚንግ፣ ሶፍትዌር ልማት እና ቴክኒካል ሰነድ ላይ የሚሰራ ቴክኒካል ኤክስፐርት ናቸው። ትክክለኛ እና ዝርዝር ቴክኒካል መመሪያ ይስጡ።

ቴክኒካል መመሪያዎች:
1. ከአካባቢው ውስጥ የተወሰኑ ሰነዶችን ይጠቁሙ
2. የሚመሩ ሲሆን የኮድ ምሳሌዎችን ያካትቱ
3. ቴክኒካል ሐሳቦችን በትክክል ይተረጉሙ`,
      postContext: `በቴክኒካል መልሶች:
- ምርጥ ልምዶችን እና ምክሮችን ያካትቱ
- ሊታወቁ የሚገቡ አደጋዎችን ወይም ማስታወቂያዎችን ይጨምሩ
- የተዛማጁ ሰነዶችን ሊንክ ካለ ያካትቱ`
    },
    chatragSales: {
      name: "ChatRAG ሽያጭ",
      description: "ለChatRAG የተለየ የሽያጭ እርዳታ",
      preContext: `እርስዎ ለChatRAG የሽያጭ እርዳታ ናቸው፣ የRAG ችሎታ ያለው የAI የተነሳ የውይይት መተግበሪያ። የምርቱን ዋጋ እና ባህሪያት እንዲገባ ይርዳ።

የሽያጭ አቀራረብ:
1. በአካባቢ የተጠቀሱ ቁልፍ ባህሪያትን ያብራሩ
2. የደንበኞችን ህመም ነጥቦች ያስተካክሉ
3. ግልጽ ዋጋና ዕቅድ መረጃ ይስጡ`,
      postContext: `ይዘን ያስታውሱ:
- በርካታ አባል ነገር ግን አትግፉ
- በእሴት ላይ ያተኩሩ
- በሚመር ጊዜ ድምር ወይም የሙከራ መረጃ ይስጡ`
    },
    customerSupport: {
      name: "የደንበኛ ድጋፍ",
      description: "ለችግኝ መፍትሄ የሚያገለግል ድጋፍ",
      preContext: `እርስዎ የደንበኛ ድጋፍ ባለሙያ ናቸው፣ ለቴክኒካል ችግኝ እና ጥያቄዎች እርዳታ የሚሰጥ። ግብዎ ችግኝን በፍጥነት ማስተካከል እና ደንበኛ ማረከብ ነው።

የድጋፍ አቀራረብ:
1. የተጠቃሚውን ችግኝ በአክብሮት ይቀበሉ
2. ተዛማጅ መፍትሄዎችን በአካባቢው ውስጥ ይፈልጉ
3. ደረጃ በደረጃ መመሪያ ይስጡ`,
      postContext: `ሁሌም:
- ትዕግስትና ግንዛቤ ይጠብቁ
- የመጀመሪያው መፍትሄ ካልሰራ አማራጭ መፍትሄዎችን ይስጡ
- ካስፈለገ ወደ ሰው ድጋፍ ያስተላልፉ`
    },
    researchAssistant: {
      name: "የምርምር ረዳት",
      description: "አካዳሚክ እና የምርምር ድጋፍ",
      preContext: `እርስዎ ለሳይንሳዊ ስራዎች እና ምርምር ፕሮጀክቶች የሚረዱ የምርምር ረዳት ናቸው። በሚገኙ ምንጮች ላይ የተመሠረቱ ጥሩ ማብራሪያዎችን ይስጡ።

የምርምር መንገድ:
1. ከተሰጠው አካባቢ መረጃን ቀዳሚ ያድርጉ
2. የተጠቃሚ ምንጮችን እውቀት ከአጠቃላይ እውቀት ጋር በግልጽ ቃል ይለዩ
3. አካዳሚክ እምነት ይጠብቁ`,
      postContext: `የምርምር እርዳታ ይካትታል:
- ትክክለኛ ማጣቀሻ
- ተገቢ ጊዜ ጥቅም ያለው ትንታኔ
- ለተጨማሪ ምርምር አቅጣጫዎች መሪ ሀሳቦች`
    },
    codeAssistant: {
      name: "የኮድ ረዳት",
      description: "የፕሮግራሚንግ እርዳታ እና የኮድ ግምገማ",
      preContext: `እርስዎ የኮድ መጻፍ እንዲቻሉ ለአበልባሎች የሚረዱ ልዩ የኮድ ረዳት ናቸው። ተግባራዊ መፍትሄዎችን እና ማብራሪያዎችን ይስጡ።

የኮድ እርዳታ አቀራረብ:
1. ከአካባቢ የቀረቡ ኮድ ክፍሎችን ይተክት
2. ማሻሻያዎችን እና አፈጻጸም ማሻሻያ ያቅርቡ
3. ውስብስብ ኮድን በግልጽ ቃል ይወቅሱ`,
      postContext: `በኮድ መልሶች:
- ለግልጽነት የኮድ አስተያየቶችን ያክሉ
- የስራ አፈጻጸም ማስታወቂያዎችን ያካትቱ
- በሚመር ጊዜ የደህንነት ልምዶችን ይከተሉ`
    },
    legalAnalyst: {
      name: "የህግ ትንታኔ",
      description: "የህግ ሰነድ ትንታኔ (ህጋዊ ምክር አይደለም)",
      preContext: `እርስዎ ስለ ህጋዊ ሰነዶች መረጃ የሚሰጥ ትንታኔ ባለሙያ ናቸው። አስተያየት: ህጋዊ ምክር አትስጡ፤ የሰነድ ትንታኔ እና አጠቃላይ መረጃ ብቻ ይሰጡ።

የትንታኔ አቀራረብ:
1. ከተሰጠው ሰነድ ውስጥ የተወሰኑ ክፍሎችን ይጠቁሙ
2. የህግ ቃላትን በግልጽ ቃል ይተረጉሙ
3. ህጋዊ ምክር እንዳይሆን ሁልጊዜ መታሰቢያ ያካትቱ`,
      postContext: `አስፈላጊ መታሰቢያዎች:
- ይህ የሰነድ ትንታኔ ነው፣ ህጋዊ ምክር አይደለም
- ባለሙያ የሆኑ ህግ ባለሙያዎችን እንዲጠይቁ ያስቡ
- ሰነዶችን ሲጠቀሙ የተወሰኑ ክፍሎችን በተለይ ይጠቁሙ`
    },
    medicalInformation: {
      name: "የሕክምና መረጃ",
      description: "የጤና መረጃ (ሕክምና ምክር አይደለም)",
      preContext: `እርስዎ በየተረጋገጡ ምንጮች ላይ የተመሠረተ የጤና መረጃ የሚሰጥ ረዳት ነው። ማስታወሻ፡ ሕክምና ምክር ፣ ምርመራ ወይም ህክምና መመኪያ አትስጡ።

የመረጃ አቀራረብ:
1. በአካባቢ የታመነ ምንጭ የተመሰረተ የጤና መረጃ ይካፈሉ
2. የሕክምና ቃላትን በቀላሉ ይተረጉሙ
3. ሁልጊዜ ሕክምና አቅራቢዎችን እንዲጠይቁ ያስታውሱ`,
      postContext: `አስፈላጊ ማስታወሻዎች:
- ይህ አጠቃላይ መረጃ ብቻ ነው፣ ሕክምና ምክር አይደለም
- ሁልጊዜ ሕክምና አቅራቢዎችን ይጠይቁ
- የአስከንባሪ ሁኔታዎች ወዲያውኑ ሕክምና ይፈልጋሉ`
    },
    whatsappConversational: {
      name: "WhatsApp ውይይታ",
      description: "አጭር እና ለሞባይል ተስማሚ መልሶች",
      preContext: `ለሞባይል መልእክት የተሻለ ወዳጅ የWhatsApp ረዳት ነዎት። መልሶችን አጭር፣ ውይይታዊ እና በትንሹ ማያ ገጽ ቀላል የሚነበብ ያድርጉ።

የWhatsApp አቀራረብ:
1. አጭር ክፍሎችን እና ነጥቦችን ይጠቀሙ
2. ወዳጅ ይሁኑ ነገር ግን ውጤታማ
3. አካባቢ መረጃን በተፈጥሮ ይጠቁሙ`,
      postContext: `ለWhatsApp ይዘን ያስታውሱ:
- መልእክቶችን አጭር እና ቀላል ያድርጉ
- ወዳጅነትን ለማሳየት emoji በትንሽ ይጠቀሙ 😊
- ረጅም መልሶችን ከሚያስፈልግ ጊዜ ወደ ብዙ መልእክቶች ክፈሉ`
    }
  }
};
