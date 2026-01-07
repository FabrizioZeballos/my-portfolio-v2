import experience1 from "../../assets/experience-1.png";
import experience2 from "../../assets/experience-2.png";
import { ExperienceCard } from "../common/ExperienceCard";

const EXPERIENCE_DATA = [
  {
    image: experience2,
    company: "b/ackcode_",
    role: ["full-stack", "developer"],
    period: "now",
  },
  {
    image: experience1,
    company: "henry",
    role: ["full-stack", "ta"],
    period: "2024",
  },
];

export function Experience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto py-60 px-5 md:py-100 md:pb-120 md:px-24 [&>*:nth-child(even)]:md:translate-y-24">
      {EXPERIENCE_DATA.map((exp, index) => (
        <ExperienceCard
          key={exp.company}
          {...exp}
          delay={index * 0.6}
          index={index}
        />
      ))}
    </div>
  );
}
