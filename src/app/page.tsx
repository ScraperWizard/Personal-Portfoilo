import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Aboutme from "./Aboutme";
import Hero from "./Hero";
import Header from "./Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
