import React from 'react'
import Image from 'next/image'

import nextjslogo from '../../public/800px-Nextjs-logo.svg.png'

function Footer() {
  return (
    <div className='bg-gray-900 w-full px-20 py-16 flex justify-between text-white'>
      <div className='self-center'>
        Darío Marcos Casalé - {new Date().getFullYear()}
      </div>
    </div>
  )
}

export default Footer