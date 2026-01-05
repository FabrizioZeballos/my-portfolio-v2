import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";

function App() {
  return (
    <div className="relative px-4 py-4 flex justify-center border border-red-500">
      <div className="md:w-[70rem] border border-green-500">
        <Navbar />
        <Hero />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
