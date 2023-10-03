import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import LoginForm from "../pages/Login/LoginForm";
import RegisterForm from "../pages/Login/RegisterForm";
import LeftBar from "../shared/LeftBar/LeftBar";
import News from "../pages/Home/News";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div>page nai</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
               element:<Login></Login>,
               children: [
                {
                    path: "/login",
                    element: <LoginForm></LoginForm>
                },
                {
                    path: "/register",
                    element: <RegisterForm></RegisterForm>,
                }
               ]
            },
            {
                path: "/categories/1",
                element: <Home></Home>,
                children: [
                    {
                        path:"/categories/1",
                        element: <News></News>
                    }
                ]
            }
        ]
    }
]);

export default Routes;