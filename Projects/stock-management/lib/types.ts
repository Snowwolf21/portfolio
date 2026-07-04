export type Category =
  | "Electronics"
  | "Apparel"
  | "Food & Beverage"
  | "Home & Garden"
  | "Sports"
  | "Health & Beauty"
  | "Automotive"
  | "Books";

export type StockStatus = "in-stock" | "low-stock" | "out-of-stock";
export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: Category;
  price: number;
  stock: number;
  lowStockThreshold: number;
  status: StockStatus;
  supplier: string;
  lastUpdated: string;
  image?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  email: string;
  products: { productId: string; name: string; qty: number; price: number }[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

export interface KPIData {
  totalProducts: number;
  totalValue: number;
  lowStockAlerts: number;
  ordersToday: number;
  revenueThisMonth: number;
  revenueChange: number;
  stockChange: number;
}

export interface ChartDataPoint {
  month: string;
  revenue: number;
  orders: number;
  stock: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
