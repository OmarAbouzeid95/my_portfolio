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
        className="mx-auto w-72 h-72 mb-12 transition-all duration-[1250ms] ease-cubic-bezier infinite relative overflow-hidden md:float-right md:ml-8 md:mb-8">
        <div className="absolute inset-0 z-10">
          <Image
            src={aboutImg}
            alt="Personal photo of Omar in the mountains"
            style={{ objectPosition: "center", objectFit: "cover" }}
            fill
          />
        </div>
      </div>
      <p className="px-4 md:px-0 md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, maxime!
        Ipsa ullam distinctio, architecto reiciendis maiores natus rerum
        expedita vitae facere adipisci pariatur blanditiis voluptates nulla
        accusantium quasi reprehenderit corrupti voluptatibus ad quae deserunt
        esse saepe! Vero non est quia eligendi laboriosam maiores, possimus quod
        a deleniti asperiores voluptatibus praesentium nulla consequatur error
        maxime, illum ex nisi minus pariatur reiciendis inventore fugiat.
        Eligendi tenetur recusandae quia nulla animi modi, sed dolorum
        distinctio vero mollitia sit aspernatur ipsam blanditiis, quidem aliquid
        nam. Est doloribus voluptatibus ipsum fuga magnam omnis assumenda a
        architecto? Officia odit laboriosam nostrum modi iusto ullam veniam
        natus.
      </p>
    </Section>
  );
};

export default About;
