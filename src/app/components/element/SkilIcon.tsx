// SkillIcon.tsx

import React, { ReactElement, CSSProperties } from "react";

interface SkillIconProps {
  icon: ReactElement;
  text: string;
  color: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon, text, color }) => (
  <div className="flex items-center bg-gradient-to-r from-white via-white to-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl p-2 shadow-lg dark:shadow-gray-900">
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
