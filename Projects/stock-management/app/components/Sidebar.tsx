"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  TrendingUp,
  Bell,
  HelpCircle,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/inventory", icon: Package, label: "Inventory" },
  { href: "/orders", icon: ShoppingCart, label: "Orders" },
  { href: "/analytics", icon: BarChart3, label: "Analytics" },
];

const secondaryItems = [
  { href: "/settings", icon: Settings, label: "Settings" },
  { href: "#", icon: HelpCircle, label: "Help & Support" },
];

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <nav className={`sidebar${collapsed ? " collapsed" : ""}`} aria-label="Main navigation">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon" aria-hidden="true">
          <TrendingUp size={20} color="#fff" strokeWidth={2.5} />
        </div>
        <div className="sidebar-copy">
          <div className="sidebar-logo-text">StockFlow</div>
          <div className="sidebar-logo-sub">Management Suite</div>
        </div>
        <button
          className="sidebar-toggle"
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
        </button>
      </div>

      <ul className="sidebar-nav" role="list">
        <li aria-label="Main menu section">
          <span className="nav-section-label" aria-hidden="true">Main Menu</span>
        </li>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-link${isActive ? " active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="nav-link-bg"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "var(--radius-md)",
                      background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(108,99,255,0.05))",
                      border: "1px solid rgba(108,99,255,0.2)",
                      zIndex: -1,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <item.icon size={18} aria-hidden="true" />
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          );
        })}

        <li aria-label="Account menu section">
          <span className="nav-section-label" aria-hidden="true">Account</span>
        </li>
        {secondaryItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-link${isActive ? " active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <item.icon size={18} aria-hidden="true" />
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      <div className="sidebar-footer">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.75rem",
            borderRadius: "var(--radius-md)",
            background: "var(--bg-glass)",
            border: "1px solid var(--border)",
          }}
        >
          <div
            className="avatar"
            style={{ width: 34, height: 34, fontSize: "0.75rem" }}
            aria-label="User avatar"
          >
            JD
          </div>
          <div className="sidebar-copy" style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              John Doe
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Admin</div>
          </div>
          <Bell size={15} color="var(--text-muted)" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}
