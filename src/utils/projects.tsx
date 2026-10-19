import AhorroALaMano from '../assets/a-la-mano.webp'
import Citamente from '../assets/citamente.webp'
import Cuentitos from '../assets/cuentitos.webp'
import HabitHeroes from '../assets/habit-heroes.webp'
import Leal from '../assets/leal.webp'
import Yohana from '../assets/panasonic.webp'
import type { L } from '../i18n'


interface Project {
    name: string;
    thumbnail?: string;
    technologies: string[];
    description: L;
    // Only set for my own apps in beta. Empty link = button hidden.
    beta?: { android?: string; ios?: string };
}

const PROJECTS: Project[] = [
    {
        name: "Habit Heroes",
        thumbnail: HabitHeroes,
        technologies: ["Flutter", "Bloc", "Supabase", "Firebase", "PostgreSQL"],
        description: {
            en: "Gamified family habit-tracking app where parents create tasks and assign them to children who earn points for completion, redeemable for real-world rewards",
            es: "App gamificada de hábitos en familia: los padres crean tareas, los niños ganan puntos al completarlas y los canjean por recompensas reales",
        },
        beta: { android: '', ios: '' }, // TODO: Play closed-testing opt-in URL / TestFlight public link
    },
    {
        name: "CitaMente",
        thumbnail: Citamente,
        technologies: ["Flutter", "Bloc", "Supabase", "OpenAI", "PostgreSQL"],
        description: {
            en: "AI-powered medical appointment management app for families with voice recording, photo OCR, and smart data extraction to organize doctor visits",
            es: "App con IA para gestionar las citas médicas de la familia, con grabación de voz, OCR de fotos y extracción inteligente de datos para organizar cada consulta",
        },
        beta: { android: 'https://play.google.com/apps/testing/com.daniel.villamizar.appointment.appointment.staging', ios: '' }, // TODO
    },
    {
        name: "Cuentitos",
        thumbnail: Cuentitos,
        technologies: ["Flutter", "Supabase", "OpenAI"], // TODO: confirm stack
        description: {
            en: "AI-generated stories for kids: pick the topics and the moral you want to teach, and get a brand-new story ready to read together",
            es: "Cuentos para niños generados con IA: elige los temas y la moraleja que quieres enseñar y obtén una historia nueva lista para leer juntos",
        },
        beta: { android: 'https://play.google.com/apps/testing/com.danielvillamizar.cuentitos', ios: '' }, // TODO
    },
    {
        name: "Yohana (Panasonic)",
        thumbnail: Yohana,
        technologies: ["Flutter", "Dart", "Android", "iOS", "Open AI", "Claude", "ADK", "Google Cloud"],
        description: {
            en: "Next-generation family concierge service app that supports busy families with a dedicated team of professionals, helping manage daily to-dos from meal planning to travel arrangements",
            es: "App de concierge familiar de nueva generación que apoya a familias ocupadas con un equipo dedicado de profesionales, desde planear comidas hasta organizar viajes",
        },
    },
    {
        name: "Ahorro a la Mano (Bancolombia)",
        thumbnail: AhorroALaMano,
        technologies: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
        description: {
            en: "Bancolombia's mobile-first low-amount savings account app with no maintenance fees, enabling users to manage finances, pay bills, transfer money, and receive salary deposits entirely from their phone",
            es: "Cuenta de ahorros 100% móvil de Bancolombia, sin cuota de manejo: los usuarios pagan facturas, transfieren dinero y reciben su salario desde el celular",
        },
    },
    {
        name: "Leal App",
        thumbnail: Leal,
        technologies: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
        description: {
            en: "Loyalty rewards platform where users earn points and cashback from purchases at physical stores, redeemable for prizes and discounts",
            es: "Plataforma de fidelización donde los usuarios ganan puntos y cashback por compras en tiendas físicas, canjeables por premios y descuentos",
        },
    }
];

export { PROJECTS }
export type { Project }
