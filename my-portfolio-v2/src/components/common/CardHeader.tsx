type CardHeaderProps = {
  header: string;
};

export function CardHeader({ header }: CardHeaderProps) {
  return <h2 className="text-3xl sm:text-4xl md:text-5xl">/ {header}</h2>;
}
