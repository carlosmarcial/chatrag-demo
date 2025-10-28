import { getAppName } from '@/lib/env';

export const ru = {
  // Main chat
  mainPrompt: "Чем могу помочь?",
  
  // Navigation and common UI
  settings: "Настройки",
  general: "Общие",
  logout: "Выйти",
  modelSelector: "Выбрать модель ИИ",
  textSize: "Размер текста",
  themeToggle: "Переключить тему",
  shareChat: "Поделиться чатом",
  uploadDocument: "Загрузить документ",
  viewDocuments: "Просмотр документов",
  
  // Settings modal
  language: "Язык",
  theme: "Тема",
  customBackground: "Пользовательский фон",
  customBackgroundDesc: "Загрузите изображение для настройки фона чата",
  upload: "Загрузить",
  uploading: "Загрузка...",
  currentBackground: "Текущий фон:",
  notificationSound: "Звук уведомлений",
  notificationSoundDesc: "Воспроизводить звук при завершении ответа ИИ",
  soundType: "Тип звука",
  playSound: "Воспроизвести звук",
  highBell: "Высокий колокольчик",
  mediumBell: "Средний колокольчик",
  deepBell: "Глубокий колокольчик",
  subtleBell: "Тонкий колокольчик",
  
  // Admin settings
  admin: "Администратор",
  adminLogin: "Вход администратора",
  adminPassword: "Пароль администратора",
  adminPasswordRequired: "Требуется пароль администратора",
  adminLoginFailed: "Ошибка входа администратора",
  adminPasswordIncorrect: "Неверный пароль",
  notAuthorizedAsAdmin: "Ваш аккаунт не авторизован как администратор",
  loginRequired: "Необходимо войти в систему для доступа к функциям администратора",
  adminVerification: "Проверка администратора",
  adminVerificationDesc: "Нажмите кнопку ниже, чтобы подтвердить свой статус администратора",
  adminVerificationSuccess: "Доступ администратора успешно активирован",
  adminVerificationFailed: "Не удалось пройти проверку администратора",
  verifying: "Проверка...",
  activateAdminAccess: "Активировать доступ администратора",
  loggingIn: "Вход в систему...",
  loggingOut: "Выход из системы...",
  logoutAdmin: "Выход администратора",
  login: "Войти",
  adminAuthenticated: "Администратор авторизован",
  adminAuthenticatedDesc: "Теперь у вас есть доступ к функциям администратора",
  docDashboardReadOnly: "Панель документов только для чтения",
  docDashboardReadOnlyDesc: "Разрешить пользователям просматривать документы в режиме только для чтения",
  documentViewer: "Просмотрщик документов",
  readOnlyMode: "Включен режим только для чтения - документы нельзя изменять",
  documents: "Документы",
  
  // Text size settings
  small: "Маленький",
  default: "По умолчанию",
  large: "Большой",
  
  // Font family settings
  fontFamily: "Семейство шрифтов",
  interDefault: "Inter (По умолчанию)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "Системная",
  lightTheme: "Светлая",
  darkTheme: "Тёмная",
  
  // Language settings
  languageSelector: "Выбрать язык",
  english: "Английский (США)",
  spanish: "Испанский",
  
  // UI switches
  alwaysShowCode: "Всегда показывать код при использовании аналитика данных",
  showFollowUp: "Показывать дополнительные предложения в чатах",
  
  // Archived chats
  archivedChats: "Архивированные чаты",
  archiveAll: "Архивировать все чаты",
  deleteAll: "Удалить все чаты",
  logOut: "Выйти на этом устройстве",
  
  // Other UI elements
  notifications: "Уведомления",
  personalization: "Персонализация",
  speech: "Речь",
  dataControls: "Управление данными",
  builderProfile: "Профиль разработчика",
  connectedApps: "Подключенные приложения",
  security: "Безопасность",
  subscription: "Подписка",
  
  // Input and actions
  messagePlaceholder: "Спросите что угодно",
  sendPrompt: "Отправить запрос",
  stopGenerating: "Остановить генерацию",
  useVoice: "Диктовать",
  stopRecording: "Остановить запись",
  processing: "Обработка...",
  
  // Document handling
  documentReady: "Документ готов",
  processingDocument: "Обработка документа...",
  errorProcessingDocument: "Ошибка обработки документа",
  imageReady: "Изображение готово",
  
  // 3D generation
  generate3DModel: "Нажмите ENTER для создания 3D модели",
  readyFor3DGeneration: "Нажмите ENTER для создания 3D модели",
  modelFrom3DImage: "Изображение для 3D модели",
  
  // Media buttons
  searchWeb: "Поиск в интернете",
  uploadFiles: "Загрузить файл(ы)",
  imageGenerate: "Генерировать изображения",
  videoGenerate: "Генерировать видео",
  threeDGenerate: "3D генерация",
  webSearch: "Поиск",
  reasoningText: "Рассуждение",
  reasoningNotSupported: "Модель не поддерживает рассуждение",
  reasoningEffort: "Усилие рассуждения",
  maxReasoningTokens: "Максимум токенов",
  hideReasoning: "Скрыть рассуждение",
  model: "Модель",
  reasoningMethod: "Метод",
  low: "Низкий",
  medium: "Средний",
  high: "Высокий",
  
  // Suggestion categories
  write: "Написать",
  plan: "Планировать",
  design: "Дизайн",
  backToCategories: "← Назад к категориям",
  
  // Write suggestions
  writeSummary: "резюме о",
  writeEmail: "письмо для",
  writeBlog: "пост в блоге о",
  writeSocial: "пост в социальных сетях",
  
  // Plan suggestions
  planMarketing: "маркетинговую кампанию для",
  planBusiness: "бизнес-предложение для",
  planProduct: "запуск продукта для",
  planLearning: "план обучения по",
  
  // Design suggestions
  designLogo: "небольшой логотип",
  designHero: "главную секцию",
  designLanding: "целевую страницу",
  designSocial: "пост для социальных сетей",
  
  // Sidebar
  pinnedChats: "Закреплённые чаты",
  recentChats: "Недавние чаты",
  searchResults: "Результаты поиска",
  noChats: "Нет чатов",
  noPinnedChats: "Нет закреплённых чатов",
  noChatsAvailable: "Нет доступных чатов",
  closeSidebar: "Закрыть боковую панель",
  openSidebar: "Открыть боковую панель",
  searchChats: "Поиск чатов...",
  
  // Chat actions
  pin: "Закрепить",
  unpin: "Открепить",
  rename: "Переименовать",
  delete: "Удалить",
  newChat: "Новый чат",
  useIncognitoChat: "Использовать инкогнито чат",
  incognitoChatActive: "Инкогнито Чат Активен",
  incognitoChatActiveMessage: "Инкогнито Чат Активен - Сообщения не будут сохранены",
  search: "Поиск",
  github: "GitHub",
  enterChatTitle: "Введите название чата...",
  
  // Folder management
  folders: "Папки",
  newFolder: "Новая папка",
  createNewFolder: "Создать Новую Папку",
  organizeChatsFolders: "Организуйте свои чаты в папки для лучшего управления",
  folderName: "Имя Папки",
  folderColor: "Цвет Папки",
  folderNameRequired: "Имя папки обязательно",
  failedToCreateFolder: "Не удалось создать папку",
  creating: "Создание...",
  create: "Создать",
  cancel: "Отмена",
  moveToFolder: "Переместить в папку",
  removeFromFolder: "Удалить из папки",
  moveToRoot: "Переместить в корень",
  noFolders: "Нет папок",
  noChatsInFolder: "Нет чатов в папке",
  enterFolderName: "Введите имя папки...",
  confirmDeleteFolder: "Вы уверены, что хотите удалить эту папку?",
  deleteFolder: "Удалить Папку",
  confirmDeleteFolderMessage: "Вы уверены, что хотите удалить эту папку?",
  deleteFolderWithChats: "Также удалить все чаты в этой папке",
  deleteFolderKeepChats: "Чаты будут перемещены на корневой уровень",
  chats: "чаты",
  
  // Disclaimer
  disclaimer: `${getAppName()} может делать ошибки. Рекомендуется проверять важную информацию.`,

  // Document Dashboard
  documentManagement: "Управление документами",
  uploadNew: "Загрузить новый",
  storedDocuments: "Сохранённые документы",
  dragDropDocuments: "Перетащите ваши документы",
  supportedFileTypes: "Файлы PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB",
  selectFiles: "Выбрать файлы",
  searchDocuments: "Поиск документов...",
  noDocumentsFound: "Документы не найдены",
  processingStatus: "обработка",
  readyStatus: "готов",
  failedStatus: "ошибка",
  partialStatus: "частично",
  uploadDate: "Дата загрузки",
  docName: "Название",
  docStatus: "Статус",
  docSize: "Размер",
  errorPrefix: "Ошибка:",
  uploadButton: "Загрузить",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "Документ обработан с частичным успехом блоков",
  deleteDocument: "Удалить документ",
  confirmDeleteDocument: "Вы уверены, что хотите удалить этот документ?",
  confirmDeleteChat: "Подтвердить Удаление",
  confirmDeleteChatMessage: "Вы уверены, что хотите удалить",
  actionCannotBeUndone: "Это действие нельзя отменить.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "Загрузить временный документ",
  uploadImage: "Загрузить изображение",
  
  // MCP Tools
  mcpToolsButton: "Инструменты MCP",
  availableMcpTools: "Доступные инструменты MCP",
  loadingTools: "Загрузка инструментов...",
  noToolsAvailable: "Нет доступных инструментов",
  zapierTools: "Инструменты Zapier",
  otherTools: "Другие инструменты",
  learnMore: "Узнать больше",
  fromServer: "С сервера:",
  runTool: "Запустить инструмент",
  cancelTool: "Отмена",
  waitingForApproval: "Ожидание вашего подтверждения...",
  executingTool: "Выполнение инструмента, пожалуйста, подождите...",
  toolError: "Произошла ошибка при выполнении инструмента.",
  
  // Chat message action tooltips
  copyTooltip: "Копировать",
  copiedTooltip: "Скопировано!",
  textToSpeechTooltip: "Воспроизвести текст",
  downloadPdfTooltip: "Скачать как PDF",
  sendToKnowledgeBase: "Добавить в RAG",
  
  // 3D Model Viewer
  clickDragRotateModel: "Нажмите и перетащите для поворота модели",
  download: "Скачать",
  threeDModel: "3D Модель",
  // Image Generation Modal
  imageGeneration: "Генерация изображений",
  generateImage: "Создать изображение",
  size: "Размер",
  numberOfImages: "Количество изображений",
  sourceImages: "Исходные изображения",
  safetyChecker: "Проверка безопасности",
  editImage: "Редактировать изображение",
  editImageInstructions: "Инструкции для редактирования",
  uploadSourceImage: "Загрузить исходное изображение",
  uploadImage: "Загрузить изображение",
  addChangeImage: "Добавить/Изменить изображение",
  clearAll: "Очистить все",
  upToImagesLimit: "(до 10 изображений < 50МБ каждое)",
  strength: "Интенсивность",
  strengthTooltip: "Насколько сильно трансформировать изображение",
  imageSafetyNote: "Этот провайдер включает проверки безопасности по умолчанию",
  generating: "Генерация...",

  // Video Generation Modal
  videoGeneration: "Генерация видео",
  generateVideo: "Создать видео",
  mode: "Режим",
  fastMode: "Быстрый режим",
  fasterGenerationMode: "Быстрая генерация (более низкое качество)",
  standardQualityMode: "Стандартное качество (медленнее)",
  aspectRatio: "Соотношение сторон",
  resolution: "Разрешение",
  duration: "Продолжительность",
  seconds: "секунд",
  enhancePrompt: "Улучшить запрос",
  enhancePromptTooltip: "Автоматически улучшить ваш запрос для лучших результатов",
  autoFix: "Автоисправление",
  autoFixTooltip: "Автоматически исправлять проблемы в сгенерированном видео",
  generateAudio: "Создать аудио",
  generateAudioTooltip: "Создать аудио для видео",
  loopVideo: "Зациклить видео",
  loopVideoTooltip: "Сделать бесшовное повторение видео",
  sourceImage: "Исходное изображение",
  changeImage: "Изменить изображение",
  videoSizeLimit: "(< 50МБ)",
  videoWithContext: "Видео + Контекст",
  useDocumentContext: "Использовать контекст документа",
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
  today: "Сегодня",
  yesterday: "Вчера",
  thisWeek: "На этой неделе",
  older: "Старые",
  
  // Relative time
  justNow: "Только что",
  minutesAgo: "минут назад",
  oneHourAgo: "1 час назад",
  hoursAgo: "часов назад",
  oneDayAgo: "1 день назад",
  daysAgo: "дней назад",
  oneWeekAgo: "1 неделю назад",
  weeksAgo: "недель назад",
  
  // Share chat
  shareChatTitle: "Поделиться чатом",
  shareChatDescription: "Ваш чат был опубликован. Скопируйте ссылку ниже, чтобы поделиться с другими.",
  generateShareLink: "Создать ссылку для публикации",
  generateShareLinkDescription: "Создать общедоступную ссылку для этого чата.",
  generatingLink: "Создание ссылки...",
  copy: "Копировать",
  
  // Shared chat layout
  sharedChatReadOnly: "Это просмотр только для чтения общего чата.",
  created: "Создано",
  
  // Mobile toolbar
  themeLabel: "Тема",
  textSizeLabel: "Размер текста",
  shareLabel: "Поделиться",
  documentsLabel: "Документы",
  
  // WhatsApp Integration
  connectWhatsApp: "Подключить WhatsApp",
  whatsAppConnected: "WhatsApp: Подключен",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: Сканировать QR",
  whatsAppProcessing: "Обработка...",
  whatsAppModalTitle: "Подключить WhatsApp",
  whatsAppModalDescription: "Отсканируйте этот QR-код с помощью WhatsApp на вашем телефоне для подключения",
  whatsAppStatusTitle: "WhatsApp подключен",
  whatsAppStatusDescription: "Ваш WhatsApp успешно подключен к ChatRAG",
  whatsAppInstructions1: "1. Откройте WhatsApp на вашем телефоне",
  whatsAppInstructions2: "2. Нажмите Меню или Настройки",
  whatsAppInstructions3: "3. Нажмите Связанные устройства",
  whatsAppInstructions4: "4. Нажмите Привязать устройство",
  whatsAppInstructions5: "5. Наведите телефон на этот экран",
  whatsAppRefreshQR: "Обновить QR-код",
  whatsAppTryAgain: "Попробовать снова",
  whatsAppFailedLoad: "Ошибка загрузки QR-кода",
  whatsAppExpiresIn: "Истекает через: {time}",
  whatsAppPhoneNumber: "Номер телефона",
  whatsAppStatus: "Статус",
  whatsAppActive: "Активен",
  whatsAppConnectedFor: "Подключен",
  whatsAppWorkingMessage: "Все работает правильно. Сообщения, отправленные на ваш WhatsApp, будут автоматически обрабатываться ChatRAG.",
  whatsAppDisconnect: "Отключить WhatsApp",
  whatsAppDisconnecting: "Отключение...",
  whatsAppConfirmDisconnect: "Подтвердить отключение",
  whatsAppDisconnectWarning: "Вы уверены, что хотите отключиться? Вам нужно будет снова отсканировать QR-код для повторного подключения.",
  whatsAppJustNow: "Только что",
  whatsAppConnecting: "Подключение...",
  whatsAppMinute: "минута",
  whatsAppMinutes: "минут",
  whatsAppHour: "час",
  whatsAppHours: "часов",
  whatsAppDay: "день",
  whatsAppDays: "дней",
  
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