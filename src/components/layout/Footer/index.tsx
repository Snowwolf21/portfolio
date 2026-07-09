"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import Container from "../Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#070b13] py-8 text-muted-foreground transition-colors duration-300">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright Info */}
          <p className="text-sm font-semibold tracking-wide text-center sm:text-left">
            © {new Date().getFullYear()} Snowwolf. All rights reserved.
          </p>

          {/* Scroll to Top Arrow Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-foreground hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300 shadow-sm hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}