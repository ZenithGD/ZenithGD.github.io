import React from 'react'
import EmptyLayout from '../components/layout/EmptyLayout'
import Image from 'next/image';

import { motion } from "framer-motion";
import { vMaintenance, vMaintenanceImg } from '../animation/maintenanceVariants';

import workerKitten from '../public/Worker.webp';

function Maintenance() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <motion.div 
        variants={vMaintenance}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="flex"
>
          <div className="className='mx-auto text-center flex flex-col justify-between gap-6">
            <p className='font-bold text-7xl text-cyan-100'>¡Alto ahí!</p>
            <p className='font-bold text-5xl text-cyan-100'>Página en mantenimiento.</p>
            <p className='text-cyan-500 text-xl'>¿Por qué no consultar <a href='https://random.cat' className='underline'>fotos de gatitos</a> durante la espera?</p>
        
          </div>
          <div className='flex-1 self-center'>
            <Image 
              src={workerKitten}
              alt="worker kitten"
              width="200"
              height="200"
              objectFit='contain'
            />
          </div>
      </motion.div>
    </div>
  )
}

Maintenance.getLayout = function getLayout(page) {
  return (
    <EmptyLayout>
      {page}
    </EmptyLayout>
  )
}

export default Maintenance