"use client";
import { useEffect, useState, useRef } from "react";

const BackgroundCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const check = () => setIsMobile(mobileQuery.matches);
    check();
    mobileQuery.addEventListener("change", check);

    if (mobileQuery.matches) return () => mobileQuery.removeEventListener("change", check);

    const canvas = document.getElementById("stars-canvas") as HTMLCanvasElement | null;
    if (!canvas) return () => mobileQuery.removeEventListener("change", check);

    const ctx = canvas.getContext("2d");
    if (!ctx) return () => mobileQuery.removeEventListener("change", check);

    let stars: { x: number; y: number; radius: number; dx: number; dy: number; alpha: number }[] = [];

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const createStars = (count = 250) => {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 1.5 + 0.5,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          alpha: 0.3 + Math.random() * 0.7,
        });
      }
    };

    createStars();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      for (let star of stars) {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0 || star.x > window.innerWidth) star.dx *= -1;
        if (star.y < 0 || star.y > window.innerHeight) star.dy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(255,255,255,${star.alpha})` : `rgba(0,0,0,${star.alpha})`;
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      mobileQuery.removeEventListener("change", check);
    };
  }, []);

  if (isMobile) return null;

  return <canvas id="stars-canvas" className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none" />;
};

export default BackgroundCanvas;
