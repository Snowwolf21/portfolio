"use client";

import { PackageCheck } from "lucide-react";
import type { Product } from "@/lib/types";
import { currency } from "@/lib/store";

type DataTableProps = {
  products: Product[];
  onStockChange?: (id: string, stock: number) => void;
};

export default function DataTable({ products, onStockChange }: DataTableProps) {
  return (
    <section className="card table-card">
      <div className="section-heading">
        <div>
          <h2 className="section-title">Inventory</h2>
          <p>Live product counts, valuation, and reorder signals.</p>
        </div>
        <PackageCheck size={20} aria-hidden="true" />
      </div>

      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Status</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <strong>{product.name}</strong>
                  <span>Updated {product.lastUpdated}</span>
                </td>
                <td>{product.sku}</td>
                <td>{product.category}</td>
                <td>
                  {onStockChange ? (
                    <input
                      className="stock-input"
                      type="number"
                      min={0}
                      value={product.stock}
                      onChange={(event) => onStockChange(product.id, Number(event.target.value))}
                      aria-label={`Update stock for ${product.name}`}
                    />
                  ) : (
                    product.stock
                  )}
                </td>
                <td>{currency.format(product.price)}</td>
                <td>
                  <span className={`status-pill ${product.status}`}>{product.status.replaceAll("-", " ")}</span>
                </td>
                <td>{product.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
