import { FaAndroid, FaApple } from 'react-icons/fa'
import type { Project } from '../utils/projects'
import { useLang } from '../i18n'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { lang, t } = useLang()
  const { beta } = project

  return (
    <div className='flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-lavender-soft/30 bg-white group'>
      <div className='relative overflow-hidden h-48 bg-linear-to-br from-primary via-lavender to-tangerine'>
        {project.thumbnail
          ? <img
            src={project.thumbnail}
            alt={project.name}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
            loading='lazy'
            decoding='async'
          />
          : <div className='grid h-full place-items-center font-display font-bold text-4xl text-white'>{project.name}</div>}
        {beta && (
          <div className='absolute top-3 left-3 flex flex-col gap-1.5 items-start'>
            <span className='inline-flex items-center gap-1.5 text-[11px] font-semibold bg-white/95 text-chocolate rounded-full px-2.5 py-1 shadow'><FaAndroid className='text-green-dark' />{t.statusAndroid}</span>
            <span className='inline-flex items-center gap-1.5 text-[11px] font-semibold bg-white/95 text-chocolate rounded-full px-2.5 py-1 shadow'><FaApple />{t.statusIos}</span>
          </div>
        )}
      </div>
      <div className='p-6 flex flex-col gap-4 flex-1'>
        <div className='inline-flex gap-2 flex-wrap' >
          {project.technologies.map((technology) => {
            return <div key={technology} className='text-xs font-medium bg-lavender-soft text-lavender-dark rounded-full px-3 py-1 shadow-sm'>{technology}</div>
          })}
        </div>
        <h3 className='font-bold font-mono text-xl text-chocolate group-hover:text-tangerine transition-colors duration-300'>{project.name}</h3>
        <p className='text-sm text-chocolate/70 leading-relaxed'>{project.description[lang]}</p>
        {(beta?.android || beta?.ios) && (
          <div className='mt-auto flex flex-wrap gap-2 pt-2'>
            {beta.android && <a href={beta.android} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-full bg-chocolate text-white text-sm font-semibold px-4 py-2 hover:bg-chocolate/90'><FaAndroid />{t.joinAndroid}</a>}
            {beta.ios && <a href={beta.ios} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-full border-2 border-chocolate text-chocolate text-sm font-semibold px-4 py-1.5 hover:bg-chocolate hover:text-white'><FaApple />{t.joinIos}</a>}
          </div>
        )}
      </div>
    </div>
  )
}
