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
    sticky top-4 z-50 pl-6 pr-2 py-3 mx-2 md:mx-18 flex justify-between rounded-2xl
    /* Essential for smoothness */
    transition-all duration-1000 ease-in-out border
    ${
      isScrolled
        ? "border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
        : "border-transparent bg-transparent backdrop-blur-none shadow-none"
    }
  `}
    >
      <div className="py-2 pr-4 flex items-center font-sans text-sm text-gray-primary uppercase tracking-widest">
        Fabrizio Zeballos
      </div>
      <div className="flex items-center justify-between">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 mx-1 rounded-xl transition-colors duration-10 hover:bg-white/6 group"
        >
          <FaLinkedin className="size-6 text-gray-primary group-hover:text-white-primary transition-colors" />
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 mx-1 rounded-xl transition-colors duration-10 hover:bg-white/6 group"
        >
          <FaGithub className="size-6 text-gray-primary group-hover:text-white-primary transition-colors" />
        </a>

        <a
          href="mailto:your@email.com"
          className="p-3 mx-1 rounded-xl transition-colors duration-10 hover:bg-white/6 group"
        >
          <MdEmail className="size-6 text-gray-primary group-hover:text-white-primary transition-colors" />
        </a>
      </div>
    </nav>
  );
}
