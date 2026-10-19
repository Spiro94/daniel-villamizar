/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'es'
export type L<T = string> = Record<Lang, T>

const en = {
    navApps: 'Apps',
    navWork: 'Work',
    navServices: 'Services',
    navProcess: 'Process',
    navExperience: 'Experience',
    getQuote: 'Get a quote',
    available: 'Available for new projects',
    heroTitle: 'Your app idea, live on',
    heroHighlight: 'the App Store & Google Play',
    heroSub: "I'm Daniel Villamizar. I've shipped apps used by thousands for Bancolombia and Panasonic, and I'm a Claude Certified Architect, so AI features are built right. Now I design, build and publish yours, for iOS, Android and the web, and you work with me directly from start to finish.",
    heroCtaPrimary: 'Get a free quote on WhatsApp',
    heroCtaSecondary: "See apps I've built",
    chipYears: '8+ years shipping',
    chipStores: 'Apps on Play & App Store',
    chipDirect: 'You talk to the developer',
    chipOwn: 'The code is yours',
    fullTime: 'Hiring for a senior role? See my',
    trustedBy: "Teams I've shipped products with",
    heroCardBeta: '3 apps in beta',
    certIssued: 'Anthropic · Issued Oct 2026',
    certVerify: 'Verify credential',
    appsEyebrow: 'MY OWN APPS',
    appsTitle: 'Products I build and run myself',
    appsSub: 'Real apps in closed beta on Android. Join and try them before anyone else.',
    joinAndroid: 'Join Android beta',
    joinIos: 'Join TestFlight',
    statusAndroid: 'Closed testing · Android',
    statusIos: 'TestFlight · iOS',
    workEyebrow: 'CLIENT WORK',
    workTitle: 'Apps used by thousands',
    viewGithub: 'View GitHub',
    servicesEyebrow: 'SERVICES',
    servicesTitle: 'From first sketch to the stores, and after',
    askAbout: 'Get a quote for this',
    statYears: 'years of experience',
    statUsers: '1K+',
    statApps: "users on apps I've built",
    statStores: 'of the code is yours',
    statDirect: 'direct contact, no middlemen',
    processEyebrow: 'PROCESS',
    processTitle: 'How we work together',
    processSub: 'You work directly with the person who designs and codes your product. No agencies, no account managers, no telephone game.',
    step: 'Step',
    experienceEyebrow: 'EXPERIENCE',
    experienceTitle: 'Built for banks, global brands and startups',
    experienceSub: "Since 2018 I have worked with consultancies, banks and global brands, from enterprise .NET systems to Flutter apps used by thousands. Today I lead mobile and Rust development as a Senior Fullstack Developer, and I'm a Claude Certified Architect (Anthropic).",
    contactEyebrow: 'GET A QUOTE IN 1 MINUTE',
    contactTitle: 'Tell me about your project. Get a fixed proposal within 48 hours.',
    contactSub: 'Pick what you need, write two lines about your idea and WhatsApp opens with the message ready. I reply the same business day.',
    perk1: 'Free 20-minute intro call',
    perk2: 'Fixed proposal with scope, timeline and price',
    perk3: "If I'm not the right fit, I'll tell you and point you in the right direction",
    formName: 'Your name',
    formService: 'What do you need?',
    formTimeline: 'When do you need it?',
    formAbout: 'Tell me about your project',
    formAboutPlaceholder: 'e.g. An app for my gym where members book classes and pay monthly',
    formSend: 'Send via WhatsApp',
    formNote: 'WhatsApp opens with your message ready. Nothing is stored on this site.',
    orReach: 'Or reach me at',
    rights: 'All rights reserved.',
    waHello: "Hi Daniel! I'd like a quote for an app.",
    waGreeting: "Hi Daniel, I'm",
    waService: 'I need',
    waTimeline: 'Timeline',
    waFab: 'Chat on WhatsApp',
}

