import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Welcome</h1>
      <p>This workspace contains a small Shopify debugging exercise built on React Router v7.</p>

      <h3>Quick links</h3>
      <ul>
        <li>
          <a href="/shopify">Open Shopify debug index</a>
        </li>
        <li>
          <a href="/shopify/dashboard">Merchant dashboard (client)</a>
        </li>
        <li>
          <a href="/shopify/api/products">Products API (mock)</a>
        </li>
        <li>
          <a href="/shopify/webhook-test">Webhook test</a>
        </li>
      </ul>
    </div>
  );
}
