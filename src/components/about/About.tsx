import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import AboutInfo from "./AboutInfo";
import AboutProfile from "./AboutProfile";
import SectionHeading from "../ui/SectionHeading";
import { about } from "@/data/about";
export default function About() {
  return (
    <section
      id="about"
      className="py-20"
    >
      <Container>
        <SectionHeading 
                title={about.title}
                subtitle={about.subtitle}
              />
        <div className="grid items-center mt-4 md:mt-10 lg:grid-cols-2 gap-4">
          <Reveal>
            <AboutInfo />
          </Reveal>

          <Reveal>
            <AboutProfile />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}