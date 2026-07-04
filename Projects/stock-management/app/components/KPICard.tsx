"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type KPICardProps = {
  title: string;
  value: string;
  helper: string;
  icon: LucideIcon;
  tone?: "blue" | "green" | "amber" | "rose";
};

export default function KPICard({ title, value, helper, icon: Icon, tone = "blue" }: KPICardProps) {
  return (
    <motion.article
      className={`card kpi-card tone-${tone}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="kpi-icon" aria-hidden="true">
        <Icon size={19} />
      </div>
      <p className="muted-label">{title}</p>
      <strong>{value}</strong>
      <span>{helper}</span>
    </motion.article>
  );
}
