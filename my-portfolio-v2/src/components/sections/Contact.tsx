import memojiFirst from "../../assets/memoji-2.png";
import memojiSecond from "../../assets/memoji-1.png";

export function Contact() {
  return (
    <section className="py-140 flex justify-center items-center">
      <a
        href="mailto:zeballosfab@gmail.com"
        className="group flex items-center"
      >
        <div className="relative w-16 h-16 md:w-30 md:h-30 overflow-hidden rounded-full">
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
        <span className="pr-10 text-[32px] md:text-[42px] font-bold font-jakarta text-white-primary tracking-[0.005em]">
          get in touch
        </span>
      </a>
    </section>
  );
}
