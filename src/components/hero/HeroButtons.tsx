import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex justify-center lg:justify-start flex-wrap gap-4 pt-2">
      {/* View My Work Button */}
      <Link
        href="#projects"
        className="inline-flex items-center gap-2 px-6 py-3.5 bg-linear-to-r from-accent/70 to-accent/90 hover:from-accent-hover hover:to-accent-hover/90 text-white font-bold rounded-xl transition-all duration-300 shadow-md shadow-accent-glow hover:shadow-lg hover:shadow-accent-glow/50 hover:scale-105 active:scale-95 cursor-pointer text-sm"
      >
        <span>View My Work</span>
        <ArrowUpRight className="w-4 h-4" />
      </Link>

      {/* Contact Me Button */}
      <Link
        href="#contact"
        className="inline-flex items-center gap-2 px-6 py-3.5 border border-accent-hover/20 hover:border-accent-glow/30 dark:border-foreground/15 bg-foreground/10 dark:bg-zinc-accent/20 hover:bg-foreground/20 
        dark:hover:bg-zinc-accent/40 text-foreground font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm"
      >
        <span>Contact Me</span>
      </Link>
    </div>
  );
}