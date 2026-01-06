import experience1 from "../../assets/experience-1.png";
import experience2 from "../../assets/experience-2.png";
import { ExperienceCard } from "../common/ExperienceCard";

export function Experience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto py-60 px-5 md:py-60 md:px-24 [&>*:nth-child(even)]:md:translate-y-24">
      <ExperienceCard
        image={experience2}
        company={"b/ackcode_"}
        role={["full-stack", "developer"]}
        period={"now"}
      />
      <ExperienceCard
        image={experience1}
        company={"henry"}
        role={["full-stack", "ta"]}
        period={"2024"}
      />
    </div>
  );
}
