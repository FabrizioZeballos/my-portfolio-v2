import { motion } from "motion/react";

type ExperienceCardProps = {
  image: string;
  company: string;
  role: string[];
  period: string;
  delay?: number;
};

export function ExperienceCard({
  image,
  company,
  role,
  period,
  delay,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        rotateX: 25,
        rotateY: 25,
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
      viewport={{ once: true, margin: "-300px" }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      }}
      style={{ perspective: 1000 }}
      className="w-full p-8 flex flex-col bg-card border-2 border-white/4 rounded-[40px]"
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
    </motion.div>
  );
}
