"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Container from "../Container";

export default function Footer() {
  // 🚀 FIXED: Pure global trigger completely unaffected by component nesting bugs
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
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

          <button
            onClick={scrollToTop}
            className="
              flex items-center justify-center 
              w-12 h-12 mb-10
              rounded-xl bg-white dark:bg-zinc-900 
              border border-zinc-200 dark:border-white/10 
              text-foreground transition-all duration-300 shadow-sm 
              cursor-pointer touch-manipulation select-none
              active:scale-95 active:bg-zinc-100 dark:active:bg-zinc-800
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
