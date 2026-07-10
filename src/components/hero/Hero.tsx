import Container from "../layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden text-foreground"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 p-4 mt-32 sm:mt-48 lg:mt-56">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}