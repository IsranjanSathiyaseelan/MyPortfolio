"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center ">
      <div className="w-full max-w-6xl mx-auto px-4 py-4  backdrop-blur-md border border-gray-600 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text"
          >
            MyPortfolio
          </Link>

          {/* Mobile toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="text-white hover:text-purple-400 transition"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.path} title={link.title} />
            ))}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {navbarOpen && (
          <MenuOverlay
            links={navLinks}
            closeMenu={() => setNavbarOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
