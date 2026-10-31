import Hero from "../components/HeroSection";
import TechMarquee from "../components/TechMarquee";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectList from "../components/ProjectList";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <TechMarquee />

      <About />

      <Skills />

      <Experience />

      <ProjectList />

      <Services />

      <Contact />
    </>
  );
}
