import { skill, getSkills } from "./skills";
import ProfilePicture from "@/public/Abdulrahman_Photo.png";
import { StaticImageData } from "next/image";

export type Project = {
  name: string; // Name of project
  description: string; // Description of project
  image: StaticImageData; // Image path (Prview of project)
  link: string; // Link to project
  tech: (string | undefined)[]; // skills used in project
};

export const projects: Project[] = [
  {
    name: "TankSync",
    description:
      "An electon-based desktop application that allows users to sync their accounts using an antidetect browser.",
    image: ProfilePicture,
    link: "www.tanksync.xyz",
    tech: [
      "Electron",
      "React",
      "Typescript",
      "SquidProxy",
      "MongoDB",
      "Antidetect Browsers",
    ],
  },
  {
    name: "PrimoPayments",
    description: "A payment gateway for the PrimoBot discord bot. Generate, track, remind payment links.",
    image: ProfilePicture,
    link: "www.primopayments.xyz",
    tech: [
      "Cron Jobs",
      "Paypal",
      "Stripe",
      "MongoDB",
      "Discord.js",
      // "Antidetect Browsers",
    ]
  }
];
