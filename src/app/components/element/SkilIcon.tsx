import { SkillIconProps } from "@/app/helpers/type";
import React, { CSSProperties } from "react";

const SkillIcon: React.FC<SkillIconProps> = ({ icon, text, color }) => (
  <div className="flex items-center bg-gradient-to-r from-white via-white to-white dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950 rounded-xl p-2 mx-4  dark:border-neutral-600 border-neutral-300 dark:shadow-white/20 shadow-md border">
    {React.cloneElement(icon, {
      style: { color: color } as CSSProperties,
      className: "bg-black rounded-lg p-2 mr-2",
    })}
    <span className="dark:text-white font-semibold text-light-text-primary">
      {text}
    </span>
  </div>
);

export default SkillIcon;
