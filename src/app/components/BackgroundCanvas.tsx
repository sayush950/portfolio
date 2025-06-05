// src/components/BackgroundCanvas.tsx
"use client";
import { useEffect } from "react";

const BackgroundCanvas = () => {
  useEffect(() => {
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

      for (let i = 0; i < 300; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 1.5,
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
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
  }, []);

  return (
    <canvas
      id="stars-canvas"
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
    />
  );
};

export default BackgroundCanvas;
