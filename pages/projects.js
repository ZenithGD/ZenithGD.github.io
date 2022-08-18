import React from "react";
import Layout from '../components/layout/MainLayout'

import { motion } from "framer-motion";

import { wvContainer, wvItem } from "../animation/indexVariants";

function Projects() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-10 p-20 ">
        <motion.div
          variants={wvContainer} // Pass the variant object into Framer Motion
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="w-full text-center"
        >
          <motion.h1
            variants={wvItem}
            className="mb-10 text-4xl font-bold text-cyan-200"
          >
            Mis proyectos destacados
          </motion.h1>
          <div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}

Projects.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Projects;
