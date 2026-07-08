import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface Props {
  src: string;
  title: string;
  learnings: string[];
}

export default function ProjectImage({ src, title, learnings }: Props) {
  return (
    <div className="relative h-56 overflow-hidden rounded-md">
      {/* Project screenshot */}
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark gradient base so text is always readable */}
      <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent" />

      {/* "What I Learned" slide-up overlay */}
      <div
        className="
          absolute inset-x-0 bottom-0
          translate-y-full group-hover:translate-y-0
          transition-transform duration-500 ease-out
          bg-zinc-950/90 backdrop-blur-sm
          px-5 py-4 rounded-md
          border-t border-white/10
        "
      >
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent mb-2.5">
          What I Learned
        </p>
        <ul className="space-y-1.5">
          {learnings.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="mt-1px shrink-0 w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] leading-snug text-zinc-200 font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}