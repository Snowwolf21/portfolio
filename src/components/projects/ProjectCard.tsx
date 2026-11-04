"use client";


import { useState } from "react";
import { Project } from "@/data/projects";
import Card from "../ui/Card";
import ProjectImage from "./ProjectImage";
import ProjectOverlay from "./ProjectOverlay";




interface Props {
  project: Project;
}
 

export default function ProjectCard({ project }: Props) {
 
const [isActive, setIsActive] = useState(false);
const handlePointerEnter = () => {
  if (window.matchMedia("(hover: hover)").matches) {
    setIsActive(true);
  }
};

const handlePointerLeave = () => {
  if (window.matchMedia("(hover: hover)").matches) {
    setIsActive(false);
  }
};

const handleClick = () => {
  if (!window.matchMedia("(hover: hover)").matches) {
    setIsActive((prev) => !prev);
  }
};

  return (
    <Card
      className="
        relative
        overflow-hidden
        rounded-lg
        border-2
        border-gray-00
        bg-card/20
        h-130
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-2xl
        hover:border-accent/30      
      "
  onPointerEnter={handlePointerEnter}
  onPointerLeave={handlePointerLeave}
  onClick={handleClick}
    >
      <ProjectImage
        src={project.image}
        title={project.title}
        learnings={project.learnings}
        isActive={isActive}
      />

      <div className="p-6 flex flex-col gap-2 md:gap-4">
        <h3 className="text-sm md:text-md font-semibold text-foreground/80 tracking-wide">
          {project.title}
        </h3>

        <p className="text-sm lg:text-md text-muted-foreground md:line-clamp-4">
          {project.description}
        </p>

        <ProjectOverlay
          github={project.github}
          live={project.live} />
      </div>
    </Card>
  );
}