"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="pt-12">
      {/* Hello, I'm */}
      <div className="flex items-center sm:text-2xl space-x-2 font-bold">
        <h1>Hello, I'm</h1>
        <TypeAnimation
          cursor={true}
          sequence={["Rafli Naufal Alief", 1000, "Frontend Developer", 1000]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      {/* Description */}
      <div className="mt-5">
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>
            Based in Jakarta <em className="text-sm">ID</em>
          </li>
        </ul>
        <div className="mt-5">
          <h2 className="text-xl">
            Passionate Frontend Developer With a strong foundation in web
            technologies and a keen eye for design, I specialize in creating
            visually appealing and highly functional websites and applications.
          </h2>
        </div>
        <div className="my-5 border-b w-full" />
      </div>
    </div>
  );
};

export default Hero;
