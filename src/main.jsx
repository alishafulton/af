import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Portfolio } from "./pages/Portfolio.tsx"
import { About } from "./pages/About.tsx"

const router = createBrowserRouter([
  {
    path: "/af/",
    element: <App />,
    children: [
      {
        path: "/af/",
        element: <Home />,
      },
      {
        path: "/af/portfolio",
        element: <Portfolio/>
      },
      {
        path: "/af/about",
        element: <About/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
