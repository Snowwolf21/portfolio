"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Container from "../Container";

export default function Footer() {
  const forceScrollToTop = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof window !== "undefined") {
      // 🚀 CRITICAL MOBILE ENGINE FIX:
      // Temporarily override Next.js and global CSS smooth layouts
      const htmlStyle = document.documentElement.style;
      const originalScrollBehavior = htmlStyle.scrollBehavior;
      
      // 1. Force the layout engine into instantaneous hardware mode
      htmlStyle.scrollBehavior = "auto";

      // 2. Schedule the execution on the very next hardware frame update
      requestAnimationFrame(() => {
        // Direct layout root adjustments bypass JavaScript rendering queues
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);

        // 3. Restore your smooth settings for standard finger swipes
        requestAnimationFrame(() => {
          htmlStyle.scrollBehavior = originalScrollBehavior;
        });
      });
    }
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#070b13] py-8 text-muted-foreground transition-colors duration-300">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright Info */}
          <p className="text-sm font-semibold tracking-wide text-center sm:text-left">
            Copyright © {new Date().getFullYear()} Snowwolf. All rights reserved.
          </p>

          {/* 
            📱 FIXED MECHANICAL POINTER TRIGGER:
            Using onPointerDown fires code the exact millisecond your skin makes contact,
            completely bypassing the mobile phone's gesture tracking delays.
          */}
          <button
            onPointerDown={forceScrollToTop}
            style={{ 
              WebkitTapHighlightColor: "transparent",
              touchAction: "none" 
            }}
            className="
              flex items-center justify-center 
              w-12 h-12 mb-10
              rounded-xl bg-white dark:bg-zinc-900 
              border border-zinc-200 dark:border-white/10 
              text-foreground transition-all duration-300 shadow-sm 
              cursor-pointer select-none pointer-events-auto
              
              /* Mobile Touch Actions */
              active:scale-90 active:bg-zinc-100 dark:active:bg-zinc-800
              
              /* Desktop Breakpoint Only */
              md:hover:bg-accent md:hover:text-white 
              dark:md:hover:bg-accent dark:md:hover:text-white 
              md:hover:scale-110
            "
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
