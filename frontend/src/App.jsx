import {createBrowserRouter, RouterProvider} from "react-router";
import ROUTES from "./config/routes.js";

//Loader
import {hotelsLoader} from "./loaders/hotelsLoader.js";
//Page
import Home from "@pages/home";
import Hotels from '@pages/hotels'
import Hotel from "@pages/hotel";
import About from "@pages/about";
//Component
import Layout from "@components/layout";

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: ROUTES.HOTELS,
                element:<Hotels/>,
                loader:hotelsLoader
            },
            {
                path: ROUTES.HOTEL + "/:id",
                element: <Hotel/>,
            },
            {
                path: ROUTES.ABOUT,
                element: <About/>,
            },
            {
                path: ROUTES.NOT_FOUND,
                element: <div> 404 </div>,
            },
        ]
    },
]);


function App() {
    return (
         <RouterProvider router={router}/>
    )
}

export default App
