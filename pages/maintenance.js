import React from 'react'
import EmptyLayout from '../components/layout/EmptyLayout'

import { motion } from "framer-motion";

import { vMaintenance } from '../animation/maintenanceVariants';

function Maintenance() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <motion.div 
        variants={vMaintenance}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className='mx-auto text-center flex flex-col justify-between gap-6'>
        <p className='font-bold text-7xl text-cyan-100'>¡Alto ahí!</p>
        <p className='font-bold text-5xl text-cyan-100'>Página en mantenimiento.</p>
        <p className='text-cyan-500 text-xl'>Durante la espera, puedes consultar fotos de gatitos <a href='https://aws.random.cat' className='underline'>aquí</a>.</p>
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