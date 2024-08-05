import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Experience";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omar's portfolio",
  description: "Personal portfolio of Omar showcasing skills and experiences.",
};

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
