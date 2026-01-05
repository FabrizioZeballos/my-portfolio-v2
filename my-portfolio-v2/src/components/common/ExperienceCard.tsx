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
      <h3>{company}</h3>
      <div className="flex justify-between">
        <span>{role}</span>
        <span>/ {period}</span>
      </div>
    </div>
  );
}
