import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiOpenid,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiSupabase,
  SiRedis,
  SiVite,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiFigma,
  SiPython,
  SiVsco,
} from "react-icons/si";
import { HelpCircle } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const techIconMap: Record<string, { icon: IconComponent; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "text-foreground" },
  TypeScript: { icon: SiTypescript, color: "text-blue-500" },
  Tailwind: { icon: SiTailwindcss, color: "text-cyan-400" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-400" },
  "Framer Motion": { icon: SiFramer, color: "text-purple-400" },
  React: { icon: SiReact, color: "text-sky-400" },
  OpenAI: { icon: SiOpenid, color: "text-emerald-400" },
  Express: { icon: SiExpress, color: "text-foreground" },
  Node: { icon: SiNodedotjs, color: "text-foreground" },
  "Node.js": { icon: SiNodedotjs, color: "text-foreground" },
  MongoDB: { icon: SiMongodb, color: "text-emerald-500" },
  Prisma: { icon: SiPrisma, color: "text-foreground" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-400" },
  GraphQL: { icon: SiGraphql, color: "text-pink-500" },
  Docker: { icon: SiDocker, color: "text-blue-400" },
  Vercel: { icon: SiVercel, color: "text-foreground" },
  Firebase: { icon: SiFirebase, color: "text-amber-500" },
  Supabase: { icon: SiSupabase, color: "text-emerald-400" },
  Redis: { icon: SiRedis, color: "text-red-500" },
  Vite: { icon: SiVite, color: "text-violet-400" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-400" },
  HTML: { icon: SiHtml5, color: "text-orange-500" },
  CSS: { icon: SiCss, color: "text-blue-500" },
  Git: { icon: SiGit, color: "text-orange-500" },
  Figma: { icon: SiFigma, color: "text-pink-400" },
  VSCode: { icon: SiVsco, color: "text-blue-500" },
  Python: { icon: SiPython, color: "text-yellow-400" },
};

interface Props {
  tech: string[];
}

export default function TechBadges({ tech }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tech.map((item) => {
        const match = techIconMap[item];
        const Icon = match?.icon;
        const color = match?.color ?? "";

        return (
          <span
            key={item}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-white/20 hover:bg-white/10"
          >
            {Icon ? (
              <Icon className={`w-3.5 h-3.5 shrink-0 ${color}`} />
            ) : (
              <HelpCircle className="w-3.5 h-3.5 shrink-0 text-foreground/40" />
            )}
            {item}
          </span>
        );
      })}
    </div>
  );
}