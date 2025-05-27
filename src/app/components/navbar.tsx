// src/components/navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const navLinks = [
    { name: "About Me", to: "about" },
    { name: "Education", to: "education" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Achievement", to: "achievement" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="bg-background text-foreground shadow fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="absolute top-3 left-6 h-10 w-10 rounded-full border-2 border-cyan-400 shadow-md"
          />

          <ul className="hidden md:flex md:items-center md:space-x-10 ml-auto">
            {navLinks.map(link => (
              <li
                key={link.name}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              >
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="cursor-pointer relative px-3 py-2 text-lg font-semibold text-foreground transition transform duration-300 ease-in-out hover:scale-110 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="absolute right-20 top-4 flex space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border-2 border-cyan-500 hover:border-cyan-300 transition duration-300 shadow-md hover:shadow-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-white" />
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded md:hidden focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-foreground" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden origin-top transition-transform transform duration-300 ease-in-out 
          ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} 
          bg-background text-foreground`}
      >
        <ul className="flex flex-col px-4 pt-2 pb-4 space-y-1">
          {navLinks.map(link => (
            <li
              key={link.name}
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer relative px-3 py-2 text-lg font-semibold transition transform duration-300 ease-in-out hover:scale-110 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
