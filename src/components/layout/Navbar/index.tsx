import Container from "../Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <Container>

        <nav className="mt-6 rounded-lg shadow-sm border border-white/10 bg-background/80 px-8 py-5 backdrop-blur-lg">

          <DesktopNav />

          <MobileNav />

        </nav>

      </Container>

    </header>
  );
}