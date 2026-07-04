"use client";

import { useDashboardStore, currency } from "@/lib/store";
import type { OrderStatus } from "@/lib/types";

const statuses: OrderStatus[] = ["pending", "processing", "shipped", "delivered", "cancelled"];

export default function OrdersPage() {
  const orders = useDashboardStore((state) => state.orders);
  const updateOrderStatus = useDashboardStore((state) => state.updateOrderStatus);

  return (
    <div className="page-stack">
      <div className="page-title-row">
        <div>
          <h1>Orders</h1>
          <p>Move orders through fulfillment and monitor customer value.</p>
        </div>
      </div>

      <section className="card table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <strong>{order.orderNumber}</strong>
                    <span>{order.createdAt}</span>
                  </td>
                  <td>
                    <strong>{order.customer}</strong>
                    <span>{order.email}</span>
                  </td>
                  <td>{order.products.reduce((sum, product) => sum + product.qty, 0)}</td>
                  <td>{currency.format(order.total)}</td>
                  <td>
                    <select
                      className={`input status-select ${order.status}`}
                      value={order.status}
                      onChange={(event) => updateOrderStatus(order.id, event.target.value as OrderStatus)}
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{order.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
