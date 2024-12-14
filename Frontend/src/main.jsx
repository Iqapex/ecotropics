import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./Pages/About.jsx";
import News from "./components/News/News.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Thematic from "./Pages/Thematic.jsx";
import Project from "./components/Projects/Project.jsx";
import Admin from "./Admin/Admin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/thematic",
        element: <Thematic />,// Replace with your actual Partner component
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);