// src/components/about.tsx
"use client";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-background text-foreground px-6 md:px-20 py-20"
    >
      {/* Left Text Content */}
      <div className="md:w-1/2 text-left md:ml-12 mb-60">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-500">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I’m <span className="font-semibold text-cyan-500">Ayush Singh</span>, a passionate Full Stack Developer
          dedicated to building modern, responsive, and accessible web applications.
          <br /><br />
          I'm a recent graduate in Computer Science and Software Engineering from Auburn University with a strong
          foundation in full-stack development and modern technologies including the MERN stack. I have hands-on
          experience building scalable applications and integrating backend services with dynamic frontend interfaces.
          <br /><br />
          I'm currently seeking full-time opportunities as a Software Engineer, Full-Stack Developer, or MERN Stack
          Developer where I can contribute to impactful projects and continue growing my expertise. I'm also enthusiastic
          about AI and machine learning, and I’m eager to explore opportunities that blend intelligent systems with
          software engineering.
          <br /><br />
          I'm always open to discussing exciting opportunities and collaborations. Feel free to connect or reach out to
          me at
          <a href="mailto:sayush950@gmail.com" className="text-cyan-500 hover:text-cyan-400"> sayush950@gmail.com</a>
        </p>
      </div>

      {/* Right Profile Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-[500px] h-[500px] mb-60 rounded-full overflow-hidden border-4 transition-transform duration-500 hover:scale-105">
          <Image
            src="/images/profile.jpg" // Place your image in public/profile.png
            alt="Ayush Singh"
            width={700}
            height={700}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
