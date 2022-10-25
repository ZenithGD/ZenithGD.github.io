import React from 'react'
import TimelineItem from './TimelineItem'

import './Timeline.module.css'

function Timeline() {
  return (
    <div className='relative w-full flex flex-col timeline-container'>
      <TimelineItem title="Primer paso"/>
      <TimelineItem title="Segundo paso"/>
    </div>
  )
}

export default Timeline