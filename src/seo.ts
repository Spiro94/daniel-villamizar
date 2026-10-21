import type { L, Lang } from './i18n'

export const SITE_URL = 'https://www.danielvillamizar.dev'

export const LANG_PATH: L = { en: '/', es: '/es/' }

export const SEO: L<{ title: string; description: string; locale: string; image: string; imageAlt: string }> = {
    en: {
        title: 'Daniel Villamizar · iOS, Android & Web App Developer | Claude Certified Architect',
        description: 'Senior Flutter & React developer and Claude Certified Architect. I design, build and publish iOS, Android and web apps for startups and businesses: 8+ years, apps used by thousands at Bancolombia and Panasonic. Free quote in 48 hours, or see my CV for full-time roles.',
        locale: 'en_US',
        image: '/og-image.png',
        imageAlt: 'Daniel Villamizar, iOS, Android and web app developer',
    },
    es: {
        title: 'Daniel Villamizar · Desarrollador de apps iOS, Android y Web | Claude Certified Architect',
        description: 'Desarrollador senior Flutter y React en Colombia y Claude Certified Architect. Diseño, desarrollo y publico apps iOS, Android y web para startups y empresas: 8+ años, apps usadas por miles en Bancolombia y Panasonic. Cotización gratis en 48 horas, o mira mi CV para roles de tiempo completo.',
        locale: 'es_CO',
        image: '/og-image-es.png',
        imageAlt: 'Daniel Villamizar, desarrollador de apps iOS, Android y web',
    },
}

export function langFromPath(pathname: string): Lang {
    return pathname.startsWith('/es') ? 'es' : 'en'
}
