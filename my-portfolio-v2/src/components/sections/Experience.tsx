import experience1 from "../../assets/experience-1.png";
import { ExperienceCard } from "../common/ExperienceCard";

export function Experience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-10 [&>*:nth-child(even)]:md:translate-y-24">
      <ExperienceCard
        image={experience1}
        company={"b/ackcode_"}
        role={"full-stack developer"}
        period={"now"}
      />
      <ExperienceCard
        image={experience1}
        company={"henry"}
        role={"full-stack ta"}
        period={"2024"}
      />
      <ExperienceCard
        image={experience1}
        company={"third/project"}
        role={"ui designer"}
        period={"2023"}
      />
      <ExperienceCard
        image={experience1}
        company={"fourth/corp"}
        role={"backend dev"}
        period={"2022"}
      />
    </div>
  );
}
