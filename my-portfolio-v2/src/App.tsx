import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";

function App() {
  return (
    <div className="relative px-4 py-4">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
