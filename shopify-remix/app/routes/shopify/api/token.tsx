import type { ActionFunction } from "react-router";

export const action: ActionFunction = async ({ request }: any) => {
  const body = await request.json().catch(() => ({}));
  const { code, shop } = body || {};

  if (!code || !shop) {
    return new Response(JSON.stringify({ ok: false, error: "missing code or shop" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Deliberate bug: insecure token generation (Math.random) and returning token in JSON
  const token = Math.random().toString(36).slice(2) + Date.now().toString(36);

  return new Response(JSON.stringify({ ok: true, token, shop }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export default function Empty() {
  return <div />;
}
