import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import memojiFirst from "../../assets/memoji-1.png";
import memojiSecond from "../../assets/memoji-2.png";

export function Contact() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const desktopY = useTransform(scrollYProgress, [0, 1], ["-60vh", "60vh"]);

  const y = isMobile ? 0 : desktopY;

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [isMobile ? 1 : 0, 1]
  );

  return (
    <section
      ref={containerRef}
      className="py-[30vh] pb-[48vh] md:py-[45vh] flex justify-center items-center overflow-hidden"
    >
      <motion.a
        href="mailto:zeballosfab@gmail.com"
        style={{ y, opacity }}
        className="group flex items-center"
      >
        <div className="relative w-22 h-22 md:w-30 md:h-30 overflow-hidden">
          <img
            src={memojiFirst}
            alt="Get in touch"
            className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 group-hover:scale-110"
          />
          <img
            src={memojiSecond}
            alt="Get in touch active"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110"
          />
        </div>
        <span className="pr-6 md:pr-10 text-[32px] md:text-[42px] font-bold font-jakarta text-white-primary tracking-[0.005em]">
          get in touch
        </span>
      </motion.a>
    </section>
  );
}
