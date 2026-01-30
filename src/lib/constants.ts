// Configuración del sitio
export const SITE_CONFIG = {
  name: 'Daniela Stecco — Cuidado de la Piel',
  shortName: 'Daniela Stecco',
  tagline: 'Rutinas personalizadas con seguimiento',
  description:
    'Asesoría personalizada en cuidado de la piel. Rutinas adaptadas a tus necesidades con productos de marca internacional y seguimiento continuo.',
  author: 'Daniela Stecco',
  location: 'Argentina',
};

// Variables de entorno con fallbacks
export const ENV = {
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5491112345678',
  nuskinPortalUrl:
    process.env.NEXT_PUBLIC_NUSKIN_PORTAL_URL ||
    'https://www.nuskin.com/content/nuskin/es_AR/home.html',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://danielastecco.com',
  googleSheetsWebhook: process.env.GOOGLE_SHEETS_WEBHOOK_URL || '',
};

// Mensajes pre-armados de WhatsApp por página
export const WHATSAPP_MESSAGES = {
  home: 'Hola Daniela, quiero asesoría de cuidado de la piel.',
  diagnostico: 'Hola Daniela, acabo de completar el diagnóstico.',
  manchas: 'Hola Daniela, me interesa una rutina para manchas y tono desparejo.',
  sequedad: 'Hola Daniela, me interesa una rutina para piel seca o deshidratada.',
  textura: 'Hola Daniela, me interesa una rutina para líneas finas y textura irregular.',
  sensible: 'Hola Daniela, me interesa una rutina para piel sensible o reactiva.',
  comoComprar: 'Hola Daniela, quiero comprar en el portal autorizado y necesito ayuda.',
  contacto: 'Hola Daniela, quiero comunicarme contigo.',
  general: 'Hola Daniela, tengo una consulta sobre cuidado de la piel.',
};

// Navegación principal
export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/como-funciona', label: 'Cómo funciona' },
  { href: '/diagnostico', label: 'Diagnóstico' },
  { href: '/rutinas', label: 'Rutinas' },
  { href: '/como-comprar', label: 'Cómo comprar' },
  { href: '/testimonios', label: 'Testimonios' },
  { href: '/contacto', label: 'Contacto' },
];

// Problemas de piel (para las rutinas) - iconos se renderizan en el componente
export const SKIN_PROBLEMS = [
  {
    slug: 'manchas',
    title: 'Manchas y tono desparejo',
    shortTitle: 'Manchas',
    description:
      'Diferencias de pigmentación, marcas oscuras o claras, y falta de uniformidad en el tono de la piel.',
    iconName: 'Palette' as const,
  },
  {
    slug: 'sequedad',
    title: 'Piel seca o deshidratada',
    shortTitle: 'Sequedad',
    description:
      'Sensación de tirantez, descamación, pérdida de luminosidad y líneas por deshidratación.',
    iconName: 'Droplets' as const,
  },
  {
    slug: 'textura',
    title: 'Líneas finas y textura irregular',
    shortTitle: 'Textura',
    description: 'Arrugas superficiales, poros visibles, rugosidades y pérdida de suavidad.',
    iconName: 'Sparkles' as const,
  },
  {
    slug: 'sensible',
    title: 'Piel sensible o reactiva',
    shortTitle: 'Sensibilidad',
    description: 'Rojeces, irritación frecuente, reacciones a productos y sensación de incomodidad.',
    iconName: 'Heart' as const,
  },
];

// Beneficios principales - iconos se renderizan en el componente
export const BENEFITS = [
  {
    title: 'Asesoría personalizada',
    description:
      'Analizo tu piel y necesidades para recomendarte una rutina adaptada a tu caso particular.',
    iconName: 'User' as const,
  },
  {
    title: 'Seguimiento continuo',
    description:
      'Te acompaño en el proceso, ajustando la rutina según cómo responda tu piel con el tiempo.',
    iconName: 'MessageCircle' as const,
  },
  {
    title: 'Productos de calidad',
    description:
      'Trabajo con productos de marca internacional reconocida, disponibles en portal autorizado.',
    iconName: 'Shield' as const,
  },
];

// Pasos de cómo funciona
export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: 'Completás el diagnóstico',
    description:
      'Respondés unas preguntas sobre tu piel, tus hábitos actuales y lo que te gustaría mejorar.',
  },
  {
    number: 2,
    title: 'Recibís tu rutina personalizada',
    description:
      'Te envío por WhatsApp una rutina AM/PM adaptada a tu tipo de piel y objetivos.',
  },
  {
    number: 3,
    title: 'Comprás en el portal autorizado',
    description:
      'Te paso el link directo para que hagas tu compra de forma segura en la plataforma oficial.',
  },
  {
    number: 4,
    title: 'Hacemos seguimiento juntas',
    description:
      'Estoy disponible para resolver dudas, hacer ajustes y acompañarte en el proceso.',
  },
];

// Opciones del formulario de diagnóstico
export const FORM_OPTIONS = {
  ageRanges: [
    { value: '45-54', label: '45 a 54 años' },
    { value: '55-64', label: '55 a 64 años' },
    { value: '65-74', label: '65 a 74 años' },
    { value: '75+', label: '75 años o más' },
  ],
  skinTypes: [
    { value: 'seca', label: 'Seca' },
    { value: 'mixta', label: 'Mixta' },
    { value: 'grasa', label: 'Grasa' },
    { value: 'no-se', label: 'No estoy segura' },
  ],
  sensitivity: [
    { value: 'si', label: 'Sí, es sensible' },
    { value: 'no', label: 'No, no es sensible' },
    { value: 'no-se', label: 'No estoy segura' },
  ],
  goals: [
    { value: 'manchas', label: 'Manchas o tono desparejo' },
    { value: 'sequedad', label: 'Sequedad o deshidratación' },
    { value: 'arrugas', label: 'Líneas finas o textura' },
    { value: 'rojeces', label: 'Rojeces o sensibilidad' },
    { value: 'otro', label: 'Otro' },
  ],
  budgetRanges: [
    { value: 'basico', label: 'Básico (hasta $50.000)' },
    { value: 'intermedio', label: 'Intermedio ($50.000 - $100.000)' },
    { value: 'completo', label: 'Completo (más de $100.000)' },
    { value: 'no-se', label: 'Prefiero que me asesores' },
  ],
};

// FAQ de Cómo comprar
export const PURCHASE_FAQ = [
  {
    question: '¿Tengo que crear una cuenta para comprar?',
    answer:
      'Depende del portal. En general, sí necesitás crear una cuenta, pero es un proceso simple. Te guío paso a paso si lo necesitás.',
  },
  {
    question: '¿Puedo comprar desde el celular?',
    answer:
      'Sí, el portal está optimizado para dispositivos móviles. Podés completar tu compra desde el teléfono sin problemas.',
  },
  {
    question: '¿Hacen envíos en toda Argentina?',
    answer:
      'Sí, los envíos llegan a todo el país. Los tiempos y costos de envío varían según tu ubicación.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer:
      'El portal acepta tarjetas de crédito, débito y otros medios habituales. Consultame si tenés alguna duda específica.',
  },
  {
    question: '¿Qué pasa si un producto no me funciona?',
    answer:
      'Cada piel es diferente. Si algo no te funciona como esperabas, me avisás y ajustamos la rutina. El seguimiento está incluido.',
  },
];
