"use client";

import { CategoryBarChart } from "../components/StockChart";
import KPICard from "../components/KPICard";
import { computeKpis, currency, useDashboardStore } from "@/lib/store";
import { ChartNoAxesCombined, DollarSign, PackageMinus, Receipt } from "lucide-react";

export default function AnalyticsPage() {
  const products = useDashboardStore((state) => state.products);
  const orders = useDashboardStore((state) => state.orders);
  const kpis = computeKpis(products, orders);
  const completedOrders = orders.filter((order) => order.status === "delivered").length;

  return (
    <div className="page-stack">
      <div className="page-title-row">
        <div>
          <h1>Analytics</h1>
          <p>Revenue, stock health, and fulfillment signals for decision making.</p>
        </div>
      </div>

      <section className="kpi-grid">
        <KPICard title="Monthly Revenue" value={currency.format(kpis.revenueThisMonth)} helper={`${kpis.revenueChange}% vs last month`} icon={DollarSign} tone="green" />
        <KPICard title="Delivered Orders" value={completedOrders.toString()} helper="completed customer orders" icon={Receipt} />
        <KPICard title="Stock Movement" value={`${kpis.stockChange}%`} helper="inventory change rate" icon={ChartNoAxesCombined} tone="amber" />
        <KPICard title="Stock Alerts" value={kpis.lowStockAlerts.toString()} helper="low or out of stock" icon={PackageMinus} tone="rose" />
      </section>

      <section className="dashboard-grid">
        <CategoryBarChart />
        <section className="card">
          <div className="section-heading">
            <div>
              <h2 className="section-title">Category Notes</h2>
              <p>Fastest moving catalog areas this month.</p>
            </div>
          </div>
          <div className="insight-list">
            <p>Electronics leads revenue and has the highest reorder exposure.</p>
            <p>Sports products are healthy, with medium stock depth and steady sales.</p>
            <p>Home & Garden has strong volume but two items need supplier follow-up.</p>
          </div>
        </section>
      </section>
    </div>
  );
}
