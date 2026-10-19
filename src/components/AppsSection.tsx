import { PROJECTS } from '../utils/projects'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'
import { useLang } from '../i18n'

export default function AppsSection() {
    const { t } = useLang()
    return (
        <section id='apps' className='scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white text-chocolate'>
            <div className='max-w-6xl mx-auto'>
                <SectionHeader eyebrow={t.appsEyebrow} title={t.appsTitle} sub={t.appsSub} />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-4 sm:gap-6'>
                    {PROJECTS.filter((p) => p.beta).map((project) => <ProjectCard key={project.name} project={project} />)}
                </div>
            </div>
        </section>
    )
}
