import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Carrer: React.FC = () => {
  const careers = [
    {
      imgSrc: "/logo-futura.png",
      jobTitle: "Frontend Developer",
      companyName: "Futura Properti",
      location: "Jakarta",
      duration: "December 2022 - November 2023",
      timePeriod: "1 years",
    },
  ];

  return (
    <div>
      <div className="mt-5 flex items-center space-x-2">
        <FaBriefcase className="text-xl" />
        <h1 className="sm:text-2xl text-xl font-bold mb-1">Experience</h1>
      </div>
      <p className="text-lg mb-3 dark:text-dark-text-secondary text-light-text-secondary font-medium italic">
        My work experience
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-5">
        {careers.map((career, index) => (
          <div
            key={index}
            className="rounded-xl transition-all duration-300 lg:hover:shadow-md flex h-max min-w-[350px] cursor-pointer items-center gap-5 overflow-hidden rounded-r-xl border border-neutral-300 py-2 hover:scale-95 dark:border-neutral-600 dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950 dark:shadow-white/20 shadow-md"
          >
            <img
              src={career.imgSrc}
              alt={`${career.companyName} logo`}
              className="w-16 h-16 object-contain ml-2 dark:bg-light-background dark:shadow-white/20 rounded-lg"
            />
            <div>
              <h2 className="text-lg font-medium">{career.jobTitle}</h2>
              <div className="flex text-sm dark:text-dark-text-secondary text-light-text-secondary space-x-2 mt-1">
                <p>{career.companyName}</p>
                <span>-</span>
                <p>{career.location}</p>
              </div>
              <p className="mt-1 dark:text-dark-text-secondary text-light-text-secondary">
                {career.duration}
              </p>
              <p className="text-sm text-gray-600">{career.timePeriod}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5 border-b w-full" />
    </div>
  );
};

export default Carrer;
