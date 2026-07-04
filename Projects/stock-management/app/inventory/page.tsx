"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import { useDashboardStore } from "@/lib/store";
import type { Category, Product } from "@/lib/types";

const categories: Category[] = [
  "Electronics",
  "Apparel",
  "Food & Beverage",
  "Home & Garden",
  "Sports",
  "Health & Beauty",
  "Automotive",
  "Books",
];

export default function InventoryPage() {
  
  const products = useDashboardStore((state) => state.products);
  const addProduct = useDashboardStore((state) => state.addProduct);
  const updateProductStock = useDashboardStore((state) => state.updateProductStock);
  const [open, setOpen] = useState(false);

  function handleSubmit(formData: FormData) {
    const product: Product = {
      id: `p-${Date.now()}`,
      name: String(formData.get("name")),
      sku: String(formData.get("sku")),
      category: String(formData.get("category")) as Category,
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      lowStockThreshold: Number(formData.get("threshold")),
      status: "in-stock",
      supplier: String(formData.get("supplier")),
      lastUpdated: new Date().toISOString().slice(0, 10),
    };
    addProduct(product);
    setOpen(false);
  }

  return (
    <div className="page-stack">
      <div className="page-title-row">
        <div>
          <h1>Inventory</h1>
          <p>Update counts, add products, and keep stock status current.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}>
          <Plus size={17} aria-hidden="true" />
          Add Product
        </button>
      </div>

      <DataTable products={products} onStockChange={updateProductStock} />

      <Modal open={open} title="Add Product" onClose={() => setOpen(false)}>
        <form action={handleSubmit} className="form-grid">
          <label>
            Product name
            <input className="input" name="name" required />
          </label>
          <label>
            SKU
            <input className="input" name="sku" required />
          </label>
          <label>
            Category
            <select className="input" name="category" required>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
          <label>
            Supplier
            <input className="input" name="supplier" required />
          </label>
          <label>
            Price
            <input className="input" name="price" min="0" step="0.01" type="number" required />
          </label>
          <label>
            Stock
            <input className="input" name="stock" min="0" type="number" required />
          </label>
          <label>
            Low stock threshold
            <input className="input" name="threshold" min="0" type="number" required />
          </label>
          <button className="btn btn-primary form-submit" type="submit">Create Product</button>
        </form>
      </Modal>
    </div>
  );
}
