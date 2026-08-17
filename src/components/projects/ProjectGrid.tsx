"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectGrid() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 2);
  const hasMoreProjects = projects.length > 2;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3 w-full">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      {hasMoreProjects && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="inline-flex items-center gap-2 px-6 py-3 border border-accent-hover/20 hover:border-accent-glow/30 dark:border-foreground/15 bg-foreground/5 dark:bg-zinc-accent/20 hover:bg-foreground/10 dark:hover:bg-zinc-accent/40 text-foreground font-medium rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm"
        >
          <span>{showAll ? "Show Less" : "Show More"}</span>
          {showAll ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
}