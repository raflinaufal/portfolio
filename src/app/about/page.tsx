import React from "react";

const page = () => {
  return (
    <div className="pt-12">
      <div>
        <h1 className="sm:text-2xl">About</h1>
        <div className="mt-5">
          <h2 className="text-xl">Hello everyone,</h2>
          <p>
            My name is [Your Name], and I am a Frontend Developer based in
            Jakarta, Indonesia. I am currently pursuing a degree in Information
            Technology at [University Name]. In my role as a Frontend Developer,
            I specialize in creating engaging and responsive user interfaces
            using technologies such as HTML, CSS, and JavaScript, along with the
            Next.js framework.
          </p>
          <p>
            I have worked on several web development projects that have helped
            me hone my skills in designing and implementing user-friendly web
            applications. My experience includes working with version control
            systems like Git, collaborating with cross-functional teams, and
            ensuring high performance and accessibility standards.
          </p>
          <p>
            I have a strong passion for technological innovation and
            continuously strive to deepen my knowledge in this field. I am
            particularly interested in the areas of frontend developer, web
            performance optimization, and progressive web applications.
          </p>
          <p>
            Thank you for visiting, and I look forward to embarking on this
            knowledge-sharing adventure
          </p>
        </div>
        <div className="my-5 border-b w-full" />
      </div>
    </div>
  );
};

export default page;
