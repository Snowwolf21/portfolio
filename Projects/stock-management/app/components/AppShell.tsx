"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAuthStore } from "@/lib/auth-store";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/inventory": "Inventory",
  "/orders": "Orders",
  "/analytics": "Analytics",
  "/settings": "Settings",
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const user = useAuthStore((state) => state.user);
  const ready = useAuthStore((state) => state.ready);
  const hydrateAuth = useAuthStore((state) => state.hydrateAuth);
  const isPublic = pathname === "/";
  const title = useMemo(() => titles[pathname] ?? "StockFlow", [pathname]);

  useEffect(() => {
    hydrateAuth();
  }, [hydrateAuth]);

  useEffect(() => {
    if (ready && !user && !isPublic) {
      router.replace("/");
    }
  }, [isPublic, ready, router, user]);

  if (isPublic) {
    return <>{children}</>;
  }

  if (!ready || !user) {
    return <main className="auth-loading">Loading workspace...</main>;
  }

  return (
    <div className={`app-shell${collapsed ? " sidebar-collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
      <div className="main-shell">
        <Header title={title} onToggleSidebar={() => setCollapsed((value) => !value)} />
        <main className="page-wrap">{children}</main>
      </div>
    </div>
  );
}
