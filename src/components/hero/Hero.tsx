import Container from "../layout/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative  min-h-screen flex items-center overflow-hidden text-foreground"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 mt-32 ">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}