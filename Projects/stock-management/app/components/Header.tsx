"use client";

import { Search, Bell, Sun, Moon, Menu, LogOut } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import { useAuthStore } from "@/lib/auth-store";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

export default function Header({ title, onToggleSidebar }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <header className="header" role="banner">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}>
        <button
          className="header-icon-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
        >
          <Menu size={17} aria-hidden="true" />
        </button>
        <h1
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h1>
        <div className="header-search" style={{ marginLeft: "1rem" }}>
          <Search size={16} aria-hidden="true" />
          <input
            id="global-search"
            className="input"
            type="search"
            placeholder="Search products, orders…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search products and orders"
          />
        </div>
      </div>

      <div className="header-actions">
        <button
          className="header-icon-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
        </button>
        <button
          className="header-icon-btn"
          aria-label="View 3 notifications"
          title="Notifications"
        >
          <Bell size={17} aria-hidden="true" />
          <span className="notif-dot" aria-hidden="true" />
        </button>
        <button
          className="avatar"
          aria-label={`Open user menu for ${user?.name ?? "user"}`}
          title="User menu"
        >
          {(user?.name ?? "User").slice(0, 2).toUpperCase()}
        </button>
        <button
          className="header-icon-btn"
          aria-label="Sign out"
          title="Sign out"
          onClick={() => {
            signOut();
            router.push("/");
          }}
        >
          <LogOut size={17} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
