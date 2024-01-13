// Contacts refers to social media
import { RiYoutubeLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { DiGithubBadge } from "react-icons/di";

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
    name: "Github",
    link: "https://github.com/ScraperWizard",
    icon: RiYoutubeLine,
  },
  {
    name: "Github",
    link: "https://github.com/ScraperWizard",
    icon: DiGithubBadge,
  },
];

export const emailContact: contact = {
  name: "Email",
  link: "abdulrahmananas20@gmail.com",
  icon: undefined,
}
