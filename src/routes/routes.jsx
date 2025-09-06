import { Navigate } from "react-router-dom";
import { Home } from "../components/Home";
import { Shop } from "../components/Shop";
import { Cart } from "../components/Cart";
import App from "../App";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Navigate to="home" replace />,
            },
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "shop",
                element: <Shop />,
            },   
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
]

export default routes;