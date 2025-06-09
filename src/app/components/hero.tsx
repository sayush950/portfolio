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

    const canvas = document.getElementById("stars-canvas") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    let stars: { x: number; y: number; radius: number; dx: number; dy: number; alpha: number }[] = [];

    if (canvas && ctx) {
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener("resize", resize);

      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 0.5 + 1.5,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random(),
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let star of stars) {
          star.x += star.dx;
          star.y += star.dy;

          if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
          if (star.y < 0 || star.y > canvas.height) star.dy *= -1;

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

          const isDark = document.documentElement.classList.contains("dark");
          const color = isDark
            ? `rgba(255, 255, 255, ${star.alpha})`
            : `rgba(0, 0, 0, ${star.alpha})`;

          ctx.fillStyle = color;
          ctx.fill();
        }
        requestAnimationFrame(animate);
      };
      animate();
    }

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      typed.destroy();
      window.removeEventListener("resize", () => {});
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-6 sm:px-10 md:px-16 bg-background text-foreground overflow-hidden">
      {/* Star Background */}
      <div className="absolute inset-0 z-0">
        <canvas id="stars-canvas" className="w-full h-full"></canvas>
      </div>

      {/* Main hero Content */}
      <div className="z-10 max-w-5xl lg:ml-60 text-center md:text-left mt-24 md:mt-0 px-4 sm:px-6 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, <span id="typed-text" className="text-cyan-500"></span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-8">
          I build elegant, fast, and scalable web applications using modern tech.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1gRufud-E6JswmrBGNcA0OcqoDoNLRQ3F/view?usp=drive_link"
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
