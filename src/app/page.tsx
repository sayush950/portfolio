import Skills from "./components/skills";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main>
      <BackgroundCanvas />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
    </main>
  );
}
