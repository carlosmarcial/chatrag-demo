import { getAppName } from '@/lib/env';

export const fr = {
  // Main chat
  mainPrompt: "Comment puis-je vous aider ?",
  
  // Navigation and common UI
  settings: "Paramètres",
  general: "Général",
  logout: "Se déconnecter",
  modelSelector: "Sélectionner le modèle IA",
  textSize: "Taille du texte",
  themeToggle: "Changer de thème",
  shareChat: "Partager la conversation",
  uploadDocument: "Télécharger un document",
  viewDocuments: "Voir les documents",
  
  // Settings modal
  language: "Langue",
  theme: "Thème",
  customBackground: "Arrière-plan personnalisé",
  customBackgroundDesc: "Téléchargez une image pour personnaliser l'arrière-plan de votre chat",
  upload: "Télécharger",
  uploading: "Téléchargement...",
  currentBackground: "Arrière-plan actuel :",
  notificationSound: "Son de notification",
  notificationSoundDesc: "Jouer un son lorsque l'IA termine sa réponse",
  soundType: "Type de son",
  playSound: "Jouer le son",
  highBell: "Cloche aiguë",
  mediumBell: "Cloche moyenne",
  deepBell: "Cloche grave",
  subtleBell: "Cloche subtile",
  
  // Admin settings
  admin: "Administrateur",
  adminLogin: "Connexion administrateur",
  adminPassword: "Mot de passe administrateur",
  adminPasswordRequired: "Le mot de passe administrateur est requis",
  adminLoginFailed: "Échec de la connexion administrateur",
  adminPasswordIncorrect: "Le mot de passe est incorrect",
  notAuthorizedAsAdmin: "Votre compte n'est pas autorisé en tant qu'administrateur",
  loginRequired: "Vous devez être connecté pour accéder aux fonctionnalités d'administration",
  adminVerification: "Vérification administrateur",
  adminVerificationDesc: "Cliquez sur le bouton ci-dessous pour vérifier votre statut d'administration",
  adminVerificationSuccess: "Accès administrateur activé avec succès",
  adminVerificationFailed: "Échec de la vérification administrateur",
  verifying: "Vérification...",
  activateAdminAccess: "Activer l'accès administrateur",
  loggingIn: "Connexion en cours...",
  loggingOut: "Déconnexion en cours...",
  logoutAdmin: "Déconnexion administrateur",
  login: "Se connecter",
  adminAuthenticated: "Administrateur authentifié",
  adminAuthenticatedDesc: "Vous avez maintenant accès aux fonctionnalités d'administration",
  docDashboardReadOnly: "Tableau de bord des documents en lecture seule",
  docDashboardReadOnlyDesc: "Permettre aux utilisateurs de consulter les documents en mode lecture seule",
  documentViewer: "Visionneuse de documents",
  readOnlyMode: "Mode lecture seule activé - les documents ne peuvent pas être modifiés",
  documents: "Documents",
  
  // Text size settings
  small: "Petit",
  default: "Par défaut",
  large: "Grand",
  
  // Font family settings
  fontFamily: "Famille de Police",
  interDefault: "Inter (Par défaut)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "Système",
  lightTheme: "Clair",
  darkTheme: "Sombre",
  
  // Language settings
  languageSelector: "Sélectionner la langue",
  english: "Anglais (États-Unis)",
  spanish: "Espagnol",
  
  // UI switches
  alwaysShowCode: "Toujours afficher le code lors de l'utilisation de l'analyste de données",
  showFollowUp: "Afficher les suggestions de suivi dans les conversations",
  
  // Archived chats
  archivedChats: "Conversations archivées",
  archiveAll: "Archiver toutes les conversations",
  deleteAll: "Supprimer toutes les conversations",
  logOut: "Se déconnecter sur cet appareil",
  
  // Other UI elements
  notifications: "Notifications",
  personalization: "Personnalisation",
  speech: "Parole",
  dataControls: "Contrôles des données",
  builderProfile: "Profil du créateur",
  connectedApps: "Applications connectées",
  security: "Sécurité",
  subscription: "Abonnement",
  
  // Input and actions
  messagePlaceholder: "Demandez n'importe quoi",
  sendPrompt: "Envoyer la demande",
  stopGenerating: "Arrêter la génération",
  useVoice: "Dicter",
  stopRecording: "Arrêter l'enregistrement",
  processing: "Traitement en cours...",
  
  // Document handling
  documentReady: "Document prêt",
  processingDocument: "Traitement du document...",
  errorProcessingDocument: "Erreur lors du traitement du document",
  imageReady: "Image prête",
  
  // 3D generation
  generate3DModel: "Appuyez sur ENTRÉE pour créer un modèle 3D",
  readyFor3DGeneration: "Appuyez sur ENTRÉE pour créer un modèle 3D",
  modelFrom3DImage: "Image pour le modèle 3D",
  
  // Media buttons
  searchWeb: "Rechercher sur le web",
  uploadFiles: "Télécharger des fichiers",
  imageGenerate: "Générer des images",
  videoGenerate: "Générer une vidéo",
  threeDGenerate: "Génération 3D",
  webSearch: "Rechercher",
  reasoningText: "Raisonnement",
  reasoningNotSupported: "Le modèle ne prend pas en charge le raisonnement",
  reasoningEffort: "Effort de raisonnement",
  maxReasoningTokens: "Tokens maximum",
  hideReasoning: "Masquer le raisonnement",
  model: "Modèle",
  reasoningMethod: "Méthode",
  low: "Faible",
  medium: "Moyen",
  high: "Élevé",
  
  // Suggestion categories
  write: "Écrire",
  plan: "Planifier",
  design: "Concevoir",
  backToCategories: "← Retour aux catégories",
  
  // Write suggestions
  writeSummary: "un résumé sur",
  writeEmail: "un e-mail à",
  writeBlog: "un article de blog sur",
  writeSocial: "une publication pour les réseaux sociaux",
  
  // Plan suggestions
  planMarketing: "une campagne marketing pour",
  planBusiness: "une proposition commerciale pour",
  planProduct: "un lancement de produit pour",
  planLearning: "un plan d'apprentissage sur",
  
  // Design suggestions
  designLogo: "un petit logo",
  designHero: "une section hero",
  designLanding: "une page d'accueil",
  designSocial: "une publication pour les réseaux sociaux",
  
  // Sidebar
  pinnedChats: "Conversations épinglées",
  recentChats: "Conversations récentes",
  searchResults: "Résultats de recherche",
  noChats: "Aucune conversation",
  noPinnedChats: "Aucune conversation épinglée",
  noChatsAvailable: "Aucune conversation disponible",
  closeSidebar: "Fermer la barre latérale",
  openSidebar: "Ouvrir la barre latérale",
  searchChats: "Rechercher des conversations...",
  
  // Chat actions
  pin: "Épingler",
  unpin: "Désépingler",
  rename: "Renommer",
  delete: "Supprimer",
  newChat: "Nouvelle conversation",
  useIncognitoChat: "Utiliser le chat incognito",
  incognitoChatActive: "Chat Incognito Actif",
  incognitoChatActiveMessage: "Chat Incognito Actif - Les messages ne seront pas sauvegardés",
  search: "Rechercher",
  github: "GitHub",
  enterChatTitle: "Entrez le titre de la conversation...",
  
  // Folder management
  folders: "Dossiers",
  newFolder: "Nouveau dossier",
  createNewFolder: "Créer un Nouveau Dossier",
  organizeChatsFolders: "Organisez vos conversations dans des dossiers pour une meilleure gestion",
  folderName: "Nom du Dossier",
  folderColor: "Couleur du Dossier",
  folderNameRequired: "Le nom du dossier est requis",
  failedToCreateFolder: "Échec de la création du dossier",
  creating: "Création...",
  create: "Créer",
  cancel: "Annuler",
  moveToFolder: "Déplacer vers le dossier",
  removeFromFolder: "Retirer du dossier",
  moveToRoot: "Déplacer à la racine",
  noFolders: "Aucun dossier",
  noChatsInFolder: "Aucune conversation dans le dossier",
  enterFolderName: "Entrez le nom du dossier...",
  confirmDeleteFolder: "Êtes-vous sûr de vouloir supprimer ce dossier ?",
  deleteFolder: "Supprimer le Dossier",
  confirmDeleteFolderMessage: "Êtes-vous sûr de vouloir supprimer ce dossier ?",
  deleteFolderWithChats: "Supprimer également toutes les conversations dans ce dossier",
  deleteFolderKeepChats: "Les conversations seront déplacées au niveau racine",
  chats: "conversations",
  
  // Disclaimer
  disclaimer: `${getAppName()} peut faire des erreurs. Pensez à vérifier les informations importantes.`,

  // Document Dashboard
  documentManagement: "Gestion des documents",
  uploadNew: "Télécharger un nouveau",
  storedDocuments: "Documents stockés",
  dragDropDocuments: "Glissez et déposez vos documents",
  supportedFileTypes: "Fichiers PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB",
  selectFiles: "Sélectionner des fichiers",
  searchDocuments: "Rechercher des documents...",
  noDocumentsFound: "Aucun document trouvé",
  processingStatus: "traitement",
  readyStatus: "prêt",
  failedStatus: "échec",
  partialStatus: "partiel",
  uploadDate: "Date de téléchargement",
  docName: "Nom",
  docStatus: "Statut",
  docSize: "Taille",
  errorPrefix: "Erreur :",
  uploadButton: "Télécharger",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "Document traité avec succès partiel des blocs",
  deleteDocument: "Supprimer le document",
  confirmDeleteDocument: "Êtes-vous sûr de vouloir supprimer ce document ?",
  confirmDeleteChat: "Confirmer la Suppression",
  confirmDeleteChatMessage: "Êtes-vous sûr de vouloir supprimer",
  actionCannotBeUndone: "Cette action ne peut pas être annulée.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "Télécharger un document temporaire",
  uploadImage: "Télécharger une image",
  
  // MCP Tools
  mcpToolsButton: "Outils MCP",
  availableMcpTools: "Outils MCP disponibles",
  loadingTools: "Chargement des outils...",
  noToolsAvailable: "Aucun outil disponible",
  zapierTools: "Outils Zapier",
  otherTools: "Autres outils",
  learnMore: "En savoir plus",
  fromServer: "Du serveur :",
  runTool: "Exécuter l'outil",
  cancelTool: "Annuler",
  waitingForApproval: "En attente de votre approbation...",
  executingTool: "Exécution de l'outil, veuillez patienter...",
  toolError: "Une erreur s'est produite lors de l'exécution de l'outil.",
  
  // Chat message action tooltips
  copyTooltip: "Copier",
  copiedTooltip: "Copié !",
  textToSpeechTooltip: "Lire le texte à voix haute",
  downloadPdfTooltip: "Télécharger en PDF",
  sendToKnowledgeBase: "Ajouter au RAG",
  
  // 3D Model Viewer
  clickDragRotateModel: "Cliquez et faites glisser pour faire tourner le modèle",
  download: "Télécharger",
  threeDModel: "Modèle 3D",
  // Image Generation Modal
  imageGeneration: "Génération d'Image",
  generateImage: "Générer une Image",
  size: "Taille",
  numberOfImages: "Nombre d'Images",
  sourceImages: "Images Source",
  safetyChecker: "Vérificateur de sécurité",
  editImage: "Modifier l'Image",
  editImageInstructions: "Instructions pour modifier",
  uploadSourceImage: "Télécharger l'image source",
  uploadImage: "Télécharger l'Image",
  addChangeImage: "Ajouter/Changer l'Image",
  clearAll: "Tout Effacer",
  upToImagesLimit: "(jusqu'à 10 images < 50 Mo chacune)",
  strength: "Intensité",
  strengthTooltip: "À quel point transformer l'image",
  imageSafetyNote: "Ce fournisseur inclut des vérifications de sécurité par défaut",
  generating: "Génération...",

  // Video Generation Modal
  videoGeneration: "Génération de Vidéo",
  generateVideo: "Générer une Vidéo",
  mode: "Mode",
  fastMode: "Mode Rapide",
  fasterGenerationMode: "Génération plus rapide (qualité inférieure)",
  standardQualityMode: "Qualité standard (plus lent)",
  aspectRatio: "Format d'Image",
  resolution: "Résolution",
  duration: "Durée",
  seconds: "secondes",
  enhancePrompt: "Améliorer le Prompt",
  enhancePromptTooltip: "Améliorer automatiquement votre prompt pour de meilleurs résultats",
  autoFix: "Correction Automatique",
  autoFixTooltip: "Corriger automatiquement les problèmes dans la vidéo générée",
  generateAudio: "Générer l'Audio",
  generateAudioTooltip: "Générer l'audio pour la vidéo",
  loopVideo: "Vidéo en Boucle",
  loopVideoTooltip: "Faire boucler la vidéo de manière transparente",
  sourceImage: "Image Source",
  changeImage: "Changer l'Image",
  videoSizeLimit: "(< 50 Mo)",
  videoWithContext: "Vidéo + Contexte",
  useDocumentContext: "Utiliser le contexte du document",
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
  today: "Aujourd'hui",
  yesterday: "Hier",
  thisWeek: "Cette semaine",
  older: "Plus anciens",
  
  // Relative time
  justNow: "À l'instant",
  minutesAgo: "minutes plus tôt",
  oneHourAgo: "il y a 1 heure",
  hoursAgo: "heures plus tôt",
  oneDayAgo: "il y a 1 jour",
  daysAgo: "jours plus tôt",
  oneWeekAgo: "il y a 1 semaine",
  weeksAgo: "semaines plus tôt",
  
  // Share chat
  shareChatTitle: "Partager le Chat",
  shareChatDescription: "Votre chat a été partagé. Copiez le lien ci-dessous pour le partager avec d'autres.",
  generateShareLink: "Générer un lien de partage",
  generateShareLinkDescription: "Générer un lien partageable pour ce chat.",
  generatingLink: "Génération du lien...",
  copy: "Copier",
  
  // Shared chat layout
  sharedChatReadOnly: "Ceci est une vue en lecture seule d'une conversation de chat partagée.",
  created: "Créé",
  
  // Mobile toolbar
  themeLabel: "Thème",
  textSizeLabel: "Taille du Texte",
  shareLabel: "Partager",
  documentsLabel: "Documents",
  
  // WhatsApp Integration
  connectWhatsApp: "Connecter WhatsApp",
  whatsAppConnected: "WhatsApp : Connecté",
  whatsAppConnectedWithNumber: "WhatsApp : {phoneNumber}",
  whatsAppScanQR: "WhatsApp : Scanner QR",
  whatsAppProcessing: "Traitement...",
  whatsAppModalTitle: "Connecter WhatsApp",
  whatsAppModalDescription: "Scannez ce code QR avec WhatsApp sur votre téléphone pour vous connecter",
  whatsAppStatusTitle: "WhatsApp Connecté",
  whatsAppStatusDescription: "Votre WhatsApp est connecté avec succès à ChatRAG",
  whatsAppInstructions1: "1. Ouvrez WhatsApp sur votre téléphone",
  whatsAppInstructions2: "2. Appuyez sur Menu ou Paramètres",
  whatsAppInstructions3: "3. Appuyez sur Appareils liés",
  whatsAppInstructions4: "4. Appuyez sur Lier un appareil",
  whatsAppInstructions5: "5. Pointez votre téléphone vers cet écran",
  whatsAppRefreshQR: "Actualiser le code QR",
  whatsAppTryAgain: "Réessayer",
  whatsAppFailedLoad: "Échec du chargement du code QR",
  whatsAppExpiresIn: "Expire dans : {time}",
  whatsAppPhoneNumber: "Numéro de téléphone",
  whatsAppStatus: "Statut",
  whatsAppActive: "Actif",
  whatsAppConnectedFor: "Connecté depuis",
  whatsAppWorkingMessage: "Tout fonctionne correctement. Les messages envoyés à votre WhatsApp seront traités automatiquement par ChatRAG.",
  whatsAppDisconnect: "Déconnecter WhatsApp",
  whatsAppDisconnecting: "Déconnexion...",
  whatsAppConfirmDisconnect: "Confirmer la déconnexion",
  whatsAppDisconnectWarning: "Êtes-vous sûr de vouloir vous déconnecter ? Vous devrez scanner à nouveau un code QR pour vous reconnecter.",
  whatsAppJustNow: "À l'instant",
  whatsAppConnecting: "Connexion...",
  whatsAppMinute: "minute",
  whatsAppMinutes: "minutes",
  whatsAppHour: "heure",
  whatsAppHours: "heures",
  whatsAppDay: "jour",
  whatsAppDays: "jours",
  
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