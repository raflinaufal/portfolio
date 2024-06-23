"use client";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { useThemeToggle } from "../hooks/hooks";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useThemeToggle();

  return (
    <div className="flex items-center space-x-2 cursor-pointer ">
      {darkMode ? (
        <BsSunFill
          className="text-yellow-400"
          size={16}
          onClick={() => setDarkMode(false)}
        />
      ) : (
        <FaMoon
          className="text-dark"
          size={16}
          onClick={() => setDarkMode(true)}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
