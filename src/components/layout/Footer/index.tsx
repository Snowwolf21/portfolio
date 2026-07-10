"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Container from "../Container";

export default function Footer() {
  // 🚀 FIXED: Isolated pointer execution completely unlinked from React's onClick bubble
  const handleScrollInstant = (e: React.PointerEvent<HTMLButtonElement>) => {
    // Only intercept primary touches (finger taps or mouse clicks)
    if (e.isPrimary) {
      if (typeof window !== "undefined") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
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
            🚀 CRITICAL TOUCH FIXES APPLIED HERE:
            1. Used `onPointerDown` which fires the exact microsecond your skin makes contact, breaking through the hover trap.
            2. Added `touch-action-none` to block the mobile device from thinking you are swiping or double-tapping.
            3. Added `select-none` and explicit style properties to prevent accidental copy highlighting.
            4. Kept hover effects completely isolated to `md:` (desktop breakpoint).
          */}
          <button
            onPointerDown={handleScrollInstant}
            style={{ WebkitTapHighlightColor: "transparent" }} // Removes the laggy iOS grey flash box
            className="
              flex items-center justify-center 
              w-12 h-12 mb-10
              rounded-xl bg-white dark:bg-zinc-900 
              border border-zinc-200 dark:border-white/10 
              text-foreground transition-all duration-300 shadow-sm 
              cursor-pointer select-none
              
              /* 📱 Mobile Touch Pipeline Rules */
              touch-action-none pointer-events-auto
              active:scale-95 active:bg-zinc-100 dark:active:bg-zinc-800
              
              /* 💻 Desktop Mechanics Only */
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
