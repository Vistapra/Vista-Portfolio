import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Service from "../pages/service";
import SingleProject from "../pages/single-project";
import SingleProject2 from "../pages/single-project2";
import SingleProject3 from "../pages/single-project3";
import SingleProject4 from "../pages/single-project4";
import SingleProject5 from "../pages/single-project5";
import SingleProject6 from "../pages/single-project6";
import Works from "../pages/works";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/single-project",
                element: <SingleProject />
            },
            {
                path: "/single-project2",
                element: <SingleProject2 />
            },
            {
                path: "/single-project3",
                element: <SingleProject3 />
            },
            {
                path: "/single-project4",
                element: <SingleProject4 />
            },
            {
                path: "/single-project5",
                element: <SingleProject5 />
            },
            {
                path: "/single-project6",
                element: <SingleProject6 />
            },
            {
                path: "/works",
                element: <Works />
            },
        ]
    }
])