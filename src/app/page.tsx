import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Aboutme from "./Aboutme";
import Hero from "./Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
