"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Life Line",
    description:
      "I built the frontend and UI for a full-stack medical donation platform using the MERN stack, focusing on responsive design and smooth user experience.",
    image: "/images/projects/p1.png",
    tags: ["#React.js", "#mongodb", "#tailwind", "#Node.js"],
  },
  {
    title: "JAVA OOP",
    description:
      "Developed a GUI-based inventory and user management system for a fictional retail bag shop using Java and Swing in NetBeans.",
    image: "/images/projects/p2.png",
    tags: ["#JAVA", "#OOP"],
  },
  {
    title: "Care Compass",
    description:
      "A web development project featuring an admin login, admin dashboard, and appointment booking system. The admin can manage bookings through the dashboard.",
    image: "/images/projects/p3.png",
    tags: ["#HTML5", "#CSS3", "#JavaScript", "#JQuery"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white" id="projects">
      <div className="max-w-6xl mx-auto text-left mb-12">
        <h2 className="text-5xl font-extrabold mb-6">Projects</h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          These projects represent a collection of my collaborative and
          individual work. Each one highlights different aspects of my skills,
          from problem-solving and working with modern technologies to
          contributing effectively in team environments. They showcase my growth
          as a developer and my ability to deliver functional and well-designed
          solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative border border-[#333] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-purple-500/40 hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="flex justify-center items-center p-3">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-md shadow-md object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Project Info */}
            <div className="p-5 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-sm text-purple-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
