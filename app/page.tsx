import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { About, Contact, Education, Experience, Footer, Skills } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
