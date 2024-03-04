import { AppLinks } from "@/types/app-links";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

export const footerApplicationLinks: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projets",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Coding jungle",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Formations",
    baseUrl: "https://www.youtube.com/",
    type: "external",
  },
];

export const footerUserLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/#",
    type: "internal",
  },
];

export const footerInformationsLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "A propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/#",
    type: "internal",
  },
];

export const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com/",
    type: "external",
    icon: RiYoutubeFill,
  },
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com/in/youssef-benslimane-264939228/",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Github",
    baseUrl: "https://github.com/youssefshadow",
    type: "external",
    icon: RiGithubFill,
  },
];

export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUserLinks,
  },
  {
    label: "Informations",
    links: footerInformationsLinks,
  },
  {
    label: "Réseaux",
    links: footerSocialNetworksLinks,
  },
];
