import { getAppName } from '@/lib/env';

export const en = {
  // Main chat
  mainPrompt: "What can I help with?",
  
  // Navigation and common UI
  settings: "Settings",
  general: "General",
  logout: "Log out",
  modelSelector: "Select AI model",
   restrictedModelMessage: "This model is only available in the full version of ChatGPT.",
  textSize: "Text Size",
  themeToggle: "Toggle theme",
  shareChat: "Share chat",
  uploadDocument: "Upload document",
  viewDocuments: "View documents",
  
  // Settings modal
  language: "Language",
  theme: "Theme",
  customBackground: "Custom background",
  customBackgroundDesc: "Upload an image to customize your chat background",
  upload: "Upload",
  uploading: "Uploading...",
  currentBackground: "Current background:",
  notificationSound: "Notification Sound",
  notificationSoundDesc: "Play a sound when AI completes its response",
  soundType: "Sound Type",
  playSound: "Play Sound",
  highBell: "High Bell",
  mediumBell: "Medium Bell",
  deepBell: "Deep Bell",
  subtleBell: "Subtle Bell",
  
  // Admin settings
  admin: "Admin",
  adminLogin: "Admin Login",
  adminPassword: "Admin Password",
  adminPasswordRequired: "Admin password is required",
  adminLoginFailed: "Admin login failed",
  adminPasswordIncorrect: "Password is incorrect",
  notAuthorizedAsAdmin: "Your account is not authorized as admin",
  loginRequired: "You must be logged in to access admin features",
  adminVerification: "Admin Verification",
  adminVerificationDesc: "Click the button below to verify your admin status",
  adminVerificationSuccess: "Admin access successfully activated",
  adminVerificationFailed: "Admin verification failed",
  verifying: "Verifying...",
  activateAdminAccess: "Activate Admin Access",
  loggingIn: "Logging in...",
  loggingOut: "Logging Out...",
  logoutAdmin: "Logout Admin",
  login: "Login",
  adminAuthenticated: "Admin Authenticated",
  adminAuthenticatedDesc: "You now have access to admin features",
  docDashboardReadOnly: "Read-only Document Dashboard",
  docDashboardReadOnlyDesc: "Allow users to view documents in read-only mode",
  documentViewer: "Document Viewer",
  readOnlyMode: "Read-only mode enabled - documents cannot be modified",
  documents: "Documents",
  
  // Text size settings
  small: "Small",
  default: "Default",
  large: "Large",
  
  // Font family settings
  fontFamily: "Font Family",
  interDefault: "Inter (Default)",
  merriweather: "Merriweather", 
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "System",
  lightTheme: "Light",
  darkTheme: "Dark",
  
  // Language settings
  languageSelector: "Select language",
  english: "English (US)",
  spanish: "Spanish",
  
  // UI switches
  alwaysShowCode: "Always show code when using data analyst",
  showFollowUp: "Show follow up suggestions in chats",
  
  // Archived chats
  archivedChats: "Archived chats",
  archiveAll: "Archive all chats",
  deleteAll: "Delete all chats",
  logOut: "Log out on this device",
  
  // Other UI elements
  notifications: "Notifications",
  personalization: "Personalization",
  speech: "Speech",
  dataControls: "Data controls",
  builderProfile: "Builder profile",
  connectedApps: "Connected apps",
  security: "Security",
  subscription: "Subscription",
  
  // Input and actions
  messagePlaceholder: "Ask anything",
  sendPrompt: "Send prompt",
  stopGenerating: "Stop generating",
  useVoice: "Dictate",
  stopRecording: "Stop recording",
  processing: "Processing...",
  
  // Document handling
  documentReady: "Document ready",
  processingDocument: "Processing document...",
  errorProcessingDocument: "Error processing document",
  imageReady: "Image ready",
  
  // 3D generation
  generate3DModel: "Press ENTER to create 3D model",
  readyFor3DGeneration: "Press ENTER to create 3D model",
  modelFrom3DImage: "Image for 3D model",
  
  // Media buttons
  searchWeb: "Search the web",
  uploadFiles: "Upload file(s)",
  imageGenerate: "Generate images",
  videoGenerate: "Generate video",
  threeDGenerate: "3D generation",
  webSearch: "Search",
  reasoningText: "Reasoning",
  reasoningNotSupported: "Model doesn't support reasoning",
  reasoningEffort: "Reasoning Effort",
  maxReasoningTokens: "Max Tokens",
  hideReasoning: "Hide Reasoning",
  model: "Model",
  reasoningMethod: "Method",
  low: "Low",
  medium: "Medium",
  high: "High",
  
  // Suggestion categories
  write: "Write",
  plan: "Plan",
  design: "Design",
  backToCategories: "← Back to categories",
  
  // Write suggestions
  writeSummary: "a summary about",
  writeEmail: "an email to",
  writeBlog: "a blog post about",
  writeSocial: "a social media update",
  
  // Plan suggestions
  planMarketing: "marketing campaign for",
  planBusiness: "business proposal for",
  planProduct: "product launch for",
  planLearning: "learning roadmap about",
  
  // Design suggestions
  designLogo: "a small logo",
  designHero: "a hero section",
  designLanding: "a landing page",
  designSocial: "a social media post",
  
  // Sidebar
  pinnedChats: "Pinned Chats",
  recentChats: "Recent Chats",
  searchResults: "Search Results",
  noChats: "No chats",
  noPinnedChats: "No pinned chats",
  noChatsAvailable: "No chats available",
  closeSidebar: "Close sidebar",
  openSidebar: "Open sidebar",
  searchChats: "Search chats...",
  
  // Chat actions
  pin: "Pin",
  unpin: "Unpin",
  rename: "Rename",
  delete: "Delete",
  newChat: "New chat",
  useIncognitoChat: "Use incognito chat",
  incognitoChatActive: "Incognito Chat Active",
  incognitoChatActiveMessage: "Incognito Chat Active - Messages won't be saved",
  search: "Search",
  github: "GitHub",
  enterChatTitle: "Enter chat title...",
  
  // Folder management
  folders: "Folders",
  newFolder: "New folder",
  createNewFolder: "Create New Folder",
  organizeChatsFolders: "Organize your chats into folders for better management",
  folderName: "Folder Name",
  folderColor: "Folder Color",
  folderNameRequired: "Folder name is required",
  failedToCreateFolder: "Failed to create folder",
  creating: "Creating...",
  create: "Create",
  cancel: "Cancel",
  moveToFolder: "Move to folder",
  removeFromFolder: "Remove from folder",
  moveToRoot: "Move to root",
  noFolders: "No folders",
  noChatsInFolder: "No chats in folder",
  enterFolderName: "Enter folder name...",
  confirmDeleteFolder: "Are you sure you want to delete this folder?",
  deleteFolder: "Delete Folder",
  confirmDeleteFolderMessage: "Are you sure you want to delete this folder?",
  deleteFolderWithChats: "Also delete all chats in this folder",
  deleteFolderKeepChats: "Chats will be moved to the root level",
  chats: "chats",
  
  // Disclaimer
  disclaimer: `${getAppName()} may make mistakes. Consider checking important information.`,

  // Document Dashboard
  documentManagement: "Document Management",
  uploadNew: "Upload New",
  storedDocuments: "Stored Documents",
  dragDropDocuments: "Drag & drop your documents",
  supportedFileTypes: "PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB files",
  selectFiles: "Select files",
  searchDocuments: "Search documents...",
  noDocumentsFound: "No documents found",
  processingStatus: "processing",
  readyStatus: "ready",
  failedStatus: "failed",
  partialStatus: "partial",
  uploadDate: "Upload Date",
  docName: "Name",
  docStatus: "Status",
  docSize: "Size",
  errorPrefix: "Error:",
  uploadButton: "Upload",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "Document processed with partial chunk success",
  deleteDocument: "Delete document",
  confirmDeleteDocument: "Are you sure you want to delete this document?",
  confirmDeleteChat: "Confirm Delete",
  confirmDeleteChatMessage: "Are you sure you want to delete",
  actionCannotBeUndone: "This action cannot be undone.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "Upload temporary document",
  uploadImage: "Upload image",
  
  // MCP Tools
  mcpToolsButton: "MCP Tools",
  availableMcpTools: "Available MCP tools",
  loadingTools: "Loading tools...",
  noToolsAvailable: "No tools available",
  zapierTools: "Zapier Tools",
  otherTools: "Other Tools",
  learnMore: "Learn more",
  fromServer: "From server:",
  runTool: "Run Tool",
  cancelTool: "Cancel",
  waitingForApproval: "Waiting for your approval...",
  executingTool: "Executing tool, please wait...",
  toolError: "An error occurred while running the tool.",
  
  // Chat message action tooltips
  copyTooltip: "Copy",
  copiedTooltip: "Copied!",
  textToSpeechTooltip: "Play text to speech",
  downloadPdfTooltip: "Download as PDF",
  sendToKnowledgeBase: "Add to RAG",
  
  // 3D Model Viewer
  clickDragRotateModel: "Click and drag to rotate model",
  download: "Download",
  threeDModel: "3D Model",

  // Image Generation Modal
  imageGeneration: "Image Generation",
  generateImage: "Generate Image",
  size: "Size",
  numberOfImages: "Number of Images",
  sourceImages: "Source Images",
  safetyChecker: "Safety checker",
  editImage: "Edit Image",
  editImageInstructions: "Instructions for editing",
  uploadSourceImage: "Upload source image",
  uploadImage: "Upload Image",
  addChangeImage: "Add/Change Image",
  addImage: "Add Image",
  clearAll: "Clear All",
  upToImagesLimit: "(up to 10 images < 50MB each)",
  strength: "Strength",
  strengthTooltip: "How much to transform the image",
  imageSafetyNote: "This provider includes safety checks by default",
  generating: "Generating...",

  // Video Generation Modal
  videoGeneration: "Video Generation",
  generateVideo: "Generate Video",
  mode: "Mode",
  fastMode: "Fast Mode",
  fasterGenerationMode: "Faster generation (lower quality)",
  standardQualityMode: "Standard quality (slower)",
  aspectRatio: "Aspect Ratio",
  resolution: "Resolution",
  duration: "Duration",
  seconds: "seconds",
  enhancePrompt: "Enhance Prompt",
  enhancePromptTooltip: "Automatically improve your prompt for better results",
  autoFix: "Auto-fix",
  autoFixTooltip: "Automatically fix issues in generated video",
  generateAudio: "Generate Audio",
  generateAudioTooltip: "Generate audio for the video",
  loopVideo: "Loop Video",
  loopVideoTooltip: "Make the video loop seamlessly",
  sourceImage: "Source Image",
  uploadImage: "Upload Image",
  changeImage: "Change Image",
  videoSizeLimit: "(< 50MB)",
  videoWithContext: "Video + Context",
  useDocumentContext: "Use document context",
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
  today: "Today",
  yesterday: "Yesterday",
  thisWeek: "This week",
  older: "Older",
  
  // Relative time
  justNow: "Just now",
  minutesAgo: "minutes ago",
  oneHourAgo: "1 hour ago", 
  hoursAgo: "hours ago",
  oneDayAgo: "1 day ago",
  daysAgo: "days ago",
  oneWeekAgo: "1 week ago",
  weeksAgo: "weeks ago",
  
  // Share chat
  shareChatTitle: "Share Chat",
  shareChatDescription: "Your chat has been shared. Copy the link below to share it with others.",
  generateShareLink: "Generate share link",
  generateShareLinkDescription: "Generate a shareable link for this chat.",
  generatingLink: "Generating link...",
  copy: "Copy",
  
  // Shared chat layout
  sharedChatReadOnly: "This is a read-only view of a shared chat conversation.",
  created: "Created",
  
  // Mobile toolbar
  themeLabel: "Theme",
  textSizeLabel: "Text Size",
  shareLabel: "Share",
  documentsLabel: "Documents",
  
  // WhatsApp Integration
  connectWhatsApp: "Connect WhatsApp",
  whatsAppConnected: "WhatsApp: Connected",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: Scan QR",
  whatsAppProcessing: "Processing...",
  whatsAppModalTitle: "Connect WhatsApp",
  whatsAppModalDescription: "Scan this QR code with WhatsApp on your phone to connect",
  whatsAppStatusTitle: "WhatsApp Connected",
  whatsAppStatusDescription: "Your WhatsApp is successfully connected to ChatRAG",
  whatsAppInstructions1: "1. Open WhatsApp on your phone",
  whatsAppInstructions2: "2. Tap Menu or Settings",
  whatsAppInstructions3: "3. Tap Linked Devices",
  whatsAppInstructions4: "4. Tap Link a Device",
  whatsAppInstructions5: "5. Point your phone at this screen",
  whatsAppRefreshQR: "Refresh QR Code",
  whatsAppTryAgain: "Try Again",
  whatsAppFailedLoad: "Failed to load QR code",
  whatsAppExpiresIn: "Expires in: {time}",
  whatsAppPhoneNumber: "Phone Number",
  whatsAppStatus: "Status",
  whatsAppActive: "Active",
  whatsAppConnectedFor: "Connected for",
  whatsAppWorkingMessage: "Everything is working correctly. Messages sent to your WhatsApp will be processed by ChatRAG automatically.",
  whatsAppDisconnect: "Disconnect WhatsApp",
  whatsAppDisconnecting: "Disconnecting...",
  whatsAppConfirmDisconnect: "Confirm Disconnect",
  whatsAppDisconnectWarning: "Are you sure you want to disconnect? You'll need to scan a QR code again to reconnect.",
  whatsAppJustNow: "Just now",
  whatsAppConnecting: "Connecting...",
  whatsAppMinute: "minute",
  whatsAppMinutes: "minutes",
  whatsAppHour: "hour",
  whatsAppHours: "hours",
  whatsAppDay: "day",
  whatsAppDays: "days",
  
  // System Prompts
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