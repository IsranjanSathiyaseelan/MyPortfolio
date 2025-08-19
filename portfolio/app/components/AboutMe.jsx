"use client";
import React from "react";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"; 

const cardData = [
  {
    title: "Skills",
    description: (
      <>
        Java, C++, HTML, CSS, JavaScript
        <br />
        React Js, Next Js, tailwindcss
      </>
    ),
    icon: <CodeBracketIcon className="h-10 w-10 text-white mb-4" />,
  },
  {
    title: "Education",
    description:
      "HND in Computing and Software Engineering Cardiff Metropolitan || ICBT",
    icon: <AcademicCapIcon className="h-10 w-10 text-white mb-4" />,
  },
  {
    title: "Projects",
    description: "I have constructed all of my projects for the intention of achieving my academic goals.",
    icon: <BriefcaseIcon className="h-10 w-10 text-white mb-4" />,
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-5xl font-extrabold mb-6 text-white">AboutMe</h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl leading-relaxed">
            I’m a software developer with a strong foundation in
            JavaScript and extensive hands-on experience working with modern
            frameworks such as React, Node.js, and Next.js. I specialize in
            building scalable, high-performance web applications with a focus on
            user experience, responsive design, and efficient backend
            integration. 
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className=" p-6 rounded-2xl border border-[#29293d] hover:shadow-xl hover:scale-[1.02] hover:shadow-purple-600 transition duration-300"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-[#ADB7BE]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
