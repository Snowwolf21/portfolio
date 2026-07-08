import Card from "../ui/Card";

interface FocusCardProps {
  title: string;
  items: string[];
}

export default function FocusCard({
  title,
  items,
}: FocusCardProps) {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-primary" />

            <span>{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}