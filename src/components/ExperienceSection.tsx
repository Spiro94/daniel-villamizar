import { WORK_EXPERIENCES } from "../utils/experience";

export default function ExperienceSection() {
    return (
        <section id='experience' className="py-20 px-8 max-w-7xl mx-auto">
            <h1 className="font-bold text-3xl pb-16 text-stone-900">Work Experience</h1>
            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-linear-to-b from-stone-300 via-stone-400 to-stone-300"></div>

                {WORK_EXPERIENCES.map((experience, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-8 pb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-stone-900 border-4 border-white rounded-full shadow-lg ring-4 ring-stone-100 z-10"></div>

                            {/* Spacer for desktop */}
                            <div className="hidden md:block md:w-1/2"></div>

                            {/* Content card */}
                            <div className={`md:w-1/2 ml-8 md:ml-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                            <h2 className="text-xl font-bold text-stone-900">{experience.role}</h2>
                                            <span className="text-sm font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full whitespace-nowrap self-start">
                                                {experience.startDate.getFullYear()}{experience.endDate != null ? ` - ${experience.endDate.getFullYear()}` : ' - Present'}
                                            </span>
                                        </div>

                                        <h3 className="text-base font-semibold text-stone-600">{experience.company}</h3>

                                        <ul className="space-y-2 text-sm">
                                            {experience.description.map((point, pointIndex) => (
                                                <li key={pointIndex} className="flex gap-2 text-stone-700">
                                                    <span className="text-stone-400 mt-1">•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex gap-2 flex-wrap pt-2">
                                            {experience.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="px-3 py-1 text-xs font-medium bg-stone-100 text-stone-700 rounded-full hover:bg-stone-200 transition-colors"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}