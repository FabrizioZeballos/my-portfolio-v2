type ExperienceCardProps = {
  image: string;
  company: string;
  role: string[];
  period: string;
};

export function ExperienceCard({
  image,
  company,
  role,
  period,
}: ExperienceCardProps) {
  return (
    <div className="w-full p-8 flex flex-col bg-card border-2 border-white/4 rounded-[40px]">
      <img src={image} alt="" className="rounded-[20px]" />
      <div className="px-4">
        <h3 className="text-2xl font-semibold font-jakarta text-white-primary mt-4 mb-14">
          {company}
        </h3>
        <div className="flex justify-between items-end">
          <span className="text-gray-primary font-sans text-xs md:text-sm uppercase tracking-widest leading-relaxed">
            {role.map((word, index) => (
              <span key={index}>
                {word}
                {index < role.length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="text-white-secondary font-extralight font-sans">
            / {period}
          </span>
        </div>
      </div>
    </div>
  );
}
