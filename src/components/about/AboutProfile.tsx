"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Kunmi from "../../assets/images/Kunmi.jpeg";
import GlassCard from "../ui/GlassCard";
import { User, Mail, MapPin, Briefcase } from "lucide-react";
import { contact } from "@/data/contact";

export default function AboutProfile() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Set initial dark state
    setIsDark(document.documentElement.classList.contains("dark"));

    // Observe class updates on documentElement (HTML tag)
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ["class"] 
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return <div className="h-[380px] w-full bg-zinc-200/10 rounded-3xl animate-pulse" />;
  }

  // Dark Mode: Render the personal information table card
  if (isDark) {
    const details = [
      { icon: <User className="w-5 h-5 text-accent" />, label: "Name", value: "Akinkunmi Adeyinka" },
      { icon: <Mail className="w-5 h-5 text-accent" />, label: "Email", value: contact.email },
      { icon: <MapPin className="w-5 h-5 text-accent" />, label: "Location", value: contact.location },
      { 
        icon: <Briefcase className="w-5 h-5 text-accent" />, 
        label: "Availability", 
        value: (
          <div className="flex items-center gap-2 mt-0.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-bold text-sm">Available for work</span>
          </div>
        )
      },
    ];

    return (
      <GlassCard className="p-8 border border-white/10 dark:bg-zinc-950/60 shadow-xl space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-white/10 pb-4">
          Personal Information
        </h4>
        <div className="space-y-6">
          {details.map((detail) => (
            <div key={detail.label} className="flex items-center gap-4 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                {detail.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {detail.label}
                </p>
                {typeof detail.value === "string" ? (
                  <p className="text-sm font-semibold text-foreground truncate">
                    {detail.value}
                  </p>
                ) : (
                  detail.value
                )}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    );
  }

  // Light Mode: Render the profile picture card
  return (
    <GlassCard className="relative overflow-hidden p-6 border border-zinc-200/50 bg-white/40 shadow-xl dark:border-white/10">
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