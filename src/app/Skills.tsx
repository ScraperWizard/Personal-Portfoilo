import { skills } from "@/data/skills";
import Image from "next/image";

function Skills() {
  return (
    <section className="bg-black mb-28 scroll-mt-28 sm:mb-40">
      {/* Header */}
      <div className="body-text text-center flex flex-col xl:text-center h-full w-full container mx-auto mb-14">
        <h1 className="h1 text-5xl font-bold mb-4 leading-relaxed select-none text-white top-0">
          Creating apps with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            modern technologies
          </span>
        </h1>
      </div>

      {/* Skills List */}
      <ul className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto text-lg">
        {skills.map((skill) => (
          <li key={skill.name} className="bg-gray-800 border-black/[0.1] rounded-xl px-5 py-3 flex flex-row items-center gap-1 justify-center">
            {typeof skill.image === "string" ? (
              <Image height={24} src={skill.image} alt={`${skill.name} icon`} />
            ) : (
              // @ts-ignore
              <skill.image />
            )}
            <div>{skill.name}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
