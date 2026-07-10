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

      <div className="space-y-4 ">
        {/* Main Header */}
        <h1 className="text-3xl font-black leading-none md:text-5xl tracking-tight text-foreground/60 ">
          I&apos;m{" "}
          <span className="text-foreground/60">
            Akinkunmi
          </span>
          <br className="hidden sm:inline" />
          <span className="mt-6  bg-clip-text text-accent/60 ml-0 sm:ml-2 sm:mt-1 inline-block">
            Adeyinka,
          </span>
        </h1>

        {/* Sub Header */}
        <h2 className="text-2xl font-bold md:text-3xl text-foreground/60 tracking-wide">
          Frontend Developer
        </h2>
      </div>

      {/* Description */}
      <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
        I build modern, responsive, and scalable web applications with the React/Next.js and Node.js ecosystem, bringing creative and functional ideas to life on the web.
      </p>

      {/* Action Buttons */}
      <HeroButtons />

      {/* Social Icons */}
      <HeroSocials />
    </div>
  );
}