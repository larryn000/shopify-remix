import { Outlet } from "react-router";

export default function ShopifyLayout() {
    return (
        <div >
            <h1>Shopify</h1>
            <Outlet />
        </div>
    )
}