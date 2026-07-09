"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  title: string;
  learnings: string[];
}

export default function ProjectImage({
  src,
  title,
  learnings,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    // Mobile users tap to reveal/hide
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      tabIndex={0}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      className="
        relative
        group
        h-56
        overflow-hidden
        rounded-2xl
        cursor-pointer
      "
    >
      {/* Image */}
      <Image
        src={src}
        alt={title}
        fill
        className={cn(
          "object-cover transition-all duration-700 ease-out",
          isOpen && "scale-110 rotate-1"
        )}
      />

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

      {/* Overlay */}
      <div
        className={cn(
          `
          absolute inset-0
          flex items-end
          transition-all
          duration-500
          ease-out
          `,
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        )}
      >
        <div
          className="
            w-full
            bg-linear-to-t
            from-black/95
            via-black/70
            to-transparent
            backdrop-blur-md
            px-5
            py-5
          "
        >
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
            What I Learned
          </p>

          <ul className="space-y-2">
            {learnings.map((item, index) => (
              <li
                key={item}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                className={cn(
                  `
                  flex
                  items-start
                  gap-2
                  transition-all
                  duration-500
                  `,
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                )}
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                <span className="text-xs text-zinc-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}