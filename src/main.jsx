import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactPage from './Components/Contact/ContactPage.jsx';
import './index.css'
import PortfolioPage from './Components/PortfolioPage/PortfolioPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PortfolioPage />
      },
      {
        path: "/contact",
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
