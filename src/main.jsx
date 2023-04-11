import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Homepage from "./pages/Homepage/Homepage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import BlogPage from "./pages/BlogPage/BlogPage";

import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";
import AppliedJobPage from "./pages/AppliedJobPage/AppliedJobPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/home",
                element: <Homepage />,
            },
            {
                path: "/job-details/:id",
                element: <JobDetailsPage />,
                loader: () => fetch(`/job.json`)
            },
            {
                path: "/statistics",
                element: <StatisticsPage />,
            },
            {
                path: "/applied-job",
                element: <AppliedJobPage />
            },
            {
                path: "/blog",
                element: <BlogPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <RouterProvider router={router} />
    </>
);
