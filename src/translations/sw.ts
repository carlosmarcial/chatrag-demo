import { getAppName } from '@/lib/env';

export const sw = {
  // Main chat
  mainPrompt: "Naweza kukusaidia vipi?",
  
  // Navigation and common UI
  settings: "Mipangilio",
  general: "Jumla",
  logout: "Toka",
  modelSelector: "Chagua mfano wa AI",
  textSize: "Ukubwa wa Maandishi",
  themeToggle: "Badilisha mandhari",
  shareChat: "Shiriki gumzo",
  uploadDocument: "Pakia hati",
  viewDocuments: "Tazama hati",
  
  // Settings modal
  language: "Lugha",
  theme: "Mandhari",
  customBackground: "Mandharinyuma maalum",
  customBackgroundDesc: "Pakia picha kubinafsisha mandharinyuma ya gumzo",
  upload: "Pakia",
  uploading: "Inapakia...",
  currentBackground: "Mandharinyuma ya sasa:",
  notificationSound: "Sauti ya Arifa",
  notificationSoundDesc: "Cheza sauti AI inapomaliza kujibu",
  soundType: "Aina ya sauti",
  playSound: "Cheza sauti",
  highBell: "Kengele ya juu",
  mediumBell: "Kengele ya kati",
  deepBell: "Kengele nzito",
  subtleBell: "Kengele tulivu",
  
  // Admin settings
  admin: "Msimamizi",
  adminLogin: "Kuingia kwa msimamizi",
  adminPassword: "Nenosiri la msimamizi",
  adminPasswordRequired: "Nenosiri la msimamizi linahitajika",
  adminLoginFailed: "Kuingia kwa msimamizi kumeshindikana",
  adminPasswordIncorrect: "Nenosiri si sahihi",
  notAuthorizedAsAdmin: "Akaunti yako haina ruhusa ya msimamizi",
  loginRequired: "Lazima uingie ili kufikia vipengele vya msimamizi",
  adminVerification: "Uthibitisho wa msimamizi",
  adminVerificationDesc: "Bofya kitufe hapa chini kuthibitisha hadhi yako ya msimamizi",
  adminVerificationSuccess: "Ufikiaji wa msimamizi umewezeshwa",
  adminVerificationFailed: "Uthibitisho wa msimamizi umeshindikana",
  verifying: "Inathibitisha...",
  activateAdminAccess: "Wezesha ufikiaji wa msimamizi",
  loggingIn: "Inaingia...",
  loggingOut: "Inatoka...",
  logoutAdmin: "Toka kama msimamizi",
  login: "Ingia",
  adminAuthenticated: "Msimamizi amethibitishwa",
  adminAuthenticatedDesc: "Sasa unaweza kufikia vipengele vya msimamizi",
  docDashboardReadOnly: "Dashibodi ya hati ya kusoma tu",
  docDashboardReadOnlyDesc: "Ruhusu watumiaji kutazama hati katika hali ya kusoma tu",
  documentViewer: "Kionyeshi cha hati",
  readOnlyMode: "Hali ya kusoma tu imewashwa - hati haziwezi kuhaririwa",
  documents: "Hati",
  
  // Text size settings
  small: "Ndogo",
  default: "Chaguo-msingi",
  large: "Kubwa",
  
  // Font family settings
  fontFamily: "Familia ya fonti",
  interDefault: "Inter (Chaguo-msingi)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "Mfumo",
  lightTheme: "Nuru",
  darkTheme: "Giza",
  
  // Language settings
  languageSelector: "Chagua lugha",
  english: "Kiingereza (US)",
  spanish: "Kihispania",

  // UI switches
  alwaysShowCode: "Onyesha msimbo kila wakati unapotumia mchambuzi wa data",
  showFollowUp: "Onyesha mapendekezo ya ufuatiliaji kwenye gumzo",

  // Archived chats
  archivedChats: "Gumzo zilizohifadhiwa",
  archiveAll: "Hifadhi gumzo zote",
  deleteAll: "Futa gumzo zote",
  logOut: "Toka kwenye kifaa hiki",

  // Other UI elements
  notifications: "Arifa",
  personalization: "Urekebishaji binafsi",
  speech: "Hotuba",
  dataControls: "Vidhibiti vya data",
  builderProfile: "Wasifu wa mtengenezaji",
  connectedApps: "Programu zilizounganishwa",
  security: "Usalama",
  subscription: "Usajili",

  // Input and actions
  messagePlaceholder: "Uliza chochote",
  sendPrompt: "Tuma swali",
  stopGenerating: "Acha kutengeneza",
  useVoice: "Diktei",
  stopRecording: "Acha kurekodi",
  processing: "Inachakata...",

  // Document handling
  documentReady: "Hati iko tayari",
  processingDocument: "Inachakata hati...",
  errorProcessingDocument: "Hitilafu katika uchakataji wa hati",
  imageReady: "Picha iko tayari",

  // 3D generation
  generate3DModel: "Bonyeza ENTER kutengeneza modeli ya 3D",
  readyFor3DGeneration: "Bonyeza ENTER kutengeneza modeli ya 3D",
  modelFrom3DImage: "Picha kwa modeli ya 3D",

  // Media buttons
  searchWeb: "Tafuta wavuti",
  uploadFiles: "Pakia faili",
  imageGenerate: "Tengeneza picha",
  videoGenerate: "Tengeneza video",
  threeDGenerate: "Uzalishaji wa 3D",
  webSearch: "Tafuta",
  reasoningText: "Hoja",
  reasoningNotSupported: "Mfano hauungi mkono hoja",
  reasoningEffort: "Kiwango cha hoja",
  maxReasoningTokens: "Vihifadhi vya juu",
  hideReasoning: "Ficha hoja",
  model: "Mfano",
  reasoningMethod: "Mbinu",
  low: "Chini",
  medium: "Wastani",
  high: "Juu",

  // Suggestion categories
  write: "Andika",
  plan: "Panga",
  design: "Buni",
  backToCategories: "← Rudi kwenye makundi",

  // Write suggestions
  writeSummary: "muhtasari kuhusu",
  writeEmail: "barua pepe kwa",
  writeBlog: "makala ya blogu kuhusu",
  writeSocial: "sasisho la mitandao ya kijamii",

  // Plan suggestions
  planMarketing: "kampeni ya masoko kwa",
  planBusiness: "pendekezo la biashara kwa",
  planProduct: "uzinduzi wa bidhaa kwa",
  planLearning: "ramani ya kujifunza kuhusu",

  // Design suggestions
  designLogo: "nembo ndogo",
  designHero: "sehemu ya mbele",
  designLanding: "ukurasa wa kutua",
  designSocial: "chapisho la mitandao ya kijamii",

  // Sidebar
  pinnedChats: "Gumzo zilizobandikwa",
  recentChats: "Gumzo za hivi karibuni",
  searchResults: "Matokeo ya utafutaji",
  noChats: "Hakuna gumzo",
  noPinnedChats: "Hakuna gumzo zilizobandikwa",
  noChatsAvailable: "Hakuna gumzo zilizopo",
  closeSidebar: "Funga upande",
  openSidebar: "Fungua upande",
  searchChats: "Tafuta gumzo...",

  // Chat actions
  pin: "Bandika",
  unpin: "Ondoa",
  rename: "Badilisha jina",
  delete: "Futa",
  newChat: "Gumzo mpya",
  useIncognitoChat: "Tumia gumzo fiche",
  incognitoChatActive: "Gumzo fiche limewashwa",
  incognitoChatActiveMessage: "Gumzo fiche limewashwa - Ujumbe hautahifadhiwa",
  search: "Tafuta",
  github: "GitHub",
  enterChatTitle: "Weka kichwa cha gumzo...",

  // Folder management
  folders: "Folda",
  newFolder: "Folda mpya",
  createNewFolder: "Unda folda mpya",
  organizeChatsFolders: "Panga gumzo zako kwenye folda kwa usimamizi bora",
  folderName: "Jina la folda",
  folderColor: "Rangi ya folda",
  folderNameRequired: "Jina la folda linahitajika",
  failedToCreateFolder: "Imeshindikana kuunda folda",
  creating: "Inaunda...",
  create: "Unda",
  cancel: "Ghairi",
  moveToFolder: "Hamisha kwenye folda",
  removeFromFolder: "Ondoa kwenye folda",
  moveToRoot: "Hamisha hadi mizizi",
  noFolders: "Hakuna folda",
  noChatsInFolder: "Hakuna gumzo kwenye folda",
  enterFolderName: "Weka jina la folda...",
  confirmDeleteFolder: "Je, ungependa kufuta folda hii?",
  deleteFolder: "Futa folda",
  confirmDeleteFolderMessage: "Una uhakika unataka kufuta folda hii?",
  deleteFolderWithChats: "Futa pia gumzo zote kwenye folda hii",
  deleteFolderKeepChats: "Gumzo zitahamishwa kwenye mizizi",
  chats: "gumzo",

  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "Hati imechakatwa kwa mafanikio ya sehemu",
  deleteDocument: "Futa hati",
  confirmDeleteDocument: "Una uhakika unataka kufuta hati hii?",
  confirmDeleteChat: "Thibitisha Kufuta",
  confirmDeleteChatMessage: "Una uhakika unataka kufuta",
  actionCannotBeUndone: "Hatua hii haiwezi kurudishwa.",

  // Disclaimer
  disclaimer: `${getAppName()} inaweza kufanya makosa. Fikiria kuthibitisha taarifa muhimu.`,

  // Document Dashboard
  documentManagement: "Usimamizi wa hati",
  uploadNew: "Pakia mpya",
  storedDocuments: "Hati zilizohifadhiwa",
  dragDropDocuments: "Buruta na udondoshe hati zako",
  supportedFileTypes: "Faili za PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB",
  selectFiles: "Chagua faili",
  searchDocuments: "Tafuta hati...",
  noDocumentsFound: "Hakuna hati zilizopatikana",
  processingStatus: "inachakata",
  readyStatus: "tayari",
  failedStatus: "imeshindikana",
  partialStatus: "sehemu",
  uploadDate: "Tarehe ya kupakia",
  docName: "Jina",
  docStatus: "Hali",
  docSize: "Ukubwa",
  errorPrefix: "Hitilafu:",
  uploadButton: "Pakia",
  
  // Image Generation Modal
  imageGeneration: "Uundaji wa Picha",
  generateImage: "Tengeneza Picha",
  size: "Ukubwa",
  numberOfImages: "Idadi ya Picha",
  sourceImages: "Picha Chanzo",
  safetyChecker: "Kichunguzi cha Usalama",
  editImage: "Hariri Picha",
  editImageInstructions: "Maelekezo ya uhariri",
  uploadSourceImage: "Pakia picha chanzo",
  uploadImage: "Pakia Picha",
  addChangeImage: "Ongeza/Badilisha Picha",
  addImage: "Ongeza Picha",
  clearAll: "Futa Zote",
  upToImagesLimit: "(hadi picha 10 < 50MB kila moja)",
  strength: "Nguvu",
  strengthTooltip: "Kiwango cha kubadilisha picha",
  imageSafetyNote: "Mtoa huduma huyu hujumuisha ukaguzi wa usalama kwa chaguo-msingi",
  generating: "Inatengeneza...",

  // Video Generation Modal
  videoGeneration: "Uundaji wa Video",
  generateVideo: "Tengeneza Video",
  mode: "Hali",
  fastMode: "Hali ya Haraka",
  fasterGenerationMode: "Uzalishaji wa haraka (ubora wa chini)",
  standardQualityMode: "Ubora wa kawaida (polepole)",
  aspectRatio: "Uwiano wa Upande",
  resolution: "Azimio",
  duration: "Muda",
  seconds: "sekunde",
  enhancePrompt: "Boreshi Ombi",
  enhancePromptTooltip: "Boresha kiotomatiki ombi lako kwa matokeo bora",
  autoFix: "Rekebisha Otomatiki",
  autoFixTooltip: "Rekebisha kiotomatiki matatizo katika video iliyotengenezwa",
  generateAudio: "Tengeneza Sauti",
  generateAudioTooltip: "Tengeneza sauti kwa video",
  loopVideo: "Rudia Video",
  loopVideoTooltip: "Fanya video ijirudie kwa urahisi",
  sourceImage: "Picha Chanzo",
  changeImage: "Badilisha Picha",
  videoSizeLimit: "(< 50MB)",
  videoWithContext: "Video + Muktadha",
  useDocumentContext: "Tumia muktadha wa hati",
  aspectRatios: {
    "16:9": "16:9",
    "9:16": "9:16",
    "1:1": "1:1"
  },
  resolutionOptions: {
    "720p": "720p",
    "1080p": "1080p"
  },

  // MCP Tools
  mcpToolsButton: "Zana za MCP",
  availableMcpTools: "Zana za MCP zinazopatikana",
  loadingTools: "Inapakia zana...",
  noToolsAvailable: "Hakuna zana zinazopatikana",
  zapierTools: "Zana za Zapier",
  otherTools: "Zana Nyingine",
  learnMore: "Jifunze zaidi",
  fromServer: "Kutoka kwa seva:",
  runTool: "Endesha Zana",
  cancelTool: "Ghairi",
  waitingForApproval: "Inasubiri idhini yako...",
  executingTool: "Inaendesha zana, tafadhali subiri...",
  toolError: "Hitilafu imetokea wakati wa kuendesha zana.",
};
