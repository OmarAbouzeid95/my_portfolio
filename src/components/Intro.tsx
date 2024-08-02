"use client";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center font-extrabold p-8 lsm:p-14">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}>
        <h1 className="text-4xl msm:text-5xl mb-4 w-fit md:text-6xl md:mb-6 xl:text-7xl">
          Hi, I&apos;m Omar
        </h1>
        <h2 className="text-3xl msm:text-4xl w-fit md:text-5xl md:mb-6 xl:text-6xl">
          I&apos;m a Full Stack Developer
        </h2>
      </motion.div>
    </div>
  );
};

export default Intro;
