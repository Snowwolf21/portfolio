import React from "react";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <div className="space-y-8 text-left">
      {/* Pill Badge */}
      <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4.5 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground/60">
        Hello there,👋🏽
      </span>

      <div className="space-y-4 text-center md:text-left">
        {/* Main Header */}
        <h1 className="text-5xl font-black leading-none md:text-7xl tracking-tight text-foreground/60 ">
          I&apos;m{" "}
          <span className="text-foreground/60">
            Akinkunmi
          </span>
          <br className="hidden sm:inline" />
          <span className="mt-4 bg-linear-to-r from-accent to-purple-500 bg-clip-text text-transparent ml-0 sm:ml-2 sm:mt-1 inline-block">
            Adeyinka
          </span>
        </h1>

        {/* Sub Header */}
        <h2 className="text-3xl font-bold md:text-4xl text-foreground/60 tracking-wide">
          Frontend Developer
        </h2>
      </div>

      {/* Description */}
      <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
        I build modern, responsive, and scalable web applications with the React/Next.js and Node.js ecosystem, bringing creative and functional ideas to life on the web.
      </p>

      {/* Action Buttons */}
      <HeroButtons />

      {/* Social Icons */}
      <HeroSocials />
    </div>
  );
}