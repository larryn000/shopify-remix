import { redirect } from "react-router";

export const loader = async ({ request }: any) => {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop") || "example.myshopify.com";

  // Ensure SHOPIFY_API_KEY is present; throw a clear error if it's missing.
  const rawApiKey = process.env.SHOPIFY_API_KEY;
  if (!rawApiKey) {
    throw new Error("Missing required environment variable: SHOPIFY_API_KEY");
  }
  const apiKey = rawApiKey.toUpperCase();

  // Intentionally construct a slightly-broken redirect URL
  const oauthUrl = `https://${shop}/admin/oauth/authorize?client_id=${apiKey}&scope=read_products`;
  return redirect(oauthUrl);
};

export default function Empty() {
  return <div />;
}
