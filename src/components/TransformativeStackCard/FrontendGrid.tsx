import { TechItem } from "../../lib/types";

interface Props {
  stack: TechItem[];
}

export default function FrontendGrid({
  stack,
}: Props) {
  return (
    <div className="p-8 absolute top-10 inset-0 backface-hidden mb-6 bg-linear-t from-zinc-900 via-transparent to-transparent">
      <h3 className="text-xs uppercase font-bold tracking-wider text-secondary mb-3">
        Frontend — Where I Live
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {stack.map((tech) => (
          <div
            key={tech.name}
            className="p-3 rounded-2xl bg-background/50 border border-card-border"
            style={{
              boxShadow: `0 0 15px -10px ${tech.glow}`,
            }}
          >
            <span className="text-sm font-semibold">
              {tech.name}
            </span>

            <span className="text-[10px] text-secondary flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />

              {tech.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}