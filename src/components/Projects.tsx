"use client";
import Section from "./Section";
import { projects, Project } from "../config/projectsData";
import Link from "next/link";
import Image from "next/image";
import { logos } from "@/config/logos";
import clsx from "clsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectInfo: React.FC<Project & { last: boolean }> = ({
  title,
  description,
  link,
  img,
  stack,
  demo,
  last,
}) => {
  return (
    <div className={clsx("lg:flex gap-12", last ? "mb-0" : "mb-24")}>
      <div className="mb-12 lg:max-w-sm lg:grow">
        <h4 className="font-semibold text-3xl mb-8 text-center md:text-left">
          {title}
        </h4>
        <div className="hidden mb-6 md:block">
          <h4 className="font-semibold mb-2">Tech Stack</h4>
          <div className="flex gap-4 items-center">
            {stack.map((logo, index) => (
              <TooltipProvider delayDuration={50} key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      key={index}
                      src={logos[logo as keyof typeof logos].svg}
                      alt="tech stack logo"
                      width={30}
                      height={30}
                      className={clsx(
                        logos[logo as keyof typeof logos].name === "MongoDB" &&
                          "-ml-2"
                      )}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{logos[logo as keyof typeof logos].name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <p className="hidden mb-4 md:block md:text-lg">{description}</p>
        {demo && (
          <div className="hidden md:block">
            <h4 className="font-semibold mb-2">Demo account</h4>
            <p className="mb-2">username: {demo.username}</p>
            <p className="mb-2">password: {demo.password}</p>
          </div>
        )}
      </div>
      <Link
        href={link}
        target="_blank"
        className="block max-h-80 md:max-h-[400px] lg:w-96 lg:h-[355px] relative mb-12 rounded-md overflow-hidden">
        <Image
          src={img}
          alt={`${title} webpage screenshot`}
          width={1200}
          height={675}
          className="w-full h-auto lg:hover:scale-105 lg:bg-black/10 lg:transition-all lg:duration-600"
          style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
        />
      </Link>
      <div className="mb-6 md:text-lg md:hidden">
        <h4 className="font-semibold mb-2">Tech Stack</h4>
        <div className="flex gap-4 items-center">
          {stack.map((logo, index) => (
            <TooltipProvider delayDuration={50} key={index}>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    key={index}
                    src={logos[logo as keyof typeof logos].svg}
                    alt="tech stack logo"
                    width={30}
                    height={30}
                    className={clsx(
                      logos[logo as keyof typeof logos].name === "MongoDB" &&
                        "-ml-2"
                    )}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{logos[logo as keyof typeof logos].name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      <p className="md:text-lg mb-4 md:hidden">{description}</p>
      {demo && (
        <div className="md:hidden">
          <h4 className="font-semibold mb-2">Demo account</h4>
          <p className="mb-2">username: {demo.username}</p>
          <p className="mb-2">password: {demo.password}</p>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <Section title="Projects" id="projects">
      {projects.map(({ title, description, link, img, demo, stack }, index) => (
        <ProjectInfo
          key={link}
          title={title}
          description={description}
          link={link}
          img={img}
          stack={stack}
          demo={demo}
          last={index === projects.length - 1}
        />
      ))}
    </Section>
  );
};

export default Projects;
