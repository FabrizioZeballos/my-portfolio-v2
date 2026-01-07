import experience1 from "../../assets/experience-1.png";
import experience2 from "../../assets/experience-2.png";
import { ExperienceCard } from "../common/ExperienceCard";

const EXPERIENCE_DATA = [
  {
    image: experience2,
    company: "b/ackcode_",
    role: ["full-stack", "developer"],
    period: "now",
    link: "https://www.linkedin.com/company/b-ackcode-sa/",
  },
  {
    image: experience1,
    company: "henry",
    role: ["full-stack", "ta"],
    period: "2024",
    link: "https://www.linkedin.com/school/henryok/",
  },
];

export function Experience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto px-5 py-[15vh] md:py-[22vh] md:pb-[38vh] md:px-24 [&>*:nth-child(even)]:md:translate-y-24">
      {EXPERIENCE_DATA.map((exp, index) => (
        <ExperienceCard
          key={exp.company}
          {...exp}
          delay={index * 0.3}
          index={index}
        />
      ))}
    </div>
  );
}
