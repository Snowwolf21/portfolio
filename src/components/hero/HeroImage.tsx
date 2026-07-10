import React from "react";
import Image from "next/image";
import Kunmi from "../../assets/images/Kunmi.jpeg";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Main Avatar Container */}
      <div className="relative h-100 w-90 md:h-110 md:w-100 group">
        {/* Neon Glow behind the card */}
        <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-accent to-accent/60 blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Glow border ring frame */}
        <div className="absolute inset-0 left-0 rounded-4xl bg-linear-to-br from-accent to-accent/60 p-[1.5px] shadow-2xl">
          <div className="relative h-full w-full rounded-4xl overflow-hidden bg-background">
            <Image
              src={Kunmi}
              alt="Profile"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Floating Card 1: 2+ Years Experience (Bottom-Left) */}
        <div className="absolute -left-6 md:-left-10 bottom-10 z-20">
          <div className="bg-zinc-950/85 dark:bg-zinc-950/30 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-xl flex flex-col gap-2 justify-center items-start text-left w-30">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-accent to-indigo-400">
              2+
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 leading-tight mt-1">
              Years<br />Experience
            </span>
          </div>
        </div>

        {/* Floating Card 2: Code Badge </p> (Right-Middle) */}
        <div className="absolute -right-6 top-1/2  z-20">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-accent to-accent/60 border border-white/20 shadow-xl shadow-accent-glow/40 transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <span className="text-xl font-bold text-white font-mono">
              &lt;/&gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}