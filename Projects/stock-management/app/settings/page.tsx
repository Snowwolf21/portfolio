"use client";

import { Database, ShieldCheck } from "lucide-react";
import { useDashboardStore } from "@/lib/store";

export default function SettingsPage() {
  const backendMode = useDashboardStore((state) => state.backendMode);

  return (
    <div className="page-stack">
      <div className="page-title-row">
        <div>
          <h1>Settings</h1>
          <p>Configure workspace and backend connection details.</p>
        </div>
      </div>

      <section className="settings-grid">
        <article className="card">
          <div className="section-heading">
            <div>
              <h2 className="section-title">Supabase Backend</h2>
              <p>Set these values in `.env.local` to load live data.</p>
            </div>
            <Database size={20} aria-hidden="true" />
          </div>
          <div className="env-list">
            <code>NEXT_PUBLIC_SUPABASE_URL</code>
            <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
          </div>
          <div className="notice">Current mode: {backendMode}</div>
        </article>

        <article className="card">
          <div className="section-heading">
            <div>
              <h2 className="section-title">Data Tables</h2>
              <p>The app expects `products` and `orders` tables.</p>
            </div>
            <ShieldCheck size={20} aria-hidden="true" />
          </div>
          <pre className="schema-box">{`products: id, name, sku, category, price, stock,
low_stock_threshold, status, supplier, last_updated

orders: id, order_number, customer, email, products,
total, status, created_at, updated_at`}</pre>
        </article>
      </section>
    </div>
  );
}
