"use client";

import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { useThemeToggle } from "../hooks/hooks";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useThemeToggle();

  return (
    <div className="flex items-center space-x-2 cursor-pointer ">
      <div className="bg-light-background dark:bg-dark-background dark:text-dark-text-primary text-light-text-primary p-2 rounded-lg">
        {darkMode ? (
          <BsCloudSun size={16} onClick={() => setDarkMode(false)} />
        ) : (
          <BsCloudMoon size={16} onClick={() => setDarkMode(true)} />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
