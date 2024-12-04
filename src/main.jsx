import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Account from "./Account.jsx";
import CardProduct from "./components/MainProducts/CardProducts.jsx";
import Register from "./components/AuthPage/Register.jsx";
import Login from "./components/AuthPage/Login.jsx";
import InfoUser from "./components/UserSection/InfoUser.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <CardProduct link="./detail" />,
  },
  {
    path: "/officialstore",
    element: <h2>Coming Soon!</h2>,
  },
  {
    path: "/transaction",
    element: <h2>Coming Soon!</h2>,
  },
  {
    path: "/wishlist",
    element: <h2>Coming Soon!</h2>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/detail",
    element: <></>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
