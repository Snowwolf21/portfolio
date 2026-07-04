import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Landing Section */}
        <Hero />

        {/* Projects Showcase Section */}
        <Projects />

        {/* Resume & Career Timeline Section */}
        <Resume />

        {/* Contact Form & Footer Section */}
        <Contact />
      </main>

      {/* Client-side Scroll Reveal Fallback Helper */}
      <ScrollReveal />
    </>
  );
}
