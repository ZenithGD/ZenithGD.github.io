import React from 'react'

function ProjectCard({name, desc, tags, url}) {
  return (
    <a href={url}>
      <div className='bg-gray-500 text-cyan-200 p-6 h-full w-full'>
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
    </a>
  )
}

export default ProjectCard