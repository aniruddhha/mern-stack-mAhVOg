import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Mobile } from './Mobile.jsx';
import { Car } from './Car.jsx';
import { HybridCar } from './HybridCar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/car',
    element: <Car/>,
    children : [
      {
        path:'automatic',
        element: <h1>Automatic Car</h1>
      },
      {
        path:'manual',
        element: <h1>Manual Car</h1>
      },
      {
        path:'hybrid/:carId',
        element: <HybridCar/>
      },
    ]
  },
  {
    path:'/mobile',
    element: <Mobile/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
