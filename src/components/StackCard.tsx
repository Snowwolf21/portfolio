"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


interface TechItem {
  name: string;
  level?: string;
  status?: string;
  glow: string;
  color?: string;
}

interface StackCardProps {
  coreStack: TechItem[];
  backendStack: TechItem[];
  showcaseImageSrc: string; // Add your default picture path here
}

export default function TransformativeStackCard({
  coreStack,
  backendStack,
  showcaseImageSrc,
}: StackCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // 1. Wait 600ms for page layout load, then flip to reveal tech list info
    const autoFlipOpen = setTimeout(() => {
      setIsFlipped(true);
    }, 600);

    // 2. Keep stack info open for exactly 3 seconds (3000ms), then close back to default picture
    const autoFlipClose = setTimeout(() => {
      setIsFlipped(false);
    }, 3600); // 600ms entry delay + 3000ms display runtime

    return () => {
      clearTimeout(autoFlipOpen);
      clearTimeout(autoFlipClose);
    };
  }, []);

  return (
    <div className="lg:col-span-5 w-full h-[580px] perspective-1000 group cursor-pointer scroll-reveal">
      <div
        className={`w-full h-full relative duration-700 transform-style-3d transition-transform ${
          isFlipped ? "rotate-y-180" : "md:group-hover:rotate-y-180"
        }`}
      >
        
        {/* ========================================================
            FRONT SIDE: Default Picture (Displays immediately on load)
           ======================================================== */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden glass-panel border border-card-border bg-zinc-900 shadow-2xl flex flex-col justify-between">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={showcaseImageSrc}
              alt="Developer Workspace Showcase"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent" />
          </div>
          
        </div>

        {/* ========================================================
            BACK SIDE: Your Exact Code Panel Layout
           ======================================================== */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 glass-panel border border-card-border rounded-3xl p-6 md:p-8 shadow-2xl bg-zinc-900/95 overflow-y-auto">
          <div className="absolute -top-3 -right-3 h-10 w-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent animate-bounce">
            ⚡
          </div>
          
          {/* Window header */}
          <div className="flex items-center gap-1.5 border-b border-card-border pb-4 mb-6">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="text-sm text-secondary font-mono ml-4">stack.config.ts</span>
          </div>

          {/* Core Frontend Tech */}
          <div className="mb-6">
            <h3 className="text-xs uppercase font-bold tracking-wider text-secondary mb-3">Frontend — Where I Live</h3>
            <div className="grid grid-cols-2 gap-3">
              {coreStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3 rounded-2xl bg-background/50 border border-card-border hover:border-accent/30 transition-all duration-300 flex flex-col group relative overflow-hidden"
                  style={{
                    boxShadow: `0 0 15px -10px ${tech.glow}`
                  }}
                >
                  <div className="absolute inset-0 bg-linear-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 from-accent to-transparent" />
                  <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                  <span className="text-[10px] text-secondary mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {tech.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Expanding Stack */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs uppercase font-bold tracking-wider text-secondary">Backend — Expanding Into</h3>
              <span className="text-[10px] text-emerald-500 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Shipped Projects
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {backendStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3 rounded-2xl bg-background/50 border border-card-border hover:border-emerald-500/20 transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
                  style={{
                    boxShadow: `0 0 15px -10px ${tech.glow}`
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full bg-linear-r-br ${tech.color}`} />
                    <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary border border-card-border group-hover:text-emerald-500 group-hover:border-emerald-500/20 transition-colors duration-300 font-mono">
                    {tech.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual bottom code signature */}
          <div className="mt-6 pt-4 border-t border-card-border font-mono text-[11px] text-secondary/80">
            <span className="text-accent">export</span> <span className="text-blue-400">default</span> <span className="text-foreground">SnowWolf</span>;
          </div>
        </div>

      </div>
    </div>
  );
}