const es: typeof en = {
    navApps: 'Apps',
    navWork: 'Proyectos',
    navServices: 'Servicios',
    navProcess: 'Proceso',
    navExperience: 'Experiencia',
    getQuote: 'Cotizar',
    available: 'Disponible para nuevos proyectos',
    heroTitle: 'Tu idea de app, publicada en',
    heroHighlight: 'App Store y Google Play',
    heroSub: 'Soy Daniel Villamizar. He creado apps usadas por miles para Bancolombia y Panasonic, y soy Claude Certified Architect, así que las funciones con IA quedan bien hechas. Ahora diseño, desarrollo y publico la tuya, para iOS, Android y web, y trabajas directamente conmigo de principio a fin.',
    heroCtaPrimary: 'Cotiza gratis por WhatsApp',
    heroCtaSecondary: 'Ver apps que he creado',
    chipYears: '8+ años publicando apps',
    chipStores: 'Apps en Play Store y App Store',
    chipDirect: 'Hablas con quien programa',
    chipOwn: 'El código es tuyo',
    fullTime: '¿Contratas para un rol senior? Mira mi',
    trustedBy: 'Equipos con los que he lanzado productos',
    heroCardBeta: '3 apps en beta',
    certIssued: 'Anthropic · Emitida en oct 2026',
    certVerify: 'Verificar credencial',
    appsEyebrow: 'MIS APPS',
    appsTitle: 'Productos que creo y opero yo mismo',
    appsSub: 'Apps reales en beta cerrada en Android. Únete y pruébalas antes que nadie.',
    joinAndroid: 'Unirme a la beta Android',
    joinIos: 'Unirme a TestFlight',
    statusAndroid: 'Prueba cerrada · Android',
    statusIos: 'TestFlight · iOS',
    workEyebrow: 'TRABAJO PARA CLIENTES',
    workTitle: 'Apps usadas por miles',
    viewGithub: 'Ver GitHub',
    servicesEyebrow: 'SERVICIOS',
    servicesTitle: 'Del primer boceto a las tiendas, y después',
    askAbout: 'Cotizar esto',
    statYears: 'años de experiencia',
    statUsers: '1K+',
    statApps: 'usuarios en apps que he creado',
    statStores: 'del código es tuyo',
    statDirect: 'contacto directo, sin intermediarios',
    processEyebrow: 'PROCESO',
    processTitle: 'Cómo trabajamos juntos',
    processSub: 'Trabajas directamente con quien diseña y programa tu producto. Sin agencias, sin intermediarios, sin teléfono roto.',
    step: 'Paso',
    experienceEyebrow: 'EXPERIENCIA',
    experienceTitle: 'Construyendo para bancos, marcas globales y startups',
    experienceSub: 'Desde 2018 he trabajado con consultoras, bancos y marcas globales, desde sistemas empresariales en .NET hasta apps en Flutter usadas por miles. Hoy lidero desarrollo móvil y en Rust como Senior Fullstack Developer, y soy Claude Certified Architect (Anthropic).',
    contactEyebrow: 'COTIZA EN 1 MINUTO',
    contactTitle: 'Cuéntame tu proyecto. Recibe una propuesta cerrada en 48 horas.',
    contactSub: 'Elige qué necesitas, escribe dos líneas sobre tu idea y se abre WhatsApp con el mensaje listo. Respondo el mismo día hábil.',
    perk1: 'Llamada inicial de 20 minutos gratis',
    perk2: 'Propuesta cerrada con alcance, tiempos y precio',
    perk3: 'Si no soy la persona indicada, te lo digo y te oriento igual',
    formName: 'Tu nombre',
    formService: '¿Qué necesitas?',
    formTimeline: '¿Para cuándo lo necesitas?',
    formAbout: 'Cuéntame tu proyecto',
    formAboutPlaceholder: 'Ej: Una app para mi gimnasio donde los socios reserven clases y paguen la mensualidad',
    formSend: 'Enviar por WhatsApp',
    formNote: 'Se abre WhatsApp con tu mensaje listo. No guardo tus datos en este sitio.',
    orReach: 'O escríbeme a',
    rights: 'Todos los derechos reservados.',
    waHello: '¡Hola Daniel! Quiero cotizar una app.',
    waGreeting: 'Hola Daniel, soy',
    waService: 'Necesito',
    waTimeline: 'Para cuándo',
    waFab: 'Escríbeme por WhatsApp',
}

const STRINGS = { en, es }

function initialLang(): Lang {
    try {
        const saved = localStorage.getItem('lang')
        if (saved === 'en' || saved === 'es') return saved
    } catch { /* storage blocked */ }
    return navigator.language.startsWith('es') ? 'es' : 'en'
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: typeof en } | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(initialLang)
    useEffect(() => {
        document.documentElement.lang = lang
        try { localStorage.setItem('lang', lang) } catch { /* storage blocked */ }
    }, [lang])
    return <LangContext.Provider value={{ lang, setLang, t: STRINGS[lang] }}>{children}</LangContext.Provider>
}

export function useLang() {
    return useContext(LangContext)!
}
