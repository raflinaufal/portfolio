"use client";
import {
  FaHome,
  FaImages,
  FaPhoneSquare,
  FaGraduationCap,
  FaPen,
} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

import { NavLink } from "./type";

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
