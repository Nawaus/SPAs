import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../pages/Admin/Admin";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";
import RootLayout from "../pages/RootLayout";

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
