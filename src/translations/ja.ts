import { getAppName } from '@/lib/env';

export const ja = {
  // Main chat
  mainPrompt: "何かお手伝いできることはありますか？",
  
  // Navigation and common UI
  settings: "設定",
  general: "一般",
  logout: "ログアウト",
  modelSelector: "AIモデルを選択",
  textSize: "文字サイズ",
  themeToggle: "テーマを切り替え",
  shareChat: "チャットを共有",
  uploadDocument: "ドキュメントをアップロード",
  viewDocuments: "ドキュメントを表示",
  
  // Settings modal
  language: "言語",
  theme: "テーマ",
  customBackground: "カスタム背景",
  customBackgroundDesc: "画像をアップロードしてチャットの背景をカスタマイズ",
  upload: "アップロード",
  uploading: "アップロード中...",
  currentBackground: "現在の背景：",
  notificationSound: "通知音",
  notificationSoundDesc: "AIが応答を完了したときに音を再生",
  soundType: "音の種類",
  playSound: "音を再生",
  highBell: "高音ベル",
  mediumBell: "中音ベル",
  deepBell: "低音ベル",
  subtleBell: "控えめなベル",
  
  // Admin settings
  admin: "管理者",
  adminLogin: "管理者ログイン",
  adminPassword: "管理者パスワード",
  adminPasswordRequired: "管理者パスワードが必要です",
  adminLoginFailed: "管理者ログインに失敗しました",
  adminPasswordIncorrect: "パスワードが正しくありません",
  notAuthorizedAsAdmin: "あなたのアカウントは管理者として認証されていません",
  loginRequired: "管理者機能にアクセスするにはログインが必要です",
  adminVerification: "管理者の確認",
  adminVerificationDesc: "下のボタンをクリックして管理者ステータスを確認します",
  adminVerificationSuccess: "管理者アクセスが正常に有効化されました",
  adminVerificationFailed: "管理者の確認に失敗しました",
  verifying: "確認中...",
  activateAdminAccess: "管理者アクセスを有効化",
  loggingIn: "ログイン中...",
  loggingOut: "ログアウト中...",
  logoutAdmin: "管理者ログアウト",
  login: "ログイン",
  adminAuthenticated: "管理者認証済み",
  adminAuthenticatedDesc: "管理者機能にアクセスできるようになりました",
  docDashboardReadOnly: "読み取り専用ドキュメントダッシュボード",
  docDashboardReadOnlyDesc: "ユーザーがドキュメントを読み取り専用モードで表示することを許可",
  documentViewer: "ドキュメントビューア",
  readOnlyMode: "読み取り専用モードが有効 - ドキュメントは変更できません",
  documents: "ドキュメント",
  
  // Text size settings
  small: "小",
  default: "デフォルト",
  large: "大",
  
  // Font family settings
  fontFamily: "フォントファミリー",
  interDefault: "Inter（デフォルト）",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "システム",
  lightTheme: "ライト",
  darkTheme: "ダーク",
  
  // Language settings
  languageSelector: "言語を選択",
  english: "英語（米国）",
  spanish: "スペイン語",
  portuguese: "ポルトガル語",
  lithuanian: "リトアニア語",
  chinese: "中国語（簡体字）",
  hindi: "ヒンディー語",
  arabic: "アラビア語",
  japanese: "日本語",
  
  // UI switches
  alwaysShowCode: "データアナリストを使用する際は常にコードを表示",
  showFollowUp: "チャットでフォローアップの提案を表示",
  
  // Archived chats
  archivedChats: "アーカイブされたチャット",
  archiveAll: "すべてのチャットをアーカイブ",
  deleteAll: "すべてのチャットを削除",
  logOut: "このデバイスからログアウト",
  
  // Other UI elements
  notifications: "通知",
  personalization: "パーソナライゼーション",
  speech: "音声",
  dataControls: "データ制御",
  builderProfile: "ビルダープロフィール",
  connectedApps: "接続されたアプリ",
  security: "セキュリティ",
  subscription: "サブスクリプション",
  
  // Input and actions
  messagePlaceholder: "何でも聞いてください",
  sendPrompt: "プロンプトを送信",
  stopGenerating: "生成を停止",
  useVoice: "音声入力",
  stopRecording: "録音を停止",
  processing: "処理中...",
  
  // Document handling
  documentReady: "ドキュメント準備完了",
  processingDocument: "ドキュメント処理中...",
  errorProcessingDocument: "ドキュメント処理エラー",
  imageReady: "画像準備完了",
  
  // 3D generation
  generate3DModel: "ENTERキーを押して3Dモデルを作成",
  readyFor3DGeneration: "ENTERキーを押して3Dモデルを作成",
  modelFrom3DImage: "3Dモデル用画像",
  
  // Media buttons
  searchWeb: "ウェブを検索",
  uploadFiles: "ファイルをアップロード",
  imageGenerate: "画像を生成",
  videoGenerate: "動画を生成",
  threeDGenerate: "3D生成",
  webSearch: "検索",
  reasoningText: "推論",
  reasoningNotSupported: "モデルは推論をサポートしていません",
  reasoningEffort: "推論レベル",
  maxReasoningTokens: "最大トークン",
  hideReasoning: "推論を非表示",
  model: "モデル",
  reasoningMethod: "方法",
  low: "低",
  medium: "中",
  high: "高",
  
  // Suggestion categories
  write: "書く",
  plan: "計画",
  design: "デザイン",
  backToCategories: "← カテゴリに戻る",
  
  // Write suggestions
  writeSummary: "について要約を",
  writeEmail: "へのメールを",
  writeBlog: "についてのブログ記事を",
  writeSocial: "ソーシャルメディアの更新を",
  
  // Plan suggestions
  planMarketing: "のマーケティングキャンペーンを",
  planBusiness: "のビジネス提案を",
  planProduct: "の製品ローンチを",
  planLearning: "についての学習ロードマップを",
  
  // Design suggestions
  designLogo: "小さなロゴを",
  designHero: "ヒーローセクションを",
  designLanding: "ランディングページを",
  designSocial: "ソーシャルメディア投稿を",
  
  // Sidebar
  pinnedChats: "ピン留めされたチャット",
  recentChats: "最近のチャット",
  searchResults: "検索結果",
  noChats: "チャットがありません",
  noPinnedChats: "ピン留めされたチャットがありません",
  noChatsAvailable: "利用可能なチャットがありません",
  closeSidebar: "サイドバーを閉じる",
  openSidebar: "サイドバーを開く",
  searchChats: "チャットを検索...",
  
  // Chat actions
  pin: "ピン留め",
  unpin: "ピン留め解除",
  rename: "名前を変更",
  delete: "削除",
  newChat: "新しいチャット",
  useIncognitoChat: "シークレットチャットを使用",
  incognitoChatActive: "シークレットチャット有効",
  incognitoChatActiveMessage: "シークレットチャット有効 - メッセージは保存されません",
  search: "検索",
  github: "GitHub",
  enterChatTitle: "チャットタイトルを入力...",
  
  // Folder management
  folders: "フォルダー",
  newFolder: "新しいフォルダー",
  createNewFolder: "新しいフォルダーを作成",
  organizeChatsFolders: "チャットをフォルダーに整理して管理を向上させましょう",
  folderName: "フォルダー名",
  folderColor: "フォルダーの色",
  folderNameRequired: "フォルダー名は必須です",
  failedToCreateFolder: "フォルダーの作成に失敗しました",
  creating: "作成中...",
  create: "作成",
  cancel: "キャンセル",
  moveToFolder: "フォルダーに移動",
  removeFromFolder: "フォルダーから削除",
  moveToRoot: "ルートに移動",
  noFolders: "フォルダーがありません",
  noChatsInFolder: "フォルダー内にチャットがありません",
  enterFolderName: "フォルダー名を入力...",
  confirmDeleteFolder: "このフォルダーを削除してもよろしいですか？",
  deleteFolder: "フォルダーを削除",
  confirmDeleteFolderMessage: "このフォルダーを削除してもよろしいですか？",
  deleteFolderWithChats: "このフォルダー内のすべてのチャットも削除する",
  deleteFolderKeepChats: "チャットはルートレベルに移動されます",
  chats: "チャット",
  
  // Disclaimer
  disclaimer: `${getAppName()}は間違いを犯す可能性があります。重要な情報については確認することを検討してください。`,

  // Document Dashboard
  documentManagement: "ドキュメント管理",
  uploadNew: "新規アップロード",
  storedDocuments: "保存されたドキュメント",
  dragDropDocuments: "ドキュメントをドラッグ＆ドロップ",
  supportedFileTypes: "PDF、DOCX、PPTX、XLSX、HTML、TXT、RTF、EPUBファイル",
  selectFiles: "ファイルを選択",
  searchDocuments: "ドキュメントを検索...",
  noDocumentsFound: "ドキュメントが見つかりません",
  processingStatus: "処理中",
  readyStatus: "準備完了",
  failedStatus: "失敗",
  partialStatus: "部分的",
  uploadDate: "アップロード日",
  docName: "名前",
  docStatus: "ステータス",
  docSize: "サイズ",
  errorPrefix: "エラー：",
  uploadButton: "アップロード",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "ドキュメントが部分的なチャンク成功で処理されました",
  deleteDocument: "ドキュメントを削除",
  confirmDeleteDocument: "このドキュメントを削除しますか？",
  confirmDeleteChat: "削除の確認",
  confirmDeleteChatMessage: "本当に削除しますか",
  actionCannotBeUndone: "この操作は元に戻すことができません。",
  
  // Unified Upload Button
  uploadTemporaryDocument: "一時ドキュメントをアップロード",
  uploadImage: "画像をアップロード",
  
  // MCP Tools
  mcpToolsButton: "MCPツール",
  availableMcpTools: "利用可能なMCPツール",
  loadingTools: "ツールを読み込み中...",
  noToolsAvailable: "利用可能なツールがありません",
  zapierTools: "Zapierツール",
  otherTools: "その他のツール",
  learnMore: "詳細を見る",
  fromServer: "サーバーから：",
  runTool: "ツールを実行",
  cancelTool: "キャンセル",
  waitingForApproval: "承認をお待ちしています...",
  executingTool: "ツールを実行中です。お待ちください...",
  toolError: "ツールの実行中にエラーが発生しました。",
  
  // Chat message action tooltips
  copyTooltip: "コピー",
  copiedTooltip: "コピーしました！",
  textToSpeechTooltip: "テキストを音声で再生",
  downloadPdfTooltip: "PDFとしてダウンロード",
  sendToKnowledgeBase: "RAGに追加",
  
  // 3D Model Viewer
  clickDragRotateModel: "クリック＆ドラッグでモデルを回転",
  download: "ダウンロード",
  threeDModel: "3Dモデル",
  // Image Generation Modal
  imageGeneration: "画像生成",
  generateImage: "画像を生成",
  size: "サイズ",
  numberOfImages: "画像数",
  sourceImages: "ソース画像",
  safetyChecker: "安全性チェッカー",
  editImage: "画像を編集",
  editImageInstructions: "編集の説明",
  uploadSourceImage: "ソース画像をアップロード",
  uploadImage: "画像をアップロード",
  addChangeImage: "画像を追加/変更",
  clearAll: "すべてクリア",
  upToImagesLimit: "（最大10枚の画像、それぞれ50MB未満）",
  strength: "強度",
  strengthTooltip: "画像の変換度合い",
  imageSafetyNote: "このプロバイダーはデフォルトで安全性チェックを含みます",
  generating: "生成中...",

  // Video Generation Modal
  videoGeneration: "動画生成",
  generateVideo: "動画を生成",
  mode: "モード",
  fastMode: "高速モード",
  fasterGenerationMode: "高速生成（低品質）",
  standardQualityMode: "標準品質（遅い）",
  aspectRatio: "アスペクト比",
  resolution: "解像度",
  duration: "時間",
  seconds: "秒",
  enhancePrompt: "プロンプトを強化",
  enhancePromptTooltip: "より良い結果のためにプロンプトを自動的に改善",
  autoFix: "自動修正",
  autoFixTooltip: "生成された動画の問題を自動的に修正",
  generateAudio: "オーディオを生成",
  generateAudioTooltip: "動画用のオーディオを生成",
  loopVideo: "ループ動画",
  loopVideoTooltip: "動画をシームレスにループさせる",
  sourceImage: "ソース画像",
  changeImage: "画像を変更",
  videoSizeLimit: "（<50MB）",
  videoWithContext: "動画 + コンテキスト",
  useDocumentContext: "ドキュメントコンテキストを使用",
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
  today: "今日",
  yesterday: "昨日",
  thisWeek: "今週",
  older: "古い",
  
  // Relative time
  justNow: "たった今",
  minutesAgo: "分前",
  oneHourAgo: "1時間前",
  hoursAgo: "時間前",
  oneDayAgo: "1日前",
  daysAgo: "日前",
  oneWeekAgo: "1週間前",
  weeksAgo: "週間前",
  
  // Share chat
  shareChatTitle: "チャットを共有",
  shareChatDescription: "チャットが共有されました。以下のリンクをコピーして他の人と共有してください。",
  generateShareLink: "共有リンクを生成",
  generateShareLinkDescription: "このチャット用の共有可能なリンクを生成します。",
  generatingLink: "リンクを生成中...",
  copy: "コピー",
  
  // Shared chat layout
  sharedChatReadOnly: "これは共有チャット会話の読み取り専用ビューです。",
  created: "作成日",
  
  // Mobile toolbar
  themeLabel: "テーマ",
  textSizeLabel: "文字サイズ",
  shareLabel: "共有",
  documentsLabel: "ドキュメント",
  
  // WhatsApp Integration
  connectWhatsApp: "WhatsAppを接続",
  whatsAppConnected: "WhatsApp：接続済み",
  whatsAppConnectedWithNumber: "WhatsApp：{phoneNumber}",
  whatsAppScanQR: "WhatsApp：QRをスキャン",
  whatsAppProcessing: "処理中...",
  whatsAppModalTitle: "WhatsAppを接続",
  whatsAppModalDescription: "携帯電話のWhatsAppでこのQRコードをスキャンして接続してください",
  whatsAppStatusTitle: "WhatsApp接続済み",
  whatsAppStatusDescription: "WhatsAppはChatRAGに正常に接続されました",
  whatsAppInstructions1: "1. 携帯電話でWhatsAppを開く",
  whatsAppInstructions2: "2. メニューまたは設定をタップ",
  whatsAppInstructions3: "3. リンク済みデバイスをタップ",
  whatsAppInstructions4: "4. デバイスをリンクをタップ",
  whatsAppInstructions5: "5. 携帯電話をこの画面に向ける",
  whatsAppRefreshQR: "QRコードを更新",
  whatsAppTryAgain: "もう一度試す",
  whatsAppFailedLoad: "QRコードの読み込みに失敗しました",
  whatsAppExpiresIn: "有効期限：{time}",
  whatsAppPhoneNumber: "電話番号",
  whatsAppStatus: "ステータス",
  whatsAppActive: "アクティブ",
  whatsAppConnectedFor: "接続時間",
  whatsAppWorkingMessage: "すべて正常に動作しています。WhatsAppに送信されたメッセージはChatRAGで自動的に処理されます。",
  whatsAppDisconnect: "WhatsAppを切断",
  whatsAppDisconnecting: "切断中...",
  whatsAppConfirmDisconnect: "切断を確認",
  whatsAppDisconnectWarning: "本当に切断しますか？再接続するにはQRコードを再度スキャンする必要があります。",
  whatsAppJustNow: "たった今",
  whatsAppConnecting: "接続中...",
  whatsAppMinute: "分",
  whatsAppMinutes: "分",
  whatsAppHour: "時間",
  whatsAppHours: "時間",
  whatsAppDay: "日",
  whatsAppDays: "日",
  
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