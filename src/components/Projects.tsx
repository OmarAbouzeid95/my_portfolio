import Section from "./Section";
import { projects, Project } from "../config/projectsData";
import Link from "next/link";
import clsx from "clsx";

const ProjectInfo: React.FC<Project> = ({ title, description, link, img }) => {
  return (
    <div className={clsx("mb-24 lg:flex gap-12")}>
      <div className="mb-12">
        <h4 className="font-semibold text-3xl mb-8 text-center md:text-left">
          {title}
        </h4>
        <p className="hidden md:block md:text-lg">{description}</p>
      </div>
      <Link
        href={link}
        target="_blank"
        className="block mb-12 rounded-md overflow-hidden lg:max-w-sm">
        <img
          src={img}
          alt={`${title} webpage screenshot`}
          className="w-full h-auto lg:hover:scale-105 lg:bg-black/10 lg:transition-all lg:duration-[600ms]"
        />
      </Link>
      <p className="md:text-lg md:hidden">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <Section title="Projects">
      {projects.map(({ title, description, link, img }) => (
        <ProjectInfo
          key={link}
          title={title}
          description={description}
          link={link}
          img={img}
        />
      ))}
    </Section>
  );
};

export default Projects;
