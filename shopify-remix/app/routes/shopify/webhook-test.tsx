import { useFetcher } from "react-router";

export default function WebhookTest() {
  const fetcher = useFetcher();
  const body = JSON.stringify({ id: 1, message: "hello" });

  return (
    <div style={{ padding: 16 }}>
      <h2>Webhook test (broken)</h2>
      <p>This will POST a JSON body to <code>/shopify/webhook</code>.</p>
      <fetcher.Form method="post" action="/shopify/webhook">
        <input type="hidden" name="payload" value={body} />
        <button type="submit">Send webhook</button>
      </fetcher.Form>
      <div style={{ marginTop: 8 }}>
        <pre>{body}</pre>
      </div>
    </div>
  );
}
