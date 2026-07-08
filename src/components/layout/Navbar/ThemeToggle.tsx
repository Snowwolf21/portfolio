"use client";

import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by deferring the mount state safely
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full opacity-0" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 cursor-pointer transition-colors duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Moon className="w-4 h-4 text-indigo-400 transition-opacity duration-200" />
      ) : (
        <Sun className="w-4 h-4 text-amber-500 transition-opacity duration-200" />
      )}
    </button>
  );
}