import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import PortfolioPage from './Components/PortfolioPage/PortfolioPage.jsx';


const router = createBrowserRouter([
  {
    path: "/af/",
    element: <App />,
    children: [
      {
        path: "/af/",
        element: <AboutPage />,
      },
      {
        path: "/af/portfolio",
        element: <PortfolioPage/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
