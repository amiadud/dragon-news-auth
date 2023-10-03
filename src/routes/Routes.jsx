import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import LoginForm from "../pages/Login/LoginForm";
import RegisterForm from "../pages/Login/RegisterForm";
import NewsDetails from "../pages/News/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div>page nai</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('news.json')
            },
            {
                path: "/news/:id",
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            },
            {
                path: "/about",
                element: <About></About>,
                children: [
                    {
                        path: "/about",
                        element: <div>Hello</div>,
                    }
                ]
            },
            {
                path: "/login",
                element:<LoginForm></LoginForm>
            },
            {
                path: "/register",
                element:<RegisterForm></RegisterForm>
            },
            {
                path: "/categories/:id",
                element: <div>hello</div>
            }
        ]
    }
]);

export default Routes;