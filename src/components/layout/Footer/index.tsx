"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Container from "../Container";

export default function Footer() {
  const forceScrollToTop = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    // 1. Terminate all React event propagation up the invalid HTML DOM tree
    e.preventDefault();
    e.stopPropagation();

    if (typeof window !== "undefined") {
      // 2. Kill custom virtual layout listeners (like Lenis) during the jump
      document.documentElement.classList.add("js-scrolling-top");

      // 3. Fallback to physical layout element targets if window.scrollTo is hijacked
      const target = document.documentElement || document.body;
      
      // 4. Force instant native hardware coordinate adjustments
      target.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "auto" });

      // 5. Release the frame lock after execution complete
      setTimeout(() => {
        document.documentElement.classList.remove("js-scrolling-top");
      }, 10);
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
            🚀 THE MOBILE BULLETPROOF BUTTON SETUP:
            - Handled by pointerup to run immediately as your finger leaves the screen (bypasses tap latency entirely)
            - touch-action: none instructs mobile safari/chrome that this element has zero gesture relationships
          */}
          <button
            onPointerUp={forceScrollToTop}
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
              
              /* 📱 Mobile Mechanical Click Responses */
              active:scale-90 active:bg-zinc-100 dark:active:bg-zinc-800
              
              /* 💻 Isolated Desktop Pointer Mechanics Only */
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
