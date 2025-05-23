"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";  // Icon components (install @heroicons/react)

const Navbar = () => {
  // State for mobile menu open/closed
  const [menuOpen, setMenuOpen] = useState(false);
  // State for dark mode (false = light, true = dark)
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode: add/remove 'dark' class on html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Define navigation links
  const navLinks = [
    { name: "About Me", href: "/#about" },
    { name: "Education", href: "/#education" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Achievement", href: "/#achievement" },
    { name: "Coding Profiles", href: "/#coding-profiles" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navbar container */}
        <div className="flex justify-between items-center h-16">
          {/* Left: Profile icon/logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="h-10 w-10 rounded-full object-cover" 
            />
            {/* You can include a text logo or name here if desired */}
          </div>

          {/* Center: Nav links (hidden on mobile) */}
          <ul className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map(link => {
              // Determine if link is currently active (for persistent underline)
              // If using Next.js routing, you can use useRouter() to get the current path.
              const isActive = typeof window !== "undefined" && window.location.hash === link.href.replace('/#', '#');
              return (
                <li key={link.name}>
                    <Link
                    href={link.href}
                    scroll={false}
                    className={`relative px-3 py-2 font-medium text-gray-700 dark:text-gray-300 
                        after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 
                        after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                        hover:after:scale-x-100`}
                    >
                    {link.name}
                    </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: Dark mode toggle & Mobile menu button */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <SunIcon className="h-5 w-5 text-gray-800"/> : <MoonIcon className="h-5 w-5 text-gray-200"/>}
            </button>

            {/* Mobile Menu Toggle (Hamburger) */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded md:hidden focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (dropdown) */}
      <div 
        id="mobile-menu"
        className={`md:hidden origin-top transition-transform transform duration-300 ease-in-out 
                   ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} 
                   bg-white dark:bg-gray-800`}
      >
        <ul className="flex flex-col px-4 pt-2 pb-4 space-y-1">
          {navLinks.map(link => (
  <li key={link.name}>
    <Link
      href={link.href}
      scroll={false}
      className={`relative px-3 py-2 font-medium text-gray-700 dark:text-gray-300 
        after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 
        after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
        hover:after:scale-x-100`}
    >
      {link.name}
    </Link>
  </li>
))}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
