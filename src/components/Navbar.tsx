"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Icon } from "./Icon";
import snowwolf from "../asset/snowwolf-icon.png";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrolled = window.scrollY > 20;

    setIsScrolled((prev) =>
      prev !== scrolled ? scrolled : prev
    );
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-panel shadow-lg shadow-accent-glow/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
        >
          <span className="group-hover:scale-105 transition-transform duration-300 rounded-md">
            <Icon
              src={snowwolf}
              alt="Snowwolf logo"
              width={40}
              height={40}
              className="rounded-bg bg-clip-text dark:invert"
            />
          </span>
          <span className="relative overflow-hidden inline-block">
            <span className="block  transition-transform duration-300">
              snowwolf.dev
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8"
              id="mobile-menu">
          <ul className="flex items-center gap-6 text-sm font-medium text-secondary">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-accent text-foreground/80 font-semibold text-base dark:text-foreground/90 transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-5 w-px bg-card-border" />

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded-xl border border-card-border text-foreground hover:bg-accent/10 hover:text-accent transition-colors duration-300 focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 border-t border-card-border ${
          isOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="p-8">
          <ul className="flex flex-col gap-6 text-lg font-medium text-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 border-b border-card-border hover:text-accent hover:pl-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
