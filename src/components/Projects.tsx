"use client";
import Section from "./Section";
import { projects, Project } from "../config/projectsData";
import Link from "next/link";
import Image from "next/image";
import { logos } from "@/config/logos";
import clsx from "clsx";

const ProjectInfo: React.FC<Project> = ({
  title,
  description,
  link,
  img,
  stack,
}) => {
  return (
    <div className={clsx("mb-24 lg:flex gap-12")}>
      <div className="mb-12 lg:max-w-sm">
        <h4 className="font-semibold text-3xl mb-8 text-center md:text-left">
          {title}
        </h4>
        <div className="hidden mb-6 md:block">
          <h4 className="font-semibold mb-2">Tech Stack</h4>
          <div className="flex gap-4 items-center">
            {stack.map((logo, index) => (
              <Image
                key={index}
                src={logos[logo as keyof typeof logos]}
                alt="tech stack logo"
                width={30}
                height={30}
                className={clsx(index === stack.length - 1 && "-ml-2")}
              />
            ))}
          </div>
        </div>
        <p className="hidden md:block md:text-lg">{description}</p>
      </div>
      <Link
        href={link}
        target="_blank"
        className="block w-full relative mb-12 rounded-md overflow-hidden">
        <Image
          src={img}
          alt={`${title} webpage screenshot`}
          width={1200}
          height={675}
          className="w-full h-auto lg:hover:scale-105 lg:bg-black/10 lg:transition-all lg:duration-[600ms]"
          style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
        />
      </Link>
      <div className="mb-6 md:text-lg md:hidden">
        <h4 className="font-semibold mb-2">Tech Stack</h4>
        <div className="flex gap-4 items-center">
          {stack.map((logo, index) => (
            <Image
              key={index}
              src={logos[logo as keyof typeof logos]}
              alt="tech stack logo"
              width={30}
              height={30}
              className={clsx(index === stack.length - 1 && "-ml-2")}
            />
          ))}
        </div>
      </div>
      <p className="md:text-lg md:hidden">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <Section title="Projects" id="projects">
      {projects.map(({ title, description, link, img, stack }) => (
        <ProjectInfo
          key={link}
          title={title}
          description={description}
          link={link}
          img={img}
          stack={stack}
        />
      ))}
    </Section>
  );
};

export default Projects;
