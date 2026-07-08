import Logo from "./Logo";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export default function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center justify-between">
      <Logo />

      <NavLinks  className="items-center gap-8"/>
        <ThemeToggle  />
     <NavButton />
    
    </div>
  );
}