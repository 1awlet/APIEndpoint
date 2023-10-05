import { RouteObject, createBrowserRouter } from "react-router-dom";
import Navbar from "./Routes/Nav-Bar/navbar";
import DashBoard from "./Components/DashBoard/dashBoard";
import Test from "./Components/test";
export const routes:RouteObject[]=[
    {
        path:"/",
        element:<Navbar />,
        children:[
            {path:"", element:<Test />},
            {path:"act", element:<DashBoard />}
        ]
    }
]


export const router = createBrowserRouter(routes)