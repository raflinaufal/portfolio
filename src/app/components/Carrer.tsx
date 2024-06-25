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
        <FaBriefcase className="text-3xl" />
        <h1 className="text-2xl">Career</h1>
      </div>
      <p className="mt-2 text-gray-400">My professional career journey</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-5">
        {careers.map((career, index) => (
          <div
            key={index}
            className=" transition-all duration-300 lg:hover:shadow-md flex h-max min-w-[350px] cursor-pointer items-center gap-5 overflow-hidden  bg-gradient-to-r from-white via-white to-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl p-2 shadow-lg dark:shadow-gray-900 py-2 hover:scale-95"
          >
            <img
              src={career.imgSrc}
              alt={`${career.companyName} Logo`}
              className="w-16 h-16  object-contain  ml-2 "
            />
            <div>
              <h2 className="text-lg font-medium">{career.jobTitle}</h2>
              <p className="text-sm text-gray-400">{career.companyName}</p>
              <p className="text-sm text-gray-400">{career.location}</p>
              <p className="mt-2 text-gray-400">{career.duration}</p>
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
