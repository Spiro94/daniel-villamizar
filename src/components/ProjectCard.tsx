import type { Project } from '../utils/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-lavender-soft/30 bg-white group'>
      <div className='overflow-hidden h-48'>
        <img
          src={project.thumbnail}
          alt={project.name}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='p-6 flex flex-col gap-4'>
        <div className='inline-flex gap-2 flex-wrap' >
          {project.technologies.map((technology) => {
            return <div key={technology} className='text-xs font-medium bg-lavender-soft text-lavender-dark rounded-full px-3 py-1 shadow-sm'>{technology}</div>
          })}
        </div>
        <h1 className='font-bold font-mono text-xl text-chocolate group-hover:text-tangerine transition-colors duration-300'>{project.name}</h1>
        <p className='text-sm text-chocolate/70 leading-relaxed'>{project.description}</p>
      </div>
    </div>
  )
}

