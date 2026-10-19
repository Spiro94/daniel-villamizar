/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'es'
export type L<T = string> = Record<Lang, T>

const en = {
    navWork: 'Work',
    navServices: 'Services',
    navProcess: 'Process',
    navExperience: 'Experience',
    getQuote: 'Get a quote',
    available: 'Available for new projects',
    heroTitle: 'I build mobile & web apps that make it to',
    heroHighlight: 'the stores',
    heroSub: "I'm Daniel Villamizar, a fullstack developer with 8+ years shipping Flutter apps for iOS and Android, React web apps and the backends behind them — for banks, global brands and startups.",
    heroCtaPrimary: 'Get a quote on WhatsApp',
    heroCtaSecondary: 'See my apps',
    chipYears: '8+ years shipping',
    chipStores: 'Apps on Play & App Store',
    chipDirect: 'You talk to the developer',
    chipOwn: 'The code is yours',
    fullTime: 'Hiring full-time? Open to roles:',
    trustedBy: 'Products I have built and worked on',
    heroCardBeta: '3 apps in beta',
    certIssued: 'Anthropic · Issued Oct 2026',
    certVerify: 'Verify credential',
    appsEyebrow: 'MY OWN APPS',
    appsTitle: 'Apps I am building right now',
    appsSub: 'Real products, live in Android closed testing and TestFlight. Join the beta and try them yourself.',
    joinAndroid: 'Join Android beta',
    joinIos: 'Join TestFlight',
    statusAndroid: 'Closed testing · Android',
    statusIos: 'TestFlight · iOS',
    workEyebrow: 'CLIENT WORK',
    workTitle: 'Apps used by millions',
    viewGithub: 'View GitHub',
    servicesEyebrow: 'SERVICES',
    servicesTitle: 'Everything you need to launch your product',
    askAbout: 'Ask about this',
    statYears: 'years of experience',
    statApps: 'apps shipped to production',
    statStores: 'stores: Google Play & App Store',
    statDirect: 'direct contact, no middlemen',
    processEyebrow: 'PROCESS',
    processTitle: 'How we work together',
    processSub: 'You work directly with the person who designs and codes your product. No agencies, no tickets.',
    step: 'Step',
    experienceEyebrow: 'EXPERIENCE',
    experienceTitle: '8+ years building products people use every day',
    experienceSub: 'Since 2018 I have worked with consultancies, banks and global brands, from enterprise .NET systems to Flutter apps used by millions. Today I lead mobile and Rust development as a Senior Fullstack Developer.',
    contactEyebrow: 'GET A QUOTE IN 1 MINUTE',
    contactTitle: 'Tell me about your project and get a proposal in 48 hours',
    contactSub: 'Pick what you need, write two lines about your idea and WhatsApp opens with the message ready. I reply the same business day.',
    perk1: 'Free 20-minute intro call',
    perk2: 'Fixed proposal with scope, timeline and price',
    perk3: "If I'm not the right fit, I'll tell you and point you in the right direction",
    formName: 'Your name',
    formService: 'What do you need?',
    formTimeline: 'When?',
    formAbout: 'Tell me about your project',
    formAboutPlaceholder: 'e.g. An app for my gym where members book classes and pay monthly',
    formSend: 'Send via WhatsApp',
    formNote: 'WhatsApp opens with your message ready. Nothing is stored on this site.',
    orReach: 'Or reach me at',
    downloadCv: 'Download CV',
    rights: 'All rights reserved.',
    waGreeting: "Hi Daniel, I'm",
    waService: 'I need',
    waTimeline: 'Timeline',
    waFab: 'Chat on WhatsApp',
}

const es: typeof en = {
    navWork: 'Proyectos',
    navServices: 'Servicios',
    navProcess: 'Proceso',
    navExperience: 'Experiencia',
    getQuote: 'Cotizar',
    available: 'Disponible para nuevos proyectos',
    heroTitle: 'Desarrollo apps móviles y web que llegan a',
    heroHighlight: 'las tiendas',
    heroSub: 'Soy Daniel Villamizar, desarrollador fullstack con más de 8 años creando apps en Flutter para iOS y Android, aplicaciones web en React y los backends que las sostienen — para bancos, marcas globales y startups.',
    heroCtaPrimary: 'Cotizar por WhatsApp',
    heroCtaSecondary: 'Ver mis apps',
    chipYears: '8+ años de experiencia',
    chipStores: 'Apps en Play Store y App Store',
    chipDirect: 'Hablas con quien programa',
    chipOwn: 'El código es tuyo',
    fullTime: '¿Buscas a alguien de tiempo completo? Abierto a ofertas:',
    trustedBy: 'Productos que he construido y en los que he trabajado',
    heroCardBeta: '3 apps en beta',
    certIssued: 'Anthropic · Emitida en oct 2026',
    certVerify: 'Verificar credencial',
    appsEyebrow: 'MIS APPS',
    appsTitle: 'Apps que estoy construyendo ahora',
    appsSub: 'Productos reales, en pruebas cerradas de Android y TestFlight. Únete a la beta y pruébalas tú mismo.',
    joinAndroid: 'Unirme a la beta Android',
    joinIos: 'Unirme a TestFlight',
    statusAndroid: 'Prueba cerrada · Android',
    statusIos: 'TestFlight · iOS',
    workEyebrow: 'TRABAJO PARA CLIENTES',
    workTitle: 'Apps usadas por millones',
    viewGithub: 'Ver GitHub',
    servicesEyebrow: 'SERVICIOS',
    servicesTitle: 'Todo lo que necesitas para lanzar tu producto',
    askAbout: 'Preguntar por esto',
    statYears: 'años de experiencia',
    statApps: 'apps en producción',
    statStores: 'tiendas: Google Play y App Store',
    statDirect: 'contacto directo, sin intermediarios',
    processEyebrow: 'PROCESO',
    processTitle: 'Cómo trabajamos juntos',
    processSub: 'Trabajas directamente con quien diseña y programa tu producto. Sin agencias, sin tickets.',
    step: 'Paso',
    experienceEyebrow: 'EXPERIENCIA',
    experienceTitle: '8+ años construyendo productos que la gente usa a diario',
    experienceSub: 'Desde 2018 he trabajado con consultoras, bancos y marcas globales, desde sistemas empresariales en .NET hasta apps en Flutter usadas por millones. Hoy lidero desarrollo móvil y en Rust como Senior Fullstack Developer.',
    contactEyebrow: 'COTIZA EN 1 MINUTO',
    contactTitle: 'Cuéntame tu proyecto y recibe una propuesta en 48 horas',
    contactSub: 'Elige qué necesitas, escribe dos líneas sobre tu idea y se abre WhatsApp con el mensaje listo. Respondo el mismo día hábil.',
    perk1: 'Llamada inicial de 20 minutos sin costo',
    perk2: 'Propuesta cerrada con alcance, tiempos y precio',
    perk3: 'Si no soy la persona indicada, te lo digo y te oriento igual',
    formName: 'Tu nombre',
    formService: '¿Qué necesitas?',
    formTimeline: '¿Para cuándo?',
    formAbout: 'Cuéntame tu proyecto',
    formAboutPlaceholder: 'Ej: Una app para mi gimnasio donde los socios reserven clases y paguen la mensualidad',
    formSend: 'Enviar por WhatsApp',
    formNote: 'Se abre WhatsApp con tu mensaje listo. No guardo tus datos en este sitio.',
    orReach: 'O escríbeme a',
    downloadCv: 'Descargar CV',
    rights: 'Todos los derechos reservados.',
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
