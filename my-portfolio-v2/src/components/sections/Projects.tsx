import { CardHeader } from "../common/CardHeader";
import { ProjectItem } from "../common/ProjectItem";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";
import { FaGithub, FaPlayCircle } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export function Projects() {
  return (
    <div className="hidden md:block md:bg-card md:py-26 md:px-30 border-0 md:border-2 border-white/4 rounded-[40px] md:shadow-[0_20px_100px_rgba(0,0,0,0.6)]">
      <div className="flex flex-col bg-[#141415] text-white gap-30">
        <CardHeader header={"pet projects"} />
        <ProjectItem
          image={project1}
          title={"coreforce fitness"}
          description={
            "a gym application where users can access an ai-powered chatbot, interact with trainers in real-time, and purchase memberships"
          }
          techStack={["nestjs", "react", "tailwind", "postgresql"]}
          links={[
            { url: "https://front-core-force.vercel.app/", icon: FaLink },
            {
              url: "https://github.com/AgustinNBertagna/core-force-fitness",
              icon: FaGithub,
            },
          ]}
        />
        <ProjectItem
          image={project2}
          title={"hhbc bank"}
          description={
            "a banking application enhancing customer service with streamlined appointment scheduling, cancellation, and integrated user authentication"
          }
          techStack={["express", "react", "redux", "postgresql"]}
          links={[
            {
              url: "https://www.linkedin.com/posts/zeballosfab_hi-there-excited-to-showcase-my-latest-activity-7180534387124428801-o7SK/?utm_source=share&utm_medium=member_desktop",
              icon: FaPlayCircle,
            },
            {
              url: "https://github.com/FabrizioZeballos/Bank-Application",
              icon: FaGithub,
            },
          ]}
        />
        <ProjectItem
          image={project3}
          title={"e-commerce backend"}
          description={
            "an e-commerce app designed to manage products, users, and orders with a backend built on a restful api that integrates seamlessly with other systems"
          }
          techStack={["nestjs", "postgresql"]}
          links={[
            {
              url: "https://github.com/FabrizioZeballos/Ecommerce-Backend",
              icon: FaGithub,
            },
          ]}
        />
      </div>
    </div>
  );
}
