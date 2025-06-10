import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./components/layout/index.jsx";
import Hotels from './pages/hotels/index.jsx'
import Hotel from "./pages/hotel/index.jsx";
import Home from "./pages/home/index.jsx";

//loader

//Page

//Components


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/hotels",
                element:<Hotels/>,
            },
            {
                path: "/hotel/:id",
                element: <Hotel/>,
            },
            {
                path: "/about",
                element: <p>About</p>,
            },

            {
                path: "/*",
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
