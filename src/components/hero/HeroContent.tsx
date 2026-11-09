import React from "react";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <div className="space-y-6 text-left">
      {/* Pill Badge */}
      <span className="inline-flex rounded-full border border-accent/30 bg-accent/20 px-4.5 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground/80">
        Hello there,👋🏽
      </span>

      <div className="space-y-4 ">
        {/* Main Header */}
        <h1 className="text-3xl font-semibold leading-none md:text-5xl tracking-tight text-foreground/80 ">
          I&apos;m{" "}
           {/* <br className="hidden sm:inline" /> */}
          <span className="text-4xl md:text-5xl text-accent/80">
            Akinkunmi,
          </span>
         
        </h1>

        {/* Sub Header */}
        <h2 className="text-xl font-semibold md:text-2xl text-foreground/80 tracking-wide">
          Frontend Developer
        </h2>
      </div>

      {/* Description */}
      <p className="max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
       I build web applications that solve business problems, simplify operations, and reduce operational costs. 
      </p>

      {/* Action Buttons */}
      <HeroButtons />

      {/* Social Icons */}
      <HeroSocials />
    </div>
  );
}