import type { LoaderFunction } from "react-router";
import { verifyHmac } from "~/utils/shopify.server";

export const loader: LoaderFunction = async ({ request }: any) => {
  const url = new URL(request.url);
  const query: Record<string, string> = {};
  url.searchParams.forEach((v, k) => (query[k] = v));

  const accept = request.headers.get("accept") || "";

  // Deliberate logic bug: verifyHmac uses wrong algorithm so valid requests fail
  if (!verifyHmac(query as any)) {
        const bodyJson = JSON.stringify({ error: "HMAC verification failed (intentional bug)" });

        if (accept.includes("application/json")) {
            return new Response(bodyJson, { status: 400, headers: { "Content-Type": "application/json" } });
        }
        return new Response("HMAC verification failed (intentional bug)", {
            status: 400,
            headers: { "Content-Type": "text/plain" },
        });
    // return new Response("HMAC verification failed (intentional bug)", { status: 400 });
  }

  // Pretend to exchange code for access token but deliberately return a broken response
  const code = url.searchParams.get("code") || "";
  if (!code) {
    return new Response("Missing code", { status: 400, headers: { "Content-Type": "text/plain" } });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" }});
};

export default function CallbackPage() {
  return <div style={{ padding: 16 }}><h3>Callback page (see network)</h3></div>;
}
