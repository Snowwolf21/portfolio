"use client";

import { Send, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useDashboardStore } from "@/lib/store";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const products = useDashboardStore((state) => state.products);
  const orders = useDashboardStore((state) => state.orders);

  const insight = useMemo(() => {
    const low = products.filter((product) => product.status !== "in-stock");
    const pending = orders.filter((order) => order.status === "pending");
    return `${low.length} products need stock attention and ${pending.length} orders are waiting for action.`;
  }, [orders, products]);

  return (
    <section className="card assistant-card">
      <div className="section-heading">
        <div>
          <h2 className="section-title">Assistant</h2>
          <p>Operational prompts for the current dashboard.</p>
        </div>
        <Sparkles size={19} aria-hidden="true" />
      </div>
      <div className="assistant-answer">{insight}</div>
      <form
        className="assistant-form"
        onSubmit={(event) => {
          event.preventDefault();
          setQuestion("");
        }}
      >
        <input
          className="input"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask about reorder priorities"
          aria-label="Ask the assistant"
        />
        <button className="icon-button" type="submit" aria-label="Send question">
          <Send size={17} />
        </button>
      </form>
    </section>
  );
}
