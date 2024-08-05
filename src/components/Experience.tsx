import Section from "./Section";
import { resume } from "@/config/resumeData";
import { Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Experience = () => {
  return (
    <Section title="Experience" id="experience">
      <ol className="relative border-s mb-4 border-lightWhite">
        {resume.map((exp, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-ligthWhite bg-lightWhite"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm mb-1 text-lightWhite">
              <p className="font-semibold">{exp.company}</p>
              <time className="">
                {exp.start} <Minus className="inline w-4" /> {exp.end}
              </time>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {exp.title}
            </h3>
            {exp.desc.map((txt, index) => (
              <p className="mb-2 text-base" key={index}>
                {txt}
              </p>
            ))}
          </li>
        ))}
      </ol>
      <Link
        href={process.env.RESUME_LINK as string}
        target="_blank"
        className="flex items-center justify-center gap-2 px-4 py-3 w-full border border-white rounded-md hover:border-lightWhite text-white hover:text-lightWhite transition-all duration-700">
        <span>Resume</span>
        <ArrowUpRight className="w-4" />
      </Link>
    </Section>
  );
};

export default Experience;
