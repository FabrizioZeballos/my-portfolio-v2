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
    <div className="flex justify-center items-center">
      <div className="flex-1 h-full w-full">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover rounded-[20px]"
        />
      </div>
      <div className="pl-18 flex flex-col flex-1">
        <div className="flex justify-between">
          <h4 className="text-xl text-white-secondary font-semibold">
            {title}
          </h4>
          <div className="flex gap-4">
            {links?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <link.icon size={20} className="text-white-secondary" />
              </a>
            ))}
          </div>
        </div>
        <p className="my-2 text-gray-secondary">{description}</p>
        <div className="flex gap-2 mt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-white-primary px-2 py-1 rounded bg-background"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
