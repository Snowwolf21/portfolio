import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold tracking-tight" >
      <span className="text-accent-hover tracking-wider">&lt;</span>

      SnowWolf

      <span className="text-accent-hover">/&gt;</span>
    </Link>
  );
}