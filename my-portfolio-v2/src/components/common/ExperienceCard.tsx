type ExperienceCardProps = {
  image: string;
  company: string;
  role: string;
  period: string;
};

export function ExperienceCard({
  image,
  company,
  role,
  period,
}: ExperienceCardProps) {
  return (
    <div className="w-full p-10 flex flex-col bg-[#141415] text-white">
      <img src={image} alt="" />
      <h3 className="text-white-primary">{company}</h3>
      <div className="flex justify-between">
        <span className="text-gray-primary">{role}</span>
        <span className="text-white-secondary">/ {period}</span>
      </div>
    </div>
  );
}
