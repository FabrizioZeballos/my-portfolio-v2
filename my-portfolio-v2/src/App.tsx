import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-600 mb-20">
        My new portfolio
      </h1>
      <h1 className="text-3xl font-bold">Tailwind is working 🚀</h1>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-sm md:text-3xl lg:text-5xl font-semibold">
              i'm fabrizio ✌️
            </h1>
            <p className="mt-4 text-zinc-400">
              full-stack dev building sleek apps
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
