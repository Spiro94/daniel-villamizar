import { ExternalLinkIcon } from 'lucide-react'
import { PROJECTS } from '../utils/projects'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'
import { APP_CONSTANTS } from '../utils/constants'
import { useLang } from '../i18n'

export default function ProjectsSection() {
    const { t } = useLang()
    return (
        <section id='projects' className='scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background-light via-white to-lavender-soft text-chocolate'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4'>
                    <SectionHeader eyebrow={t.workEyebrow} title={t.workTitle} />
                    <a href={APP_CONSTANTS.githubUrl} target='_blank' rel='noopener noreferrer' className='inline-flex gap-2 text-tangerine-dark hover:underline underline-offset-4 text-sm font-semibold transition-all duration-200 hover:scale-105'>{t.viewGithub} <ExternalLinkIcon className='w-5 h-5' /></a>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-4 sm:gap-6'>
                    {PROJECTS.filter((p) => !p.beta).map((project) => <ProjectCard key={project.name} project={project} />)}
                </div>
            </div>
        </section>
    )
}
