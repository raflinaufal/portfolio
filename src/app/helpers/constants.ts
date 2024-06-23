"use client";
import {
  FaHome,
  FaImages,
  FaPhoneSquare,
  FaGraduationCap,
  FaPen,
} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

import { Banner, NavLink } from "./type";

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

export const banner: Banner[] = [
  {
    url: "https://img.freepik.com/free-vector/gradient-horizontal-banner-template-international-day-education_23-2149942366.jpg?t=st=1710705582~exp=1710709182~hmac=f12c41ead06265f5be672ffa7641112133e9de66c9a364fb57f2bfbacabf5565&w=1060",
  },
  {
    url: "https://img.freepik.com/free-vector/gradient-horizontal-banner-template-international-day-education_23-2149942372.jpg?t=st=1710705622~exp=1710709222~hmac=b7824c0645034db973ed501bf1c505f400793e3d2d401695634019a5ffa92d78&w=1060",
  },
  {
    url: "https://img.freepik.com/free-vector/gradient-horizontal-banner-template-international-day-education_23-2149942363.jpg?t=st=1710705610~exp=1710709210~hmac=0362f641afe99289d56e050afb012c32e6951df50fbb320125d5daaada4003d4&w=1060",
  },
];
