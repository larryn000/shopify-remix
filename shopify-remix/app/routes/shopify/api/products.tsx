import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export const loader = async ({ request }: any) => {
//   const token = request.headers.get("Authorization") || null;
//   if (!token) {
//     return new Response(JSON.stringify({ ok: false, error: "missing session token header" }), {
//       status: 401,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

  const products = [
    { id: 1, title: "Broken T-Shirt", price: 1999 },
    { id: 2, title: "Demo Mug", price: 999 },
  ];

  return { ok: true, products };
//   return new Response(JSON.stringify({ ok: true, products }), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
};

export default function ProductsPage() {
    const data = useLoaderData() as 
        { ok: boolean; products?: { id: number; title: string; price: number }[] };
    const products = data.products || [];

    return (
        <div style={{ padding: 20 }}>
            <h2>Products (demo)</h2>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        {p.title} - ${(p.price / 100).toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
