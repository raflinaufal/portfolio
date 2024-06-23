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
          <div className="">
            <Link
              href={item.link}
              className={`flex items-center py-3 px-3 rounded-xl transition-colors text-gray-800 dark:text-white/80 ${
                activeLink === item.label
                  ? "bg-gray-200  dark:bg-gray-700 dark:text-white "
                  : ""
              }`}
              onClick={() => {
                activeLink !== item.label
                  ? setActiveLink(item.label)
                  : setActiveLink("");
              }}
            >
              <item.icon className="w-5 h-5 mr-2 text-gray-700 dark:text-white/80" />
              <span>{item.label}</span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
export default NavLink;
