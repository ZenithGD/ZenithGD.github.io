import React from "react";
import Layout from "../components/layout/MainLayout";

import { motion } from "framer-motion";

import { wvContainer, wvItem } from "../animation/indexVariants";

import ProjectCard from "../components/ui/ProjectCard";
import { animated, useTrail } from "react-spring";

const projects = [
  {
    id: 1,
    name: "tetris",
    desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    tags: [
      { id: 1, name: "graphics" },
      { id: 2, name: "game" },
    ],
    url: "https://github.com/ZenithGD/TetrisGame",
  },
  {
    id: 2,
    name: "tetris",
    desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    tags: [
      { id: 1, name: "graphics" },
      { id: 2, name: "game" },
    ],
    url: "https://github.com/ZenithGD/TetrisGame",
  },
  {
    id: 2,
    name: "tetris",
    desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    tags: [
      { id: 1, name: "graphics" },
      { id: 2, name: "game" },
    ],
    url: "https://github.com/ZenithGD/TetrisGame",
  },
  {
    id: 2,
    name: "tetris",
    desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    tags: [
      { id: 1, name: "graphics" },
      { id: 2, name: "game" },
    ],
    url: "https://github.com/ZenithGD/TetrisGame",
  },
  {
    id: 2,
    name: "tetris",
    desc: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    tags: [
      { id: 1, name: "graphics" },
      { id: 2, name: "game" },
    ],
    url: "https://github.com/ZenithGD/TetrisGame",
  },
];

const config = { tension: 1000, friction: 200 };

function Projects() {
  const trail = useTrail(projects.length, {
    config,
    opacity: 1,
    width: "100%",
    background: "#4099ff",
    from: { opacity: 0, width: "50%" },
  });

  return (
    <div className="flex flex-col gap-10 p-32 ">
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {trail.map((props, key) => (
            <animated.div style={props}>
              <ProjectCard
                key={key}
                name={projects[key].name}
                desc={projects[key].desc}
                tags={projects[key].tags}
                url={projects[key].url}
              />
            </animated.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Projects;
