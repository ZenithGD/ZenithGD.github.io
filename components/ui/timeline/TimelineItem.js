import Link from 'next/link'
import React from 'react'

function TimelineItem({title, text, link}) {
  return (
    <div className='bg-gray-700 drop-shadow-md p-4 timeline-element'>
      <h3 className='text-cyan-300'>{title}</h3>
      <div>
        {text}
      </div>
      {link && (
        <Link href={link}>
          Ir al enlace {'>'}
        </Link>
      )}
    </div>
  )
}

export default TimelineItem