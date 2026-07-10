import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";

interface Props {
  github: string;
  live: string; 

}

export default function ProjectOverlay({ github, live }: Props) {
  return (
   <div
      className={`flex gap-4 mt-6 transition-all duration-500`}
    >
      <Link
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-accent-hover/50 px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 hover:border-foreground/40 hover:bg-accent-hover/60 hover:text-foreground hover:shadow-lg"
      >
        <SiGithub className="w-4 h-4 shrink-0" />
        <span>GitHub</span>
      </Link>

      <Link
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-foreground/30 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:scale-[1.02] shadow-lg"
      >
        <ExternalLink className="w-4 h-4 shrink-0" />
        <span>Live Demo</span>
      </Link>
    </div>
  );
}