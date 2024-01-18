import React from "react";
import HeaderText from "@/components/HeaderText";
import { projects, Project } from "@/data/projects";
import Image from "next/image";

function Project(props: Project) {
  const { name, description, image, link, tech } = props;
  return (
    <section className="bg-gray-800 max-w-[42rem] mt-4 border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-800 transition  dark:hover:bg-white/20">
      <div className="pt-4 pb-7 px-5 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="mt-2 leading-relaxed text-white/70 w-full relative">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tech.map((skill, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase text-white rounded-full overflow-visible"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={image}
        alt="Project I worked on"
        quality={95}
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
      />
    </section>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-black scroll-mt-28">
      <HeaderText text="Cool projects" />

      <div id="projects-holder" className="flex items-center mx-4 justify-center text-center flex-col mb-[4.5rem]">
        {projects.map((project) => {
          return <Project key={project.name} {...project} />;
        })}
      </div>
    </section>
  );
}
