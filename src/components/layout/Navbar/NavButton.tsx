export default function NavButton() {
  return (
    /* 🚀 FIXED: Standard <a> link optimized for zero-delay browser click delivery */
    <a 
      href="#contact" 
      className="inline-flex items-center justify-center text-base font-medium bg-accent/70 text-primary-foreground hover:text-gray-200 p-5 h-10 rounded-lg cursor-pointer transition-all duration-300 ease-in-out active:scale-95 md:hover:bg-accent-hover md:hover:scale-105 md:hover:shadow-lg"
    >
      Hire Me
    </a>
  );
}
