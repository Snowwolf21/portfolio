import Card from "../ui/Card";
import { stack } from "@/data/stack";

export default function StackStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stack.map((item) => (
        <Card
          key={item.title}
          className="p-6 text-center"
        >
          <h2 className="text-4xl font-bold text-primary">
            {item.title}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {item.title}
          </p>
        </Card>
      ))}
    </div>
  );
}