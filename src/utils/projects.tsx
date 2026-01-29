import ProjectImge from '../assets/project.jpg'

interface Project {
    name: string;
    thumbnail: string;
    technologies: string[];
    description: string;
}

const PROJECTS: Project[] = [
    {
        name: "Portfolio Website",
        thumbnail: ProjectImge,
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        description: "Personal portfolio showcasing my projects and skills"
    },
    {
        name: "E-commerce Platform",
        thumbnail: ProjectImge,
        technologies: ["React", "Node.js", "MongoDB"],
        description: "Full-stack e-commerce application with payment integration"
    },
    {
        name: "Task Manager App",
        thumbnail: ProjectImge,
        technologies: ["React", "Firebase", "Material UI"],
        description: "Collaborative task management tool with real-time updates"
    }
];

export { PROJECTS };
export type { Project };