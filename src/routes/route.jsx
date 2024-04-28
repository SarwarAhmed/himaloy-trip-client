import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../components/register";
import Login from "../components/login";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile";
import AddSpost from "../components/AddSpost";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: '/addspot',
                element: <PrivateRoute><AddSpost /></PrivateRoute>,
            },
            {
                path: '/allspots',
                element: <h3>All sports</h3>
            }
        ]
    },
]);

export default route;
