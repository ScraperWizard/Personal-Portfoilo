import { skill, getSkills } from "./skills";
import ProfilePicture from "@/public/Abdulrahman_Photo.png";
import { StaticImageData } from "next/image";
import TankSyncDashboard from "@/public/TankSyncDashboard.png";
import SuperClick from "@/public/SuperClick.png";
import UpShow from "@/public/UpShow.png";

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
    name: "SuperClick",
    description: "SuperClick is an advanced bot system that interacts through a reverse engineered API.",
    image: SuperClick,
    link: "www.primopayments.xyz",
    tech: [
      "Reverse Engineer",
      "WebSockets",
      "Bot automation",
      "MongoDB",
      "React.js",
    ]
  },
  {
    name: "UpShow",
    description: "A web application that automates process of buying/selling tickets on TicketMaster.",
    image: UpShow,
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
