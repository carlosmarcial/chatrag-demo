import { getAppName } from '@/lib/env';

export const ar = {
  // Main chat
  mainPrompt: "كيف يمكنني مساعدتك؟",
  
  // Navigation and common UI
  settings: "الإعدادات",
  general: "عام",
  logout: "تسجيل الخروج",
  modelSelector: "اختر نموذج الذكاء الاصطناعي",
  textSize: "حجم النص",
  themeToggle: "تغيير المظهر",
  shareChat: "مشاركة المحادثة",
  uploadDocument: "رفع مستند",
  viewDocuments: "عرض المستندات",
  
  // Settings modal
  language: "اللغة",
  theme: "المظهر",
  customBackground: "خلفية مخصصة",
  customBackgroundDesc: "قم برفع صورة لتخصيص خلفية المحادثة",
  upload: "رفع",
  uploading: "جاري الرفع...",
  currentBackground: "الخلفية الحالية:",
  notificationSound: "صوت الإشعارات",
  notificationSoundDesc: "تشغيل صوت عند اكتمال رد الذكاء الاصطناعي",
  soundType: "نوع الصوت",
  playSound: "تشغيل الصوت",
  highBell: "جرس عالي",
  mediumBell: "جرس متوسط",
  deepBell: "جرس عميق",
  subtleBell: "جرس خفيف",
  
  // Admin settings
  admin: "المدير",
  adminLogin: "تسجيل دخول المدير",
  adminPassword: "كلمة مرور المدير",
  adminPasswordRequired: "كلمة مرور المدير مطلوبة",
  adminLoginFailed: "فشل تسجيل دخول المدير",
  adminPasswordIncorrect: "كلمة المرور غير صحيحة",
  notAuthorizedAsAdmin: "حسابك غير مصرح له كمدير",
  loginRequired: "يجب تسجيل الدخول للوصول إلى ميزات المدير",
  adminVerification: "التحقق من المسؤول",
  adminVerificationDesc: "انقر الزر أدناه للتحقق من حالة المسؤول الخاصة بك",
  adminVerificationSuccess: "تم تفعيل وصول المسؤول بنجاح",
  adminVerificationFailed: "فشل التحقق من المسؤول",
  verifying: "جارٍ التحقق...",
  activateAdminAccess: "تفعيل وصول المسؤول",
  loggingIn: "جاري تسجيل الدخول...",
  loggingOut: "جاري تسجيل الخروج...",
  logoutAdmin: "خروج المدير",
  login: "تسجيل الدخول",
  adminAuthenticated: "تم التحقق من المدير",
  adminAuthenticatedDesc: "لديك الآن وصول إلى ميزات المدير",
  docDashboardReadOnly: "لوحة المستندات للقراءة فقط",
  docDashboardReadOnlyDesc: "السماح للمستخدمين بعرض المستندات في وضع القراءة فقط",
  documentViewer: "عارض المستندات",
  readOnlyMode: "وضع القراءة فقط مفعل - لا يمكن تعديل المستندات",
  documents: "المستندات",
  
  // Text size settings
  small: "صغير",
  default: "افتراضي",
  large: "كبير",
  
  // Font family settings
  fontFamily: "عائلة الخط",
  interDefault: "Inter (افتراضي)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "النظام",
  lightTheme: "فاتح",
  darkTheme: "داكن",
  
  // Language settings
  languageSelector: "اختر اللغة",
  english: "الإنجليزية (الولايات المتحدة)",
  spanish: "الإسبانية",
  portuguese: "البرتغالية",
  lithuanian: "الليتوانية",
  chinese: "الصينية (المبسطة)",
  hindi: "الهندية",
  arabic: "العربية",
  
  // UI switches
  alwaysShowCode: "إظهار الكود دائماً عند استخدام محلل البيانات",
  showFollowUp: "إظهار اقتراحات المتابعة في المحادثات",
  
  // Archived chats
  archivedChats: "المحادثات المؤرشفة",
  archiveAll: "أرشفة جميع المحادثات",
  deleteAll: "حذف جميع المحادثات",
  logOut: "تسجيل الخروج من هذا الجهاز",
  
  // Other UI elements
  notifications: "الإشعارات",
  personalization: "التخصيص",
  speech: "الكلام",
  dataControls: "عناصر التحكم في البيانات",
  builderProfile: "ملف المطور",
  connectedApps: "التطبيقات المتصلة",
  security: "الأمان",
  subscription: "الاشتراك",
  
  // Input and actions
  messagePlaceholder: "اسأل أي شيء",
  sendPrompt: "إرسال الطلب",
  stopGenerating: "إيقاف التوليد",
  useVoice: "الإملاء",
  stopRecording: "إيقاف التسجيل",
  processing: "جاري المعالجة...",
  
  // Document handling
  documentReady: "المستند جاهز",
  processingDocument: "جاري معالجة المستند...",
  errorProcessingDocument: "خطأ في معالجة المستند",
  imageReady: "الصورة جاهزة",
  
  // 3D generation
  generate3DModel: "اضغط ENTER لإنشاء نموذج ثلاثي الأبعاد",
  readyFor3DGeneration: "اضغط ENTER لإنشاء نموذج ثلاثي الأبعاد",
  modelFrom3DImage: "صورة للنموذج ثلاثي الأبعاد",
  
  // Media buttons
  searchWeb: "البحث في الويب",
  uploadFiles: "رفع ملفات",
  imageGenerate: "توليد صور",
  videoGenerate: "توليد فيديو",
  threeDGenerate: "التوليد ثلاثي الأبعاد",
  webSearch: "بحث",
  reasoningText: "الاستدلال",
  reasoningNotSupported: "النموذج لا يدعم الاستدلال",
  reasoningEffort: "جهد الاستدلال",
  maxReasoningTokens: "الحد الأقصى للرموز",
  hideReasoning: "إخفاء الاستدلال",
  model: "النموذج",
  reasoningMethod: "الطريقة",
  low: "منخفض",
  medium: "متوسط",
  high: "عالي",
  
  // Suggestion categories
  write: "كتابة",
  plan: "تخطيط",
  design: "تصميم",
  backToCategories: "← العودة إلى الفئات",
  
  // Write suggestions
  writeSummary: "ملخص حول",
  writeEmail: "بريد إلكتروني إلى",
  writeBlog: "مقال مدونة حول",
  writeSocial: "تحديث وسائل التواصل الاجتماعي",
  
  // Plan suggestions
  planMarketing: "حملة تسويقية لـ",
  planBusiness: "اقتراح عمل لـ",
  planProduct: "إطلاق منتج لـ",
  planLearning: "خارطة طريق التعلم حول",
  
  // Design suggestions
  designLogo: "شعار صغير",
  designHero: "قسم البطل",
  designLanding: "صفحة هبوط",
  designSocial: "منشور وسائل التواصل الاجتماعي",
  
  // Sidebar
  pinnedChats: "المحادثات المثبتة",
  recentChats: "المحادثات الأخيرة",
  searchResults: "نتائج البحث",
  noChats: "لا توجد محادثات",
  noPinnedChats: "لا توجد محادثات مثبتة",
  noChatsAvailable: "لا توجد محادثات متاحة",
  closeSidebar: "إغلاق الشريط الجانبي",
  openSidebar: "فتح الشريط الجانبي",
  searchChats: "البحث في المحادثات...",
  
  // Chat actions
  pin: "تثبيت",
  unpin: "إلغاء التثبيت",
  rename: "إعادة تسمية",
  delete: "حذف",
  newChat: "محادثة جديدة",
  useIncognitoChat: "استخدام الدردشة الخفية",
  incognitoChatActive: "الدردشة الخفية نشطة",
  incognitoChatActiveMessage: "الدردشة الخفية نشطة - لن يتم حفظ الرسائل",
  search: "بحث",
  github: "GitHub",
  enterChatTitle: "أدخل عنوان المحادثة...",
  
  // Folder management
  folders: "المجلدات",
  newFolder: "مجلد جديد",
  createNewFolder: "إنشاء مجلد جديد",
  organizeChatsFolders: "نظم محادثاتك في مجلدات لإدارة أفضل",
  folderName: "اسم المجلد",
  folderColor: "لون المجلد",
  folderNameRequired: "اسم المجلد مطلوب",
  failedToCreateFolder: "فشل في إنشاء المجلد",
  creating: "جاري الإنشاء...",
  create: "إنشاء",
  cancel: "إلغاء",
  moveToFolder: "نقل إلى مجلد",
  removeFromFolder: "إزالة من المجلد",
  moveToRoot: "نقل إلى الجذر",
  noFolders: "لا توجد مجلدات",
  noChatsInFolder: "لا توجد محادثات في المجلد",
  enterFolderName: "أدخل اسم المجلد...",
  confirmDeleteFolder: "هل أنت متأكد من أنك تريد حذف هذا المجلد؟",
  deleteFolder: "حذف المجلد",
  confirmDeleteFolderMessage: "هل أنت متأكد من أنك تريد حذف هذا المجلد؟",
  deleteFolderWithChats: "حذف جميع المحادثات في هذا المجلد أيضًا",
  deleteFolderKeepChats: "سيتم نقل المحادثات إلى المستوى الجذر",
  chats: "محادثات",
  
  // Disclaimer
  disclaimer: `قد يرتكب ${getAppName()} أخطاء. فكر في التحقق من المعلومات المهمة.`,

  // Document Dashboard
  documentManagement: "إدارة المستندات",
  uploadNew: "رفع جديد",
  storedDocuments: "المستندات المحفوظة",
  dragDropDocuments: "اسحب وأفلت مستنداتك",
  supportedFileTypes: "ملفات PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB",
  selectFiles: "اختيار ملفات",
  searchDocuments: "البحث في المستندات...",
  noDocumentsFound: "لم يتم العثور على مستندات",
  processingStatus: "جاري المعالجة",
  readyStatus: "جاهز",
  failedStatus: "فشل",
  partialStatus: "جزئي",
  uploadDate: "تاريخ الرفع",
  docName: "الاسم",
  docStatus: "الحالة",
  docSize: "الحجم",
  errorPrefix: "خطأ:",
  uploadButton: "رفع",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "تمت معالجة المستند مع نجاح جزئي للأجزاء",
  deleteDocument: "حذف المستند",
  confirmDeleteDocument: "هل أنت متأكد من أنك تريد حذف هذا المستند؟",
  confirmDeleteChat: "تأكيد الحذف",
  confirmDeleteChatMessage: "هل أنت متأكد من أنك تريد حذن",
  actionCannotBeUndone: "لا يمكن التراجع عن هذا الإجراء.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "رفع مستند مؤقت",
  uploadImage: "رفع صورة",
  
  // MCP Tools
  mcpToolsButton: "أدوات MCP",
  availableMcpTools: "أدوات MCP المتاحة",
  loadingTools: "جاري تحميل الأدوات...",
  noToolsAvailable: "لا توجد أدوات متاحة",
  zapierTools: "أدوات Zapier",
  otherTools: "أدوات أخرى",
  learnMore: "تعلم المزيد",
  fromServer: "من الخادم:",
  runTool: "تشغيل الأداة",
  cancelTool: "إلغاء",
  waitingForApproval: "في انتظار موافقتك...",
  executingTool: "جاري تشغيل الأداة، يرجى الانتظار...",
  toolError: "حدث خطأ أثناء تشغيل الأداة.",
  
  // Chat message action tooltips
  copyTooltip: "نسخ",
  copiedTooltip: "تم النسخ!",
  textToSpeechTooltip: "تشغيل النص إلى كلام",
  downloadPdfTooltip: "تحميل كـ PDF",
  sendToKnowledgeBase: "إضافة إلى RAG",
  
  // 3D Model Viewer
  clickDragRotateModel: "انقر واسحب لتدوير النموذج",
  download: "تحميل",
  threeDModel: "نموذج ثلاثي الأبعاد",
  // Image Generation Modal
  imageGeneration: "توليد الصور",
  generateImage: "توليد صورة",
  size: "الحجم",
  numberOfImages: "عدد الصور",
  sourceImages: "الصور المصدرية",
  safetyChecker: "مدقق الأمان",
  editImage: "تحرير الصورة",
  editImageInstructions: "تعليمات التحرير",
  uploadSourceImage: "رفع الصورة المصدرية",
  uploadImage: "رفع الصورة",
  addChangeImage: "إضافة/تغيير الصورة",
  clearAll: "مسح الكل",
  upToImagesLimit: "(حتى 10 صور < 50 ميجابايت لكل منها)",
  strength: "القوة",
  strengthTooltip: "مدى تحويل الصورة",
  imageSafetyNote: "يتضمن هذا المزود فحوصات الأمان بشكل افتراضي",
  generating: "جاري التوليد...",

  // Video Generation Modal
  videoGeneration: "توليد الفيديو",
  generateVideo: "توليد فيديو",
  mode: "الوضع",
  fastMode: "الوضع السريع",
  fasterGenerationMode: "توليد أسرع (جودة أقل)",
  standardQualityMode: "جودة قياسية (أبطأ)",
  aspectRatio: "نسبة العرض إلى الارتفاع",
  resolution: "الدقة",
  duration: "المدة",
  seconds: "ثواني",
  enhancePrompt: "تحسين الموجه",
  enhancePromptTooltip: "تحسين موجهك تلقائيًا للحصول على نتائج أفضل",
  autoFix: "إصلاح تلقائي",
  autoFixTooltip: "إصلاح المشكلات تلقائيًا في الفيديو المُنشأ",
  generateAudio: "توليد الصوت",
  generateAudioTooltip: "توليد الصوت للفيديو",
  loopVideo: "تكرار الفيديو",
  loopVideoTooltip: "جعل الفيديو يتكرر بسلاسة",
  sourceImage: "الصورة المصدرية",
  changeImage: "تغيير الصورة",
  videoSizeLimit: "(< 50 ميجابايت)",
  videoWithContext: "فيديو + السياق",
  useDocumentContext: "استخدام سياق المستند",
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
  today: "اليوم",
  yesterday: "أمس",
  thisWeek: "هذا الأسبوع",
  older: "أقدم",
  
  // Relative time
  justNow: "الآن",
  minutesAgo: "دقائق مضت",
  oneHourAgo: "منذ ساعة واحدة",
  hoursAgo: "ساعات مضت",
  oneDayAgo: "منذ يوم واحد",
  daysAgo: "أيام مضت",
  oneWeekAgo: "منذ أسبوع واحد",
  weeksAgo: "أسابيع مضت",
  
  // Share chat
  shareChatTitle: "مشاركة المحادثة",
  shareChatDescription: "تم مشاركة محادثتك. انسخ الرابط أدناه لمشاركته مع الآخرين.",
  generateShareLink: "إنشاء رابط مشاركة",
  generateShareLinkDescription: "إنشاء رابط قابل للمشاركة لهذه المحادثة.",
  generatingLink: "جاري إنشاء الرابط...",
  copy: "نسخ",
  
  // Shared chat layout
  sharedChatReadOnly: "هذا عرض للقراءة فقط لمحادثة مشتركة.",
  created: "تم الإنشاء",
  
  // Mobile toolbar
  themeLabel: "المظهر",
  textSizeLabel: "حجم النص",
  shareLabel: "مشاركة",
  documentsLabel: "المستندات",
  
  // WhatsApp Integration
  connectWhatsApp: "ربط WhatsApp",
  whatsAppConnected: "WhatsApp: متصل",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: مسح QR",
  whatsAppProcessing: "جارٍ المعالجة...",
  whatsAppModalTitle: "ربط WhatsApp",
  whatsAppModalDescription: "امسح رمز QR هذا باستخدام WhatsApp على هاتفك للاتصال",
  whatsAppStatusTitle: "WhatsApp متصل",
  whatsAppStatusDescription: "تم ربط WhatsApp الخاص بك بنجاح مع ChatRAG",
  whatsAppInstructions1: "1. افتح WhatsApp على هاتفك",
  whatsAppInstructions2: "2. انقر على القائمة أو الإعدادات",
  whatsAppInstructions3: "3. انقر على الأجهزة المرتبطة",
  whatsAppInstructions4: "4. انقر على ربط جهاز",
  whatsAppInstructions5: "5. وجّه هاتفك نحو هذه الشاشة",
  whatsAppRefreshQR: "تحديث رمز QR",
  whatsAppTryAgain: "حاول مجدداً",
  whatsAppFailedLoad: "فشل تحميل رمز QR",
  whatsAppExpiresIn: "ينتهي في: {time}",
  whatsAppPhoneNumber: "رقم الهاتف",
  whatsAppStatus: "الحالة",
  whatsAppActive: "نشط",
  whatsAppConnectedFor: "متصل منذ",
  whatsAppWorkingMessage: "كل شيء يعمل بشكل صحيح. سيتم معالجة الرسائل المرسلة إلى WhatsApp الخاص بك تلقائياً بواسطة ChatRAG.",
  whatsAppDisconnect: "قطع اتصال WhatsApp",
  whatsAppDisconnecting: "جارٍ قطع الاتصال...",
  whatsAppConfirmDisconnect: "تأكيد قطع الاتصال",
  whatsAppDisconnectWarning: "هل أنت متأكد من رغبتك في قطع الاتصال؟ ستحتاج إلى مسح رمز QR مرة أخرى لإعادة الاتصال.",
  whatsAppJustNow: "الآن",
  whatsAppConnecting: "جارٍ الاتصال...",
  whatsAppMinute: "دقيقة",
  whatsAppMinutes: "دقائق",
  whatsAppHour: "ساعة",
  whatsAppHours: "ساعات",
  whatsAppDay: "يوم",
  whatsAppDays: "أيام",
  
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