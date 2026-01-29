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
      <div className='p-4 flex flex-col bg-white gap-2'>
        <div className='inline-flex gap-2' >
          {project.technologies.map((technology) => {
            return <div className='text-xs bg-gray-200 rounded-full px-2 py-1'>{technology}</div>
          })}
        </div>
        <h1 className='font-bold font-mono'>{project.name}</h1>
        <p className='text-sm'>{project.description}</p>
      </div>
    </div>
  )
}

