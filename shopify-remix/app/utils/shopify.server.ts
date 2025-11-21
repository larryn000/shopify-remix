import crypto from "crypto";

export function buildOAuthUrl(shop: string) {
  const key = process.env.SHOPIFY_API_KEY;
  // Deliberate bug: not encoding parts of the URL which can cause malformed URLs
  return `https://${shop}/admin/oauth/authorize?client_id=${key}&scope=read_products&redirect_uri=/shopify/callback`;
}

export function verifyHmac(query: Record<string, string>, secret?: string) {
  // Deliberate bug: using sha1 instead of sha256 which Shopify expects
  const message = Object.keys(query)
    .filter((k) => k !== "hmac")
    .map((k) => `${k}=${query[k]}`)
    .join("&");
  const computed = crypto
    .createHmac("sha256", secret || process.env.SHOPIFY_API_SECRET || "")
    .update(message)
    .digest("hex");

    console.log("computed", computed, "message", message)
  return computed === (query.hmac || "");
}
