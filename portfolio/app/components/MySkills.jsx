"use client";
import React from "react";

const skills = [
  { name: "React", src: "/images/React.png" },
  { name: "Next.js", src: "/images/Next.js.png" },
  { name: "JavaScript", src: "/images/JavaScript.png" },
  { name: "JAVA", src: "/images/Java.png" },
  { name: "GitHub", src: "/images/GitHub.png" },
  { name: "MongoDB", src: "/images/MongoDB.png" },
  { name: "Git", src: "/images/Git.png" },
  { name: "MySQL", src: "/images/MySQL-Logo-768x480.png" },
  { name: "CSS3", src: "/images/CSS3.png" },
  { name: "Figma", src: "/images/Figma.png" },
  { name: "HTML5", src: "/images/HTML5.png" },
];

const MySkills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  text-white">
      <style>{`
        .marquee-inner {
          animation: marqueeScroll 20s linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-extrabold  text-purple-500 uppercase mb-2 tracking-wide">My Skills</h2>
      </div>

      <div className="w-full relative select-none">
        {/* Marquee Content */}
        <div
          className="marquee-inner flex will-change-transform min-w-[200%]"
          style={{ animationDuration: "25s" }}
        >
          <div className="flex gap-12 px-4">
            {[...skills, ...skills].map((skill, index) => (
              <img
                key={index}
                src={skill.src}
                alt={skill.name}
                title={skill.name}
                className="h-18 w-auto object-contain transition duration-300 ease-in-out transform hover:scale-105 "
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
