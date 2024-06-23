"use client";
import React from "react";
import NavLink from "./Navlink";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import Tooltip from "./Tooltip";

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <aside
      className={`fixed sm:h-screen  h-[calc(100%-64px)] left-0 top-16 sm:top-0 sm:translate-x-0 transform shadow-lg  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out sm:w-64 w-full p-4 dark:bg-gray-800 dark:text-white h-full z-50 `}
    >
      <div className="sm:block hidden">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
          />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-xl border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              className="h-full w-full rounded-xl"
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png"
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
              <VerifiedIcon size={18} className="text-blue ml-2" />
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
      <hr className="border-gray-700 sm:block hidden" />
      <nav className="py-3">
        <NavLink />
      </nav>
      <hr className="border-gray-700 sm:block hidden" />
    </aside>
  );
};

export default Sidebar;
