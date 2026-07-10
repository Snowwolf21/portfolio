import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-lg text-foreground/70 md:text-xl font-bold tracking-tight" >
      <span className="text-accent/80 tracking-wider">&lt;</span>

      SnowWolf

      <span className="text-accent/80">/&gt;</span>
    </Link>
  );
}