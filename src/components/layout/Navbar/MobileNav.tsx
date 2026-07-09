"use client";

import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between lg:hidden">

        <Logo />

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-1 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

      </div>

      {open && (
        <div className="mt-6 space-y-5">
          <NavLinks  className="flex flex-col gap-4 items-start"/>
          <NavButton />
        </div>
      )}
    
    </> 
  );
}