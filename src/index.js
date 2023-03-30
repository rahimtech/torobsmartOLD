import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/app.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vitrin from "./components/vitrinpage/Vitrin";
import Product from "./components/productpage/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Vitrin",
    element: <Vitrin />,
  },
  {
    path: `/product/:serip/:counter/:namep`,
    element: <Product />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
