"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { chartData } from "@/lib/data";
import { useState } from "react";

const TABS = ["Revenue", "Orders", "Stock"] as const;
type Tab = (typeof TABS)[number];

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number; name: string; color: string }[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "rgba(8,16,35,0.95)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
        padding: "0.75rem 1rem",
        backdropFilter: "blur(20px)",
      }}
      role="tooltip"
    >
      <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginBottom: "0.4rem" }}>{label}</p>
      {payload.map((entry) => (
        <p key={entry.name} style={{ color: entry.color, fontWeight: 600, fontSize: "0.9rem" }}>
          {entry.name === "Revenue" ? `$${entry.value.toLocaleString()}` : entry.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

export default function StockChart() {
  const [activeTab, setActiveTab] = useState<Tab>("Revenue");

  const dataKey = activeTab.toLowerCase() as "revenue" | "orders" | "stock";
  const color =
    activeTab === "Revenue"
      ? "#6c63ff"
      : activeTab === "Orders"
      ? "#00d4aa"
      : "#f59e0b";
  const gradId = `grad-${activeTab}`;

  return (
    <motion.section
      className="card chart-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${activeTab} trend chart`}
    >
      <div className="chart-header">
        <div>
          <h2 className="section-title">Performance Overview</h2>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
            Last 6 months
          </p>
        </div>
        <div role="tablist" aria-label="Chart metric selector" style={{ display: "flex", gap: "0.375rem" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`btn ${activeTab === tab ? "btn-primary" : "btn-ghost"}`}
              style={{ padding: "0.375rem 0.875rem", fontSize: "0.8125rem" }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div role="tabpanel" aria-label={`${activeTab} chart`} style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.35} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
            <XAxis
              dataKey="month"
              tick={{ fill: "var(--text-muted)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--text-muted)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) =>
                activeTab === "Revenue" ? `$${(v / 1000).toFixed(0)}k` : v
              }
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey={dataKey}
              name={activeTab}
              stroke={color}
              strokeWidth={2.5}
              fill={`url(#${gradId})`}
              dot={{ fill: color, r: 4, strokeWidth: 2, stroke: "var(--bg-base)" }}
              activeDot={{ r: 6, fill: color }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}

export function CategoryBarChart() {
  const categoryData = [
    { category: "Electronics", value: 18400, fill: "#6c63ff" },
    { category: "Apparel", value: 9200, fill: "#00d4aa" },
    { category: "Sports", value: 7800, fill: "#f59e0b" },
    { category: "Home", value: 6100, fill: "#f43f5e" },
    { category: "Food", value: 4300, fill: "#10b981" },
    { category: "Health", value: 2950, fill: "#8b84ff" },
  ];

  return (
    <motion.section
      className="card chart-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      aria-label="Revenue by category"
    >
      <div className="chart-header">
        <div>
          <h2 className="section-title">Revenue by Category</h2>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
            This month
          </p>
        </div>
      </div>
      <div style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={categoryData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis
              dataKey="category"
              tick={{ fill: "var(--text-muted)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--text-muted)", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" name="Revenue" radius={[6, 6, 0, 0]}>
              {categoryData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}
