import React from "react";
import { about } from "@/data/about";
import { Download } from "lucide-react";
import Link from "next/link";

export default function AboutInfo() {
  return (
    <div className="space-y-8 text-left">
      <div className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
          {about.description.trim()}
        </p>
      </div>
      
      <div className="flex items-center md:justify-start justify-center">
        <Link
          href="/cv.pdf"
          target="_blank"
          download
          className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-accent/40 bg-accent-hover/60 hover:bg-accent-hover/40 dark:hover:bg-accent-hover/40 text-accent hover:text-white font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 cursor-pointer"
        >
          <span>Download CV</span>
          <Download className="w-4.5 h-4.5" />
        </Link>
      </div>
    </div>
  );
}