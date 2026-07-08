import { Project } from "@/data/projects";

import Card from "../ui/Card";
import ProjectImage from "./ProjectImage";
import ProjectOverlay from "./ProjectOverlay";
import TechBadges from "./TechBadges";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <Card className="group overflow-hidden">
      <ProjectImage
        src={project.image}
        title={project.title}
        learnings={project.learnings}
      />

      <div className="p-4">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 text-muted-foreground">
          {project.description}
        </p>

        <TechBadges tech={project.technologies} />

        <ProjectOverlay
          github={project.github}
          live={project.live}
        />
      </div>
    </Card>
  );
}