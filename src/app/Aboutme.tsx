import React from "react";
import HeaderText from "@/components/HeaderText";
import { experience } from "@/data/skills";

export default function Aboutme() {
  return (
    <>
      <HeaderText text="About Me" />
      <div className="text-center flex justify-center items-center mb-[4.5rem]">
        <p className="text-wrap w-[22rem] lg:w-[44rem]">
          Currently studying at The British University In Dubai, I love reverse
          engineering, web scraping, and any form of automation of web tasks
          (aka finding exploits hehe). Lately have been working on building
          large systems which take these web automation tasks to the next level!
          Looking forward to collaborate on Full-Stack web applications.
        </p>
      </div>
      <div
        id="statsContainer"
        className="flex justify-center items-center mb-[4.5rem]"
      >
        <div id="statisticsAboutMe" className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
          {experience
            ? experience.map((exp, index) => (
                <li key={exp.label} className="sm:w-1/2 lg:w-auto list-none">
                  <div className={`lg:ml-20 w-[8rem] ${index !== experience.length - 1 ? "lg:border-r border-white border-opacity-50": ""}`}>
                    <p className="text-4xl font-bold color text-blue-500 text-accent">
                      {exp.number}+
                    </p>

                    <p className="uppercase font-semibold mt-2">
                      {exp.label}
                    </p>
                  </div>
                </li>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
