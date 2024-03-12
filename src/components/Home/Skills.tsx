import { skills_data, slogans_data } from "@/constants/skills";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <main className="py-14 overflow-hidden">
      <h1 className="text-[60px] md:text-[90px] lg:text-[120px] md:whitespace-nowrap font-extrabold text-main opacity-5 text-center -mb-14 select-none">
        Development Skills
      </h1>
      <Marquee style={{ overflow: "hidden", padding: "1rem 0" }}>
        {skills_data.map((skill) => (
          <div
            title={skill.title}
            className="p-4 mx-5 rounded-md border-2 border-slate-300 select-none bg-gray-400 bg-opacity-25 w-[120px] h-[120px] flex items-center justify-center hover:scale-105  transition-all shadow-lg"
          >
            <Image
              alt={`skill-${skill.title}`}
              src={`/assets/${skill.image_src}`}
              width={100}
              height={70}
              className="max-h-[70px] object-contain select-none"
            />
          </div>
        ))}
      </Marquee>
      <Marquee style={{ overflow: "hidden", padding: "1rem 0" }}>
        {slogans_data.map((slogan) => (
          <h4
            key={slogan.id}
            className="text-lg md:text-2xl font-mono mx-6 p-4 rounded-md bg-slate-100"
          >
            {slogan.body}
          </h4>
        ))}
      </Marquee>
    </main>
  );
}

export default Skills;
