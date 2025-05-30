"use client";
import { useEffect } from "react";
import Typed from "typed.js";

const techIcons = [
  { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const Hero = () => {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["I'm Ayush Singh", "a Full Stack Developer", "a Problem Solver"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    const canvas = document.getElementById("stars-canvas") as HTMLCanvasElement;
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

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-16 bg-background text-foreground overflow-hidden">
      {/* Star Background */}
      <div className="absolute inset-0 z-0">
        <canvas id="stars-canvas" className="w-full h-full"></canvas>
      </div>

      {/* Left Side Content */}
      <div className="z-10 ml-80">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          Hi, <span id="typed-text" className="text-cyan-500"></span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-8">
          I build elegant, fast, and scalable web applications using modern tech.
        </p>
        <div className="flex space-x-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-md bg-cyan-700 text-white hover:bg-cyan-600 transition"
          >
            Download Resume
          </a>
          <a
            href="mailto:sayush950@gmail.com"
            className="px-6 py-3 rounded-md border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition"
          >
            Mail Me
          </a>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
