import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="container mx-auto px-4 max-w-3xl pt-20 pb-12 space-y-6">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="pt-5 border-t border-border">
          <About />
        </section>
        <section id="projects" className="pt-5 border-t border-border">
          <Projects />
        </section>
        <section id="skills" className="pt-5 border-t border-border">
          <Skills />
        </section>
        <section id="contact" className="pt-5 border-t border-border">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
