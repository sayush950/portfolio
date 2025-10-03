"use client";

import { useEffect, useState } from "react";
import Typed from "typed.js";
import { FaArrowUp } from "react-icons/fa";

const Hero = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["I'm Ayush Singh", "a Computer Science Graduate", "a Full Stack Developer", "a Problem Solver"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      typed.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 bg-background text-foreground overflow-hidden">
      {/* Main hero Content */}
      <div className="z-10 w-full max-w-5xl text-center md:text-left mt-24 md:mt-10 px-4 sm:px-6 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, <span id="typed-text" className="text-cyan-500"></span>
        </h1>
        <p className="text-md sm:text-lg md:text-xl max-w-2xl mb-6">
          I build elegant, fast, and scalable web applications using modern technologies and best practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/19vdxKt-ZxDn8icU4rxgABvBKzA_DGu11/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-md bg-cyan-700 text-white hover:bg-cyan-600 transition"
          >
            Resume
          </a>
          <a
            href="mailto:azs0382@auburn.edu"
            className="px-6 py-3 rounded-md border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
          >
            Mail Me
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </section>
  );
};

export default Hero;
