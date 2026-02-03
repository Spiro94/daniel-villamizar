interface Experience {
    role: string,
    company: string,
    startDate: Date,
    endDate: Date | null,
    description: string[],
    technologies: string[]
}

export const WORK_EXPERIENCES: Experience[] = [
    {
        role: "Senior Flutter Developer",
        company: "Gorilla Logic",
        startDate: new Date(2022, 0, 1),
        endDate: null,
        description: [
            "Architected and developed high-performance Flutter widgets for iOS and Android platforms, ensuring responsive design and seamless user experiences",
            "Led cross-functional collaboration with product, design, and backend teams to align technical implementations with business objectives",
            "Implemented comprehensive testing and debugging strategies, reducing defects by maintaining quality standards pre-release",
            "Integrated complex backend services and APIs, establishing robust communication layers between mobile clients and server infrastructure",
            "Mentored and trained junior developers on Flutter best practices, code standards, and architectural patterns to elevate team technical excellence"
        ],
        technologies: ["Flutter", "Dart", "iOS", "Android", "Open AI", "Claude", "ADK", "Google Cloud"]
    },
    {
        role: "Experienced Consultant",
        company: "Amaris Consulting",
        startDate: new Date(2021, 0, 1),
        endDate: new Date(2022, 0, 1),
        description: [
            "Spearheaded end-to-end development of the Leal App for iOS and Android using Flutter, delivering a polished, production-ready mobile application",
            "Partnered with product and design teams to translate requirements into elegant technical solutions that enhanced user satisfaction",
            "Established seamless integration patterns between mobile application and backend services, enabling reliable data synchronization and API communication",
            "Delivered high-quality code with rigorous testing practices to ensure app stability and performance across multiple devices and OS versions"
        ],
        technologies: ["Flutter", "Dart", "iOS", "Android"]
    },
    {
        role: "Senior Software Engineer",
        company: "Capgemini",
        startDate: new Date(2020, 0, 1),
        endDate: new Date(2021, 0, 1),
        description: [
            "Led the development of Bancolombia's enterprise-grade Design System, establishing a unified design language and reusable component library for consistency across products",
            "Created comprehensive design documentation and guidelines, enabling other teams to build cohesive interfaces aligned with brand standards",
            "Implemented sophisticated UI components and smooth animations in the Bancolombia Ahorro a La Mano app, delivering an intuitive and delightful user experience",
            "Evaluated and integrated emerging technologies and frameworks to enhance application performance, scalability, and user engagement metrics"
        ],
        technologies: ["Flutter", "Design System", "iOS", "Android"]
    },
    {
        role: "Software Engineer",
        company: "RENTEC Rentabilidad y Tecnología SAS",
        startDate: new Date(2020, 0, 1),
        endDate: new Date(2020, 11, 1),
        description: [
            "Engineered scalable MVC web applications using the .NET framework, implementing clean separation of concerns across views, controllers, and models",
            "Designed and optimized SQL Server databases with complex queries and stored procedures, improving data retrieval efficiency and application responsiveness",
            "Executed comprehensive testing and debugging protocols, identifying and resolving defects to ensure production-ready code quality",
            "Conducted thorough code reviews, providing constructive feedback to peers while establishing best practices for code maintainability and team standards"
        ],
        technologies: [".NET", "MVC", "SQL Server", "C#"]
    },
    {
        role: "FrontEnd Developer",
        company: "IncubApp",
        startDate: new Date(2019, 0, 1),
        endDate: new Date(2021, 0, 1),
        description: [
            "Translated UX/UI designs into pixel-perfect Flutter interfaces, creating smooth navigation flows and intuitive user interactions across the app",
            "Engineered seamless AWS service integrations including authentication with Cognito and serverless functions with Lambda for dynamic backend communication",
            "Implemented responsive designs that adapt gracefully across various screen sizes and device orientations for optimal mobile experiences",
            "Optimized app performance through efficient state management and component architecture best practices"
        ],
        technologies: ["Flutter", "Dart", "AWS", "Cognito", "Lambda"]
    },
    {
        role: "Component Innovation Engineer",
        company: "Sistemas y Computadores S.A.",
        startDate: new Date(2018, 0, 1),
        endDate: new Date(2020, 0, 1),
        description: [
            "Designed and developed full-stack web and desktop applications using the .NET framework, delivering solutions that met client specifications and business objectives",
            "Created sophisticated Oracle database solutions with complex queries and stored procedures, optimizing data processing and application performance",
            "Implemented component-based architectures using C# and VB.NET, promoting code reusability and maintainability across multiple projects",
            "Collaborated directly with clients to capture business requirements, analyze workflows, and translate them into robust technical solutions and specifications"
        ],
        technologies: [".NET", "Oracle", "C#", "SQL", "VB.NET"]
    }
]