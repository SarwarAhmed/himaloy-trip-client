import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../components/register";
import Login from "../components/login";
import PrivateRoute from "./PrivateRoute";
import Profile from "../components/Profile";
import AddSpost from "../components/AddSpost";
import AllSpots from "../components/AllSpots";
import Home from "../components/Home";
import Spot from "../components/Spot";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://127.0.0.1:5000/allspots'),
            },
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
            // get a single spot by id
            {
                path : '/spot/:id',
                element : <Spot />,
                loader : ({params}) => fetch(`http://127.0.0.1:5000/spot/${params.id}`),
            },
            {
                path: '/allspots',
                element: <AllSpots />,
                loader: () => fetch('http://127.0.0.1:5000/allspots'),
            }
        ]
    },
]);

export default route;
