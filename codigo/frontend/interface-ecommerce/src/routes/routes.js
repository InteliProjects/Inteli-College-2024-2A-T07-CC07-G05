import { createBrowserRouter } from "react-router-dom";
import CartPage from "../pages/cart";
import Homepage from "../pages/homepage";
import ProductPage from "../pages/productPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/cart/:id",
    element: <CartPage />,
  },
]);
