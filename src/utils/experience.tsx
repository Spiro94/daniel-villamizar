import type { L } from "../i18n";

// Keep in sync with cv/resume.html (same roles, years and achievements).
export interface Job {
    company: string;
    role: string;
    years: string;
    client?: string;
    achievements: L[];
}

export const EXPERIENCE: Job[] = [
    {
        company: 'Gorilla Logic',
        role: 'Senior Software Engineer (Mobile & Rust)',
        years: '2022 – Present',
        client: 'Byrider · Panasonic',
        achievements: [
            { en: "Redesigned and migrated Byrider's customer app from Xamarin to Flutter, used by 50K+ customers to manage auto loans, payments and autopay.", es: 'Rediseñé y migré de Xamarin a Flutter la app de clientes de Byrider, usada por más de 50K clientes para gestionar créditos, pagos y pagos automáticos.' },
            { en: 'Built Flutter features for Yohana (Panasonic) with AI services (OpenAI, Claude, Google ADK) on Google Cloud.', es: 'Desarrollé funcionalidades en Flutter para Yohana (Panasonic) con servicios de IA (OpenAI, Claude, Google ADK) en Google Cloud.' },
            { en: 'Developed a local-first Rust core (Axum, Actix Web) packaged as cross-platform desktop apps with Tauri.', es: 'Desarrollé un core local-first en Rust (Axum, Actix Web) empaquetado como apps de escritorio multiplataforma con Tauri.' },
        ],
    },
    {
        company: 'Amaris Consulting',
        role: 'Senior Flutter Engineer (Consultant)',
        years: '2021 – 2022',
        client: 'Leal',
        achievements: [
            { en: 'Designed, built and maintained the Leal loyalty app for iOS and Android with Flutter and Firebase.', es: 'Diseñé, desarrollé y mantuve la app de fidelización Leal para iOS y Android con Flutter y Firebase.' },
        ],
    },
    {
        company: 'Capgemini',
        role: 'Senior Software Engineer',
        years: '2020 – 2021',
        client: 'Bancolombia',
        achievements: [
            { en: "Built reusable components, design language and guidelines for Bancolombia's enterprise design system, used across multiple teams.", es: 'Construí componentes reutilizables, lenguaje de diseño y guías para el design system empresarial de Bancolombia, usado por varios equipos.' },
            { en: 'Implemented complex interfaces and animations for Ahorro a la Mano, a 100% mobile savings account.', es: 'Implementé interfaces y animaciones complejas para Ahorro a la Mano, una cuenta de ahorros 100% móvil.' },
        ],
    },
    {
        company: 'RENTEC',
        role: 'Software Engineer',
        years: '2020',
        achievements: [
            { en: '.NET MVC web features and SQL Server database logic.', es: 'Funcionalidades web en .NET MVC y lógica de base de datos en SQL Server.' },
        ],
    },
    {
        company: 'IncubApp',
        role: 'Mobile Developer (Flutter)',
        years: '2019 – 2021',
        achievements: [
            { en: 'Flutter screens and navigation, with AWS Cognito authentication and Lambda functions.', es: 'Pantallas y navegación en Flutter, con autenticación en AWS Cognito y funciones Lambda.' },
        ],
    },
    {
        company: 'Sistemas y Computadores S.A.',
        role: 'Software Engineer (.NET)',
        years: '2018 – 2020',
        achievements: [
            { en: 'Web and desktop applications with .NET and Oracle PL/SQL.', es: 'Aplicaciones web y de escritorio con .NET y Oracle PL/SQL.' },
        ],
    },
]

export const CORE_STACK: { category: L; items: string[] }[] = [
    { category: { en: 'Mobile', es: 'Móvil' }, items: ['Flutter', 'Dart', 'Bloc', 'iOS', 'Android'] },
    { category: { en: 'Web & Backend', es: 'Web y backend' }, items: ['React', 'TypeScript', 'Node.js', 'Rust', '.NET'] },
    { category: { en: 'Cloud & Data', es: 'Nube y datos' }, items: ['AWS', 'Google Cloud', 'Firebase', 'Supabase', 'PostgreSQL'] },
    { category: { en: 'AI', es: 'IA' }, items: ['Claude', 'OpenAI', 'Google ADK'] },
]
