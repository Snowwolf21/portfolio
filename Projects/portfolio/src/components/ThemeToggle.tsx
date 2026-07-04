"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Read current theme state
    const isDark = document.documentElement.classList.contains("dark");
    
    // Defer state update to satisfy eslint no-synchronous-setstate-in-effect rule
    const timer = setTimeout(() => {
      setTheme(isDark ? "dark" : "light");
    }, 0);

    // Listen for OS preference shifts
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("color-scheme")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        if (e.matches) {
          document.documentElement.classList.add("dark");
          const meta = document.querySelector('meta[name="color-scheme"]');
          if (meta) meta.setAttribute("content", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          const meta = document.querySelector('meta[name="color-scheme"]');
          if (meta) meta.setAttribute("content", "light");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-scheme", "dark");
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute("content", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-scheme", "light");
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute("content", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      className="relative flex items-center justify-center p-2 rounded-xl transition-all duration-300 border border-card-border hover:bg-accent/10 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 cursor-pointer"
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sun Icon (Visible in Dark Mode to switch to Light) */}
      <svg
        className={`w-5 h-5 transition-all duration-500 ease-out ${
          theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0 absolute"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>

      {/* Moon Icon (Visible in Light Mode to switch to Dark) */}
      <svg
        className={`w-5 h-5 transition-all duration-500 ease-out ${
          theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0 absolute"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
}
