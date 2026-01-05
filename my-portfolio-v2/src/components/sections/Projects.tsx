import { CardHeader } from "../common/CardHeader";
import { ProjectItem } from "../common/ProjectItem";
import projectImg from "../../assets/experience-1.png";
import { FaGithub, FaPlayCircle } from "react-icons/fa";

export function Projects() {
  return (
    <div className="hidden md:block py-40 border border-red-500">
      <div className="p-20 flex flex-col bg-[#141415] text-white gap-20">
        <CardHeader header={"pet projects"} />
        <ProjectItem
          image={projectImg}
          title={"hhbc bank"}
          description={
            "an appointment scheduling app for a bank aiming to enhance customer service where users can register, log in, schedule, and cancel appointments seamlessly and intuitively"
          }
          techStack={["express", "node"]}
          links={[
            { url: "https://github.com/...", icon: FaGithub },
            { url: "https://github.com/...", icon: FaPlayCircle },
          ]}
        />
        <ProjectItem
          image={projectImg}
          title={"hhbc bank"}
          description={
            "an appointment scheduling app for a bank aiming to enhance customer service where users can register, log in, schedule, and cancel appointments seamlessly and intuitively"
          }
          techStack={["express", "node"]}
          links={[
            { url: "https://github.com/...", icon: FaGithub },
            { url: "https://github.com/...", icon: FaPlayCircle },
          ]}
        />
        <ProjectItem
          image={projectImg}
          title={"hhbc bank"}
          description={
            "an appointment scheduling app for a bank aiming to enhance customer service where users can register, log in, schedule, and cancel appointments seamlessly and intuitively"
          }
          techStack={["express", "node"]}
          links={[
            { url: "https://github.com/...", icon: FaGithub },
            { url: "https://github.com/...", icon: FaPlayCircle },
          ]}
        />
      </div>
    </div>
  );
}
