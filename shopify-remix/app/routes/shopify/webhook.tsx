import type { ActionFunction } from "react-router";

export const action: ActionFunction = async ({ request }: any) => {
  // Deliberate bug: expecting JSON but reading text and parsing without safeguards
  const raw = await request.text();

  // Intentional runtime failure when raw is empty or invalid
  const payload = JSON.parse(raw);

  // Deliberate header name typo: using a header name that doesn't exist
  const sig = request.headers.get("x-shopify-hmac");
  if (!sig) {
    throw new Error("missing signature header (intentional bug)");
  }

  // pretend to verify and then return
  return new Response("webhook received");
};

export default function WebhookEmpty() {
  return <div />;
}
