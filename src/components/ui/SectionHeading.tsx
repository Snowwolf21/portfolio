import GradientText from "./GradientText";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-4 text-center">
      <h2 className="text-4xl font-bold">
        <GradientText>{title}</GradientText>
      </h2>

      {subtitle && (
        <p className="mt-4 text-muted-foreground text-lg sm:text-xl font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}