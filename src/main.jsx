import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact/Contact";
// import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import Home from "./Home/Home";
// import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <div>Hello i am about!</div>,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
