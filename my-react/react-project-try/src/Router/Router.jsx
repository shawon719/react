import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../Pages/Shared/Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ],
  },
]);
export default Router;
