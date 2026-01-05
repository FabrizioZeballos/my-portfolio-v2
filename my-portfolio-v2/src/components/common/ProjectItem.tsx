type ProjectLink = {
  url: string;
  icon: React.ElementType;
};

type ProjectItemProps = {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  links?: ProjectLink[];
};

export function ProjectItem({
  image,
  title,
  description,
  techStack,
  links,
}: ProjectItemProps) {
  return (
    <div className="flex">
      <img src={image} alt="" className="flex-1" />
      <div className="pl-20 py-4 flex flex-col flex-1 justify-between">
        <div className="flex justify-between">
          <h4>{title}</h4>
          <div className="flex gap-4">
            {links?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                {/* Render the icon component */}
                <link.icon size={20} className="text-white" />
              </a>
            ))}
          </div>
        </div>
        <p>{description}</p>
        <div className="flex gap-2 mt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] uppercase tracking-tighter text-gray-500 border border-white/10 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
