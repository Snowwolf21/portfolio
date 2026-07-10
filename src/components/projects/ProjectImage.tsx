import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface Props {
  src: string;
  title: string;
  learnings: string[];
  isActive: boolean;
}

export default function ProjectImage({
  src,
  title,
  learnings,
  isActive,
}: Props) {
  return (
    <div className="relative h-56 overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={title}
        fill
        className={`object-cover transition-transform duration-700 ${isActive ? "scale-110" : "scale-100"}
        `}
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      <div
        className={`absolute inset-x-0 bottom-0 transition-all duration-500 backdrop-blur-md rounded-md bg-black/60 border-t border-white/10
          px-5 py-4 ${ isActive ? "translate-y-0 opacity-100" : "translate-y-full opacity-0" }
        `}
      >
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-accent">
          What I Learned
        </p>

        <ul className="space-y-2">
          {learnings.map((item) => (
            <li key={item} className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs text-zinc-200">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}