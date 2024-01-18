import { skill, getSkills } from "./skills";
import ProfilePicture from "@/public/Abdulrahman_Photo.png";
import { StaticImageData } from "next/image";
import TankSyncDashboard from "@/public/TankSyncDashboard.png";

export type Project = {
  name: string; // Name of project
  description: string; // Description of project
  image: StaticImageData | string; // Image path (Prview of project)
  link: string; // Link to project
  tech: (string | undefined)[]; // skills used in project
};

export const projects: Project[] = [
  {
    name: "TankSync",
    description:
      "An electon-based desktop application that allows users to sync their accounts using an antidetect browser.",
    image: TankSyncDashboard,
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
    image: "",
    link: "www.primopayments.xyz",
    tech: [
      "Cron Jobs",
      "Paypal",
      "Stripe",
      "MongoDB",
      "Discord.js",
    ]
  },
  {
    name: "UpShow",
    description: "A web application that automates process of buying/selling tickets on TicketMaster.",
    image: "",
    link: "www.upshow.xyz",
    tech: [
      "React",
      "Typescript",
      "Node.js",
      "MongoDB",
      "Antidetect Browsers",
    ]
  }
];
