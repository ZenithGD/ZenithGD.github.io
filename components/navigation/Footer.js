import React from 'react'
import Image from 'next/image'

import nextjslogo from '../../public/800px-Nextjs-logo.svg.png'

function Footer() {
  return (
    <div className='bg-gray-900 h-64 w-full px-24 py-16 flex'>
      <div class>
        <p className='text-white'>Creado con </p>
        <Image 
            src={nextjslogo}
            alt="logo NextJS"
            layout="responsive"
            className='invert'
        />
      </div>
    </div>
  )
}

export default Footer