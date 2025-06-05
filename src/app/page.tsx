import Skills from "./components/skills";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Experience from "./components/experience";
import Project from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main>
      <BackgroundCanvas />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}
