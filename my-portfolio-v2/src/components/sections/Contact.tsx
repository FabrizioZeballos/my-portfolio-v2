import memoji from "../../assets/experience-1.png"; // Replace with your actual path

export function Contact() {
  return (
    <section className="py-40 flex justify-center items-center bg-[#0a0a0a]">
      <a
        href="mailto:your-email@example.com"
        className="group flex items-center gap-6 hover:opacity-80 transition-all duration-300"
      >
        {/* Memoji Image */}
        <div className="w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-full">
          <img
            src={memoji}
            alt="Get in touch"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Text */}
        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
          get in touch
        </h2>
      </a>
    </section>
  );
}
