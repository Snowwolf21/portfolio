import React from "react";
import Image from "next/image";
import Kunmi from "../../assets/images/Kunmi.jpeg";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Main Avatar Container */}
      <div className="relative h-[480px] w-[380px] sm:h-[500px] sm:w-[400px] group">
        {/* Neon Glow behind the card */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-accent to-purple-500 blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Glow border ring frame */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-accent to-purple-500 p-[1.5px] shadow-2xl">
          <div className="relative h-full w-full rounded-[2.9rem] overflow-hidden bg-background">
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
        <div className="absolute -left-10 bottom-12 z-20 animate-float">
          <div className="bg-zinc-950/85 dark:bg-zinc-950/85 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-xl flex flex-col justify-center items-start text-left w-[125px]">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">
              2+
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 leading-tight mt-1">
              Years<br />Experience
            </span>
          </div>
        </div>

        {/* Floating Card 2: Code Badge </p> (Right-Middle) */}
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 animate-[float_5s_ease-in-out_infinite_1.5s]">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-purple-600 border border-white/20 shadow-xl shadow-accent-glow/40 transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <span className="text-xl font-bold text-white font-mono">
              &lt;/&gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}