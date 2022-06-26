import React, { useState, useEffect } from 'react';
import useSWR from "swr";

import { motion } from "framer-motion"

import { wvContainer, wvItem } from "../animation/indexVariants"
import RepoCard from '../components/ui/RepoCard';
import repoService from '../services/repoService';

function Projects() {

    const { data: repos, error: err } = useSWR(
        process.env.NEXT_PUBLIC_API_URL + "/getrepos",
        repoService.getRepos
    );

    return (
        <div className='min-h-screen'>
            <div className="flex flex-col gap-10 p-20 ">
                <motion.div
                    variants={wvContainer} // Pass the variant object into Framer Motion 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className='w-full text-center'
                >
                    <motion.h1
                        variants={wvItem}
                        className='mb-10 text-4xl font-bold text-cyan-200'
                    >
                        Mis proyectos
                    </motion.h1>
                    <motion.p
                        className="font-light my-5 text-xl text-white"
                        variants={wvItem}
                    >
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </motion.p>
                </motion.div>
                {(repos && repos.length > 0) ? (
                    repos.map((r, key) => <RepoCard key={key} repo={r} />)
                ) : (
                    <p>...</p>
                )}
            </div>
        </div>
    );
}

export default Projects;
