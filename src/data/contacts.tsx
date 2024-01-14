// Contacts refers to social media
import { RiYoutubeLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { DiGithubBadge } from "react-icons/di";
import { TbBrandFiverr } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

type contact = {
  name: string;
  link: string;
  icon: IconType | undefined;
};

export const contacts: contact[] = [
  {
    name: "Github",
    link: "https://github.com/ScraperWizard",
    icon: DiGithubBadge,
  },
  {
    name:"Fiverr",
    link: "https://www.fiverr.com/beaks78?up_rollout=true",
    icon: TbBrandFiverr,
  },
  {
    name:"LinkedIn",
    link: "https://www.linkedin.com/in/abdulrahman-alali-11897727b/",
    icon: BsLinkedin,
  },
  {
    name:"Upwork",
    link: "https://www.upwork.com/freelancers/~01d2a9f4d3f3d6b5e5",
    icon: SiUpwork,
  },
];

export const emailContact: contact = {
  name: "Email",
  link: "abdulrahmananas20@gmail.com",
  icon: undefined,
}
