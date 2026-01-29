import { ExternalLinkIcon } from 'lucide-react'
import { PROJECTS } from '../utils/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
    return (
        <section className='py-20 px-6 bg-linear-to-br from-background-light via-white to-lavender-soft text-chocolate'>
            <div className='flex justify-between items-center' >
                <h1 className='font-bold text-2xl'>Featured Projects</h1>
                <button onClick={() => console.log('open github clicked')} className='inline-flex gap-2 text-tangerine hover:text-golden cursor-pointer text-sm'>View GitHub <ExternalLinkIcon className='w-5 h-5' /> </button>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-2 pt-12 gap-6'>
                {
                    PROJECTS.map((project) => {
                        return <ProjectCard project={project} />
                    })
                }
            </div>
        </section>
    )
}
