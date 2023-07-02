import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogCard({title, subtitle, path, thumbnail, tags}) {
  return (
    <Link href={path}>
      <div className='bg-gray-850 text-cyan-200'>
        <div className='w-full h-48 relative'>
          <Image className="object-cover" alt={`thumbnail for ${title}`} src={thumbnail} fill />
        </div>
        <div className='p-4'>
          <div className='w-full'></div>
          <h1 className='font-bold'>{title}</h1>
          <p>{subtitle}</p>
        </div>
        
      </div>
    </Link>
  )
}

export default BlogCard