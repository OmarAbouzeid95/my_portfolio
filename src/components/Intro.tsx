"use client";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center font-extrabold p-6">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}>
        <h1 className="text-5xl mb-4 w-fit md:text-6xl md:mb-6 xl:text-7xl">
          Hi, I'm Omar
        </h1>
        <h2 className="text-4xl w-fit md:text-5xl md:mb-6 xl:text-6xl">
          I'm a Full Stack Developer
        </h2>
      </motion.div>
    </div>
  );
};

export default Intro;
