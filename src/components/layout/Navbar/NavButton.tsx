
interface NavButtonProps {
  onClick?: () => void;
}

export default function NavButton({ onClick }: NavButtonProps) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      className="inline-flex items-center justify-center text-sm md:text-md font-medium bg-accent text-primary-foreground/80 hover:text-gray-100 p-5 h-10 rounded-sm cursor-pointer transition-all duration-300 ease-in-out active:scale-95 md:hover:bg-accent/70 md:hover:scale-105 md:hover:shadow-lg tracking-wide"
    >
      Hire Me
    </a>
  );
}
