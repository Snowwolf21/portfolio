import Image from "next/image";
import Kunmi from "../../assets/images/Kunmi.jpeg";
import GlassCard from "../ui/GlassCard";


export default function AboutProfile() {
  return (
    <GlassCard className="relative overflow-hidden p-4 border border-zinc-200/50 bg-white/40 shadow-xl dark:border-white/10">
      <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-zinc-200 dark:border-white/5 shadow-md">
        <Image
          src={Kunmi}
          alt="Akinkunmi Adeyinka"
          loading="eager"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </GlassCard>
  );
}