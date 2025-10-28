import { getAppName } from '@/lib/env';

export const zh = {
  // Main chat
  mainPrompt: "我能为您做些什么？",
  
  // Navigation and common UI
  settings: "设置",
  general: "常规",
  logout: "登出",
  modelSelector: "选择AI模型",
  textSize: "文字大小",
  themeToggle: "切换主题",
  shareChat: "分享聊天",
  uploadDocument: "上传文档",
  viewDocuments: "查看文档",
  
  // Settings modal
  language: "语言",
  theme: "主题",
  customBackground: "自定义背景",
  customBackgroundDesc: "上传图片来自定义您的聊天背景",
  upload: "上传",
  uploading: "上传中...",
  currentBackground: "当前背景：",
  notificationSound: "通知声音",
  notificationSoundDesc: "AI完成回复时播放声音",
  soundType: "声音类型",
  playSound: "播放声音",
  highBell: "高音铃声",
  mediumBell: "中音铃声",
  deepBell: "低音铃声",
  subtleBell: "轻柔铃声",
  
  // Admin settings
  admin: "管理员",
  adminLogin: "管理员登录",
  adminPassword: "管理员密码",
  adminPasswordRequired: "需要管理员密码",
  adminLoginFailed: "管理员登录失败",
  adminPasswordIncorrect: "密码不正确",
  notAuthorizedAsAdmin: "您的账户未被授权为管理员",
  loginRequired: "您必须登录才能访问管理员功能",
  adminVerification: "管理员验证",
  adminVerificationDesc: "点击下方按钮以验证您的管理员状态",
  adminVerificationSuccess: "管理员访问已成功激活",
  adminVerificationFailed: "管理员验证失败",
  verifying: "正在验证...",
  activateAdminAccess: "激活管理员访问",
  loggingIn: "登录中...",
  loggingOut: "登出中...",
  logoutAdmin: "管理员登出",
  login: "登录",
  adminAuthenticated: "管理员已认证",
  adminAuthenticatedDesc: "您现在可以访问管理员功能",
  docDashboardReadOnly: "只读文档仪表板",
  docDashboardReadOnlyDesc: "允许用户以只读模式查看文档",
  documentViewer: "文档查看器",
  readOnlyMode: "只读模式已启用 - 文档无法修改",
  documents: "文档",
  
  // Text size settings
  small: "小",
  default: "默认",
  large: "大",
  
  // Font family settings
  fontFamily: "字体系列",
  interDefault: "Inter（默认）",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "系统",
  lightTheme: "浅色",
  darkTheme: "深色",
  
  // Language settings
  languageSelector: "选择语言",
  english: "英语（美国）",
  spanish: "西班牙语",
  portuguese: "葡萄牙语",
  lithuanian: "立陶宛语",
  chinese: "中文（简体）",
  
  // UI switches
  alwaysShowCode: "使用数据分析师时始终显示代码",
  showFollowUp: "在聊天中显示后续建议",
  
  // Archived chats
  archivedChats: "已归档聊天",
  archiveAll: "归档所有聊天",
  deleteAll: "删除所有聊天",
  logOut: "在此设备上登出",
  
  // Other UI elements
  notifications: "通知",
  personalization: "个性化",
  speech: "语音",
  dataControls: "数据控制",
  builderProfile: "构建者档案",
  connectedApps: "已连接应用",
  security: "安全",
  subscription: "订阅",
  
  // Input and actions
  messagePlaceholder: "询问任何问题",
  sendPrompt: "发送提示",
  stopGenerating: "停止生成",
  useVoice: "语音输入",
  stopRecording: "停止录音",
  processing: "处理中...",
  
  // Document handling
  documentReady: "文档就绪",
  processingDocument: "处理文档中...",
  errorProcessingDocument: "处理文档时出错",
  imageReady: "图片已准备",
  
  // 3D generation
  generate3DModel: "按回车键创建3D模型",
  readyFor3DGeneration: "按回车键创建3D模型",
  modelFrom3DImage: "3D模型图片",
  
  // Media buttons
  searchWeb: "搜索网络",
  uploadFiles: "上传文件",
  imageGenerate: "生成图片",
  videoGenerate: "生成视频",
  threeDGenerate: "3D生成",
  webSearch: "搜索",
  reasoningText: "推理",
  reasoningNotSupported: "模型不支持推理",
  reasoningEffort: "推理强度",
  maxReasoningTokens: "最大令牌数",
  hideReasoning: "隐藏推理",
  model: "模型",
  reasoningMethod: "方法",
  low: "低",
  medium: "中",
  high: "高",
  
  // Suggestion categories
  write: "写作",
  plan: "计划",
  design: "设计",
  backToCategories: "← 返回分类",
  
  // Write suggestions
  writeSummary: "关于...的摘要",
  writeEmail: "给...的邮件",
  writeBlog: "关于...的博客文章",
  writeSocial: "社交媒体更新",
  
  // Plan suggestions
  planMarketing: "...的营销活动",
  planBusiness: "...的商业提案",
  planProduct: "...的产品发布",
  planLearning: "关于...的学习路线图",
  
  // Design suggestions
  designLogo: "小型标志",
  designHero: "英雄区块",
  designLanding: "落地页",
  designSocial: "社交媒体帖子",
  
  // Sidebar
  pinnedChats: "置顶聊天",
  recentChats: "最近聊天",
  searchResults: "搜索结果",
  noChats: "无聊天记录",
  noPinnedChats: "无置顶聊天",
  noChatsAvailable: "无可用聊天",
  closeSidebar: "关闭侧边栏",
  openSidebar: "打开侧边栏",
  searchChats: "搜索聊天...",
  
  // Chat actions
  pin: "置顶",
  unpin: "取消置顶",
  rename: "重命名",
  delete: "删除",
  newChat: "新聊天",
  useIncognitoChat: "使用隐身聊天",
  incognitoChatActive: "隐身聊天已激活",
  incognitoChatActiveMessage: "隐身聊天已激活 - 消息不会被保存",
  search: "搜索",
  github: "GitHub",
  enterChatTitle: "输入聊天标题...",
  
  // Folder management
  folders: "文件夹",
  newFolder: "新建文件夹",
  createNewFolder: "创建新文件夹",
  organizeChatsFolders: "将您的聊天整理到文件夹中以便更好地管理",
  folderName: "文件夹名称",
  folderColor: "文件夹颜色",
  folderNameRequired: "文件夹名称是必需的",
  failedToCreateFolder: "创建文件夹失败",
  creating: "创建中...",
  create: "创建",
  cancel: "取消",
  moveToFolder: "移动到文件夹",
  removeFromFolder: "从文件夹中移除",
  moveToRoot: "移动到根目录",
  noFolders: "没有文件夹",
  noChatsInFolder: "文件夹中没有聊天",
  enterFolderName: "输入文件夹名称...",
  confirmDeleteFolder: "您确定要删除此文件夹吗？",
  deleteFolder: "删除文件夹",
  confirmDeleteFolderMessage: "您确定要删除此文件夹吗？",
  deleteFolderWithChats: "同时删除此文件夹中的所有聊天",
  deleteFolderKeepChats: "聊天将被移动到根级别",
  chats: "聊天",
  
  // Disclaimer
  disclaimer: `${getAppName()} 可能会出错。请考虑检查重要信息。`,

  // Document Dashboard
  documentManagement: "文档管理",
  uploadNew: "上传新文档",
  storedDocuments: "已存储文档",
  dragDropDocuments: "拖放您的文档",
  supportedFileTypes: "PDF、DOCX、PPTX、XLSX、HTML、TXT、RTF、EPUB文件",
  selectFiles: "选择文件",
  searchDocuments: "搜索文档...",
  noDocumentsFound: "未找到文档",
  processingStatus: "处理中",
  readyStatus: "就绪",
  failedStatus: "失败",
  partialStatus: "部分",
  uploadDate: "上传日期",
  docName: "名称",
  docStatus: "状态",
  docSize: "大小",
  errorPrefix: "错误：",
  uploadButton: "上传",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "文档处理完成，部分片段成功",
  deleteDocument: "删除文档",
  confirmDeleteDocument: "您确定要删除此文档吗?",
  confirmDeleteChat: "确认删除",
  confirmDeleteChatMessage: "您确定要删除",
  actionCannotBeUndone: "此操作无法撤销。",
  
  // Unified Upload Button
  uploadTemporaryDocument: "上传临时文档",
  uploadImage: "上传图片",
  
  // MCP Tools
  mcpToolsButton: "MCP工具",
  availableMcpTools: "可用MCP工具",
  loadingTools: "加载工具中...",
  noToolsAvailable: "无可用工具",
  zapierTools: "Zapier工具",
  otherTools: "其他工具",
  learnMore: "了解更多",
  fromServer: "来自服务器：",
  runTool: "运行工具",
  cancelTool: "取消",
  waitingForApproval: "等待您的批准...",
  executingTool: "执行工具中，请稍候...",
  toolError: "运行工具时发生错误。",
  
  // Chat message action tooltips
  copyTooltip: "复制",
  copiedTooltip: "已复制！",
  textToSpeechTooltip: "播放文本转语音",
  downloadPdfTooltip: "下载为PDF",
  sendToKnowledgeBase: "添加到 RAG",
  
  // 3D Model Viewer
  clickDragRotateModel: "点击并拖拽来旋转模型",
  download: "下载",
  threeDModel: "3D模型",
  // Image Generation Modal
  imageGeneration: "图像生成",
  generateImage: "生成图像",
  size: "尺寸",
  numberOfImages: "图像数量",
  sourceImages: "源图像",
  safetyChecker: "安全检查器",
  editImage: "编辑图像",
  editImageInstructions: "编辑说明",
  uploadSourceImage: "上传源图像",
  uploadImage: "上传图像",
  addChangeImage: "添加/更改图像",
  clearAll: "清除全部",
  upToImagesLimit: "（最多10张图片，每张<50MB）",
  strength: "强度",
  strengthTooltip: "图像转换的程度",
  imageSafetyNote: "此提供商默认包含安全检查",
  generating: "生成中...",

  // Video Generation Modal
  videoGeneration: "视频生成",
  generateVideo: "生成视频",
  mode: "模式",
  fastMode: "快速模式",
  fasterGenerationMode: "快速生成（质量较低）",
  standardQualityMode: "标准质量（较慢）",
  aspectRatio: "纵横比",
  resolution: "分辨率",
  duration: "时长",
  seconds: "秒",
  enhancePrompt: "增强提示",
  enhancePromptTooltip: "自动改进您的提示以获得更好的结果",
  autoFix: "自动修复",
  autoFixTooltip: "自动修复生成视频中的问题",
  generateAudio: "生成音频",
  generateAudioTooltip: "为视频生成音频",
  loopVideo: "循环视频",
  loopVideoTooltip: "使视频无缝循环",
  sourceImage: "源图像",
  changeImage: "更改图像",
  videoSizeLimit: "（<50MB）",
  videoWithContext: "视频 + 上下文",
  useDocumentContext: "使用文档上下文",
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
  today: "今天",
  yesterday: "昨天",
  thisWeek: "本周",
  older: "更早",
  
  // Relative time
  justNow: "刚刚",
  minutesAgo: "分钟前",
  oneHourAgo: "1小时前",
  hoursAgo: "小时前",
  oneDayAgo: "1天前",
  daysAgo: "天前",
  oneWeekAgo: "1周前",
  weeksAgo: "周前",
  
  // Share chat
  shareChatTitle: "分享聊天",
  shareChatDescription: "您的聊天已被分享。复制下面的链接来与他人分享。",
  generateShareLink: "生成分享链接",
  generateShareLinkDescription: "为此聊天生成一个可分享的链接。",
  generatingLink: "生成链接中...",
  copy: "复制",
  
  // Shared chat layout
  sharedChatReadOnly: "这是共享聊天会话的只读视图。",
  created: "创建于",
  
  // Mobile toolbar
  themeLabel: "主题",
  textSizeLabel: "文字大小",
  shareLabel: "分享",
  documentsLabel: "文档",
  
  // WhatsApp Integration
  connectWhatsApp: "连接WhatsApp",
  whatsAppConnected: "WhatsApp：已连接",
  whatsAppConnectedWithNumber: "WhatsApp：{phoneNumber}",
  whatsAppScanQR: "WhatsApp：扫描QR",
  whatsAppProcessing: "处理中...",
  whatsAppModalTitle: "连接WhatsApp",
  whatsAppModalDescription: "使用您手机上的WhatsApp扫描此二维码以连接",
  whatsAppStatusTitle: "WhatsApp已连接",
  whatsAppStatusDescription: "您的WhatsApp已成功连接到ChatRAG",
  whatsAppInstructions1: "1. 在您的手机上打开WhatsApp",
  whatsAppInstructions2: "2. 点击菜单或设置",
  whatsAppInstructions3: "3. 点击已链接设备",
  whatsAppInstructions4: "4. 点击链接设备",
  whatsAppInstructions5: "5. 将您的手机对准此屏幕",
  whatsAppRefreshQR: "刷新二维码",
  whatsAppTryAgain: "重试",
  whatsAppFailedLoad: "加载二维码失败",
  whatsAppExpiresIn: "在{time}后过期",
  whatsAppPhoneNumber: "电话号码",
  whatsAppStatus: "状态",
  whatsAppActive: "活跃",
  whatsAppConnectedFor: "已连接",
  whatsAppWorkingMessage: "一切正常运作。发送到您WhatsApp的消息将由ChatRAG自动处理。",
  whatsAppDisconnect: "断开WhatsApp",
  whatsAppDisconnecting: "断开中...",
  whatsAppConfirmDisconnect: "确认断开",
  whatsAppDisconnectWarning: "您确定要断开连接吗？您需要再次扫描二维码才能重新连接。",
  whatsAppJustNow: "刚刚",
  whatsAppConnecting: "连接中...",
  whatsAppMinute: "分钟",
  whatsAppMinutes: "分钟",
  whatsAppHour: "小时",
  whatsAppHours: "小时",
  whatsAppDay: "天",
  whatsAppDays: "天",
  
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