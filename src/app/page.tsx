import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import StackSection from "@/components/stack/StackSection";
import Contact from "@/components/contact/Contact";

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