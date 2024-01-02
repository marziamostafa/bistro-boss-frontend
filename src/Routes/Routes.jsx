import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/signUp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />

            },
            {
                path: "/menu",
                element: <Menu />

            },
            {
                path: "order/soup",
                element: <Order />

            },
            {
                path: "/order/:category",
                element: <Order />

            },
            {
                path: "/login",
                element: <Login />

            },
            {
                path: "/signup",
                element: <SignUp />

            }
        ]
    },
]);
