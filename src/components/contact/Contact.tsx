import React from "react";
import Container from "../layout/Container";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background glowing gradient */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-accent-glow/10 blur-[130px] pointer-events-none" />

      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Let’s build something together or discuss new opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 dark:bg-zinc-900/40 backdrop-blur-md shadow-xl">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
