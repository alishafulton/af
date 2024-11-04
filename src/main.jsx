import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import PortfolioPage from './Components/PortfolioPage/PortfolioPage.jsx';
import ContactPage from './Components/Contact/ContactPage.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/af/",
    element: <App />,
    children: [
      {
        path: "/af/about",
        element: <AboutPage />,
      },
      {
        path: "/af/portfolio",
        element: <PortfolioPage/>
      },
      {
        path: "/af/contact",
        element: <ContactPage/>
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
