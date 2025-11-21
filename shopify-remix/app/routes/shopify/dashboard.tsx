import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Insecure demo token sent as query param (deliberate bug)
  const demoToken = "demo-token-from-client";

  useEffect(() => {
    fetch(`/shopify/api/products?token=${encodeURIComponent(demoToken)}`)
      .then((r) => r.json())
      .then((j) => {
        if (!j.ok) {
          setError(j.error || "unknown");
          setProducts([]);
        } else {
          setProducts(j.products || []);
        }
      })
      .catch((err) => setError(String(err)));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Merchant dashboard (demo)</h2>
      {error ? <div style={{ color: "red" }}>Error: {error}</div> : null}
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} — ${(p.price / 100).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
