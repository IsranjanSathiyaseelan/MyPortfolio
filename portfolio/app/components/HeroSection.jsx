"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="mt-7 sm:py-20 scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 max-w-6xl w-auto">
        {/* Text Section */}
        <div className="sm:col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
              Hello, I'm Isranjan{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl sm:text-5xl lg:text-6xl text-white"
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate Computing and Software Engineering student with an HND
            from ICBT, seeking a software development internship to apply
            academic knowledge, gain hands-on experience, and grow
            professionally.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/Sathiyaseelan Isranjan_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 text-white">
                Download Resume
              </button>
            </a>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/IsranjanSathiyaseelan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github-icon.svg"
                  alt="GitHub Icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://linkedin.com/in/isranjansathiyaseelan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin-icon.svg"
                  alt="LinkedIn Icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="sm:col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[260px] h-[260px] lg:w-[340px] lg:h-[340px] relative overflow-hidden group group-hover:scale-105 group-hover:shadow-2xl hover:bg-purple-500">
            <Image
              src="/images/hero-image.png"
              alt="Illustration of Isranjan, software engineering student"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              width={315}
              height={315}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
