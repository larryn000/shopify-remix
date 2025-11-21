export default function LoginInfo() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Shopify Login (Info)</h2>
      <p>This route describes how to trigger the broken OAuth start flow.</p>
      <p>
        Click the <a href="/shopify/api/start?shop=example.myshopify.com">Start
        OAuth</a> link to be redirected (the redirect is intentionally flawed
        to create a bug).
      </p>
    </div>
  );
}
