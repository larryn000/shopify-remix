import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), // /
    route("shopify", "routes/shopify/index.tsx"),
    route("shopify/login", "routes/shopify/login.tsx"),
    route("shopify/webhook-test", "routes/shopify/webhook-test.tsx"),
    route("shopify/callback", "routes/shopify/callback.tsx"),
    route("shopify/dashboard", "routes/shopify/dashboard.tsx"),
    route("shopify/api/token", "routes/shopify/api/token.tsx"),
    route("shopify/api/products", "routes/shopify/api/products.tsx")
] satisfies RouteConfig;
