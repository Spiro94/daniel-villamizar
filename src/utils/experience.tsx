import { Code2, Layers, Server, Users, type LucideIcon } from "lucide-react";
import type { L } from "../i18n";

export const EXPERIENCE_HIGHLIGHTS: { icon: LucideIcon; title: L; description: L }[] = [
    {
        icon: Code2,
        title: { en: 'Mobile apps at scale', es: 'Apps móviles a gran escala' },
        description: { en: 'Flutter apps for iOS and Android in banking, loyalty and family services, from first commit to the stores.', es: 'Apps en Flutter para iOS y Android en banca, fidelización y servicios familiares, desde el primer commit hasta las tiendas.' },
    },
    {
        icon: Layers,
        title: { en: 'Design systems', es: 'Design systems' },
        description: { en: "Led Bancolombia's enterprise design system: reusable components and guidelines used across teams.", es: 'Lideré el design system empresarial de Bancolombia: componentes reutilizables y guías usadas por varios equipos.' },
    },
    {
        icon: Server,
        title: { en: 'Backend & cross-platform core', es: 'Backend y core multiplataforma' },
        description: { en: '.NET and SQL systems, AWS integrations, and a local-first Rust core (Axum, Actix Web, Tauri) shared across mobile and desktop.', es: 'Sistemas en .NET y SQL, integraciones con AWS y un core local-first en Rust (Axum, Actix Web, Tauri) compartido entre móvil y escritorio.' },
    },
    {
        icon: Users,
        title: { en: 'Leadership', es: 'Liderazgo' },
        description: { en: 'Work side by side with product, design and backend teams, and mentor developers on architecture and best practices.', es: 'Trabajo de la mano con producto, diseño y backend, y soy mentor de otros desarrolladores en arquitectura y buenas prácticas.' },
    },
]

export const CORE_STACK = ['Flutter', 'Dart', 'React', 'TypeScript', 'Rust', '.NET', 'Supabase', 'Firebase', 'AWS', 'OpenAI', 'Claude']
