import { Bot, Globe, Rocket, Server, Smartphone, Wrench, type LucideIcon } from 'lucide-react'
import type { L } from '../i18n'

export const PICK_SERVICE = 'pick-service'

interface Service {
    id: string;
    icon: LucideIcon;
    title: L;
    description: L;
}

export const SERVICES: Service[] = [
    {
        id: 'mobile', icon: Smartphone,
        title: { en: 'Mobile apps', es: 'Apps móviles' },
        description: { en: 'One Flutter codebase, native-feeling apps for iOS and Android, published on both stores.', es: 'Un solo código en Flutter, apps con sensación nativa para iOS y Android, publicadas en ambas tiendas.' },
    },
    {
        id: 'web', icon: Globe,
        title: { en: 'Web apps', es: 'Aplicaciones web' },
        description: { en: 'Fast React + TypeScript dashboards, portals and SaaS products.', es: 'Paneles, portales y productos SaaS rápidos en React + TypeScript.' },
    },
    {
        id: 'backend', icon: Server,
        title: { en: 'Backend & APIs', es: 'Backend y APIs' },
        description: { en: 'Supabase, .NET or Rust backends with auth, payments and real-time data.', es: 'Backends en Supabase, .NET o Rust con autenticación, pagos y datos en tiempo real.' },
    },
    {
        id: 'ai', icon: Bot,
        title: { en: 'AI features', es: 'Funciones con IA' },
        description: { en: 'Assistants, OCR, voice and agents built into your product by a Claude Certified Architect, with OpenAI or Claude.', es: 'Asistentes, OCR, voz y agentes integrados en tu producto por un Claude Certified Architect, con OpenAI o Claude.' },
    },
    {
        id: 'mvp', icon: Rocket,
        title: { en: 'MVP for startups', es: 'MVP para startups' },
        description: { en: 'From idea to a testable product in weeks, ready to show users and investors.', es: 'De la idea a un producto que puedes probar en semanas, listo para usuarios e inversionistas.' },
    },
    {
        id: 'maintenance', icon: Wrench,
        title: { en: 'Maintenance & store publishing', es: 'Mantenimiento y publicación' },
        description: { en: 'Updates, store reviews, crash fixes and new features for apps already in production.', es: 'Actualizaciones, revisiones de tienda, corrección de errores y nuevas funciones para apps en producción.' },
    },
]

export const PROCESS_STEPS: { title: L; description: L; when: L }[] = [
    {
        title: { en: 'Free 20-minute call', es: 'Llamada de 20 minutos gratis' },
        description: { en: "You tell me about your idea and your users. I'll be honest about what you need and what you don't.", es: 'Me cuentas tu idea y tus usuarios. Te digo con honestidad qué necesitas y qué no.' },
        when: { en: 'Day 1', es: 'Día 1' },
    },
    {
        title: { en: 'Fixed proposal', es: 'Propuesta cerrada' },
        description: { en: 'Scope, timeline and price in writing. No fine print, no surprise invoices.', es: 'Alcance, tiempos y precio por escrito. Sin letra pequeña ni cobros sorpresa.' },
        when: { en: 'Within 48 hours', es: 'En 48 horas' },
    },
    {
        title: { en: 'Design & build', es: 'Diseño y desarrollo' },
        description: { en: 'Weekly builds on your phone via TestFlight and Play testing. You give feedback at every step.', es: 'Versiones semanales en tu celular vía TestFlight y pruebas de Play. Opinas en cada etapa.' },
        when: { en: '2 to 10 weeks', es: '2 a 10 semanas' },
    },
    {
        title: { en: 'Launch & support', es: 'Lanzamiento y soporte' },
        description: { en: 'I publish to the stores, set up analytics and stay around after launch.', es: 'Publico en las tiendas, configuro analítica y te acompaño después del lanzamiento.' },
        when: { en: 'And beyond', es: 'Y después' },
    },
]

export const TIMELINES: L[] = [
    { en: 'As soon as possible', es: 'Lo antes posible' },
    { en: 'This month', es: 'Este mes' },
    { en: 'In 1 to 3 months', es: 'En 1 a 3 meses' },
    { en: 'Just exploring', es: 'Solo estoy explorando' },
]
