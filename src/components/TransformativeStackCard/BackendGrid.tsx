import { TechItem } from "../../lib/types";

interface Props {
  stack: TechItem[];
}

export default function BackendGrid({
  stack,
}: Props) {
  return (
    <div className="p-8 absolute top-64 inset-0 backface-hidden mb-6 bg-linear-t from-zinc-900 via-transparent to-transparent">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xs uppercase font-bold tracking-wider text-secondary">
          Backend — Expanding Into
        </h3>

        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          Shipped Projects
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {stack.map((tech) => (
          <div
            key={tech.name}
            className="p-3 rounded-2xl bg-background/50 border border-card-border flex justify-between items-center"
            style={{
              boxShadow: `0 0 15px -10px ${tech.glow}`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2.5 h-2.5 rounded-full bg-linear-r-br ${tech.color}`}
              />

              <span>{tech.name}</span>
            </div>

            <span className="text-[10px] font-mono">
              {tech.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}