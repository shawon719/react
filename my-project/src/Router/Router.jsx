import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/",
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default Router;
