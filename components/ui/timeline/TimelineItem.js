import Link from 'next/link'
import React from 'react'

function TimelineItem({title, children}) {
  return (
    <>
      <h3 className='text-cyan-300'>{title}</h3>
      <div>
        {children}
      </div>
    </>
  )
}

export default TimelineItem