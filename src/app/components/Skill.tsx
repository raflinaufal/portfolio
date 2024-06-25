"use client";
import React from "react";
import { motion } from "framer-motion";
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
import { FaCode } from "react-icons/fa";
import { BiSolidFileJson } from "react-icons/bi";
import SkillIcon from "./element/SkilIcon";

const Skill: React.FC = () => {
  const icons = [
    { icon: <SiHtml5 size={32} />, text: "HTML", color: "#E34F26" },
    { icon: <SiCss3 size={32} />, text: "CSS", color: "#1572B6" },
    { icon: <SiJavascript size={32} />, text: "JavaScript", color: "#F7DF1E" },
    { icon: <SiReact size={32} />, text: "React.js", color: "#61DAFB" },
    { icon: <SiNextdotjs size={32} />, text: "Next.js", color: "#ffffff" },
    {
      icon: <SiTailwindcss size={32} />,
      text: "TailwindCSS",
      color: "#06B6D4",
    },
    { icon: <SiGit size={32} />, text: "Git", color: "#F05032" },
    { icon: <SiPostman size={32} />, text: "Postman", color: "#FF6C37" },
    { icon: <BiSolidFileJson size={32} />, text: "JSON", color: "#FFD700" },
    { icon: <SiBootstrap size={32} />, text: "Bootstrap", color: "#563D7C" },
    { icon: <SiGithub size={32} />, text: "GitHub", color: "#ffffff" },
    { icon: <SiGitlab size={32} />, text: "GitLab", color: "#FC6D26" },
    { icon: <SiTypescript size={32} />, text: "TypeScript", color: "#007ACC" },
  ];

  return (
    <div>
      <div className="mt-5 flex items-center gap-x-2">
        <FaCode /> <h1 className="text-2xl">Skills</h1>
      </div>
      <p className="mb-5 text-gray-400">My professional career journey</p>
      <div className="overflow-hidden whitespace-nowrap mb-4 py-5">
        <motion.div
          animate={{ x: ["0%", "-100%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex space-x-8 items-center"
        >
          {icons.concat(icons).map((item, index) => (
            <SkillIcon
              key={index}
              icon={item.icon}
              text={item.text}
              color={item.color}
            />
          ))}
        </motion.div>
      </div>
      <div className="my-5 border-b w-full" />
    </div>
  );
};

export default Skill;
