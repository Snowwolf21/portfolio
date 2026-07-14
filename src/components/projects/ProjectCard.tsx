"use client";


import { useState } from "react";
import { Project } from "@/data/projects";
import Card from "../ui/Card";
import ProjectImage from "./ProjectImage";
import ProjectOverlay from "./ProjectOverlay";
import TechBadges from "./TechBadges";
import React from "react";



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
        rounded-3xl
        border
        border-gray-300
        bg-card
        h-120
        md:h-135
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-2xl
        hover:border-accent/30
        cursor-pointer
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
        <h3 className="text-md md:text-lg font-bold">
          {project.title}
        </h3>

        <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">
          {project.description}
        </p>
    
        <TechBadges
          tech={project.technologies}
        />

        <ProjectOverlay
          github={project.github}
          live={project.live} />
      </div>
    </Card>
  );
}