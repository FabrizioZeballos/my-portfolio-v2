import "./App.css";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <div className="px-4 py-4">
      <Navbar />
      <h1 className="text-3xl font-bold underline text-blue-600 mb-20">
        My new portfolio
      </h1>
    </div>
  );
}

export default App;
