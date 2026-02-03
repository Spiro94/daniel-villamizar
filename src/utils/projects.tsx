import AhorroALaMano from '../assets/a-la-mano.jpg'
import Citamente from '../assets/citamente.png'
import HabitHeroes from '../assets/habit-heroes.png'
import Leal from '../assets/leal.png'
import Yohana from '../assets/yohana.jpg'


interface Project {
    name: string;
    thumbnail: string;
    technologies: string[];
    description: string;
}

const PROJECTS: Project[] = [
    {
        name: "Yohana",
        thumbnail: Yohana,
        technologies: ["Flutter", "Dart", "Android", "iOS", "Open AI", "Claude", "ADK", "Google Cloud"],
        description: "Next-generation family concierge service app that supports busy families with a dedicated team of professionals, helping manage daily to-dos from meal planning to travel arrangements"
    },
    {
        name: "Habit Heroes",
        thumbnail: HabitHeroes,
        technologies: ["Flutter", "Bloc", "Supabase", "Firebase", "PostgreSQL"],
        description: "Gamified family habit-tracking app where parents create tasks and assign them to children who earn points for completion, redeemable for real-world rewards"
    },
    {
        name: "CitaMente",
        thumbnail: Citamente,
        technologies: ["Flutter", "Bloc", "Supabase", "OpenAI", "PostgreSQL"],
        description: "AI-powered medical appointment management app for families with voice recording, photo OCR, and smart data extraction to organize doctor visits"
    },
    {
        name: "Leal App",
        thumbnail: Leal,
        technologies: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
        description: "Loyalty rewards platform where users earn points and cashback from purchases at physical stores, redeemable for prizes and discounts"
    },
    {
        name: "Ahorro a la Mano",
        thumbnail: AhorroALaMano,
        technologies: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
        description: "Bancolombia's mobile-first low-amount savings account app with no maintenance fees, enabling users to manage finances, pay bills, transfer money, and receive salary deposits entirely from their phone"
    }
];

export { PROJECTS }
export type { Project }
