"use client";

import { useState } from "react";
import BackendGrid from "./BackendGrid";
import FrontendGrid from "./FrontendGrid";
import GlassCard from "@/components/ui/GlassCard";
import { SiReact, SiNodedotjs } from "react-icons/si";

export default function TransformativeStackCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
      {/* 3D Flip Toggle Pill */}
      <div className="relative flex p-1 bg-white/5 dark:bg-zinc-900/50 backdrop-blur-md rounded-full border border-accent-hover/20 shadow-inner w-72">
        <div
          className={`absolute top-1 bottom-1 rounded-full bg-accent-hover/40 border border-accent/30 shadow-sm transition-all duration-500 ease-out ${
            isFlipped ? "left-[144px] right-1" : "left-1 right-[144px]"
          }`}
        />
        <button
          onClick={() => setIsFlipped(false)}
          className={`flex-1 py-2 text-sm font-bold text-center rounded-full z-10 transition-colors duration-300 cursor-pointer ${
            !isFlipped ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setIsFlipped(true)}
          className={`flex-1 py-2 text-sm font-bold text-center rounded-full z-10 transition-colors duration-300 cursor-pointer ${
            isFlipped ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Backend
        </button>
      </div>

      {/* 3D Card Container */}
      <div className="relative w-full h-[520px] perspective-[1500px]">
        {/* Floating Rotating Emblem in the Center/Top */}
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className="absolute left-1/2 -top-7 -translate-x-1/2 z-30 flex items-center justify-center w-14 h-14 rounded-full bg-background border border-accent/30 shadow-lg shadow-accent-glow/20 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 group"
        >
          {/* Outer rotating glow border */}
          <div className="absolute inset-0 rounded-full border border-dashed border-accent/40 animate-[spin_10s_linear_infinite] group-hover:border-solid" />
          
          <div className={`transition-all duration-700 ease-in-out ${isFlipped ? "transform-[rotateY(180deg)] text-emerald-400" : "text-sky-400"}`}>
            {isFlipped ? (
              <SiNodedotjs className="w-7 h-7" />
            ) : (
              <SiReact 
                className="w-7 h-7" 
                style={{ animation: "spin 8s linear infinite" }}
              />
            )}
          </div>
        </div>

        {/* The rotating card */}
        <div
          className={`relative w-full h-full duration-700 transition-all ease-out transform-style-3d transform-3d ${isFlipped ? "transform-[rotateY(180deg)]" : ""}`}
        >
          {/* FRONT SIDE: FrontendGrid */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <GlassCard className="w-full h-full p-0 overflow-hidden border border-white/10 shadow-2xl relative">
              {/* Radial gradient background accent */}
              <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-sky-500/10 blur-[80px] pointer-events-none" />
              <FrontendGrid />
            </GlassCard>
          </div>

          {/* BACK SIDE: BackendGrid */}
          <div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)]">
            <GlassCard className="w-full h-full p-0 overflow-hidden border border-white/10 shadow-2xl relative">
              {/* Radial gradient background accent */}
              <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />
              <BackendGrid />
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}