import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Statistics from "./components/Statistics.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ProductCards from "./components/ProductCards.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../data/categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards />,
            loader: () => fetch("../data/products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards />,
            loader: () => fetch("../data/products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
