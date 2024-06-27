"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaCode } from "react-icons/fa";
import SkillIcon from "./element/SkilIcon";
import { icons } from "../helpers/constants";

const Skill: React.FC = () => {
  return (
    <div>
      <div className="mt-5 flex items-center gap-x-2">
        <FaCode className="text-xl" />
        <h1 className="sm:text-2xl text-xl font-bold mb-1">Skills</h1>
      </div>
      <p className="text-lg mb-3 dark:text-dark-text-secondary text-light-text-secondary font-medium italic">
        My skill coding
      </p>
      <div className="overflow-hidden whitespace-nowrap mb-4 py-5 space-y-10 ">
        <Marquee gradient={false} speed={50}>
          {icons.map((item) => (
            <SkillIcon
              icon={<item.icon size={32} />}
              text={item.text}
              color={item.color}
            />
          ))}
        </Marquee>
        <Marquee gradient={false} speed={50} direction="right">
          {icons.map((item) => (
            <SkillIcon
              icon={<item.icon size={32} />}
              text={item.text}
              color={item.color}
            />
          ))}
        </Marquee>
      </div>
      <div className="my-5 border-b w-full" />
    </div>
  );
};

export default Skill;
