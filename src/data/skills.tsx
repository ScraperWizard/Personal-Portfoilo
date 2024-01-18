import { FaNodeJs } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiElectron } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiPuppeteer } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { SiVite } from "react-icons/si";
export type skill = {
  name: string;
  image?: string | IconType;
};

{
  /* <SiMongodb width={} />; */
}

export const skills: skill[] = [
  {
    name: "React",
    image: FaReact,
  },
  {
    name: "JavaScript",
    image: RiJavascriptFill,
  },
  {
    name: "TypeScript",
    image: BiLogoTypescript,
  },
  {
    name: "Node.js",
    image: FaNodeJs,
  },
  {
    name: "Express",
    image: SiExpress,
  },
  {
    name: "MongoDB",
    image: SiMongodb,
  },
  {
    name: "TailwindCSS",
    image: SiTailwindcss,
  },
  {
    name: "Electron",
    image: SiElectron,
  },
  {
    name: "Next.js",
    image: SiNextdotjs,
  },
  {
    name: "Puppeteer",
    image: SiPuppeteer,
  },
  {
    name: "Git",
    image: DiGit,
  },
  {
    name: "Vite",
    image: SiVite,
  },
];

export const getSkills = (names: string[]): (skill | undefined)[] => {
  return names.map((name) => skills.find((skill) => skill.name === name));
};

export const experience = [
  {
    number: 3,
    label: "Years of experience",
  },
  {
    number: 30,
    label: "Finished Projects"
  },
  {
    number: 20,
    label: "Satisfied clients"
  },
  {
    number: 2,
    label: "Winning Competitions"
  }
];
