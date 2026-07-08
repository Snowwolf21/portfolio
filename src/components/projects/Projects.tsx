import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Things I've Built"
        />

        <ProjectGrid />
      </Container>
    </Section>
  );
}