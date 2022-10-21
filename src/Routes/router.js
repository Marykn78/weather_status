import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home/Homepage';
import Forecastpage from '../pages/Forecastpage/Forecastcity';

export const router =createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path:"forecast",
        element:<Forecastpage/>
    }
])