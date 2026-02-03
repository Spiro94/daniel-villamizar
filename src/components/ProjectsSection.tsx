import { ExternalLinkIcon } from 'lucide-react'
import { PROJECTS } from '../utils/projects'
import ProjectCard from './ProjectCard'
import { APP_CONSTANTS } from '../utils/constants'

export default function ProjectsSection() {
    return (
        <section id='projects' className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background-light via-white to-lavender-soft text-chocolate'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0'>
                    <h1 className='font-bold text-3xl sm:text-4xl text-chocolate tracking-tight'>Featured Projects</h1>
                    <button onClick={() => window.open(APP_CONSTANTS.githubUrl)} className='inline-flex gap-2 text-tangerine hover:text-golden cursor-pointer text-sm font-semibold transition-all duration-200 hover:scale-105'>View GitHub <ExternalLinkIcon className='w-5 h-5' /> </button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-8 sm:pt-12 gap-4 sm:gap-6'>
                    {
                        PROJECTS.map((project) => {
                            return <ProjectCard key={project.name} project={project} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}