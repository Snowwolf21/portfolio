"use client";

import { create } from "zustand";
import { chartData, orders as seedOrders, products as seedProducts } from "./data";
import { fetchOrdersFromSupabase, fetchProductsFromSupabase, isSupabaseConfigured } from "./supabase";
import type { ChartDataPoint, Order, Product } from "./types";

type DashboardState = {
  products: Product[];
  orders: Order[];
  chartData: ChartDataPoint[];
  loading: boolean;
  error: string | null;
  backendMode: "supabase" | "local";
  hydrate: () => Promise<void>;
  addProduct: (product: Product) => void;
  updateProductStock: (id: string, stock: number) => void;
  updateOrderStatus: (id: string, status: Order["status"]) => void;
};

const productStatus = (stock: number, threshold: number): Product["status"] => {
  if (stock <= 0) return "out-of-stock";
  if (stock <= threshold) return "low-stock";
  return "in-stock";
};

export const useDashboardStore = create<DashboardState>((set, get) => ({
  products: seedProducts,
  orders: seedOrders,
  chartData,
  loading: false,
  error: null,
  backendMode: isSupabaseConfigured ? "supabase" : "local",
  hydrate: async () => {
    if (!isSupabaseConfigured) {
      set({ backendMode: "local", error: null });
      return;
    }

    set({ loading: true, error: null, backendMode: "supabase" });

    try {
      const [products, orders] = await Promise.all([
        fetchProductsFromSupabase(),
        fetchOrdersFromSupabase(),
      ]);

      set({
        products: products?.length ? products : get().products,
        orders: orders?.length ? orders : get().orders,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        backendMode: "local",
        error: error instanceof Error ? error.message : "Could not load Supabase data.",
      });
    }
  },
  addProduct: (product) =>
    set((state) => ({
      products: [
        {
          ...product,
          status: productStatus(product.stock, product.lowStockThreshold),
          lastUpdated: new Date().toISOString().slice(0, 10),
        },
        ...state.products,
      ],
    })),
  updateProductStock: (id, stock) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? {
              ...product,
              stock,
              status: productStatus(stock, product.lowStockThreshold),
              lastUpdated: new Date().toISOString().slice(0, 10),
            }
          : product,
      ),
    })),
  updateOrderStatus: (id, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === id
          ? { ...order, status, updatedAt: new Date().toISOString().slice(0, 10) }
          : order,
      ),
    })),
}));

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const computeKpis = (products: Product[], orders: Order[]) => {
  const today = "2026-06-24";
  const revenueThisMonth = orders
    .filter((order) => order.createdAt.startsWith("2026-06") && order.status !== "cancelled")
    .reduce((sum, order) => sum + order.total, 0);

  return {
    totalProducts: products.length,
    totalValue: products.reduce((sum, product) => sum + product.price * product.stock, 0),
    lowStockAlerts: products.filter((product) => product.status !== "in-stock").length,
    ordersToday: orders.filter((order) => order.createdAt === today).length,
    revenueThisMonth,
    revenueChange: 12.4,
    stockChange: -3.1,
  };
};
