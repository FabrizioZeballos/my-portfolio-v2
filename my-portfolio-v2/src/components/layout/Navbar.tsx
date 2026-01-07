import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
    sticky top-3 md:top-8 z-50 pl-6 pr-2 md:pl-6 md:pr-2 py-3 md:mx-18 flex justify-between rounded-2xl trasnsition-all duration-1000 ease-in-out border
    ${
      isScrolled
        ? "border-2 border-white/4 bg-[var(--color-background)]/84 md:bg-[var(--color-background)]/74 backdrop-blur-3xl"
        : "border-2 border-transparent bg-transparent backdrop-blur-none shadow-none"
    }
  `}
    >
      <div className="py-2 pr-4 flex items-center font-sans text-xs md:text-sm text-gray-primary uppercase tracking-widest">
        Fabrizio Zeballos
      </div>
      <div className="flex items-center justify-between">
        <a
          href="https://www.linkedin.com/in/zeballosfab/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 mx-1 rounded-xl transition-colors duration-10 hover:bg-white/6 group"
        >
          <FaLinkedin className="size-7 text-gray-icons group-hover:text-white-primary transition-colors" />
        </a>

        <a
          href="https://github.com/FabrizioZeballos"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 mx-1 rounded-xl transition-colors duration-10 hover:bg-white/6 group"
        >
          <FaGithub className="size-7 text-gray-icons group-hover:text-white-primary transition-colors" />
        </a>

        <a
          href="mailto:zeballosfab@gmail.com"
          className="p-3 mx-1 rounded-xl transition-colors duration-10 hover:bg-white/6 group"
        >
          <MdEmail className="size-7 text-gray-icons group-hover:text-white-primary transition-colors" />
        </a>
      </div>
    </nav>
  );
}
