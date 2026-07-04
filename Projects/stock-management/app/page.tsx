"use client";

import { computeKpis, useDashboardStore } from "@/lib/store";
import Image from "next/image";
import "./globals.css";
export default function DashboardPage() {
  const products = useDashboardStore((state) => state.products);
  const orders = useDashboardStore((state) => state.orders);
  const backendMode = useDashboardStore((state) => state.backendMode);
  const error = useDashboardStore((state) => state.error);
  const kpis = computeKpis(products, orders);
  const lowStock = products.filter((product) => product.status !== "in-stock").slice(0, 4);

  return (
    <div className="page-stack">
      <header>
        <h1>StockFlow</h1>
        <p>Track inventory, orders, and stock decisions from one dashboard.</p>
        <div className="" >
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-secondary">Register</button>
        </div>
      </header>
      <main>
        <div>
          <h2 className="text-4xl font-bold mb-4">Smart Inventory Management</h2>
          <p className="text-lg text-gray-600 mb-8">Optimize your stock levels and improve efficiency with AI-powered insights.</p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div>
          <Image src="/dashboard.png" alt="Dashboard" width={500} height={500} />
        </div>
      </main>

    </div>
  );
}
