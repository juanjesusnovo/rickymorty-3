import Home from "../pages/Home"
import Characters from "../pages/Characters"
import { createBrowserRouter } from "react-router-dom"
import LayoutPublic from "../layouts/LayoutPublic"
import NotFound from "../pages/NotFound"
import Seasons from "../pages/Seasons"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Register from "../pages/Register"
import MyFavs from "../pages/MyFavs"

export const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <LayoutPublic />,
            errorElement: <NotFound />,
            children: [
                {
                    path:"/",
                    element:<Home />
                },
                {
                    path:"/characters",
                    element:<Characters />
                },
                {
                    path:"/seasons",
                    element:<Seasons />
                },
                {
                    path:"/contact",
                    element:<Contact />
                },
                {
                    path:"/login",
                    element:<Login />
                },
                {
                    path:"/register",
                    element:<Register />
                },
                {
                    path:"/myFavs",
                    element: <MyFavs />
                }
            ]
        }
    ]
)