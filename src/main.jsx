import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Layout/Home';
import Statistics from './component/Statistics/Statistics';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Blog from './component/Blog/Blog';
import Banner from './component/Banner/Banner'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Banner></Banner>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path:'blog',
        element: <Blog></Blog>,
      },
     
      
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
