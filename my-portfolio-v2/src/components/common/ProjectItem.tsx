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
  glow: string;
};

export function ProjectItem({
  image,
  title,
  description,
  techStack,
  links,
  glow,
}: ProjectItemProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex-1 w-full aspect-video rounded-[20px] bg-card">
        <div
          className={`absolute inset-0 z-25 rounded-[40px] blur-[60px] opacity-8 ${glow}`}
        ></div>
        <img
          src={image}
          alt=""
          className="relative z-30 w-full h-full object-cover object-top rounded-[20px]"
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
