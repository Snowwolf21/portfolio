
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import StackSection from "@/components/stack/StackSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <StackSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}