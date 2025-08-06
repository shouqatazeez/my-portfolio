import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen w-full bg-white pt-16 scroll-smooth">
        <div
          className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
                     [background-size:16px_16px] 
                     [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />
        <div className="relative z-10">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
