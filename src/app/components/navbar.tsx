"use client";
import { useState, useEffect } from "react";
// Use plain anchor links for reliable in-page navigation
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
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-40 bg-background/80 backdrop-blur-sm text-foreground transition-colors duration-300 border-b border-transparent md:border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo / Profile */}
          <div className="flex items-center gap-3">
            <img
              src="/images/navbar.jpg"
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-cyan-400 shadow-sm object-cover"
            />
            <span className="hidden sm:inline font-semibold text-lg">Ayush Singh</span>
          </div>

          {/* Center: Links (desktop) */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.to}`}
                  className="cursor-pointer px-2 py-1 text-sm md:text-base font-medium text-foreground hover:text-cyan-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border-2 border-cyan-500 hover:border-cyan-300 transition duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-stone-800" />
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded md:hidden focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transform transition-all duration-300 ${
          menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.to}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-foreground hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
