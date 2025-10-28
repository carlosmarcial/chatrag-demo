import { getAppName } from '@/lib/env';

export const hi = {
  // Main chat
  mainPrompt: "मैं आपकी कैसे सहायता कर सकता हूँ?",
  
  // Navigation and common UI
  settings: "सेटिंग्स",
  general: "सामान्य",
  logout: "लॉगआउट",
  modelSelector: "AI मॉडल चुनें",
  textSize: "टेक्स्ट साइज़",
  themeToggle: "थीम बदलें",
  shareChat: "चैट साझा करें",
  uploadDocument: "दस्तावेज़ अपलोड करें",
  viewDocuments: "दस्तावेज़ देखें",
  
  // Settings modal
  language: "भाषा",
  theme: "थीम",
  customBackground: "कस्टम बैकग्राउंड",
  customBackgroundDesc: "अपने चैट बैकग्राउंड को कस्टमाइज़ करने के लिए एक इमेज अपलोड करें",
  upload: "अपलोड करें",
  uploading: "अपलोड हो रहा है...",
  currentBackground: "वर्तमान बैकग्राउंड:",
  notificationSound: "नोटिफिकेशन साउंड",
  notificationSoundDesc: "AI के जवाब पूरा होने पर साउंड बजाएं",
  soundType: "साउंड प्रकार",
  playSound: "साउंड बजाएं",
  highBell: "हाई बेल",
  mediumBell: "मीडियम बेल",
  deepBell: "डीप बेल",
  subtleBell: "सब्टल बेल",
  
  // Admin settings
  admin: "एडमिन",
  adminLogin: "एडमिन लॉगिन",
  adminPassword: "एडमिन पासवर्ड",
  adminPasswordRequired: "एडमिन पासवर्ड आवश्यक है",
  adminLoginFailed: "एडमिन लॉगिन असफल",
  adminPasswordIncorrect: "पासवर्ड गलत है",
  notAuthorizedAsAdmin: "आपका खाता एडमिन के रूप में अधिकृत नहीं है",
  loginRequired: "एडमिन सुविधाओं का उपयोग करने के लिए आपको लॉगिन करना होगा",
  adminVerification: "एडमिन सत्यापन",
  adminVerificationDesc: "अपनी एडमिन स्थिति सत्यापित करने के लिए नीचे दिए बटन पर क्लिक करें",
  adminVerificationSuccess: "एडमिन एक्सेस सफलतापूर्वक सक्रिय किया गया",
  adminVerificationFailed: "एडमिन सत्यापन विफल रहा",
  verifying: "सत्यापन हो रहा है...",
  activateAdminAccess: "एडमिन एक्सेस सक्रिय करें",
  loggingIn: "लॉगिन हो रहा है...",
  loggingOut: "लॉगआउट हो रहा है...",
  logoutAdmin: "एडमिन लॉगआउट",
  login: "लॉगिन",
  adminAuthenticated: "एडमिन प्रमाणीकृत",
  adminAuthenticatedDesc: "अब आपके पास एडमिन सुविधाओं का एक्सेस है",
  docDashboardReadOnly: "केवल पढ़ने योग्य दस्तावेज़ डैशबोर्ड",
  docDashboardReadOnlyDesc: "उपयोगकर्ताओं को केवल पढ़ने की मोड में दस्तावेज़ देखने की अनुमति दें",
  documentViewer: "दस्तावेज़ व्यूअर",
  readOnlyMode: "केवल पढ़ने की मोड सक्षम - दस्तावेज़ संशोधित नहीं किए जा सकते",
  documents: "दस्तावेज़",
  
  // Text size settings
  small: "छोटा",
  default: "डिफ़ॉल्ट",
  large: "बड़ा",
  
  // Font family settings
  fontFamily: "फ़ॉन्ट परिवार",
  interDefault: "Inter (डिफ़ॉल्ट)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "सिस्टम",
  lightTheme: "लाइट",
  darkTheme: "डार्क",
  
  // Language settings
  languageSelector: "भाषा चुनें",
  english: "अंग्रेजी (US)",
  spanish: "स्पेनिश",
  portuguese: "पुर्तगाली",
  lithuanian: "लिथुआनियाई",
  chinese: "चीनी (सरलीकृत)",
  hindi: "हिंदी",
  
  // UI switches
  alwaysShowCode: "डेटा एनालिस्ट का उपयोग करते समय हमेशा कोड दिखाएं",
  showFollowUp: "चैट में फॉलो अप सुझाव दिखाएं",
  
  // Archived chats
  archivedChats: "संग्रहीत चैट",
  archiveAll: "सभी चैट संग्रहीत करें",
  deleteAll: "सभी चैट हटाएं",
  logOut: "इस डिवाइस पर लॉगआउट करें",
  
  // Other UI elements
  notifications: "नोटिफिकेशन",
  personalization: "व्यक्तिगतकरण",
  speech: "स्पीच",
  dataControls: "डेटा नियंत्रण",
  builderProfile: "बिल्डर प्रोफाइल",
  connectedApps: "जुड़े हुए ऐप्स",
  security: "सुरक्षा",
  subscription: "सब्स्क्रिप्शन",
  
  // Input and actions
  messagePlaceholder: "कुछ भी पूछें",
  sendPrompt: "प्रॉम्प्ट भेजें",
  stopGenerating: "जेनरेट करना बंद करें",
  useVoice: "श्रुतलेख",
  stopRecording: "रिकॉर्डिंग बंद करें",
  processing: "प्रोसेसिंग...",
  
  // Document handling
  documentReady: "दस्तावेज़ तैयार",
  processingDocument: "दस्तावेज़ प्रोसेसिंग...",
  errorProcessingDocument: "दस्तावेज़ प्रोसेसिंग में त्रुटि",
  imageReady: "छवि तैयार",
  
  // 3D generation
  generate3DModel: "3D मॉडल बनाने के लिए ENTER दबाएं",
  readyFor3DGeneration: "3D मॉडल बनाने के लिए ENTER दबाएं",
  modelFrom3DImage: "3D मॉडल के लिए इमेज",
  
  // Media buttons
  searchWeb: "वेब पर खोजें",
  uploadFiles: "फाइल अपलोड करें",
  imageGenerate: "इमेज जेनरेट करें",
  videoGenerate: "वीडियो जेनरेट करें",
  threeDGenerate: "3D जेनरेशन",
  webSearch: "खोजें",
  reasoningText: "तर्क",
  reasoningNotSupported: "मॉडल तर्क का समर्थन नहीं करता",
  reasoningEffort: "तर्क प्रयास",
  maxReasoningTokens: "अधिकतम टोकन",
  hideReasoning: "तर्क छुपाएं",
  model: "मॉडल",
  reasoningMethod: "विधि",
  low: "कम",
  medium: "मध्यम",
  high: "उच्च",
  
  // Suggestion categories
  write: "लिखें",
  plan: "योजना",
  design: "डिज़ाइन",
  backToCategories: "← कैटेगरी पर वापस जाएं",
  
  // Write suggestions
  writeSummary: "के बारे में सारांश",
  writeEmail: "को ईमेल",
  writeBlog: "के बारे में ब्लॉग पोस्ट",
  writeSocial: "सोशल मीडिया अपडेट",
  
  // Plan suggestions
  planMarketing: "के लिए मार्केटिंग कैंपेन",
  planBusiness: "के लिए बिज़नेस प्रपोज़ल",
  planProduct: "के लिए प्रोडक्ट लॉन्च",
  planLearning: "के बारे में लर्निंग रोडमैप",
  
  // Design suggestions
  designLogo: "छोटा लोगो",
  designHero: "हीरो सेक्शन",
  designLanding: "लैंडिंग पेज",
  designSocial: "सोशल मीडिया पोस्ट",
  
  // Sidebar
  pinnedChats: "पिन किए गए चैट",
  recentChats: "हाल के चैट",
  searchResults: "खोज परिणाम",
  noChats: "कोई चैट नहीं",
  noPinnedChats: "कोई पिन किए गए चैट नहीं",
  noChatsAvailable: "कोई चैट उपलब्ध नहीं",
  closeSidebar: "साइडबार बंद करें",
  openSidebar: "साइडबार खोलें",
  searchChats: "चैट खोजें...",
  
  // Chat actions
  pin: "पिन करें",
  unpin: "अनपिन करें",
  rename: "नाम बदलें",
  delete: "हटाएं",
  newChat: "नया चैट",
  useIncognitoChat: "गुप्त चैट का उपयोग करें",
  incognitoChatActive: "गुप्त चैट सक्रिय",
  incognitoChatActiveMessage: "गुप्त चैट सक्रिय - संदेश सहेजे नहीं जाएंगे",
  search: "खोजें",
  github: "GitHub",
  enterChatTitle: "चैट शीर्षक दर्ज करें...",
  
  // Folder management
  folders: "फ़ोल्डर",
  newFolder: "नया फ़ोल्डर",
  createNewFolder: "नया फ़ोल्डर बनाएं",
  organizeChatsFolders: "बेहतर प्रबंधन के लिए अपनी चैट को फ़ोल्डर में व्यवस्थित करें",
  folderName: "फ़ोल्डर का नाम",
  folderColor: "फ़ोल्डर का रंग",
  folderNameRequired: "फ़ोल्डर का नाम आवश्यक है",
  failedToCreateFolder: "फ़ोल्डर बनाने में विफल",
  creating: "बना रहे हैं...",
  create: "बनाएं",
  cancel: "रद्द करें",
  moveToFolder: "फ़ोल्डर में ले जाएं",
  removeFromFolder: "फ़ोल्डर से हटाएं",
  moveToRoot: "रूट में ले जाएं",
  noFolders: "कोई फ़ोल्डर नहीं",
  noChatsInFolder: "फ़ोल्डर में कोई चैट नहीं",
  enterFolderName: "फ़ोल्डर का नाम दर्ज करें...",
  confirmDeleteFolder: "क्या आप वाकई इस फ़ोल्डर को हटाना चाहते हैं?",
  deleteFolder: "फ़ोल्डर हटाएं",
  confirmDeleteFolderMessage: "क्या आप वाकई इस फ़ोल्डर को हटाना चाहते हैं?",
  deleteFolderWithChats: "इस फ़ोल्डर में सभी चैट भी हटाएं",
  deleteFolderKeepChats: "चैट को रूट स्तर पर ले जाया जाएगा",
  chats: "चैट",
  
  // Disclaimer
  disclaimer: `${getAppName()} से गलतियां हो सकती हैं। महत्वपूर्ण जानकारी की जांच करने पर विचार करें।`,

  // Document Dashboard
  documentManagement: "दस्तावेज़ प्रबंधन",
  uploadNew: "नया अपलोड करें",
  storedDocuments: "संग्रहीत दस्तावेज़",
  dragDropDocuments: "अपने दस्तावेज़ ड्रैग और ड्रॉप करें",
  supportedFileTypes: "PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB फाइलें",
  selectFiles: "फाइलें चुनें",
  searchDocuments: "दस्तावेज़ खोजें...",
  noDocumentsFound: "कोई दस्तावेज़ नहीं मिला",
  processingStatus: "प्रोसेसिंग",
  readyStatus: "तैयार",
  failedStatus: "असफल",
  partialStatus: "आंशिक",
  uploadDate: "अपलोड दिनांक",
  docName: "नाम",
  docStatus: "स्थिति",
  docSize: "साइज़",
  errorPrefix: "त्रुटि:",
  uploadButton: "अपलोड करें",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "दस्तावेज़ आंशिक चंक सफलता के साथ प्रोसेस किया गया",
  deleteDocument: "दस्तावेज़ हटाएँ",
  confirmDeleteDocument: "क्या आप वाकई इस दस्तावेज़ को हटाना चाहते हैं?",
  confirmDeleteChat: "हटाने की पुष्टि करें",
  confirmDeleteChatMessage: "क्या आप वाकई हटाना चाहते हैं",
  actionCannotBeUndone: "यह क्रिया पूर्ववत नहीं की जा सकती।",
  
  // Unified Upload Button
  uploadTemporaryDocument: "अस्थायी दस्तावेज़ अपलोड करें",
  uploadImage: "इमेज अपलोड करें",
  
  // MCP Tools
  mcpToolsButton: "MCP टूल्स",
  availableMcpTools: "उपलब्ध MCP टूल्स",
  loadingTools: "टूल्स लोड हो रहे हैं...",
  noToolsAvailable: "कोई टूल्स उपलब्ध नहीं",
  zapierTools: "Zapier टूल्स",
  otherTools: "अन्य टूल्स",
  learnMore: "और जानें",
  fromServer: "सर्वर से:",
  runTool: "टूल चलाएं",
  cancelTool: "रद्द करें",
  waitingForApproval: "आपकी अनुमति का इंतज़ार...",
  executingTool: "टूल चल रहा है, कृपया प्रतीक्षा करें...",
  toolError: "टूल चलाने में त्रुटि हुई।",
  
  // Chat message action tooltips
  copyTooltip: "कॉपी करें",
  copiedTooltip: "कॉपी हो गया!",
  textToSpeechTooltip: "टेक्स्ट टू स्पीच चलाएं",
  downloadPdfTooltip: "PDF के रूप में डाउनलोड करें",
  sendToKnowledgeBase: "RAG में जोड़ें",
  
  // 3D Model Viewer
  clickDragRotateModel: "मॉडल को घुमाने के लिए क्लिक और ड्रैग करें",
  download: "डाउनलोड करें",
  threeDModel: "3D मॉडल",
  // Image Generation Modal
  imageGeneration: "छवि निर्माण",
  generateImage: "छवि बनाएं",
  size: "आकार",
  numberOfImages: "छवियों की संख्या",
  sourceImages: "स्रोत छवियां",
  safetyChecker: "सुरक्षा जांचकर्ता",
  editImage: "छवि संपादित करें",
  editImageInstructions: "संपादन निर्देश",
  uploadSourceImage: "स्रोत छवि अपलोड करें",
  uploadImage: "छवि अपलोड करें",
  addChangeImage: "छवि जोड़ें/बदलें",
  clearAll: "सब साफ करें",
  upToImagesLimit: "(10 छवियों तक < 50MB प्रत्येक)",
  strength: "तीव्रता",
  strengthTooltip: "छवि को कितना बदलना है",
  imageSafetyNote: "यह प्रदाता डिफ़ॉल्ट रूप से सुरक्षा जांच शामिल करता है",
  generating: "निर्माण हो रहा है...",

  // Video Generation Modal
  videoGeneration: "वीडियो निर्माण",
  generateVideo: "वीडियो बनाएं",
  mode: "मोड",
  fastMode: "फास्ट मोड",
  fasterGenerationMode: "तेज़ निर्माण (कम गुणवत्ता)",
  standardQualityMode: "मानक गुणवत्ता (धीमा)",
  aspectRatio: "पहलू अनुपात",
  resolution: "रिज़ॉल्यूशन",
  duration: "अवधि",
  seconds: "सेकंड",
  enhancePrompt: "प्रॉम्प्ट बेहतर बनाएं",
  enhancePromptTooltip: "बेहतर परिणामों के लिए आपके प्रॉम्प्ट को स्वचालित रूप से सुधारें",
  autoFix: "ऑटो-सुधार",
  autoFixTooltip: "उत्पन्न वीडियो में समस्याओं को स्वचालित रूप से ठीक करें",
  generateAudio: "ऑडियो बनाएं",
  generateAudioTooltip: "वीडियो के लिए ऑडियो उत्पन्न करें",
  loopVideo: "लूप वीडियो",
  loopVideoTooltip: "वीडियो को निर्बाध रूप से दोहराएं",
  sourceImage: "स्रोत छवि",
  changeImage: "छवि बदलें",
  videoSizeLimit: "(< 50MB)",
  videoWithContext: "वीडियो + संदर्भ",
  useDocumentContext: "दस्तावेज़ संदर्भ का उपयोग करें",
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
  today: "आज",
  yesterday: "कल",
  thisWeek: "इस सप्ताह",
  older: "पुराने",
  
  // Relative time
  justNow: "अभी",
  minutesAgo: "मिनट पहले",
  oneHourAgo: "1 घंटे पहले",
  hoursAgo: "घंटे पहले",
  oneDayAgo: "1 दिन पहले",
  daysAgo: "दिन पहले",
  oneWeekAgo: "1 सप्ताह पहले",
  weeksAgo: "सप्ताह पहले",
  
  // Share chat
  shareChatTitle: "चैट साझा करें",
  shareChatDescription: "आपकी चैट साझा कर दी गई है। इसे दूसरों के साथ साझा करने के लिए नीचे दिए गए लिंक को कॉपी करें।",
  generateShareLink: "साझा करने का लिंक बनाएं",
  generateShareLinkDescription: "इस चैट के लिए एक साझा करने योग्य लिंक बनाएं।",
  generatingLink: "लिंक बना रहे हैं...",
  copy: "कॉपी करें",
  
  // Shared chat layout
  sharedChatReadOnly: "यह एक साझा चैट वार्तालाप का केवल-पढ़ने योग्य दृश्य है।",
  created: "बनाया गया",
  
  // Mobile toolbar
  themeLabel: "थीम",
  textSizeLabel: "टेक्स्ट साइज़",
  shareLabel: "साझा करें",
  documentsLabel: "दस्तावेज़",
  
  // WhatsApp Integration
  connectWhatsApp: "WhatsApp कनेक्ट करें",
  whatsAppConnected: "WhatsApp: कनेक्टेड",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: QR स्कैन करें",
  whatsAppProcessing: "प्रोसेसिंग...",
  whatsAppModalTitle: "WhatsApp कनेक्ट करें",
  whatsAppModalDescription: "कनेक्ट करने के लिए अपने फ़ोन पर WhatsApp से इस QR कोड को स्कैन करें",
  whatsAppStatusTitle: "WhatsApp कनेक्टेड",
  whatsAppStatusDescription: "आपका WhatsApp ChatRAG से सफलतापूर्वक कनेक्ट हो गया है",
  whatsAppInstructions1: "1. अपने फ़ोन पर WhatsApp खोलें",
  whatsAppInstructions2: "2. मेनू या सेटिंग्स पर टैप करें",
  whatsAppInstructions3: "3. लिंक्ड डिवाइसेज़ पर टैप करें",
  whatsAppInstructions4: "4. डिवाइस लिंक करें पर टैप करें",
  whatsAppInstructions5: "5. अपने फ़ोन को इस स्क्रीन की तरफ़ करें",
  whatsAppRefreshQR: "QR कोड रिफ़्रेश करें",
  whatsAppTryAgain: "फिर कोशिश करें",
  whatsAppFailedLoad: "QR कोड लोड करने में विफल",
  whatsAppExpiresIn: "{time} में समाप्त",
  whatsAppPhoneNumber: "फ़ोन नंबर",
  whatsAppStatus: "स्थिति",
  whatsAppActive: "सक्रिय",
  whatsAppConnectedFor: "कनेक्टेड",
  whatsAppWorkingMessage: "सब कुछ ठीक से काम कर रहा है। आपके WhatsApp पर भेजे गए संदेश ChatRAG द्वारा स्वचालित रूप से प्रोसेस किए जाएंगे।",
  whatsAppDisconnect: "WhatsApp डिस्कनेक्ट करें",
  whatsAppDisconnecting: "डिस्कनेक्ट हो रहा है...",
  whatsAppConfirmDisconnect: "डिस्कनेक्ट की पुष्टि करें",
  whatsAppDisconnectWarning: "क्या आप वाकई डिस्कनेक्ट करना चाहते हैं? फिर से कनेक्ट करने के लिए आपको QR कोड दोबारा स्कैन करना होगा।",
  whatsAppJustNow: "अभी",
  whatsAppConnecting: "कनेक्ट हो रहा है...",
  whatsAppMinute: "मिनट",
  whatsAppMinutes: "मिनट",
  whatsAppHour: "घंटा",
  whatsAppHours: "घंटे",
  whatsAppDay: "दिन",
  whatsAppDays: "दिन",
  
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