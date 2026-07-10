import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="grid gap-8 md:gap-12 md:grid-cols-2 xl:grid-cols-3 border-4 border-black">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}