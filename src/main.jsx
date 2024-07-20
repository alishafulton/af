import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import PortfolioPage from './Components/PortfolioPage/PortfolioPage.jsx';


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
        element: <PortfolioPage/>
      },
      {
        path: "/af/about",
        element: <AboutPage/>
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
