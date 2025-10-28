import { getAppName } from '@/lib/env';

export const es = {
  // Main chat
  mainPrompt: "¿En qué puedo ayudarte?",
  
  // Navigation and common UI
  settings: "Configuración",
  general: "General",
  logout: "Cerrar sesión",
  modelSelector: "Seleccionar modelo de IA",
  textSize: "Tamaño de texto",
  themeToggle: "Cambiar tema",
  shareChat: "Compartir chat",
  uploadDocument: "Subir documento",
  viewDocuments: "Ver documentos",
  
  // Settings modal
  language: "Idioma",
  theme: "Tema",
  customBackground: "Fondo personalizado",
  customBackgroundDesc: "Sube una imagen para personalizar el fondo de tu chat",
  upload: "Subir",
  uploading: "Subiendo...",
  currentBackground: "Fondo actual:",
  notificationSound: "Sonido de notificación",
  notificationSoundDesc: "Reproducir un sonido cuando la IA completa su respuesta",
  soundType: "Tipo de sonido",
  playSound: "Reproducir sonido",
  highBell: "Campana alta",
  mediumBell: "Campana media",
  deepBell: "Campana profunda",
  subtleBell: "Campana sutil",
  
  // Admin settings
  admin: "Admin",
  adminLogin: "Inicio de Sesión de Admin",
  adminPassword: "Contraseña de Admin",
  adminPasswordRequired: "Se requiere contraseña de admin",
  adminLoginFailed: "Error en inicio de sesión de admin",
  adminPasswordIncorrect: "La contraseña es incorrecta",
  notAuthorizedAsAdmin: "Tu cuenta no está autorizada como admin",
  loginRequired: "Debes iniciar sesión para acceder a las funciones de admin",
  adminVerification: "Verificación de Admin",
  adminVerificationDesc: "Haz clic en el botón de abajo para verificar tu estado de admin",
  adminVerificationSuccess: "Acceso de admin activado correctamente",
  adminVerificationFailed: "La verificación de admin falló",
  verifying: "Verificando...",
  activateAdminAccess: "Activar acceso de Admin",
  loggingIn: "Iniciando sesión...",
  loggingOut: "Cerrando sesión...",
  logoutAdmin: "Cerrar Sesión de Admin",
  login: "Iniciar Sesión",
  adminAuthenticated: "Admin Autenticado",
  adminAuthenticatedDesc: "Ahora tienes acceso a las funciones de admin",
  docDashboardReadOnly: "Panel de Documentos de Solo Lectura",
  docDashboardReadOnlyDesc: "Permitir a los usuarios ver documentos en modo de solo lectura",
  documentViewer: "Visor de Documentos",
  readOnlyMode: "Modo de solo lectura activado - los documentos no pueden ser modificados",
  documents: "Documentos",
  
  // Text size settings
  small: "Pequeño",
  default: "Predeterminado",
  large: "Grande",
  
  // Font family settings
  fontFamily: "Familia de Fuente",
  interDefault: "Inter (Predeterminado)",
  merriweather: "Merriweather",
  sourceCodePro: "Source Code Pro",
  
  // System settings
  systemTheme: "Sistema",
  lightTheme: "Claro",
  darkTheme: "Oscuro",
  
  // Language settings
  languageSelector: "Seleccionar idioma",
  english: "Inglés (EE.UU.)",
  spanish: "Español",
  
  // UI switches
  alwaysShowCode: "Mostrar siempre el código cuando se usa el analista de datos",
  showFollowUp: "Mostrar sugerencias de seguimiento en los chats",
  
  // Archived chats
  archivedChats: "Chats archivados",
  archiveAll: "Archivar todos los chats",
  deleteAll: "Eliminar todos los chats",
  logOut: "Cerrar sesión en este dispositivo",
  
  // Other UI elements
  notifications: "Notificaciones",
  personalization: "Personalización",
  speech: "Voz",
  dataControls: "Controles de datos",
  builderProfile: "Perfil de constructor",
  connectedApps: "Aplicaciones conectadas",
  security: "Seguridad",
  subscription: "Suscripción",
  
  // Input and actions
  messagePlaceholder: "Pregunta lo que quieras",
  sendPrompt: "Enviar prompt",
  stopGenerating: "Detener generación",
  useVoice: "Dictar",
  stopRecording: "Detener grabación",
  processing: "Procesando...",
  
  // Document handling
  documentReady: "Documento listo",
  processingDocument: "Procesando documento...",
  errorProcessingDocument: "Error al procesar documento",
  imageReady: "Imagen lista",
  
  // 3D generation
  generate3DModel: "Pulsa ENTER para crear modelo 3D",
  readyFor3DGeneration: "Pulsa ENTER para crear modelo 3D",
  modelFrom3DImage: "Imagen para modelo 3D",
  
  // Media buttons
  searchWeb: "Buscar en la web",
  uploadFiles: "Subir archivo(s)",
  imageGenerate: "Generar imágenes",
  videoGenerate: "Generar video",
  threeDGenerate: "Generar 3D",
  webSearch: "Buscar",
  reasoningText: "Razonamiento",
  reasoningNotSupported: "El modelo no soporta razonamiento",
  reasoningEffort: "Esfuerzo de razonamiento",
  maxReasoningTokens: "Tokens máximos",
  hideReasoning: "Ocultar razonamiento",
  model: "Modelo",
  reasoningMethod: "Método",
  low: "Bajo",
  medium: "Medio",
  high: "Alto",
  
  // Suggestion categories
  write: "Escribir",
  plan: "Planificar",
  design: "Diseñar",
  backToCategories: "← Volver a categorías",
  
  // Write suggestions
  writeSummary: "un resumen sobre",
  writeEmail: "un correo a",
  writeBlog: "una publicación de blog sobre",
  writeSocial: "una actualización para redes sociales",
  
  // Plan suggestions
  planMarketing: "campaña de marketing para",
  planBusiness: "propuesta de negocio para",
  planProduct: "lanzamiento de producto para",
  planLearning: "plan de aprendizaje sobre",
  
  // Design suggestions
  designLogo: "un pequeño logo",
  designHero: "una sección principal",
  designLanding: "una página de destino",
  designSocial: "una publicación para redes sociales",
  
  // Sidebar
  pinnedChats: "Chats Fijados",
  recentChats: "Chats Recientes",
  searchResults: "Resultados de Búsqueda",
  noChats: "No hay chats",
  noPinnedChats: "No hay chats fijados",
  noChatsAvailable: "No hay chats disponibles",
  closeSidebar: "Cerrar barra lateral",
  openSidebar: "Abrir barra lateral",
  searchChats: "Buscar chats...",
  
  // Chat actions
  pin: "Fijar",
  unpin: "Desfijar",
  rename: "Renombrar",
  delete: "Eliminar",
  newChat: "Nuevo chat",
  useIncognitoChat: "Usar chat incógnito",
  incognitoChatActive: "Chat Incógnito Activo",
  incognitoChatActiveMessage: "Chat Incógnito Activo - Los mensajes no se guardarán",
  search: "Buscar",
  github: "GitHub",
  enterChatTitle: "Ingrese título del chat...",
  
  // Folder management
  folders: "Carpetas",
  newFolder: "Nueva carpeta",
  createNewFolder: "Crear Nueva Carpeta",
  organizeChatsFolders: "Organiza tus chats en carpetas para una mejor gestión",
  folderName: "Nombre de Carpeta",
  folderColor: "Color de Carpeta",
  folderNameRequired: "El nombre de la carpeta es requerido",
  failedToCreateFolder: "Error al crear carpeta",
  creating: "Creando...",
  create: "Crear",
  cancel: "Cancelar",
  moveToFolder: "Mover a carpeta",
  removeFromFolder: "Quitar de la carpeta",
  moveToRoot: "Mover a raíz",
  noFolders: "Sin carpetas",
  noChatsInFolder: "No hay chats en la carpeta",
  enterFolderName: "Ingrese nombre de carpeta...",
  confirmDeleteFolder: "¿Estás seguro de que quieres eliminar esta carpeta?",
  deleteFolder: "Eliminar Carpeta",
  confirmDeleteFolderMessage: "¿Estás seguro de que quieres eliminar esta carpeta?",
  deleteFolderWithChats: "También eliminar todos los chats en esta carpeta",
  deleteFolderKeepChats: "Los chats se moverán al nivel raíz",
  chats: "chats",
  
  // Disclaimer
  disclaimer: `${getAppName()} puede cometer errores. Considera verificar información importante.`,
  
  // Document Dashboard
  documentManagement: "Gestión de Documentos",
  uploadNew: "Subir Nuevo",
  storedDocuments: "Documentos Almacenados",
  dragDropDocuments: "Arrastra y suelta tus documentos",
  supportedFileTypes: "Archivos PDF, DOCX, PPTX, XLSX, HTML, TXT, RTF, EPUB",
  selectFiles: "Seleccionar archivos",
  searchDocuments: "Buscar documentos...",
  noDocumentsFound: "No se encontraron documentos",
  processingStatus: "procesando",
  readyStatus: "listo",
  failedStatus: "fallido",
  partialStatus: "parcial",
  uploadDate: "Fecha de Carga",
  docName: "Nombre",
  docStatus: "Estado",
  docSize: "Tamaño",
  errorPrefix: "Error:",
  uploadButton: "Subir",
  
  // Additional Document Dashboard translations
  documentProcessedWithPartialChunkSuccess: "Documento procesado con éxito parcial en fragmentos",
  deleteDocument: "Eliminar documento",
  confirmDeleteDocument: "¿Estás seguro de que deseas eliminar este documento?",
  confirmDeleteChat: "Confirmar Eliminación",
  confirmDeleteChatMessage: "¿Estás seguro de que deseas eliminar",
  actionCannotBeUndone: "Esta acción no se puede deshacer.",
  
  // Unified Upload Button
  uploadTemporaryDocument: "Subir documento temporal",
  uploadImage: "Subir imagen",
  
  // MCP Tools
  mcpToolsButton: "Herramientas MCP",
  availableMcpTools: "Herramientas MCP disponibles",
  loadingTools: "Cargando herramientas...",
  noToolsAvailable: "No hay herramientas disponibles",
  zapierTools: "Herramientas Zapier",
  otherTools: "Otras herramientas",
  learnMore: "Más información",
  fromServer: "Del servidor:",
  runTool: "Ejecutar herramienta",
  cancelTool: "Cancelar",
  waitingForApproval: "Esperando tu aprobación...",
  executingTool: "Ejecutando herramienta, por favor espera...",
  toolError: "Ocurrió un error al ejecutar la herramienta.",
  
  // Chat message action tooltips
  copyTooltip: "Copiar",
  copiedTooltip: "¡Copiado!",
  textToSpeechTooltip: "Reproducir texto a voz",
  downloadPdfTooltip: "Descargar como PDF",
  sendToKnowledgeBase: "Añadir a RAG",
  
  // 3D Model Viewer
  clickDragRotateModel: "Haz clic y arrastra para rotar el modelo",
  download: "Descargar",
  threeDModel: "Modelo 3D",

  // Image Generation Modal
  imageGeneration: "Generación de Imagen",
  generateImage: "Generar Imagen",
  size: "Tamaño",
  numberOfImages: "Número de Imágenes",
  sourceImages: "Imágenes de Origen",
  safetyChecker: "Verificador de seguridad",
  editImage: "Editar Imagen",
  editImageInstructions: "Instrucciones para editar",
  uploadSourceImage: "Subir imagen de origen",
  uploadImage: "Subir Imagen",
  addChangeImage: "Agregar/Cambiar Imagen",
  clearAll: "Borrar Todo",
  upToImagesLimit: "(hasta 10 imágenes < 50MB cada una)",
  strength: "Intensidad",
  strengthTooltip: "Cuánto transformar la imagen",
  imageSafetyNote: "Este proveedor incluye verificaciones de seguridad por defecto",
  generating: "Generando...",

  // Video Generation Modal
  videoGeneration: "Generación de Video",
  generateVideo: "Generar Video",
  mode: "Modo",
  fastMode: "Modo Rápido",
  fasterGenerationMode: "Generación más rápida (menor calidad)",
  standardQualityMode: "Calidad estándar (más lento)",
  aspectRatio: "Relación de Aspecto",
  resolution: "Resolución",
  duration: "Duración",
  seconds: "segundos",
  enhancePrompt: "Mejorar Prompt",
  enhancePromptTooltip: "Mejorar automáticamente tu prompt para mejores resultados",
  autoFix: "Auto-corrección",
  autoFixTooltip: "Corregir automáticamente problemas en el video generado",
  generateAudio: "Generar Audio",
  generateAudioTooltip: "Generar audio para el video",
  loopVideo: "Video en Bucle",
  loopVideoTooltip: "Hacer que el video se repita sin interrupciones",
  sourceImage: "Imagen de Origen",
  changeImage: "Cambiar Imagen",
  videoSizeLimit: "(< 50MB)",
  videoWithContext: "Video + Contexto",
  useDocumentContext: "Usar contexto del documento",
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
  today: "Hoy",
  yesterday: "Ayer",
  thisWeek: "Esta semana",
  older: "Anteriores",
  
  // Relative time
  justNow: "Ahora mismo",
  minutesAgo: "minutos atrás",
  oneHourAgo: "hace 1 hora",
  hoursAgo: "horas atrás",
  oneDayAgo: "hace 1 día",
  daysAgo: "días atrás",
  oneWeekAgo: "hace 1 semana",
  weeksAgo: "semanas atrás",
  
  // Share chat
  shareChatTitle: "Compartir Chat",
  shareChatDescription: "Tu chat ha sido compartido. Copia el enlace de abajo para compartirlo con otros.",
  generateShareLink: "Generar enlace para compartir",
  generateShareLinkDescription: "Generar un enlace compartible para este chat.",
  generatingLink: "Generando enlace...",
  copy: "Copiar",
  
  // Shared chat layout
  sharedChatReadOnly: "Esta es una vista de solo lectura de una conversación de chat compartida.",
  created: "Creado",
  
  // Mobile toolbar
  themeLabel: "Tema",
  textSizeLabel: "Tamaño de Texto",
  shareLabel: "Compartir",
  documentsLabel: "Documentos",
  
  // WhatsApp Integration
  connectWhatsApp: "Conectar WhatsApp",
  whatsAppConnected: "WhatsApp: Conectado",
  whatsAppConnectedWithNumber: "WhatsApp: {phoneNumber}",
  whatsAppScanQR: "WhatsApp: Escanear QR",
  whatsAppProcessing: "Procesando...",
  whatsAppModalTitle: "Conectar WhatsApp",
  whatsAppModalDescription: "Escanea este código QR con WhatsApp en tu teléfono para conectar",
  whatsAppStatusTitle: "WhatsApp Conectado",
  whatsAppStatusDescription: "Tu WhatsApp está conectado exitosamente a ChatRAG",
  whatsAppInstructions1: "1. Abre WhatsApp en tu teléfono",
  whatsAppInstructions2: "2. Toca Menú o Configuración",
  whatsAppInstructions3: "3. Toca Dispositivos Vinculados",
  whatsAppInstructions4: "4. Toca Vincular un Dispositivo",
  whatsAppInstructions5: "5. Apunta tu teléfono a esta pantalla",
  whatsAppRefreshQR: "Actualizar Código QR",
  whatsAppTryAgain: "Intentar de Nuevo",
  whatsAppFailedLoad: "Error al cargar el código QR",
  whatsAppExpiresIn: "Expira en: {time}",
  whatsAppPhoneNumber: "Número de Teléfono",
  whatsAppStatus: "Estado",
  whatsAppActive: "Activo",
  whatsAppConnectedFor: "Conectado durante",
  whatsAppWorkingMessage: "Todo está funcionando correctamente. Los mensajes enviados a tu WhatsApp serán procesados automáticamente por ChatRAG.",
  whatsAppDisconnect: "Desconectar WhatsApp",
  whatsAppDisconnecting: "Desconectando...",
  whatsAppConfirmDisconnect: "Confirmar Desconexión",
  whatsAppDisconnectWarning: "¿Estás seguro de que quieres desconectar? Necesitarás escanear un código QR nuevamente para reconectar.",
  whatsAppJustNow: "Justo ahora",
  whatsAppConnecting: "Conectando...",
  whatsAppMinute: "minuto",
  whatsAppMinutes: "minutos",
  whatsAppHour: "hora",
  whatsAppHours: "horas",
  whatsAppDay: "día",
  whatsAppDays: "días",
  
  // System Prompts
  systemPrompts: {
    helpful: {
      name: "Asistente Útil",
      description: "Un asistente de IA amigable y útil",
      preContext: `Eres un asistente de IA útil y amigable. Tu objetivo principal es proporcionar información precisa y útil basada en los documentos y conocimientos disponibles para ti.

Al responder preguntas:
1. SIEMPRE revisa el contexto primero para información relevante
2. Proporciona respuestas claras y bien estructuradas
3. Si la información no está disponible en el contexto, dilo claramente`,
      postContext: `Recuerda:
- Ser amigable y conversacional
- Citar fuentes específicas al referenciar documentos
- Ofrecer aclarar o proporcionar más detalles si es necesario`
    },
    professional: {
      name: "Profesional",
      description: "Comunicación formal y orientada a negocios",
      preContext: `Eres un asistente de IA profesional enfocado en proporcionar respuestas de alta calidad apropiadas para negocios. Mantén un tono formal pero accesible.

Directrices:
1. Usa lenguaje profesional y gramática correcta
2. Estructura las respuestas claramente con viñetas cuando sea apropiado
3. Basa las respuestas principalmente en el contexto proporcionado`,
      postContext: `Asegúrate de que tus respuestas sean:
- Concisas y directas al punto
- Profesionales sin ser excesivamente técnicas
- Respaldadas por evidencia de los documentos proporcionados`
    },
    educational: {
      name: "Tutor Educativo",
      description: "Profesor paciente enfocado en el aprendizaje",
      preContext: `Eres un tutor de IA educativo dedicado a ayudar a los usuarios a aprender y comprender conceptos. Tu enfoque debe ser paciente, alentador y exhaustivo.

Enfoque de enseñanza:
1. Desglosa temas complejos en partes manejables
2. Usa ejemplos del contexto para ilustrar puntos
3. Verifica la comprensión con preguntas de seguimiento`,
      postContext: `Recuerda:
- Fomentar preguntas y curiosidad
- Proporcionar explicaciones paso a paso
- Sugerir temas relacionados para aprendizaje adicional`
    },
    technical: {
      name: "Experto Técnico",
      description: "Asistencia técnica y de programación detallada",
      preContext: `Eres un asistente de IA experto técnico especializado en programación, desarrollo de software y documentación técnica. Proporciona orientación técnica detallada y precisa.

Directrices técnicas:
1. Referencia documentación específica del contexto
2. Incluye ejemplos de código cuando sea relevante
3. Explica conceptos técnicos con precisión`,
      postContext: `Asegúrate de que las respuestas técnicas incluyan:
- Mejores prácticas y recomendaciones
- Posibles problemas o consideraciones
- Enlaces a documentación relevante cuando esté disponible`
    },
    chatragSales: {
      name: "Ventas ChatRAG",
      description: "Asistente de ventas para ChatRAG",
      preContext: `Eres un asistente de ventas para ChatRAG, una aplicación de chat avanzada impulsada por IA con capacidades RAG. Ayuda a los clientes potenciales a entender el valor y las características del producto.

Enfoque de ventas:
1. Destaca las características clave mencionadas en el contexto
2. Aborda los puntos problemáticos del cliente
3. Proporciona información clara sobre precios y planes`,
      postContext: `Recuerda:
- Ser entusiasta pero no insistente
- Enfocarte en la propuesta de valor
- Ofrecer demos o información de prueba cuando sea relevante`
    },
    customerSupport: {
      name: "Soporte al Cliente",
      description: "Soporte útil para resolución de problemas",
      preContext: `Eres un especialista en soporte al cliente que proporciona asistencia con problemas técnicos y preguntas. Tu objetivo es resolver problemas eficientemente y garantizar la satisfacción del cliente.

Enfoque de soporte:
1. Reconoce el problema del usuario con empatía
2. Busca en el contexto soluciones relevantes
3. Proporciona solución de problemas paso a paso`,
      postContext: `Siempre:
- Mantente paciente y comprensivo
- Ofrece soluciones alternativas si la primera no funciona
- Escala a soporte humano cuando sea necesario`
    },
    researchAssistant: {
      name: "Asistente de Investigación",
      description: "Apoyo académico y de investigación",
      preContext: `Eres un asistente de investigación académica que ayuda con trabajos académicos y proyectos de investigación. Proporciona respuestas exhaustivas y bien citadas basadas en fuentes disponibles.

Metodología de investigación:
1. Prioriza información del contexto proporcionado
2. Distingue claramente entre hechos documentados y conocimiento general
3. Mantén la integridad académica`,
      postContext: `Asegúrate de que la asistencia en investigación incluya:
- Citas apropiadas de fuentes
- Análisis crítico cuando sea apropiado
- Sugerencias para direcciones de investigación adicionales`
    },
    codeAssistant: {
      name: "Asistente de Código",
      description: "Ayuda con programación y revisión de código",
      preContext: `Eres un asistente de codificación especializado enfocado en ayudar a los desarrolladores a escribir mejor código. Proporciona soluciones de codificación prácticas y explicaciones.

Enfoque de asistencia en codificación:
1. Analiza fragmentos de código del contexto
2. Sugiere mejoras y optimizaciones
3. Explica código complejo claramente`,
      postContext: `Incluye en respuestas de código:
- Comentarios de código para claridad
- Consideraciones de rendimiento
- Mejores prácticas de seguridad cuando sea relevante`
    },
    legalAnalyst: {
      name: "Analista Legal",
      description: "Análisis de documentos legales (no asesoramiento legal)",
      preContext: `Eres un analista de documentos legales que proporciona información sobre documentos legales. Nota: No proporcionas asesoramiento legal, solo análisis de documentos e información general.

Enfoque de análisis:
1. Referencia secciones específicas de documentos proporcionados
2. Explica terminología legal claramente
3. Siempre incluye descargos de responsabilidad sobre no proporcionar asesoramiento legal`,
      postContext: `Recordatorios importantes:
- Esto es análisis de documentos, no asesoramiento legal
- Recomienda consultar profesionales legales calificados
- Cita secciones específicas del documento al referenciar`
    },
    medicalInformation: {
      name: "Información Médica",
      description: "Información de salud (no consejo médico)",
      preContext: `Eres un asistente de información médica que proporciona información general de salud basada en fuentes confiables. Nota: No proporcionas consejo médico, diagnóstico o recomendaciones de tratamiento.

Enfoque informativo:
1. Comparte información de salud basada en evidencia del contexto
2. Explica términos médicos en lenguaje accesible
3. Siempre enfatiza consultar a proveedores de atención médica`,
      postContext: `Descargos de responsabilidad críticos:
- Esto es solo información general, no consejo médico
- Siempre consulta a proveedores de atención médica calificados
- Las situaciones de emergencia requieren atención médica inmediata`
    },
    whatsappConversational: {
      name: "WhatsApp Conversacional",
      description: "Respuestas casuales y amigables para móvil",
      preContext: `Eres un asistente de WhatsApp amigable optimizado para mensajería móvil. Mantén las respuestas concisas, conversacionales y fáciles de leer en pantallas pequeñas.

Estilo WhatsApp:
1. Usa párrafos cortos y viñetas
2. Sé casual pero útil
3. Referencia información del contexto naturalmente`,
      postContext: `Recuerda para WhatsApp:
- Mantén los mensajes breves y escaneables
- Usa emojis con moderación para ser amigable 😊
- Divide respuestas largas en múltiples mensajes si es necesario`
    }
  }
}; 