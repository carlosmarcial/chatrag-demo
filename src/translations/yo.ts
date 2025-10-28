import { getAppName } from '@/lib/env';

export const yo = {
  // Main chat
  mainPrompt: "Kín ni mo lè ṣe ránṣẹ́?",
  
  // Navigation and common UI
  settings: "Ètò",
  general: "Gbogbogbo",
  logout: "Jáde",
  modelSelector: "Yan àwòṣe AI",
  textSize: "Ìwọ̀n Ọ̀rọ̀",
  themeToggle: "Yí àwọ̀ padà",
  shareChat: "Pín ìfọ̀rọ̀wérọ̀",
  uploadDocument: "Gbé ìwé kálẹ̀",
  viewDocuments: "Wo àwọn ìwé",
  
  // Settings modal
  language: "Èdè",
  theme: "Àwọ̀",
  customBackground: "Ẹ̀yìn tí a yàn",
  customBackgroundDesc: "Gbé àwòrán kálẹ̀ láti ṣe àtúnṣe ẹ̀yìn ìfọ̀rọ̀wérọ̀ rẹ",
  upload: "Gbé kálẹ̀",
  uploading: "Ìgbékálẹ̀ ń lọ...",
  currentBackground: "Ẹ̀yìn lọ́wọ́lọ́wọ́:",
  notificationSound: "Ohùn ìkìlọ̀",
  notificationSoundDesc: "Ṣeré ohùn nígbà tí AI bá parí ìdáhùn rẹ",
  soundType: "Ìrú ohùn",
  playSound: "Ṣeré ohùn",
  highBell: "Agogo gígá",
  mediumBell: "Agogo àárín",
  deepBell: "Agogo jinlẹ̀",
  subtleBell: "Agogo fúnfẹ̀",
  
  // Admin settings
  admin: "Adímìn",
  adminLogin: "Ìwọlé Adímìn",
  adminPassword: "Ọ̀rọ̀ aṣíná Adímìn",
  adminPasswordRequired: "A nílò ọ̀rọ̀ aṣíná Adímìn",
  adminLoginFailed: "Ìwọlé Adímìn kò ṣàṣeyọrí",
  adminPasswordIncorrect: "Ọ̀rọ̀ aṣíná kò tọ́",
  notAuthorizedAsAdmin: "Akọọlẹ̀ rẹ kò fọwọ́sí gẹ́gẹ́ bí Adímìn",
  loginRequired: "O gbọ́dọ̀ wọlé kí o lè wọ̀le sí àwọn ànfààní Adímìn",
  adminVerification: "Ìfọwọ́si Adímìn",
  adminVerificationDesc: "Tẹ bọ́tìnì ní ìsàlẹ̀ láti fọwọ́si ipo Adímìn rẹ",
  adminVerificationSuccess: "Ìwọle Adímìn ti muu ṣiṣẹ́ ní aṣeyọrí",
  adminVerificationFailed: "Ìfọwọ́si Adímìn kò ṣàṣeyọrí",
  verifying: "Ìfọwọ́si ń lọ...",
  activateAdminAccess: "Muu ìwọle Adímìn ṣiṣẹ́",
  loggingIn: "Ìwọlé ń lọ...",
  loggingOut: "Ìjáde ń lọ...",
  logoutAdmin: "Jádẹ gẹ́gẹ́ bí Adímìn",
  login: "Wọlé",
  adminAuthenticated: "Adímìn ti jẹ́rìí",
  adminAuthenticatedDesc: "O ní ìwọle sí àwọn ànfààní Adímìn báyìí",
  docDashboardReadOnly: "Pátákó Ìwé Kíkà Nìkan",
  docDashboardReadOnlyDesc: "Fún àwọn òǹlò láàyè láti wo àwọn ìwé ní ìpò kíkà nìkan",
  documentViewer: "Awo Ìwé",
  readOnlyMode: "Ìpò kíkà nìkan ti ṣiṣẹ́ - a kò lè túnṣe àwọn ìwé",
  documents: "Àwọn Ìwé",
  
  // Text size settings
  small: "Kékeré",
  default: "Ìpìlẹ̀",
  large: "Ńlá",
  
  // Font family settings
  fontFamily: "Ìdílé Ọ̀rọ̀",
  interDefault: "Inter (Ìpìlẹ̀)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "Ètò",
  lightTheme: "Ìmọ́lẹ̀",
  darkTheme: "Òkùnkùn",
  
  // Language settings
  languageSelector: "Yan èdè",
  english: "Gẹ̀ẹ́sì (US)",
  spanish: "Sípáníìṣì",
  
  // UI switches
  alwaysShowCode: "Fihan koodu nígbà gbogbo nígbà lílo oníṣèròyè dátà",
  showFollowUp: "Fihan àwọn ìmọ̀ràn ìtẹ̀síwájú nínú àwọn ìfọ̀rọ̀wérọ̀",
  
  // Archived chats
  archivedChats: "Àwọn ìfọ̀rọ̀wérọ̀ tí a kó pamọ́",
  archiveAll: "Kó gbogbo ìfọ̀rọ̀wérọ̀ pamọ́",
  deleteAll: "Pa gbogbo ìfọ̀rọ̀wérọ̀ rẹ́",
  logOut: "Jáde lórí ẹ̀rọ yìí",
  
  // Other UI elements
  notifications: "Àwọn ìkìlọ̀",
  personalization: "Àtúnṣe tara ẹni",
  speech: "Ọ̀rọ̀",
  dataControls: "Ìṣàkóso dátà",
  builderProfile: "Àpèjúwe olùkọ́",
  connectedApps: "Àwọn apù tí a sopọ̀",
  security: "Ààbò",
  subscription: "Ìforúkọsílẹ̀",
  
  // Input and actions
  messagePlaceholder: "Béèrè ohunkóhun",
  sendPrompt: "Firánṣẹ́ ìtọ́nisọ́nà",
  stopGenerating: "Dá ìpilẹ̀ṣẹ̀ dúró",
  useVoice: "Lo ohùn",
  stopRecording: "Dá gbígbasilẹ̀ dúró",
  processing: "Ìṣiṣẹ́ ń lọ...",
  
  // Document handling
  documentReady: "Ìwé ti ṣetán",
  processingDocument: "Ìṣiṣẹ́ ìwé ń lọ...",
  errorProcessingDocument: "Àṣìṣe ìṣiṣẹ́ ìwé",
  imageReady: "Àwòrán ti ṣetán",
  
  // 3D generation
  generate3DModel: "Tẹ ENTER láti ṣẹ̀dá àwòṣe 3D",
  readyFor3DGeneration: "Tẹ ENTER láti ṣẹ̀dá àwòṣe 3D",
  modelFrom3DImage: "Àwòrán fún àwòṣe 3D",
  
  // Media buttons
  searchWeb: "Wá lórí wẹ́ẹ̀bù",
  uploadFiles: "Gbé fáìlì kálẹ̀",
  imageGenerate: "Ṣẹ̀dá àwọn àwòrán",
  videoGenerate: "Ṣẹ̀dá fídíò",
  threeDGenerate: "Ìṣẹ̀dá 3D",
  webSearch: "Wá",
  reasoningText: "Ìrònú",
  reasoningNotSupported: "Àwòṣe kò ṣe àtìlẹ́yìn ìrònú",
  reasoningEffort: "Ìgbìyànjú Ìrònú",
  maxReasoningTokens: "Àmì Pọ̀jùlọ",
  hideReasoning: "Fi Ìrònú pamọ́",
  model: "Àwòṣe",
  reasoningMethod: "Ọ̀nà",
  low: "Kékeré",
  medium: "Àárín",
  high: "Gíga",
  
  // Suggestion categories
  write: "Kọ̀wé",
  plan: "Gbèrò",
  design: "Ṣàpẹẹrẹ",
  backToCategories: "← Padà sí àwọn ẹ̀ka",
  
  // Write suggestions
  writeSummary: "àkópọ̀ nípa",
  writeEmail: "imeèlì sí",
  writeBlog: "ìwé ìròyìn bulọ́ọ̀gù nípa",
  writeSocial: "ìṣàkóso àwùjọ",
  
  // Plan suggestions
  planMarketing: "ìpolongo fún",
  planBusiness: "ìdáhùn iṣowo fún",
  planProduct: "ìfilọ́lẹ̀ ọja fún",
  planLearning: "àtúnwò ẹ̀kọ́ nípa",
  
  // Design suggestions
  designLogo: "àmì kékeré",
  designHero: "apá akọni",
  designLanding: "ojú-ìwé ìbalẹ̀",
  designSocial: "ìfiránṣẹ́ àwùjọ",
  
  // Sidebar
  pinnedChats: "Àwọn Ìfọ̀rọ̀wérọ̀ tí a fi kọ́",
  recentChats: "Àwọn Ìfọ̀rọ̀wérọ̀ Ìgbẹ̀yìn",
  searchResults: "Àwọn Èsì Wíwá",
  noChats: "Kò sí ìfọ̀rọ̀wérọ̀",
  noPinnedChats: "Kò sí ìfọ̀rọ̀wérọ̀ tí a fi kọ́",
  noChatsAvailable: "Kò sí ìfọ̀rọ̀wérọ̀ tí ó wà",
  closeSidebar: "Pa ọ̀pá ẹgbẹ́",
  openSidebar: "Ṣí ọ̀pá ẹgbẹ́",
  searchChats: "Wá àwọn ìfọ̀rọ̀wérọ̀...",
  
  // Chat actions
  pin: "Fi kọ́",
  unpin: "Yọ kúrò",
  rename: "Tún orúkọ ṣe",
  delete: "Parẹ́",
  newChat: "Ìfọ̀rọ̀wérọ̀ tuntun",
  useIncognitoChat: "Lo ìfọ̀rọ̀wérọ̀ ìkọ̀kọ̀",
  incognitoChatActive: "Ìfọ̀rọ̀wérọ̀ Ìkọ̀kọ̀ Ń Ṣiṣẹ́",
  incognitoChatActiveMessage: "Ìfọ̀rọ̀wérọ̀ Ìkọ̀kọ̀ Ń Ṣiṣẹ́ - A kì yóò fi àwọn ifiránṣẹ́ pamọ́",
  search: "Wá",
  github: "GitHub",
  enterChatTitle: "Tẹ àkọlé ìfọ̀rọ̀wérọ̀...",
  
  // Folder management
  folders: "Àwọn Fóldà",
  newFolder: "Fóldà tuntun",
  createNewFolder: "Ṣẹ̀dá Fóldà Tuntun",
  organizeChatsFolders: "Ṣètò àwọn ìfọ̀rọ̀wérọ̀ rẹ sínú àwọn fóldà fún ìṣàkóso dáadáa",
  folderName: "Orúkọ Fóldà",
  folderColor: "Àwọ̀ Fóldà",
  folderNameRequired: "Orúkọ fóldà jẹ́ dandan",
  failedToCreateFolder: "Ìṣẹ̀dá fóldà kò ṣàṣeyọrí",
  creating: "Ìṣẹ̀dá ń lọ...",
  create: "Ṣẹ̀dá",
  cancel: "Fagilee",
  moveToFolder: "Gbé lọ sí fóldà",
  removeFromFolder: "Yọ kúrò nínú fóldà",
  moveToRoot: "Gbé lọ sí gbòǹgbò",
  noFolders: "Kò sí àwọn fóldà",
  noChatsInFolder: "Kò sí ìfọ̀rọ̀wérọ̀ nínú fóldà",
  enterFolderName: "Tẹ orúkọ fóldà...",
  confirmDeleteFolder: "Ṣé o dá ọ lójú pé o fẹ́ pa fóldà yìí rẹ́?",
  deleteFolder: "Pa Fóldà Rẹ́",
  confirmDeleteFolderMessage: "Ṣé o dá ọ lójú pé o fẹ́ pa fóldà yìí rẹ́?",
  deleteFolderWithChats: "Pàápàá pa gbogbo àwọn ìfọ̀rọ̀wérọ̀ nínú fóldà yìí rẹ́",
  deleteFolderKeepChats: "A ó gbé àwọn ìfọ̀rọ̀wérọ̀ lọ sí ipele gbòǹgbò",
  chats: "àwọn ìfọ̀rọ̀wérọ̀",
  
  // Disclaimer
  disclaimer: `${getAppName()} lè ṣe àṣìṣe. Rò nípa ìyẹ̀wò àlàyé pàtàkì.`,

  // Document Dashboard
  documentManagement: "Ìṣàkóso Ìwé",
  uploadNew: "Gbé Tuntun Kálẹ̀",
  storedDocuments: "Àwọn Ìwé tí a pamọ́",
  dragDropDocuments: "Fa & jù àwọn ìwé rẹ",
  supportedFileTypes: "Àwọn fáìlì PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB",
  selectFiles: "Yan àwọn fáìlì",
  searchDocuments: "Wá àwọn ìwé...",
  noDocumentsFound: "Kò rí ìwé kan",
  processingStatus: "ìṣiṣẹ́",
  readyStatus: "ṣetán",
  failedStatus: "kò ṣàṣeyọrí",
  partialStatus: "apá kan",
  uploadDate: "Ọjọ́ Ìgbékálẹ̀",
  docName: "Orúkọ",
  docStatus: "Ipo",
  docSize: "Ìwọ̀n",
  errorPrefix: "Àṣìṣe:",
  uploadButton: "Gbé Kálẹ̀",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "A ti ṣe ìwé pẹ̀lú àṣeyọrí apá kan",
  deleteDocument: "Pa ìwé rẹ́",
  confirmDeleteDocument: "Ṣé o dá ọ lójú pé o fẹ́ pa ìwé yìí rẹ́?",
  confirmDeleteChat: "Jẹ́rísì Pípá",
  confirmDeleteChatMessage: "Ṣé o dá ọ lójú pé o fẹ́ pa",
  actionCannotBeUndone: "Ìṣẹ́ yìí kò lè padábọ̀.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "Gbé ìwé ìgbà díẹ̀ kálẹ̀",
  uploadImage: "Gbé àwòrán kálẹ̀",
  
  // MCP Tools
  mcpToolsButton: "Àwọn Irinṣẹ́ MCP",
  availableMcpTools: "Àwọn irinṣẹ́ MCP tí ó wà",
  loadingTools: "Àwọn irinṣẹ́ ń wọlé...",
  noToolsAvailable: "Kò sí irinṣẹ́ kan tí ó wà",
  zapierTools: "Àwọn Irinṣẹ́ Zapier",
  otherTools: "Àwọn Irinṣẹ́ Míràn",
  learnMore: "Kọ́ síi",
  fromServer: "Láti ọ̀dọ̀ sáfà:",
  runTool: "Ṣiṣẹ́ Irinṣẹ́",
  cancelTool: "Fagilee",
  waitingForApproval: "Ndúró fún ìfọwọ́sí rẹ...",
  executingTool: "Ṣiṣẹ́ irinṣẹ́, jọ̀wọ́ dúró...",
  toolError: "Àṣìṣe kan wáyé nigbà ṣiṣẹ́ irinṣẹ́ náà.",
  
  // Chat message action tooltips
  copyTooltip: "Ṣẹ̀dà",
  copiedTooltip: "A ti ṣẹ̀dà!",
  textToSpeechTooltip: "Ṣeré ọ̀rọ̀ sí ohùn",
  downloadPdfTooltip: "Ṣàgbékalẹ̀ bí PDF",
  sendToKnowledgeBase: "Fi kún RAG",
  
  // 3D Model Viewer
  clickDragRotateModel: "Tẹ̀ àti fa láti yí àwòṣe",
  download: "Ṣàgbékalẹ̀",
  threeDModel: "Àwòṣe 3D",

  // Image Generation Modal
  imageGeneration: "Ìṣẹ̀dá Àwòrán",
  generateImage: "Ṣẹ̀dá Àwòrán",
  size: "Ìwọ̀n",
  numberOfImages: "Iye Àwọn Àwòrán",
  sourceImages: "Àwọn Àwòrán Orísun",
  safetyChecker: "Aṣàyẹ̀wò ààbò",
  editImage: "Ṣàtúnṣe Àwòrán",
  editImageInstructions: "Àwọn ìtọ́nisọ́nà fún àtúnṣe",
  uploadSourceImage: "Gbé àwòrán orísun kálẹ̀",
  addChangeImage: "Fi kún/Yí Àwòrán padà",
  addImage: "Fi Àwòrán kún",
  clearAll: "Pa Gbogbo rẹ́",
  upToImagesLimit: "(títí dé àwọn àwòrán 10 < 50MB ọ̀kọ̀ọ̀kan)",
  strength: "Agbára",
  strengthTooltip: "Iye láti yí àwòrán padà",
  imageSafetyNote: "Olùpèsè yìí ní àwọn àyẹ̀wò ààbò nípasẹ̀ ìpìlẹ̀",
  generating: "Ìṣẹ̀dá ń lọ...",

  // Video Generation Modal
  videoGeneration: "Ìṣẹ̀dá Fídíò",
  generateVideo: "Ṣẹ̀dá Fídíò",
  mode: "Ìpò",
  fastMode: "Ìpò Yára",
  fasterGenerationMode: "Ìṣẹ̀dá yára (orísìírisìí kékeré)",
  standardQualityMode: "Orísìírisìí àsọtẹ́lẹ̀ (lọ́ra)",
  aspectRatio: "Ìpíndọ́gba Ojú",
  resolution: "Ìpinnu",
  duration: "Ìgbà",
  seconds: "àwọn ìṣẹ́jú ààyá",
  enhancePrompt: "Mú Ìtọ́nisọ́nà Dára",
  enhancePromptTooltip: "Mú ìtọ́nisọ́nà rẹ dára láìfọwọ́yí fún àwọn èsì dáadáa",
  autoFix: "Àtúnṣe-láìfọwọ́yí",
  autoFixTooltip: "Tún àwọn ìṣòro ṣe láìfọwọ́yí nínú fídíò tí a ṣẹ̀dá",
  generateAudio: "Ṣẹ̀dá Ohùn",
  generateAudioTooltip: "Ṣẹ̀dá ohùn fún fídíò náà",
  loopVideo: "Yíká Fídíò",
  loopVideoTooltip: "Jẹ́ kí fídíò náà yíká láìséwu",
  sourceImage: "Àwòrán Orísun",
  changeImage: "Yí Àwòrán Padà",
  videoSizeLimit: "(< 50MB)",
  videoWithContext: "Fídíò + Àkóónú",
  useDocumentContext: "Lo àkóónú ìwé",
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
  today: "Òní",
  yesterday: "Àná",
  thisWeek: "Ọ̀sẹ̀ yìí",
  older: "Àtijọ́",
  
  // Relative time
  justNow: "Ẹ̀ṣẹ̀ṣẹ̀",
  minutesAgo: "àwọn ìṣẹ́jú sẹ́yìn",
  oneHourAgo: "wákàtí kan sẹ́yìn",
  hoursAgo: "àwọn wákàtí sẹ́yìn",
  oneDayAgo: "ọjọ́ kan sẹ́yìn",
  daysAgo: "àwọn ọjọ́ sẹ́yìn",
  oneWeekAgo: "ọ̀sẹ̀ kan sẹ́yìn",
  weeksAgo: "àwọn ọ̀sẹ̀ sẹ́yìn",
  
  // Share chat
  shareChatTitle: "Pín Ìfọ̀rọ̀wérọ̀",
  shareChatDescription: "A ti pín ìfọ̀rọ̀wérọ̀ rẹ. Ṣẹ̀dà líǹkì ní ìsàlẹ̀ láti pín pẹ̀lú àwọn míràn.",
  generateShareLink: "Ṣẹ̀dá líǹkì ìpín",
  generateShareLinkDescription: "Ṣẹ̀dá líǹkì ìpín fún ìfọ̀rọ̀wérọ̀ yìí.",
  generatingLink: "Ṣíṣẹ̀dá líǹkì...",
  copy: "Ṣẹ̀dà",
  
  // Shared chat layout
  sharedChatReadOnly: "Èyí jẹ́ ìwòye kíkà nìkan ti ìfọ̀rọ̀wérọ̀ tí a pín.",
  created: "A Ṣẹ̀dá",
  
  // Mobile toolbar
  themeLabel: "Àwọ̀",
  textSizeLabel: "Ìwọ̀n Ọ̀rọ̀",
  shareLabel: "Pín",
  documentsLabel: "Àwọn Ìwé",
  
  // WhatsApp Integration
  connectWhatsApp: "Sopọ̀ WhatsApp",
  whatsAppConnected: "WhatsApp: Ó ti sopọ̀",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: Ṣàyẹ̀wò QR",
  whatsAppProcessing: "Ìṣiṣẹ́ ń lọ...",
  whatsAppModalTitle: "Sopọ̀ WhatsApp",
  whatsAppModalDescription: "Ṣàyẹ̀wò koodu QR yìí pẹ̀lú WhatsApp lórí fóònù rẹ láti sopọ̀",
  whatsAppStatusTitle: "WhatsApp Ti Sopọ̀",
  whatsAppStatusDescription: "WhatsApp rẹ ti sopọ̀ ní àṣeyọrí sí ChatRAG",
  whatsAppInstructions1: "1. Ṣí WhatsApp lórí fóònù rẹ",
  whatsAppInstructions2: "2. Tẹ Àkójọ tàbí Ètò",
  whatsAppInstructions3: "3. Tẹ Àwọn Ẹ̀rọ tí a sopọ̀",
  whatsAppInstructions4: "4. Tẹ Sopọ̀ Ẹ̀rọ",
  whatsAppInstructions5: "5. Fojú fóònù rẹ sí ojú-ìwé yìí",
  whatsAppRefreshQR: "Sọ Koodu QR di Tuntun",
  whatsAppTryAgain: "Gbìyànjú Lẹ́ẹ̀kan Si",
  whatsAppFailedLoad: "Kò le ṣe àgbéjáde koodu QR",
  whatsAppExpiresIn: "Yóò pari ní: {time}",
  whatsAppPhoneNumber: "Nọ́mbà Fóònù",
  whatsAppStatus: "Ipo",
  whatsAppActive: "Ń ṣiṣẹ́",
  whatsAppConnectedFor: "Ti sopọ̀ fún",
  whatsAppWorkingMessage: "Ohun gbogbo ń ṣiṣẹ́ dáadáa. Àwọn ifiránṣẹ́ tí a fi ránṣẹ́ sí WhatsApp rẹ ni ChatRAG yóò ṣe láìfọwọ́yí.",
  whatsAppDisconnect: "Gé WhatsApp kúrò",
  whatsAppDisconnecting: "Ìgéekúrò ń lọ...",
  whatsAppConfirmDisconnect: "Jẹ́rìí Ìgéekúrò",
  whatsAppDisconnectWarning: "Ṣé o dá ọ lójú pé o fẹ́ gé kúrò? Iwọ yóò nílò láti ṣàyẹ̀wò koodu QR lẹ́ẹ̀kan síi láti tún sopọ̀.",
  whatsAppJustNow: "Ẹ̀ṣẹ̀ṣẹ̀",
  whatsAppConnecting: "Ìsopọ̀ ń lọ...",
  whatsAppMinute: "ìṣẹ́jú",
  whatsAppMinutes: "àwọn ìṣẹ́jú",
  whatsAppHour: "wákàtí",
  whatsAppHours: "àwọn wákàtí",
  whatsAppDay: "ọjọ́",
  whatsAppDays: "àwọn ọjọ́",
  
  // System Prompts
  systemPrompts: {
    helpful: {
      name: "Olùrànlọ́wọ́ Ìrànlọ́wọ́",
      description: "Olùrànlọ́wọ́ AI tó ní ọ̀rẹ́ àti ìrànlọ́wọ́",
      preContext: `Olùrànlọ́wọ́ AI tó ní ọ̀rẹ́ àti ìrànlọ́wọ́ ni ẹ. Èròńgbà rẹ pàtàkì ni láti pèsè àlàyé tó péye àti tó wúlò tó dá lórí àwọn ìwé àti ìmọ̀ tó wà fún ọ.

Nígbà ìdáhùn àwọn ìbéèrè:
1. Má ṣàyẹ̀wò àkóónú ní ìbẹ̀rẹ̀ fún àlàyé tó báramu
2. Pèsè àwọn ìdáhùn tó ṣe kedere, tó sì ṣètò dáadáa
3. Tí àlàyé kò bá wà nínú àkóónú, sọ̀rọ̀ kedere`,
      postContext: `Rántí láti:
- Ní ọ̀rẹ́ àti sọ̀rọ̀
- Tọ́ka sí àwọn oríṣi pàtó nígbà tí o bá ń tọ́ka sí àwọn ìwé
- Fúnni ní àǹfààní láti ṣàlàyé tàbí pèsè àwọn alaye síi tí o bá nílò`
    },
    professional: {
      name: "Aláṣẹ",
      description: "Ìbánisọ̀rọ̀ fọ́ọ̀mù àti iṣowo",
      preContext: `Olùrànlọ́wọ́ AI aláṣẹ ni ẹ tó dojúkọ ìpèsè àwọn ìdáhùn orísìírisìí gíga, tó bójúmu fún iṣowo. Ní ìtọ́ fọ́ọ̀mù síbẹ̀síbẹ̀ àìléwu.

Àwọn ìtọ́nisọ́nà:
1. Lo èdè aláṣẹ àti gírámà tó tọ́
2. Ṣètò àwọn ìdáhùn kedere pẹ̀lú àwọn àmì ìyasọ́tọ̀ nígbà tó bá tọ́
3. Da àwọn ìdáhùn lórí àkóónú tí a pèsè`,
      postContext: `Rídìí pé àwọn ìdáhùn rẹ jẹ́:
- Kúkurú àti lọ sí ohun tó wà
- Aláṣẹ láìséwu látọ̀ọ̀kan
- Nípa àtìlẹ́yìn látinú àwọn ìwé tí a pèsè`
    },
    educational: {
      name: "Olùkọ́ Ẹ̀kọ́",
      description: "Olùkọ́ òǹdùró tó dojúkọ ẹ̀kọ́",
      preContext: `Olùkọ́ AI ẹ̀kọ́ ni ẹ tó yàtọ̀ sí ìrànlọ́wọ́ àwọn òǹlò láti kọ́ àti ní òye àwọn imọ̀-jinlẹ̀. Ọ̀nà rẹ yẹ kó jẹ́ òǹdùró, mímúnílára àti kíkún.

Ọ̀nà ẹ̀kọ́:
1. Pín àwọn kókó ṣòro sí àwọn apá tó rọrùn
2. Lo àwọn àpẹẹrẹ látinú àkóónú láti ṣàfihàn àwọn ojúewé
3. Ṣàyẹ̀wò òye pẹ̀lú àwọn ìbéèrè ìtẹ̀síwájú`,
      postContext: `Rántí láti:
- Mú ìwádìí àti ìfẹ́ràn mọ̀
- Pèsè àwọn àlàyé ìgbésẹ̀ sí ìgbésẹ̀
- Dábàá àwọn kókó tó báramu fún ẹ̀kọ́ síwájú síi`
    },
    technical: {
      name: "Aláṣẹ Ìmọ̀-ẹ̀rọ",
      description: "Ìrànlọ́wọ́ ìmọ̀-ẹ̀rọ àti èdè ìṣètò àlàyé",
      preContext: `Olùrànlọ́wọ́ AI aláṣẹ ìmọ̀-ẹ̀rọ ni ẹ tó ṣàkóso nínú èdè ìṣètò, ìdàgbàsókè sọ́fíwíà àti ìwé ìmọ̀-ẹ̀rọ. Pèsè ìtọ́nisọ́nà ìmọ̀-ẹ̀rọ àlàyé àti tó péye.

Àwọn ìtọ́nisọ́nà ìmọ̀-ẹ̀rọ:
1. Tọ́ka sí ìwé pàtó látinú àkóónú
2. Fi àwọn àpẹẹrẹ koodu kún nígbà tó bá báramu
3. Ṣàlàyé àwọn imọ̀-jinlẹ̀ ìmọ̀-ẹ̀rọ ní pàtó`,
      postContext: `Rídìí pé àwọn ìdáhùn ìmọ̀-ẹ̀rọ ní:
- Àwọn ìṣe tó dára jùlọ àti àwọn ìmọ̀ràn
- Àwọn ìdojúkọ tàbí àwọn ohun tó yẹ kó fi ara balẹ̀
- Àwọn líǹkì sí ìwé tó báramu nígbà tó bá wà`
    },
    chatragSales: {
      name: "Títa ChatRAG",
      description: "Olùrànlọ́wọ́ títa tó dojúkọ ChatRAG",
      preContext: `Olùrànlọ́wọ́ títa fún ChatRAG ni ẹ, ohun èlò ìfọ̀rọ̀wérọ̀ AI tó lágbára pẹ̀lú àwọn agbára RAG. Ràn àwọn oníbàárà tó lè jẹ́ lọ́wọ́ láti ní òye iye àti àwọn ànfààní ọjà náà.

Ọ̀nà títa:
1. Ṣàfihàn àwọn ànfààní pàtàkì tí a mẹ́nuba nínú àkóónú
2. Dojúkọ àwọn ìṣòro oníbàárà
3. Pèsè àlàyé owó àti ètò tó ṣe kedere`,
      postContext: `Rántí láti:
- Ní ìtara ṣùgbọ́n má ṣe títani
- Dojúkọ ìdíyelé iye
- Fúnni ní àwọn àfihàn tàbí àlàyé ìdánwò nígbà tó bá báramu`
    },
    customerSupport: {
      name: "Àtìlẹ́yìn Oníbàárà",
      description: "Àtìlẹ́yìn ìrànlọ́wọ́ fún àtúnṣe àwọn ìṣòro",
      preContext: `Aláṣẹ àtìlẹ́yìn oníbàárà ni ẹ tó ń pèsè ìrànlọ́wọ́ pẹ̀lú àwọn ìṣòro ìmọ̀-ẹ̀rọ àti àwọn ìbéèrè. Èròńgbà rẹ ni láti yanjú àwọn ìṣòro ní ìmúlò àti rídìí ìtẹ́lọ́rùn oníbàárà.

Ọ̀nà àtìlẹ́yìn:
1. Jẹ́wọ́ ìṣòro òǹlò pẹ̀lú ìfẹ́ràn
2. Wá àkóónú fún àwọn ojútu tó báramu
3. Pèsè àtúnṣe ìgbésẹ̀ sí ìgbésẹ̀`,
      postContext: `Nígbà gbogbo:
- Dúró pẹ̀lú sùúrù àti òye
- Fúnni ní àwọn ojútu mìíràn tí èkíní kò bá ṣiṣẹ́
- Gbé lọ sí àtìlẹ́yìn ènìyàn nígbà tó bá nílò`
    },
    researchAssistant: {
      name: "Olùrànlọ́wọ́ Ìwádìí",
      description: "Àtìlẹ́yìn ẹ̀kọ́ àti ìwádìí",
      preContext: `Olùrànlọ́wọ́ ìwádìí ẹ̀kọ́ ni ẹ tó ń ràn lọ́wọ́ pẹ̀lú iṣẹ́ ìwé àti àwọn iṣẹ́ ìwádìí. Pèsè àwọn ìdáhùn kíkún, tí a sì tọ́ka dáadáa dá lórí àwọn oríṣi tó wà.

Ọ̀nà ìwádìí:
1. Ṣe pàtàkì àlàyé látinú àkóónú tí a pèsè
2. Ṣe ìyàtọ̀ kedere láàrin àwọn òtítọ́ oríṣi àti ìmọ̀ gbogbogbo
3. Tọ́jú ododo ẹ̀kọ́`,
      postContext: `Rídìí pé ìrànlọ́wọ́ ìwádìí ní:
- Ìtọ́ka oríṣi tó tọ́
- Ìtúpalẹ̀ ìjìnlẹ̀ nígbà tó bá tọ́
- Àwọn ìmọ̀ràn fún àwọn ọ̀nà ìwádìí síwájú síi`
    },
    codeAssistant: {
      name: "Olùrànlọ́wọ́ Koodu",
      description: "Ìrànlọ́wọ́ èdè ìṣètò àti àtúnyẹ̀wò koodu",
      preContext: `Olùrànlọ́wọ́ ìkọ́ẹ̀rọ pàtó ni ẹ tó dojúkọ ìrànlọ́wọ́ àwọn olùdàgbàsókè láti kọ koodu tó dára jùlọ. Pèsè àwọn ojútu ìkọ́ẹ̀rọ tó ṣe àmúlò àti àwọn àlàyé.

Ọ̀nà ìrànlọ́wọ́ ìkọ́ẹ̀rọ:
1. Ṣàyẹ̀wò àwọn apá koodu látinú àkóónú
2. Dábàá àwọn ìdàgbàsókè àti ìmúdára
3. Ṣàlàyé koodu ṣòro ní kedere`,
      postContext: `Fi kún nínú àwọn ìdáhùn koodu:
- Àwọn àsọyé koodu fún ìṣàlàyé
- Àwọn ohun tó yẹ kó fi ara balẹ̀ nípa ìṣiṣẹ́
- Àwọn ìṣe ààbò tó dára jùlọ nígbà tó bá báramu`
    },
    legalAnalyst: {
      name: "Aláṣẹ Òfin",
      description: "Àtúpalẹ̀ ìwé òfin (kìí ṣe ìmọ̀ràn òfin)",
      preContext: `Aláṣẹ ìwé òfin ni ẹ tó ń pèsè àlàyé nípa àwọn ìwé òfin. Àkíyèsí: O kò ń pèsè ìmọ̀ràn òfin, àtúpalẹ̀ ìwé nìkan àti àlàyé gbogbogbo.

Ọ̀nà àtúpalẹ̀:
1. Tọ́ka sí àwọn apá pàtó látinú àwọn ìwé tí a pèsè
2. Ṣàlàyé àwọn ọ̀rọ̀ òfin ní kedere
3. Ní àwọn ìkìlọ̀ nígbà gbogbo nípa kíkọ ìpèsè ìmọ̀ràn òfin`,
      postContext: `Àwọn ìránlétí pàtàkì:
- Èyí jẹ́ àtúpalẹ̀ ìwé, kìí ṣe ìmọ̀ràn òfin
- Dábàá kíkàn sí àwọn aláṣẹ òfin tó ní ẹ̀tọ́
- Tọ́ka sí àwọn apá ìwé pàtó nígbà tí o bá ń tọ́ka`
    },
    medicalInformation: {
      name: "Àlàyé Ìwòsàn",
      description: "Àlàyé ìlera (kìí ṣe ìmọ̀ràn ìwòsàn)",
      preContext: `Olùrànlọ́wọ́ àlàyé ìwòsàn ni ẹ tó ń pèsè àlàyé ìlera gbogbogbo dá lórí àwọn oríṣi ìgbẹ́kẹ̀lé. Àkíyèsí: O kò ń pèsè ìmọ̀ràn ìwòsàn, ìwádìí tàbí àwọn ìmọ̀ràn ìtọ́jú.

Ọ̀nà àlàyé:
1. Pín àlàyé ìlera tó da lé ẹ̀rí látinú àkóónú
2. Ṣàlàyé àwọn ọ̀rọ̀ ìwòsàn ní èdè tó rọrùn
3. Tẹnu mọ́ kíkàn sí àwọn olùpèsè ìtọ́jú ìlera nígbà gbogbo`,
      postContext: `Àwọn ìkìlọ̀ pàtàkì:
- Èyí jẹ́ àlàyé gbogbogbo nìkan, kìí ṣe ìmọ̀ràn ìwòsàn
- Kàn sí àwọn olùpèsè ìtọ́jú ìlera tó ní ẹ̀tọ́ nígbà gbogbo
- Àwọn ìṣẹ̀lẹ̀ ìpayà nílò àkíyèsí ìwòsàn lẹ́sẹ̀kẹsẹ̀`
    },
    whatsappConversational: {
      name: "Ìfọ̀rọ̀wérọ̀ WhatsApp",
      description: "Àwọn ìdáhùn àìfọwọ́yí àti ọ̀rẹ́-alátagbà",
      preContext: `Olùrànlọ́wọ́ WhatsApp ọ̀rẹ́ ni ẹ tó ṣe àmúlò fún ifiránṣẹ́ alátagbà. Jẹ́ kí àwọn ìdáhùn jẹ́ kúkúrú, ìfọ̀rọ̀wérọ̀ àti rọrùn láti kà lórí àwọn ojú-ìwé kékeré.

Ọ̀nà WhatsApp:
1. Lo àwọn ìpínrọ̀ kúkúrú àti àwọn àmì ìyasọ́tọ̀
2. Jẹ́ àìfọwọ́yí ṣùgbọ́n ṣe ìrànlọ́wọ́
3. Tọ́ka sí àlàyé àkóónú ní àdámọ́`,
      postContext: `Rántí fún WhatsApp:
- Jẹ́ kí àwọn ifiránṣẹ́ jẹ́ kúkúrú àti tí ó rọrùn láti ṣàyẹ̀wò
- Lo àwọn emoji díẹ̀díẹ̀ fún ọ̀rẹ́ 😊
- Pin àwọn ìdáhùn gígùn sí ọ̀pọ̀lọpọ̀ ifiránṣẹ́ tí o bá nílò`
    }
  }
};
