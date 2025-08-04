import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen w-full bg-white">
        <div
          className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
                     [background-size:16px_16px] 
                     [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />

        <div className="relative z-10">
          <Hero />
          <About />
        </div>
      </div>
    </div>
  );
};

export default App;
