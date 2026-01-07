import { motion } from "motion/react";

type ExperienceCardProps = {
  image: string;
  company: string;
  role: string[];
  period: string;
  link: string;
  delay?: number;
  index: number;
};

export function ExperienceCard({
  image,
  company,
  role,
  period,
  link,
  delay,
  index,
}: ExperienceCardProps) {
  const isLeft = index % 2 === 0;
  const hoverRotation = isLeft ? 3 : -3;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        opacity: 0,
        y: 100,
        rotateX: 45,
        rotateY: 45,
        rotateZ: 2,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
      }}
      whileHover={{
        rotateZ: hoverRotation,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
          delay: 0,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: delay,
        opacity: {
          delay: delay,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
        y: {
          delay: delay,
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        },
        rotateX: {
          delay: delay,
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        },
        rotateY: {
          delay: delay,
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        },
        scale: {
          delay: delay,
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        },
        rotateZ: {
          delay: 0,
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      }}
      style={{ perspective: 1000 }}
      className="w-full p-8 flex flex-col bg-card border-2 border-white/4 rounded-[40px] md:shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
    >
      <img src={image} alt="" className="rounded-[20px]" />
      <div className="px-4">
        <h3 className="text-2xl font-semibold font-jakarta text-white-primary mt-4 mb-14">
          {company}
        </h3>
        <div className="flex justify-between items-end">
          <span className="text-gray-primary font-sans text-xs md:text-sm uppercase tracking-widest leading-relaxed">
            {role.map((word, index) => (
              <span key={index}>
                {word}
                {index < role.length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="text-white-secondary font-extralight font-sans">
            / {period}
          </span>
        </div>
      </div>
    </motion.a>
  );
}
