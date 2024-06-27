"use client";
import {
  FaHome,
  FaImages,
  FaPhoneSquare,
  FaGraduationCap,
  FaPen,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { NavLink, SkillIconProps } from "./type";

export const navLink: NavLink[] = [
  {
    label: "Home",
    menu: true,
    link: "/",
    icon: FaHome,
  },

  {
    label: "About",
    menu: true,
    link: "/about",
    icon: IoMdContact,
  },
  {
    label: "Projects",
    menu: true,
    link: "/projects",
    icon: FaImages,
  },
  {
    label: "Blog",
    menu: true,
    link: "/blog",
    icon: FaPen,
  },
  {
    label: "Resume",
    menu: true,
    link: "/resume",
    icon: FaGraduationCap,
  },
  {
    label: "Contact",
    menu: true,
    link: "/contact",
    icon: FaPhoneSquare,
  },
];

export const icons: SkillIconProps[] = [
  { icon: SiHtml5, text: "HTML", color: "#E34F26" },
  { icon: SiCss3, text: "CSS", color: "#1572B6" },
  { icon: SiJavascript, text: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, text: "React.js", color: "#61DAFB" },
  { icon: SiNextdotjs, text: "Next.js", color: "#ffffff" },
  { icon: SiTailwindcss, text: "TailwindCSS", color: "#06B6D4" },
  { icon: SiGit, text: "Git", color: "#F05032" },
  { icon: SiPostman, text: "Postman", color: "#FF6C37" },
  { icon: SiBootstrap, text: "Bootstrap", color: "#563D7C" },
  { icon: SiGithub, text: "GitHub", color: "#ffffff" },
  { icon: SiGitlab, text: "GitLab", color: "#FC6D26" },
  { icon: SiTypescript, text: "TypeScript", color: "#007ACC" },
];
