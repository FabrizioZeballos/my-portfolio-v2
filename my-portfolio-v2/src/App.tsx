import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";

function App() {
  return (
    <div className="relative px-4 py-4 flex justify-center bg-background">
      <div className="md:w-[70rem] border border-green-500">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
