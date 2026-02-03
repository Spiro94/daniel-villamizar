import type { Project } from '../utils/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='flex flex-col rounded-xl overflow-hidden'>
      <img
        src={project.thumbnail}
        alt={project.name}
        className='w-full h-auto object-cover'
      />
      <div className='p-5 flex flex-col bg-white gap-3 hover:shadow-lg transition-shadow duration-300'>
        <div className='inline-flex gap-2 flex-wrap' >
          {project.technologies.map((technology) => {
            return <div className='text-xs font-medium bg-lavender-soft text-lavender-dark rounded-full px-3 py-1'>{technology}</div>
          })}
        </div>
        <h1 className='font-bold font-mono text-lg text-chocolate'>{project.name}</h1>
        <p className='text-sm text-chocolate/70 leading-relaxed'>{project.description}</p>
      </div>
    </div>
  )
}

