"use client";
import React from "react";
import NavLink from "./Navlink";
import { FaGithub, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import Tooltip from "./element/Tooltip";

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={`fixed sm:h-screen  h-[calc(100%-64px)] left-0 top-16 sm:top-0 sm:translate-x-0 transform shadow-lg dark:shadow-white/20 bg-light-background dark:bg-dark-background ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out sm:w-64 w-full p-4  h-full z-50`}
    >
      <div className="sm:block hidden">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <div className="absolute flex h-32 w-full justify-center rounded-xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"></div>
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-xl   dark:border-slate-500">
            <img
              className="h-full w-full rounded-lg object-contain"
              src="/profile.jpg"
              alt=""
            />
          </div>
          <div className="absolute top-12 right-4">
            <ThemeToggle />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center mb-2 relative">
          <div className="flex items-center">
            <h4 className="text-xl font-medium dark:text-white">
              Rafli Naufal Alief
            </h4>
            <Tooltip title="Verified">
              <VerifiedIcon size={18} className="text-blue-400 ml-2" />
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="sm:flex space-x-4 justify-center items-center mb-5 hidden">
        <div className="border border-gray-700 p-2 rounded-full dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
          <FaGithub />
        </div>
        <div className="border border-gray-700 p-2 rounded-full dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
          <FaLinkedin />
        </div>
        <div className="border border-gray-700 p-2 rounded-full dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
          <FaInstagram />
        </div>
      </div>
      <div className="border-b w-full sm:block hidden" />
      <nav className="py-5">
        <NavLink />
      </nav>
      <div className="border-b w-full sm:block hidden" />
      <footer className="pt-10 border-t w-full sm:block hidden ">
        <div className="flex items-center">
          <p className="text-sm  dark:text-dark-text-primary text-light-text-primary flex items-center ">
            © {new Date().getFullYear()} Rafli
            <FaHeart className="ml-1 text-red-500" />. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
