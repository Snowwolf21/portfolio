import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-md md:text-lg text-foreground/70 font-semibold tracking-tight" >
      <span className="text-accent/80 tracking-wider">&lt;</span>

      SnowWolf

      <span className="text-accent/80">/&gt;</span>
    </Link>
  );
}