import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import CarouselPage from '../Pages/Carousal/Carousal';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/',
                element:<CarouselPage></CarouselPage>
            }

        ]
    }
])
export default Router;