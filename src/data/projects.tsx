import { skill, getSkills } from "./skills";

type Project = {
  name: string; // Name of project
  description: string; // Description of project
  image: string; // Image path (Prview of project)
  link: string; // Link to project
  tech: (skill | undefined)[]; // skills used in project
};

export const projects: Project[] = [
  {
    name: "TankSync",
    description:
      "An electon-based desktop application that allows users to sync their accounts using an antidetect browser.",
    image: "/projects/tanksync.png",
    link: "www.tanksync.xyz",
    tech: getSkills([
      "Electron",
      "React",
      "Typescript",
      "Node.js",
      "Express",
      "MongoDB",
      "Antidetect Browsers",
    ]),
  },
];
