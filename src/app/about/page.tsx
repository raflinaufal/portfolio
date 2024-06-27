import React from "react";
import Carrer from "../components/Carrer";
import Skill from "../components/Skill";

const Page = () => {
  return (
    <div className="sm:pt-12 pt-16">
      <h1 className="text-xl sm:text-2xl font-bold mb-1">About</h1>
      <p className="text-lg mb-3 dark:text-dark-text-secondary text-light-text-secondary font-medium italic">
        short story about me
      </p>
      <div className="border-b-2 w-full dark:border-b-light-text-secondary mb-5" />
      <div className="mt-5 space-y-3 font-light ">
        <h2 className="text-xl mb-3">Hello everyone,</h2>
        <p className="text-lg leading-relaxed">
          My name is Rafli Naufal Alief, and I am a Frontend Developer based in
          Jakarta, Indonesia. I am currently pursuing a degree in Information
          Technology at Universitas Bina Sarana Informatika. In my role as a
          Frontend Developer, I specialize in creating engaging and responsive
          user interfaces using technologies such as HTML, CSS, and JavaScript,
          along with the Next.js framework.
        </p>
        <p className="text-lg leading-relaxed">
          I have worked on several web development projects that have helped me
          hone my skills in designing and implementing user-friendly web
          applications. My experience includes working with version control
          systems like Git, collaborating with cross-functional teams, and
          ensuring high performance and accessibility standards.
        </p>
        <p className="text-lg leading-relaxed">
          I have a strong passion for technological innovation and continuously
          strive to deepen my knowledge in this field. I am particularly
          interested in the areas of frontend development, web performance
          optimization, and progressive web applications.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for visiting, and I look forward to embarking on this
          knowledge-sharing adventure.
        </p>
      </div>
      <div className="border-b-2 w-full dark:border-b-light-text-secondary my-5" />
      <Carrer />
      <Skill />
    </div>
  );
};

export default Page;
