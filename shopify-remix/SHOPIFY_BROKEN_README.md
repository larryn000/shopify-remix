# Broken Shopify App - Debug Exercise

This repository contains a small Remix + TypeScript project with an intentionally broken "Shopify app" scaffold. It's set up so you can practice debugging an async technical test.

Where to look
- `app/routes/shopify` - the broken app routes (index, login, callback, webhook-test).
- `app/routes/shopify/api/start.tsx` - OAuth start loader that uses an env var incorrectly.
- `app/utils/shopify.server.ts` - helper functions with deliberate logic bugs (HMAC uses sha1 instead of sha256).
- `app/routes/shopify/webhook.tsx` - webhook action that parses text and expects a wrong header name.

Deliberate bugs to find
- Calling `process.env.SHOPIFY_API_KEY.toUpperCase()` without ensuring the env var exists (runtime crash).
- HMAC verification uses `sha1` instead of `sha256` (verification will fail for valid requests).
- Webhook parsing expects text and `JSON.parse` without validation (throws on empty or malformed payload).
- Header name typos (e.g., `x-shopify-hmac` vs `x-shopify-hmac-sha256`).
- Unencoded redirect URIs / missing URL encoding.

Suggested debugging checklist
1. Start the Remix dev server and navigate to `/shopify`.
2. Reproduce the errors by clicking the links and observing network responses.
3. Fix the easy runtime errors first (guard env vars, add try/catch around JSON.parse).
4. Fix the cryptographic mismatch: update `verifyHmac` to use `sha256` and validate the message construction.
5. Add tests or logging to verify fixes.

Notes
- This project intentionally contains bugs — treat them as a debugging exercise, not examples of good code.
- No real Shopify credentials are included. Use environment variables to simulate behavior.
