import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../pages/Admin/Admin";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";
import RootLayout from "../pages/RootLayout";
import Product from "../pages/Product";
import loadProducts from "../loaders/products";
import ProductBoundary from "../erros-baudaries/ProductBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
        loader: loadProducts,
        errorElement: <ProductBoundary />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
]);

export default router;
