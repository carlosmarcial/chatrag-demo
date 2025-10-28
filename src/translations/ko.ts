import { getAppName } from '@/lib/env';

export const ko = {
  // Main chat
  mainPrompt: "무엇을 도와드릴까요?",
  
  // Navigation and common UI
  settings: "설정",
  general: "일반",
  logout: "로그아웃",
  modelSelector: "AI 모델 선택",
  textSize: "텍스트 크기",
  themeToggle: "테마 전환",
  shareChat: "채팅 공유",
  uploadDocument: "문서 업로드",
  viewDocuments: "문서 보기",
  
  // Settings modal
  language: "언어",
  theme: "테마",
  customBackground: "사용자 정의 배경",
  customBackgroundDesc: "채팅 배경을 사용자 정의하려면 이미지를 업로드하세요",
  upload: "업로드",
  uploading: "업로드 중...",
  currentBackground: "현재 배경:",
  notificationSound: "알림 소리",
  notificationSoundDesc: "AI가 응답을 완료하면 소리 재생",
  soundType: "소리 유형",
  playSound: "소리 재생",
  highBell: "높은 벨소리",
  mediumBell: "중간 벨소리",
  deepBell: "낮은 벨소리",
  subtleBell: "부드러운 벨소리",
  
  // Admin settings
  admin: "관리자",
  adminLogin: "관리자 로그인",
  adminPassword: "관리자 비밀번호",
  adminPasswordRequired: "관리자 비밀번호가 필요합니다",
  adminLoginFailed: "관리자 로그인 실패",
  adminPasswordIncorrect: "비밀번호가 올바르지 않습니다",
  notAuthorizedAsAdmin: "귀하의 계정은 관리자로 인증되지 않았습니다",
  loginRequired: "관리자 기능에 액세스하려면 로그인해야 합니다",
  adminVerification: "관리자 확인",
  adminVerificationDesc: "아래 버튼을 클릭하여 관리자 상태를 확인하세요",
  adminVerificationSuccess: "관리자 액세스가 성공적으로 활성화되었습니다",
  adminVerificationFailed: "관리자 확인에 실패했습니다",
  verifying: "확인 중...",
  activateAdminAccess: "관리자 액세스 활성화",
  loggingIn: "로그인 중...",
  loggingOut: "로그아웃 중...",
  logoutAdmin: "관리자 로그아웃",
  login: "로그인",
  adminAuthenticated: "관리자 인증됨",
  adminAuthenticatedDesc: "이제 관리자 기능에 액세스할 수 있습니다",
  docDashboardReadOnly: "읽기 전용 문서 대시보드",
  docDashboardReadOnlyDesc: "사용자가 읽기 전용 모드로 문서를 볼 수 있도록 허용",
  documentViewer: "문서 뷰어",
  readOnlyMode: "읽기 전용 모드 활성화됨 - 문서를 수정할 수 없습니다",
  documents: "문서",
  
  // Text size settings
  small: "작음",
  default: "기본값",
  large: "큼",
  
  // Font family settings
  fontFamily: "글꼴 패밀리",
  interDefault: "Inter (기본값)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "시스템",
  lightTheme: "라이트",
  darkTheme: "다크",
  
  // Language settings
  languageSelector: "언어 선택",
  english: "영어 (미국)",
  spanish: "스페인어",
  
  // UI switches
  alwaysShowCode: "데이터 분석가 사용 시 항상 코드 표시",
  showFollowUp: "채팅에서 후속 제안 표시",
  
  // Archived chats
  archivedChats: "보관된 채팅",
  archiveAll: "모든 채팅 보관",
  deleteAll: "모든 채팅 삭제",
  logOut: "이 기기에서 로그아웃",
  
  // Other UI elements
  notifications: "알림",
  personalization: "개인화",
  speech: "음성",
  dataControls: "데이터 제어",
  builderProfile: "빌더 프로필",
  connectedApps: "연결된 앱",
  security: "보안",
  subscription: "구독",
  
  // Input and actions
  messagePlaceholder: "무엇이든 물어보세요",
  sendPrompt: "프롬프트 전송",
  stopGenerating: "생성 중지",
  useVoice: "받아쓰기",
  stopRecording: "녹음 중지",
  processing: "처리 중...",
  
  // Document handling
  documentReady: "문서 준비됨",
  processingDocument: "문서 처리 중...",
  errorProcessingDocument: "문서 처리 오류",
  imageReady: "이미지 준비됨",
  
  // 3D generation
  generate3DModel: "ENTER를 눌러 3D 모델 생성",
  readyFor3DGeneration: "ENTER를 눌러 3D 모델 생성",
  modelFrom3DImage: "3D 모델용 이미지",
  
  // Media buttons
  searchWeb: "웹 검색",
  uploadFiles: "파일 업로드",
  imageGenerate: "이미지 생성",
  videoGenerate: "비디오 생성",
  threeDGenerate: "3D 생성",
  webSearch: "검색",
  reasoningText: "추론",
  reasoningNotSupported: "모델이 추론을 지원하지 않습니다",
  reasoningEffort: "추론 수준",
  maxReasoningTokens: "최대 토큰",
  hideReasoning: "추론 숨기기",
  model: "모델",
  reasoningMethod: "방법",
  low: "낮음",
  medium: "보통",
  high: "높음",
  
  // Suggestion categories
  write: "작성",
  plan: "계획",
  design: "디자인",
  backToCategories: "← 카테고리로 돌아가기",
  
  // Write suggestions
  writeSummary: "요약문 작성",
  writeEmail: "이메일 작성",
  writeBlog: "블로그 포스트 작성",
  writeSocial: "소셜 미디어 게시물 작성",
  
  // Plan suggestions
  planMarketing: "마케팅 캠페인 계획",
  planBusiness: "비즈니스 제안서 계획",
  planProduct: "제품 출시 계획",
  planLearning: "학습 로드맵 계획",
  
  // Design suggestions
  designLogo: "작은 로고 디자인",
  designHero: "히어로 섹션 디자인",
  designLanding: "랜딩 페이지 디자인",
  designSocial: "소셜 미디어 게시물 디자인",
  
  // Sidebar
  pinnedChats: "고정된 채팅",
  recentChats: "최근 채팅",
  searchResults: "검색 결과",
  noChats: "채팅 없음",
  noPinnedChats: "고정된 채팅 없음",
  noChatsAvailable: "사용 가능한 채팅 없음",
  closeSidebar: "사이드바 닫기",
  openSidebar: "사이드바 열기",
  searchChats: "채팅 검색...",
  
  // Chat actions
  pin: "고정",
  unpin: "고정 해제",
  rename: "이름 변경",
  delete: "삭제",
  newChat: "새 채팅",
  useIncognitoChat: "시크릿 채팅 사용",
  incognitoChatActive: "시크릿 채팅 활성화",
  incognitoChatActiveMessage: "시크릿 채팅 활성화 - 메시지가 저장되지 않습니다",
  search: "검색",
  github: "GitHub",
  enterChatTitle: "채팅 제목 입력...",
  
  // Folder management
  folders: "폴더",
  newFolder: "새 폴더",
  createNewFolder: "새 폴더 만들기",
  organizeChatsFolders: "더 나은 관리를 위해 채팅을 폴더로 정리하세요",
  folderName: "폴더 이름",
  folderColor: "폴더 색상",
  folderNameRequired: "폴더 이름은 필수입니다",
  failedToCreateFolder: "폴더 생성 실패",
  creating: "생성 중...",
  create: "만들기",
  cancel: "취소",
  moveToFolder: "폴더로 이동",
  removeFromFolder: "폴더에서 제거",
  moveToRoot: "루트로 이동",
  noFolders: "폴더 없음",
  noChatsInFolder: "폴더에 채팅이 없습니다",
  enterFolderName: "폴더 이름 입력...",
  confirmDeleteFolder: "이 폴더를 삭제하시겠습니까?",
  deleteFolder: "폴더 삭제",
  confirmDeleteFolderMessage: "이 폴더를 삭제하시겠습니까?",
  deleteFolderWithChats: "이 폴더의 모든 채팅도 삭제",
  deleteFolderKeepChats: "채팅이 루트 레벨로 이동됩니다",
  chats: "채팅",
  
  // Disclaimer
  disclaimer: `${getAppName()}은(는) 실수를 할 수 있습니다. 중요한 정보는 확인해 주세요.`,

  // Document Dashboard
  documentManagement: "문서 관리",
  uploadNew: "새로 업로드",
  storedDocuments: "저장된 문서",
  dragDropDocuments: "문서를 끌어다 놓으세요",
  supportedFileTypes: "PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB 파일",
  selectFiles: "파일 선택",
  searchDocuments: "문서 검색...",
  noDocumentsFound: "문서를 찾을 수 없습니다",
  processingStatus: "처리 중",
  readyStatus: "준비됨",
  failedStatus: "실패",
  partialStatus: "부분적",
  uploadDate: "업로드 날짜",
  docName: "이름",
  docStatus: "상태",
  docSize: "크기",
  errorPrefix: "오류:",
  uploadButton: "업로드",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "문서가 부분적 청크 성공으로 처리됨",
  deleteDocument: "문서 삭제",
  confirmDeleteDocument: "이 문서를 삭제하시겠습니까?",
  confirmDeleteChat: "삭제 확인",
  confirmDeleteChatMessage: "삭제하시겠습니까",
  actionCannotBeUndone: "이 작업은 실행 취소할 수 없습니다.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "임시 문서 업로드",
  uploadImage: "이미지 업로드",
  
  // MCP Tools
  mcpToolsButton: "MCP 도구",
  availableMcpTools: "사용 가능한 MCP 도구",
  loadingTools: "도구 로딩 중...",
  noToolsAvailable: "사용 가능한 도구 없음",
  zapierTools: "Zapier 도구",
  otherTools: "기타 도구",
  learnMore: "더 알아보기",
  fromServer: "서버에서:",
  runTool: "도구 실행",
  cancelTool: "취소",
  waitingForApproval: "승인을 기다리는 중...",
  executingTool: "도구 실행 중, 잠시 기다려 주세요...",
  toolError: "도구 실행 중 오류가 발생했습니다.",
  
  // Chat message action tooltips
  copyTooltip: "복사",
  copiedTooltip: "복사됨!",
  textToSpeechTooltip: "텍스트 음성 변환 재생",
  downloadPdfTooltip: "PDF로 다운로드",
  sendToKnowledgeBase: "RAG에 추가",
  
  // 3D Model Viewer
  clickDragRotateModel: "클릭하고 드래그하여 모델 회전",
  download: "다운로드",
  threeDModel: "3D 모델",
  // Image Generation Modal
  imageGeneration: "이미지 생성",
  generateImage: "이미지 생성",
  size: "크기",
  numberOfImages: "이미지 수",
  sourceImages: "원본 이미지",
  safetyChecker: "안전 검사기",
  editImage: "이미지 편집",
  editImageInstructions: "편집 지침",
  uploadSourceImage: "원본 이미지 업로드",
  uploadImage: "이미지 업로드",
  addChangeImage: "이미지 추가/변경",
  clearAll: "모두 지우기",
  upToImagesLimit: "(최대 10개 이미지, 각 50MB 미만)",
  strength: "강도",
  strengthTooltip: "이미지 변환 정도",
  imageSafetyNote: "이 제공업체는 기본적으로 안전 검사를 포함합니다",
  generating: "생성 중...",

  // Video Generation Modal
  videoGeneration: "비디오 생성",
  generateVideo: "비디오 생성",
  mode: "모드",
  fastMode: "빠른 모드",
  fasterGenerationMode: "빠른 생성 (낮은 품질)",
  standardQualityMode: "표준 품질 (느림)",
  aspectRatio: "화면 비율",
  resolution: "해상도",
  duration: "지속 시간",
  seconds: "초",
  enhancePrompt: "프롬프트 개선",
  enhancePromptTooltip: "더 나은 결과를 위해 프롬프트를 자동으로 개선",
  autoFix: "자동 수정",
  autoFixTooltip: "생성된 비디오의 문제를 자동으로 수정",
  generateAudio: "오디오 생성",
  generateAudioTooltip: "비디오용 오디오 생성",
  loopVideo: "루프 비디오",
  loopVideoTooltip: "비디오를 매끄럽게 반복",
  sourceImage: "원본 이미지",
  changeImage: "이미지 변경",
  videoSizeLimit: "(<50MB)",
  videoWithContext: "비디오 + 컨텍스트",
  useDocumentContext: "문서 컨텍스트 사용",
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
  today: "오늘",
  yesterday: "어제",
  thisWeek: "이번 주",
  older: "더 오래된 것",
  
  // Relative time
  justNow: "방금 전",
  minutesAgo: "분 전",
  oneHourAgo: "1시간 전",
  hoursAgo: "시간 전",
  oneDayAgo: "1일 전",
  daysAgo: "일 전",
  oneWeekAgo: "1주일 전",
  weeksAgo: "주 전",
  
  // Share chat
  shareChatTitle: "채팅 공유",
  shareChatDescription: "채팅이 공유되었습니다. 아래 링크를 복사하여 다른 사람들과 공유하세요.",
  generateShareLink: "공유 링크 생성",
  generateShareLinkDescription: "이 채팅에 대한 공유 가능한 링크를 생성합니다.",
  generatingLink: "링크 생성 중...",
  copy: "복사",
  
  // Shared chat layout
  sharedChatReadOnly: "이것은 공유된 채팅 대화의 읽기 전용 보기입니다.",
  created: "생성됨",
  
  // Mobile toolbar
  themeLabel: "테마",
  textSizeLabel: "텍스트 크기",
  shareLabel: "공유",
  documentsLabel: "문서",
  
  // WhatsApp Integration
  connectWhatsApp: "WhatsApp 연결",
  whatsAppConnected: "WhatsApp: 연결됨",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: QR 스캔",
  whatsAppProcessing: "처리 중...",
  whatsAppModalTitle: "WhatsApp 연결",
  whatsAppModalDescription: "휴대폰의 WhatsApp으로 이 QR 코드를 스캔하여 연결하세요",
  whatsAppStatusTitle: "WhatsApp 연결됨",
  whatsAppStatusDescription: "WhatsApp이 ChatRAG에 성공적으로 연결되었습니다",
  whatsAppInstructions1: "1. 휴대폰에서 WhatsApp을 엽니다",
  whatsAppInstructions2: "2. 메뉴 또는 설정을 탭합니다",
  whatsAppInstructions3: "3. 연결된 기기를 탭합니다",
  whatsAppInstructions4: "4. 기기 연결을 탭합니다",
  whatsAppInstructions5: "5. 휴대폰을 이 화면에 향하게 합니다",
  whatsAppRefreshQR: "QR 코드 새로고침",
  whatsAppTryAgain: "다시 시도",
  whatsAppFailedLoad: "QR 코드 로드 실패",
  whatsAppExpiresIn: "만료 시간: {time}",
  whatsAppPhoneNumber: "전화번호",
  whatsAppStatus: "상태",
  whatsAppActive: "활성",
  whatsAppConnectedFor: "연결 시간",
  whatsAppWorkingMessage: "모든 것이 정상적으로 작동하고 있습니다. WhatsApp으로 전송된 메시지는 ChatRAG에서 자동으로 처리됩니다.",
  whatsAppDisconnect: "WhatsApp 연결 해제",
  whatsAppDisconnecting: "연결 해제 중...",
  whatsAppConfirmDisconnect: "연결 해제 확인",
  whatsAppDisconnectWarning: "정말로 연결을 해제하시겠습니까? 다시 연결하려면 QR 코드를 다시 스캔해야 합니다.",
  whatsAppJustNow: "방금",
  whatsAppConnecting: "연결 중...",
  whatsAppMinute: "분",
  whatsAppMinutes: "분",
  whatsAppHour: "시간",
  whatsAppHours: "시간",
  whatsAppDay: "일",
  whatsAppDays: "일",
  
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