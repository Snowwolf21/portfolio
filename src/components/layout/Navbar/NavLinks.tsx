"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";

export default function NavLinks({className}: {className?: string}) {
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const sectionIds = navigation
      .map((item) => item.href.replace("#", ""))
      .filter(Boolean);

    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <ul className={cn("flex", className)} >
      {navigation.map((item) => {
        const isActive = activeSection === item.href;
        return (
          <li key={item.href} className="relative flex flex-col items-center">
            <Link
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className={`relative pb-1 text-base font-semibold tracking-wide transition-colors duration-200 group
                ${isActive ? "text-foreground/70" : "text-foreground/70 hover:text-foreground"}
              `}
            >
              {item.title}

              {/* Animated underline — visible on hover OR when active */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-accent-hover transition-all duration-300 ease-out
                  ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
                `}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}