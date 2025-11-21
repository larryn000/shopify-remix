import { Link } from "react-router";

export default function ShopIndex() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Broken Shopify App (Debug Exercise)</h1>
      <p>This mini-app intentionally contains bugs for debugging practice. Use the links below to exercise flows.</p>

      <h3>OAuth / Auth</h3>
      <ul>
        <li>
          <Link to="/shopify/api/start?shop=example.myshopify.com">Start OAuth (broken)</Link>
        </li>
        <li>
          <Link to="/shopify/callback?code=abc&shop=example.myshopify.com&state=123&hmac=bogus">Callback (verify hmac)</Link>
        </li>
        <li>
          <Link to="/shopify/api/token">Token exchange (mock)</Link>
        </li>
      </ul>

      <h3>Merchant UI</h3>
      <ul>
        <li>
          <Link to="/shopify/dashboard">Dashboard (client)</Link>
        </li>
        <li>
          <Link to="/shopify/login">Info / Login page</Link>
        </li>
      </ul>

      <h3>APIs & Webhooks</h3>
      <ul>
        <li>
          <Link to="/shopify/api/products">Products API (mock)</Link>
        </li>
        <li>
          <Link to="/shopify/webhook-test">Webhook test (broken)</Link>
        </li>
        <li>
          <a href="/shopify/webhook">Webhook endpoint (POST only)</a>
        </li>
      </ul>
    </div>
  );
}
