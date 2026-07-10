import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

// 🚀 FIXED LAZY LOAD SPLITTING: 
// Removing { ssr: false } allows Next.js Server Components to split these code blocks seamlessly
const Projects = dynamic(() => import("@/components/projects/Projects"));
const About = dynamic(() => import("@/components/about/About"));
const StackSection = dynamic(() => import("@/components/stack/StackSection"));
const Contact = dynamic(() => import("@/components/contact/Contact"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default function Home() {
  return (
    <>
      {/* Renders instantly on the critical frame path */}
      <Navbar />
      <Hero />
      
      {/* Parsed as separate, deferred, non-blocking code chunks */}
      <Projects />
      <About />
      <StackSection />
      <Contact />
      <Footer />
    </>
  );
}
