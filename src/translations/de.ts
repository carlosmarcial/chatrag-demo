import { getAppName } from '@/lib/env';

export const de = {
  // Main chat
  mainPrompt: "Womit kann ich Ihnen helfen?",
  
  // Navigation and common UI
  settings: "Einstellungen",
  general: "Allgemein",
  logout: "Abmelden",
  modelSelector: "KI-Modell auswählen",
  textSize: "Textgröße",
  themeToggle: "Design wechseln",
  shareChat: "Chat teilen",
  uploadDocument: "Dokument hochladen",
  viewDocuments: "Dokumente anzeigen",
  
  // Settings modal
  language: "Sprache",
  theme: "Design",
  customBackground: "Benutzerdefinierter Hintergrund",
  customBackgroundDesc: "Laden Sie ein Bild hoch, um Ihren Chat-Hintergrund anzupassen",
  upload: "Hochladen",
  uploading: "Wird hochgeladen...",
  currentBackground: "Aktueller Hintergrund:",
  notificationSound: "Benachrichtigungston",
  notificationSoundDesc: "Einen Ton abspielen, wenn die KI ihre Antwort beendet",
  soundType: "Tonart",
  playSound: "Ton abspielen",
  highBell: "Hohe Glocke",
  mediumBell: "Mittlere Glocke",
  deepBell: "Tiefe Glocke",
  subtleBell: "Dezente Glocke",
  
  // Admin settings
  admin: "Administrator",
  adminLogin: "Administrator-Anmeldung",
  adminPassword: "Administrator-Passwort",
  adminPasswordRequired: "Administrator-Passwort ist erforderlich",
  adminLoginFailed: "Administrator-Anmeldung fehlgeschlagen",
  adminPasswordIncorrect: "Passwort ist falsch",
  notAuthorizedAsAdmin: "Ihr Konto ist nicht als Administrator autorisiert",
  loginRequired: "Sie müssen angemeldet sein, um auf Administrator-Funktionen zugreifen zu können",
  adminVerification: "Administrator-Verifizierung",
  adminVerificationDesc: "Klicken Sie auf die Schaltfläche unten, um Ihren Administratorstatus zu verifizieren",
  adminVerificationSuccess: "Administratorzugriff erfolgreich aktiviert",
  adminVerificationFailed: "Administrator-Verifizierung fehlgeschlagen",
  verifying: "Wird verifiziert...",
  activateAdminAccess: "Administratorzugriff aktivieren",
  loggingIn: "Wird angemeldet...",
  loggingOut: "Wird abgemeldet...",
  logoutAdmin: "Administrator abmelden",
  login: "Anmelden",
  adminAuthenticated: "Administrator authentifiziert",
  adminAuthenticatedDesc: "Sie haben jetzt Zugriff auf Administrator-Funktionen",
  docDashboardReadOnly: "Schreibgeschütztes Dokument-Dashboard",
  docDashboardReadOnlyDesc: "Benutzern erlauben, Dokumente im schreibgeschützten Modus anzuzeigen",
  documentViewer: "Dokument-Viewer",
  readOnlyMode: "Schreibgeschützter Modus aktiviert - Dokumente können nicht geändert werden",
  documents: "Dokumente",
  
  // Text size settings
  small: "Klein",
  default: "Standard",
  large: "Groß",
  
  // Font family settings
  fontFamily: "Schriftfamilie",
  interDefault: "Inter (Standard)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "System",
  lightTheme: "Hell",
  darkTheme: "Dunkel",
  
  // Language settings
  languageSelector: "Sprache auswählen",
  english: "Englisch (USA)",
  spanish: "Spanisch",
  portuguese: "Portugiesisch",
  lithuanian: "Litauisch",
  chinese: "Chinesisch (Vereinfacht)",
  hindi: "Hindi",
  arabic: "Arabisch",
  japanese: "Japanisch",
  german: "Deutsch",
  
  // UI switches
  alwaysShowCode: "Code beim Verwenden des Datenanalysten immer anzeigen",
  showFollowUp: "Nachfolge-Vorschläge in Chats anzeigen",
  
  // Archived chats
  archivedChats: "Archivierte Chats",
  archiveAll: "Alle Chats archivieren",
  deleteAll: "Alle Chats löschen",
  logOut: "Von diesem Gerät abmelden",
  
  // Other UI elements
  notifications: "Benachrichtigungen",
  personalization: "Personalisierung",
  speech: "Sprache",
  dataControls: "Datensteuerung",
  builderProfile: "Builder-Profil",
  connectedApps: "Verbundene Apps",
  security: "Sicherheit",
  subscription: "Abonnement",
  
  // Input and actions
  messagePlaceholder: "Fragen Sie alles",
  sendPrompt: "Eingabe senden",
  stopGenerating: "Generierung stoppen",
  useVoice: "Diktieren",
  stopRecording: "Aufnahme stoppen",
  processing: "Wird verarbeitet...",
  
  // Document handling
  documentReady: "Dokument bereit",
  processingDocument: "Dokument wird verarbeitet...",
  errorProcessingDocument: "Fehler beim Verarbeiten des Dokuments",
  imageReady: "Bild bereit",
  
  // 3D generation
  generate3DModel: "ENTER drücken, um 3D-Modell zu erstellen",
  readyFor3DGeneration: "ENTER drücken, um 3D-Modell zu erstellen",
  modelFrom3DImage: "Bild für 3D-Modell",
  
  // Media buttons
  searchWeb: "Im Web suchen",
  uploadFiles: "Datei(en) hochladen",
  imageGenerate: "Bilder generieren",
  videoGenerate: "Video generieren",
  threeDGenerate: "3D-Generierung",
  webSearch: "Suchen",
  reasoningText: "Überlegung",
  reasoningNotSupported: "Das Modell unterstützt keine Überlegung",
  reasoningEffort: "Überlegungsaufwand",
  maxReasoningTokens: "Maximale Tokens",
  hideReasoning: "Überlegung ausblenden",
  model: "Modell",
  reasoningMethod: "Methode",
  low: "Niedrig",
  medium: "Mittel",
  high: "Hoch",
  
  // Suggestion categories
  write: "Schreiben",
  plan: "Planen",
  design: "Gestalten",
  backToCategories: "← Zurück zu Kategorien",
  
  // Write suggestions
  writeSummary: "eine Zusammenfassung über",
  writeEmail: "eine E-Mail an",
  writeBlog: "einen Blog-Beitrag über",
  writeSocial: "ein Social Media-Update",
  
  // Plan suggestions
  planMarketing: "Marketingkampagne für",
  planBusiness: "Geschäftsvorschlag für",
  planProduct: "Produkteinführung für",
  planLearning: "Lernplan über",
  
  // Design suggestions
  designLogo: "ein kleines Logo",
  designHero: "einen Hero-Bereich",
  designLanding: "eine Landingpage",
  designSocial: "einen Social Media-Post",
  
  // Sidebar
  pinnedChats: "Angeheftete Chats",
  recentChats: "Aktuelle Chats",
  searchResults: "Suchergebnisse",
  noChats: "Keine Chats",
  noPinnedChats: "Keine angehefteten Chats",
  noChatsAvailable: "Keine Chats verfügbar",
  closeSidebar: "Seitenleiste schließen",
  openSidebar: "Seitenleiste öffnen",
  searchChats: "Chats durchsuchen...",
  
  // Chat actions
  pin: "Anheften",
  unpin: "Loslösen",
  rename: "Umbenennen",
  delete: "Löschen",
  newChat: "Neuer Chat",
  useIncognitoChat: "Inkognito-Chat verwenden",
  incognitoChatActive: "Inkognito-Chat Aktiv",
  incognitoChatActiveMessage: "Inkognito-Chat Aktiv - Nachrichten werden nicht gespeichert",
  search: "Suchen",
  github: "GitHub",
  enterChatTitle: "Chat-Titel eingeben...",
  
  // Folder management
  folders: "Ordner",
  newFolder: "Neuer Ordner",
  createNewFolder: "Neuen Ordner Erstellen",
  organizeChatsFolders: "Organisieren Sie Ihre Chats in Ordnern für eine bessere Verwaltung",
  folderName: "Ordnername",
  folderColor: "Ordnerfarbe",
  folderNameRequired: "Ordnername ist erforderlich",
  failedToCreateFolder: "Fehler beim Erstellen des Ordners",
  creating: "Erstelle...",
  create: "Erstellen",
  cancel: "Abbrechen",
  moveToFolder: "In Ordner verschieben",
  removeFromFolder: "Aus Ordner entfernen",
  moveToRoot: "Zur Wurzel verschieben",
  noFolders: "Keine Ordner",
  noChatsInFolder: "Keine Chats im Ordner",
  enterFolderName: "Ordnernamen eingeben...",
  confirmDeleteFolder: "Sind Sie sicher, dass Sie diesen Ordner löschen möchten?",
  deleteFolder: "Ordner Löschen",
  confirmDeleteFolderMessage: "Sind Sie sicher, dass Sie diesen Ordner löschen möchten?",
  deleteFolderWithChats: "Auch alle Chats in diesem Ordner löschen",
  deleteFolderKeepChats: "Chats werden auf die Stammebene verschoben",
  chats: "Chats",
  
  // Disclaimer
  disclaimer: `${getAppName()} kann Fehler machen. Überprüfen Sie wichtige Informationen.`,

  // Document Dashboard
  documentManagement: "Dokumentenverwaltung",
  uploadNew: "Neu hochladen",
  storedDocuments: "Gespeicherte Dokumente",
  dragDropDocuments: "Ziehen Sie Ihre Dokumente hierher",
  supportedFileTypes: "PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB-Dateien",
  selectFiles: "Dateien auswählen",
  searchDocuments: "Dokumente durchsuchen...",
  noDocumentsFound: "Keine Dokumente gefunden",
  processingStatus: "wird verarbeitet",
  readyStatus: "bereit",
  failedStatus: "fehlgeschlagen",
  partialStatus: "teilweise",
  uploadDate: "Upload-Datum",
  docName: "Name",
  docStatus: "Status",
  docSize: "Größe",
  errorPrefix: "Fehler:",
  uploadButton: "Hochladen",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "Dokument mit teilweisem Chunk-Erfolg verarbeitet",
  deleteDocument: "Dokument löschen",
  confirmDeleteDocument: "Sind Sie sicher, dass Sie dieses Dokument löschen möchten?",
  confirmDeleteChat: "Löschen Bestätigen",
  confirmDeleteChatMessage: "Sind Sie sicher, dass Sie löschen möchten",
  actionCannotBeUndone: "Diese Aktion kann nicht rückgängig gemacht werden.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "Temporäres Dokument hochladen",
  uploadImage: "Bild hochladen",
  
  // MCP Tools
  mcpToolsButton: "MCP-Tools",
  availableMcpTools: "Verfügbare MCP-Tools",
  loadingTools: "Tools werden geladen...",
  noToolsAvailable: "Keine Tools verfügbar",
  zapierTools: "Zapier-Tools",
  otherTools: "Andere Tools",
  learnMore: "Mehr erfahren",
  fromServer: "Vom Server:",
  runTool: "Tool ausführen",
  cancelTool: "Abbrechen",
  waitingForApproval: "Warten auf Ihre Genehmigung...",
  executingTool: "Tool wird ausgeführt, bitte warten...",
  toolError: "Ein Fehler ist beim Ausführen des Tools aufgetreten.",
  
  // Chat message action tooltips
  copyTooltip: "Kopieren",
  copiedTooltip: "Kopiert!",
  textToSpeechTooltip: "Text-zu-Sprache abspielen",
  downloadPdfTooltip: "Als PDF herunterladen",
  sendToKnowledgeBase: "Zu RAG hinzufügen",
  
  // 3D Model Viewer
  clickDragRotateModel: "Klicken und ziehen, um das Modell zu drehen",
  download: "Herunterladen",
  threeDModel: "3D-Modell",
  // Image Generation Modal
  imageGeneration: "Bildgenerierung",
  generateImage: "Bild Generieren",
  size: "Größe",
  numberOfImages: "Anzahl der Bilder",
  sourceImages: "Quellbilder",
  safetyChecker: "Sicherheitsprüfung",
  editImage: "Bild Bearbeiten",
  editImageInstructions: "Anweisungen zum Bearbeiten",
  uploadSourceImage: "Quellbild hochladen",
  uploadImage: "Bild Hochladen",
  addChangeImage: "Bild Hinzufügen/Ändern",
  clearAll: "Alles Löschen",
  upToImagesLimit: "(bis zu 10 Bilder < 50MB jeweils)",
  strength: "Stärke",
  strengthTooltip: "Wie stark das Bild transformiert werden soll",
  imageSafetyNote: "Dieser Anbieter enthält standardmäßig Sicherheitsprüfungen",
  generating: "Generiere...",

  // Video Generation Modal
  videoGeneration: "Videogenerierung",
  generateVideo: "Video Generieren",
  mode: "Modus",
  fastMode: "Schnellmodus",
  fasterGenerationMode: "Schnellere Generierung (niedrigere Qualität)",
  standardQualityMode: "Standardqualität (langsamer)",
  aspectRatio: "Seitenverhältnis",
  resolution: "Auflösung",
  duration: "Dauer",
  seconds: "Sekunden",
  enhancePrompt: "Prompt Verbessern",
  enhancePromptTooltip: "Automatisch Ihren Prompt für bessere Ergebnisse verbessern",
  autoFix: "Auto-Korrektur",
  autoFixTooltip: "Automatisch Probleme im generierten Video beheben",
  generateAudio: "Audio Generieren",
  generateAudioTooltip: "Audio für das Video generieren",
  loopVideo: "Video-Schleife",
  loopVideoTooltip: "Das Video nahtlos wiederholen",
  sourceImage: "Quellbild",
  changeImage: "Bild Ändern",
  videoSizeLimit: "(< 50MB)",
  videoWithContext: "Video + Kontext",
  useDocumentContext: "Dokumentkontext verwenden",
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
  today: "Heute",
  yesterday: "Gestern",
  thisWeek: "Diese Woche",
  older: "Älter",
  
  // Relative time
  justNow: "Gerade eben",
  minutesAgo: "Minuten her",
  oneHourAgo: "vor 1 Stunde",
  hoursAgo: "Stunden her",
  oneDayAgo: "vor 1 Tag",
  daysAgo: "Tage her",
  oneWeekAgo: "vor 1 Woche",
  weeksAgo: "Wochen her",
  
  // Share chat
  shareChatTitle: "Chat teilen",
  shareChatDescription: "Ihr Chat wurde geteilt. Kopieren Sie den untenstehenden Link, um ihn mit anderen zu teilen.",
  generateShareLink: "Freigabe-Link erstellen",
  generateShareLinkDescription: "Einen teilbaren Link für diesen Chat erstellen.",
  generatingLink: "Link wird erstellt...",
  copy: "Kopieren",
  
  // Shared chat layout
  sharedChatReadOnly: "Dies ist eine schreibgeschützte Ansicht einer geteilten Chat-Unterhaltung.",
  created: "Erstellt",
  
  // Mobile toolbar
  themeLabel: "Design",
  textSizeLabel: "Textgröße",
  shareLabel: "Teilen",
  documentsLabel: "Dokumente",
  
  // WhatsApp Integration
  connectWhatsApp: "WhatsApp verbinden",
  whatsAppConnected: "WhatsApp: Verbunden",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: QR scannen",
  whatsAppProcessing: "Verarbeitung...",
  whatsAppModalTitle: "WhatsApp verbinden",
  whatsAppModalDescription: "Scannen Sie diesen QR-Code mit WhatsApp auf Ihrem Telefon, um sich zu verbinden",
  whatsAppStatusTitle: "WhatsApp verbunden",
  whatsAppStatusDescription: "Ihr WhatsApp ist erfolgreich mit ChatRAG verbunden",
  whatsAppInstructions1: "1. Öffnen Sie WhatsApp auf Ihrem Telefon",
  whatsAppInstructions2: "2. Tippen Sie auf Menü oder Einstellungen",
  whatsAppInstructions3: "3. Tippen Sie auf Verknüpfte Geräte",
  whatsAppInstructions4: "4. Tippen Sie auf Gerät verknüpfen",
  whatsAppInstructions5: "5. Richten Sie Ihr Telefon auf diesen Bildschirm",
  whatsAppRefreshQR: "QR-Code aktualisieren",
  whatsAppTryAgain: "Erneut versuchen",
  whatsAppFailedLoad: "QR-Code konnte nicht geladen werden",
  whatsAppExpiresIn: "Läuft ab in: {time}",
  whatsAppPhoneNumber: "Telefonnummer",
  whatsAppStatus: "Status",
  whatsAppActive: "Aktiv",
  whatsAppConnectedFor: "Verbunden seit",
  whatsAppWorkingMessage: "Alles funktioniert einwandfrei. An Ihr WhatsApp gesendete Nachrichten werden automatisch von ChatRAG verarbeitet.",
  whatsAppDisconnect: "WhatsApp trennen",
  whatsAppDisconnecting: "Trennung...",
  whatsAppConfirmDisconnect: "Trennung bestätigen",
  whatsAppDisconnectWarning: "Sind Sie sicher, dass Sie die Verbindung trennen möchten? Sie müssen erneut einen QR-Code scannen, um sich wieder zu verbinden.",
  whatsAppJustNow: "Gerade eben",
  whatsAppConnecting: "Verbindung...",
  whatsAppMinute: "Minute",
  whatsAppMinutes: "Minuten",
  whatsAppHour: "Stunde",
  whatsAppHours: "Stunden",
  whatsAppDay: "Tag",
  whatsAppDays: "Tage",
  
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