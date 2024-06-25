"use client";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";
import ThemeToggle from "./ThemeToggle"; // Make sure to import your ThemeToggle component

const Header: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <header className="flex justify-between items-center p-4 dark:bg-dark-background dark:text-white shadow-lg sm:hidden fixed w-full bg-light-background text-light-text-primary">
      <div className="flex items-center space-x-4">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <span>Rafli Naufal Alief</span>
      </div>
      <div className="flex items-center space-x-4 sm:hidden">
        {/* ThemeToggle component */}
        <ThemeToggle />
        {/* Menu button for smaller screens */}
        <button className="dark:text-white" onClick={toggleSidebar}>
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
