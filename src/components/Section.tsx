"use client";
import { motion } from "framer-motion";

type Props = {
  title: string;
  children: React.ReactNode;
  [key: string]: any;
};

const Section: React.FC<Props> = ({ title, children, ...rest }) => {
  return (
    <section className="p-6 my-24 max-w-4xl mx-auto md:p-16" {...rest}>
      <motion.h2
        className="font-bold text-5xl text-center mb-14 md:mb-24 md:text-6xl md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}>
        {title}
      </motion.h2>
      {children}
    </section>
  );
};

export default Section;
