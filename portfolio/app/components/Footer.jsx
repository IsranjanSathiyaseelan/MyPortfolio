"use client";
import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" text-gray-300 py-10 px-6" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        {/* Contact Section */}
        <div className="flex flex-col space-y-4 md:space-y-2 md:flex-row md:space-x-10 md:items-center">
          <a
            href="mailto:your.email@gmail.com"
            className="flex items-center gap-3 hover:text-indigo-400 transition"
            aria-label="Send email"
          >
            <FaEnvelope size={22} />
            <span className="text-sm font-medium">
              isranjansathiyaseelan@gmail.com
            </span>
          </a>

          <div className="flex items-center gap-3">
            <FaPhone size={22} />
            <span className="text-sm font-medium">+94 76 485 1474</span>
          </div>

          <a
            href="https://linkedin.com/in/isranjansathiyaseelan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-indigo-400 transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={22} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>

        {/* Built With Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 px-4 py-3 rounded-lg select-none ">
          <span className="text-sm font-semibold tracking-wide uppercase text-purple-300">
            Built with
          </span>
          <div className="flex items-center gap-5">
            <SiNextdotjs size={28} className="text-white" title="Next.js" />
            <FaReact size={28} className="text-cyan-400" title="React" />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs font-light select-none">
        &copy; {new Date().getFullYear()} SathiyaseelanIsranjan.
      </div>
    </footer>
  );
};

export default Footer;
