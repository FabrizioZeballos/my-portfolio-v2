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
      <div className="flex-1 w-full aspect-video overflow-hidden rounded-[20px] bg-card">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="pl-18 flex flex-col flex-1">
        <div className="flex justify-between">
          <h4 className="text-xl text-white-secondary font-semibold font-jakarta">
            {title}
          </h4>
          <div className="flex gap-4 items-center">
            {links?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <link.icon size={17} className="text-white-secondary" />
              </a>
            ))}
          </div>
        </div>
        <p className="my-3 text-gray-secondary font-sans font-light">
          {description}
        </p>
        <div className="flex gap-3 mt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[12px] text-white-primary font-semibold px-4 py-2 rounded-[8px] bg-background tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
