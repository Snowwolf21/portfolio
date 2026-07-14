import Image from "next/image";
import Kunmiss from "../../assets/images/kunmiss.jpeg";
import GlassCard from "../ui/GlassCard";


export default function AboutProfile() {
  return (
    <GlassCard className="relative overflow-hidden p-1 border border-zinc-200/50 bg-transparent shadow-xl dark:border-white/10">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/5 shadow-md">
        <Image
          src={Kunmiss}
          alt="Akinkunmi Adeyinka"
          loading="lazy"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </GlassCard>
  );
}