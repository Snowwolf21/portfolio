"use client";

import { AlertTriangle, Boxes, DollarSign, ShoppingCart } from "lucide-react";
import AIChat from "../components/AIChat";
import DataTable from "../components/DataTable";
import KPICard from "../components/KPICard";
import StockChart from "../components/StockChart";
import { computeKpis, currency, useDashboardStore } from "@/lib/store";

export default function DashboardPage() {
  const products = useDashboardStore((state) => state.products);
  const orders = useDashboardStore((state) => state.orders);
  const backendMode = useDashboardStore((state) => state.backendMode);
  const error = useDashboardStore((state) => state.error);
  const kpis = computeKpis(products, orders);
  const lowStock = products.filter((product) => product.status !== "in-stock").slice(0, 4);

  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <span className="eyebrow">{backendMode === "supabase" ? "Supabase connected" : "Local workspace"}</span>
          <h1>Manage inventory, orders, and stock decisions from one dashboard.</h1>
          <p>
            Track product availability, monitor pending orders, and spot reorder risks before
            they interrupt sales.
          </p>
        </div>
        <div className="hero-metrics" aria-label="Dashboard summary">
          <strong>{products.reduce((sum, product) => sum + product.stock, 0).toLocaleString()}</strong>
          <span>units in stock</span>
        </div>
      </section>

      {error ? <div className="notice">Supabase unavailable: {error}. Showing local data.</div> : null}

      <section className="kpi-grid" aria-label="Key performance indicators">
        <KPICard title="Products" value={kpis.totalProducts.toString()} helper="active catalog items" icon={Boxes} />
        <KPICard title="Stock Value" value={currency.format(kpis.totalValue)} helper="inventory on hand" icon={DollarSign} tone="green" />
        <KPICard title="Low Stock" value={kpis.lowStockAlerts.toString()} helper="items need attention" icon={AlertTriangle} tone="amber" />
        <KPICard title="Orders Today" value={kpis.ordersToday.toString()} helper="new order activity" icon={ShoppingCart} tone="rose" />
      </section>

      <section className="dashboard-grid">
        <StockChart />
        <AIChat />
      </section>

      <section className="dashboard-grid">
        <DataTable products={products.slice(0, 6)} />
        <section className="card">
          <div className="section-heading">
            <div>
              <h2 className="section-title">Reorder Watch</h2>
              <p>Products below their configured threshold.</p>
            </div>
          </div>
          <div className="watch-list">
            {lowStock.map((product) => (
              <div className="watch-item" key={product.id}>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.supplier}</span>
                </div>
                <span className={`status-pill ${product.status}`}>{product.stock} left</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
