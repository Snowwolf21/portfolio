
"use client";

import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="flex items-center justify-between lg:hidden">
        <Logo />

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="p-1 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-6 space-y-5">
          <NavLinks
            className="flex flex-col items-start gap-4"
            onLinkClick={closeMenu}
          />

          <NavButton onClick={closeMenu} />
        </div>
      )}
    </>
  );
}
