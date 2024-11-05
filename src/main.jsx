import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactPage from './Components/Contact/ContactPage.jsx';
import './index.css'
import PortfolioPage from './Components/PortfolioPage/PortfolioPage.jsx';
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import Coast from './Components/Coast/Coast.jsx';
import Sprig from './Components/Sprig/Sprig.jsx';
import Channel from './Components/Channel/Channel.jsx';
import LaLaLand from './Components/LaLaLand/lalaland.jsx';



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
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/contact",
        element: <ContactPage/>
      },
      {
        path: "/coast",
        element: <Coast />
      },
      {
        path: "/channel",
        element: <Channel />
      },
      {
        path: "/sprig",
        element: <Sprig />
      },
      {
        path: "/lalaland",
        element: <LaLaLand />
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
