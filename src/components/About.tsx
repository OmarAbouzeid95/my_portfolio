"use client";
import { useEffect, useRef } from "react";
import Section from "./Section";
import aboutImg from "@/assets/IMG_8216.jpg";
import Image from "next/image";

const About = () => {
  const pic: React.LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let tl, tr, br, bl;
      let max = 200,
        min = 500;

      tl = Math.floor(Math.random() * (max - min) + min);
      tr = Math.floor(Math.random() * (max - min) + min);
      br = Math.floor(Math.random() * (max - min) + min);
      bl = Math.floor(Math.random() * (max - min) + min);

      let borderRadius = `${tl}px ${tr}px ${br}px ${bl}px `;
      if (pic.current) {
        pic.current.style.borderRadius = borderRadius;
      }
    }, 1250);

    return () => clearInterval(interval);
  }, [pic]);

  return (
    <Section title="About me" id="about_me">
      <div
        ref={pic}
        className="mx-auto w-64 h-64 mb-12 transition-all duration-1250 ease-cubic-bezier infinite relative overflow-hidden md:float-right md:ml-8 md:mb-8">
        <div className="absolute inset-0 z-5">
          <Image
            src={aboutImg}
            alt="Personal photo of Omar in the mountains"
            style={{ objectPosition: "center", objectFit: "cover" }}
            fill
          />
        </div>
      </div>
      <p className="px-4 mb-4 md:px-0 md:text-lg">
        I transitioned from a career in Mechatronics Engineering to Software
        Development, driven by a passion for bringing ideas and designs to life.
        My engineering background enhances my projects with a unique blend of
        problem solving, precision, and creativity. I thrive on creating digital
        experiences that add tangible value to users.
      </p>
      <p className="px-4 md:px-0 md:text-lg">
        Outside of coding, I unwind by playing Volleyball and Padel, activities
        that sharpen my teamwork skills and keep me active.
      </p>
    </Section>
  );
};

export default About;
