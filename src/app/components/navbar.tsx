"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
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
    { name: "About Me", href: "/#about" },
    { name: "Education", href: "/#education" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Achievement", href: "/#achievement" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="bg-background text-foreground shadow fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="absolute top-3 left-6 h-10 w-10 rounded-full border-2 border-cyan-400 shadow-md"
            />
          </div>

          <ul className="hidden md:flex md:items-center md:space-x-10 ml-auto">
            {navLinks.map(link => {
              const isActive = activeHash === link.href.replace("/#", "#");
              return (
                <li
                  key={link.name}
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <Link
                    href={link.href}
                    scroll={false}
                    className={`relative px-3 py-2 text-lg font-semibold transition 
                      transform duration-300 ease-in-out
                      hover:scale-110 hover:text-cyan-400 
                      hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] 
                      after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 
                      after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                      hover:after:scale-x-100
                      ${isActive ? "after:scale-x-100 text-cyan-400 bg-cyan-900/30 rounded-md" : "text-foreground"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="absolute right-20 top-4">
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

      <div
        id="mobile-menu"
        className={`md:hidden origin-top transition-transform transform duration-300 ease-in-out 
          ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} 
          bg-background text-foreground`}
      >
        <ul className="flex flex-col px-4 pt-2 pb-4 space-y-1">
          {navLinks.map(link => {
            const isActive = activeHash === link.href.replace("/#", "#");
            return (
              <li
                key={link.name}
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <Link
                  href={link.href}
                  scroll={false}
                  onClick={() => setMenuOpen(false)}
                  className={`relative px-3 py-2 text-lg font-semibold transition 
                    transform duration-300 ease-in-out
                    hover:scale-110 hover:text-cyan-400 
                    hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] 
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 
                    after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                    hover:after:scale-x-100
                    ${isActive ? "after:scale-x-100 text-cyan-400 bg-cyan-900/30 rounded-md" : "text-foreground"}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
