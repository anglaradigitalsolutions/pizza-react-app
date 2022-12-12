import Dashboard from "./dashboard";

const routes = [
    {
        type: "route",
        name: "Dashboard",
        key: "dashboard",
        route: "/dashboard",
        icon: "",
        component: <Dashboard />,
    },
    {
        type: "route",
        name: "All Products",
        key: "products",
        route: "/products",
        icon: "",
        component: <Dashboard></Dashboard>,
    },
    {
        type: "route",
        name: "Cart",
        key: "cart",
        route: "/cart",
        icon: "",
        component: <Dashboard></Dashboard>,
    },
];

export default routes;
