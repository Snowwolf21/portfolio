import React from "react";
import { stack } from "@/data/stack";
import { getSkillIcon } from "./IconMapper";

export default function BackendGrid() {
  const backendSkills = stack.find((item) => item.title === "Backend")?.items || [];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-8">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black tracking-wider text-foreground">
            Backend Stack
          </h3>
          <span className="text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/30 text-emerald-400 bg-emerald-400/10 uppercase tracking-widest">
            Server
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {backendSkills.map((skill) => (
            <div 
              key={skill.name}
              className="p-4 rounded-2xl border border-white/10 bg-white/5 dark:bg-zinc-900/50 hover:border-accent-hover/20 hover:bg-white/10 dark:hover:bg-accent-hover/20 transition-all duration-300 group flex flex-col justify-between h-[90px] shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {getSkillIcon(skill.iconName, "w-6 h-6", skill.color)}
                  </div>
                  <span className="text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors truncate max-w-[90px] sm:max-w-none">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-bold text-muted-foreground group-hover:text-accent transition-colors">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-zinc-200/20 dark:bg-zinc-800 rounded-full overflow-hidden mt-3">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out origin-left"
                  style={{ 
                    width: `${skill.level}%`, 
                    backgroundColor: skill.color 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}