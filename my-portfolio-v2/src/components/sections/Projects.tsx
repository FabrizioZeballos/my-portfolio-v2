import { CardHeader } from "../common/CardHeader";
import { ProjectItem } from "../common/ProjectItem";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";
import { FaGithub, FaPlayCircle } from "react-icons/fa";

export function Projects() {
  return (
    <div className="hidden md:block md:bg-card md:py-26 md:px-30 border-0 md:border-2 border-white/4 rounded-[40px]">
      <div className="flex flex-col bg-[#141415] text-white gap-20">
        <CardHeader header={"pet projects"} />
        <ProjectItem
          image={project1}
          title={"hhbc bank"}
          description={
            "an appointment scheduling app for a bank aiming to enhance customer service where users can register, log in, schedule, and cancel appointments seamlessly and intuitively"
          }
          techStack={["express", "react", "redux", "postgresql"]}
          links={[
            { url: "https://github.com/...", icon: FaGithub },
            { url: "https://github.com/...", icon: FaPlayCircle },
          ]}
        />
        <ProjectItem
          image={project2}
          title={"coreforce fitness"}
          description={
            "a gym application designed to make a significant impact on the fitness industry where users can interact with trainers in real-time via chat, purchase memberships, and access an ai-powered chatbot"
          }
          techStack={["nestjs", "react", "tailwind", "postgresql"]}
          links={[
            { url: "https://github.com/...", icon: FaGithub },
            { url: "https://github.com/...", icon: FaPlayCircle },
          ]}
        />
        <ProjectItem
          image={project3}
          title={"ecommerce backend"}
          description={
            "an ecommerce app designed to manage products, users, and orders with a robust backend built on a restful api that integrates seamlessly with other systems for a smooth user experience"
          }
          techStack={["nestjs", "postgresql"]}
          links={[
            { url: "https://github.com/...", icon: FaGithub },
            { url: "https://github.com/...", icon: FaPlayCircle },
          ]}
        />
      </div>
    </div>
  );
}
