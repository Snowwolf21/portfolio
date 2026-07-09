import React from "react";
import { contact } from "@/data/contact";
import { Mail, Phone, MapPin } from "lucide-react";
import GlassCard from "../ui/GlassCard";

export default function ContactInfo() {
  const infoItems = [
    {
      icon: <Mail className="w-6 h-6 text-indigo-400" />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <Phone className="w-6 h-6 text-indigo-400" />,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: <MapPin className="w-6 h-6 text-indigo-400" />,
      label: "Location",
      value: contact.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(contact.location)}`,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400">
          Contact Info
        </h4>
        <h3 className="text-3xl font-black text-foreground">
          Let&apos;s Connect
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-sm">
          Have a project in mind or want to collaborate? Fill out the form, or reach out directly.
        </p>
      </div>

      <div className="space-y-4">
        {infoItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.label === "Location" ? "_blank" : undefined}
            rel={item.label === "Location" ? "noopener noreferrer" : undefined}
            className="block group"
          >
            <GlassCard className="flex items-center gap-5 p-5 border border-white/5 bg-white/5 dark:bg-zinc-900/50 hover:border-accent/40 hover:bg-white/10 dark:hover:bg-zinc-900/80 transition-all duration-300 rounded-2xl shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-glow/20 border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-accent-hover transition-colors">
                  {item.value}
                </p>
              </div>
            </GlassCard>
          </a>
        ))}
      </div>
    </div>
  );
}
