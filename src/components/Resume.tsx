import Section from "./Section";
import { resume } from "@/config/resumeData";
import { Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Resume = () => {
  return (
    <Section title="Resume" id="resume">
      {/* <div className="absolute top-0 right-0 left-0 p-16 flex items-center justify-end">
        <Link
          href="www.google.com"
          target="_blank"
          className="mt flex items-center justify-center gap-2 px-4 py-3 border border-white rounded-sm hover:border-lightWhite text-white hover:text-lightWhite transition-all duration-500">
          <span>Detailed resume</span>
          <ArrowUpRight className="w-6" />
        </Link>
      </div> */}
      <ol className="relative border-s mb-4 border-gray-600 dark:border-lightWhite">
        {resume.map((exp, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5 border border-gray-600 dark:border-ligthWhite dark:bg-lightWhite"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm mb-1 text-lightWhite">
              <p className="font-semibold">{exp.company}</p>
              <time className="">
                {exp.start} <Minus className="inline w-4" /> {exp.end}
              </time>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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
        href="www.google.com"
        target="_blank"
        className="flex items-center justify-center gap-2 px-4 py-3 w-full border border-white rounded-sm hover:border-lightWhite text-white hover:text-lightWhite transition-all duration-700">
        <span>Detailed resume</span>
        <ArrowUpRight className="w-6" />
      </Link>
    </Section>
  );
};

export default Resume;
