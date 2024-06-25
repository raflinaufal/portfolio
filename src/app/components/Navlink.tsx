"use client";
import { navLink } from "../helpers/constants";
import Link from "next/link";
import { useState } from "react";

const NavLink = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <>
      {navLink.map((item, idx) => (
        <div key={idx} className="cursor-pointer group">
          <div className="py-1">
            <Link
              href={item.link}
              className={`flex items-center p-2 rounded-xl ${
                activeLink === item.label
                  ? "dark:bg-gray-700 bg-gray-200 text-black  dark:text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => {
                activeLink !== item.label
                  ? setActiveLink(item.label)
                  : setActiveLink("");
              }}
            >
              <item.icon
                className={`w-5 h-5 mr-2 ${
                  activeLink === item.label
                    ? "dark:text-white text-black"
                    : ""
                }`}
              />
              <span>{item.label}</span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
export default NavLink;
