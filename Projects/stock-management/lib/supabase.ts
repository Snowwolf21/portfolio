import { createClient } from "@supabase/supabase-js";
import type { Order, Product } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

type ProductRow = {
  id: string;
  name: string;
  sku: string;
  category: Product["category"];
  price: number;
  stock: number;
  low_stock_threshold: number;
  status: Product["status"];
  supplier: string;
  last_updated: string;
  image?: string | null;
};

type OrderRow = {
  id: string;
  order_number: string;
  customer: string;
  email: string;
  products: Order["products"];
  total: number;
  status: Order["status"];
  created_at: string;
  updated_at: string;
};

const toProduct = (row: ProductRow): Product => ({
  id: row.id,
  name: row.name,
  sku: row.sku,
  category: row.category,
  price: row.price,
  stock: row.stock,
  lowStockThreshold: row.low_stock_threshold,
  status: row.status,
  supplier: row.supplier,
  lastUpdated: row.last_updated,
  image: row.image ?? undefined,
});

const toOrder = (row: OrderRow): Order => ({
  id: row.id,
  orderNumber: row.order_number,
  customer: row.customer,
  email: row.email,
  products: row.products,
  total: row.total,
  status: row.status,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

export async function fetchProductsFromSupabase() {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("last_updated", { ascending: false });

  if (error) throw error;
  return (data as ProductRow[]).map(toProduct);
}

export async function fetchOrdersFromSupabase() {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data as OrderRow[]).map(toOrder);
}
