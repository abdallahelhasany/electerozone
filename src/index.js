import App from "./App";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import AllAbout from "./About/AllAbout";
import AllProjects from "./Projects/AllProjects";
import AllSignup from "./Signup/AllSignup";
import AllLogin from "./Login/AllLogin";
import AllServices from "./Services/AllServices";
import Cart from "./Cart/Cart";
import AllContact from "./Contact/AllContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <AllLogin />,
  },
  {
    path: "signup",
    element: <AllSignup />,
  },
  {
    path: "about",
    element: <AllAbout />,
  },
  {
    path: "projects",
    element: <AllProjects />,
  },
  {
    path: "contact",
    element: <AllContact />,
  },
  {
    path: "services",
    element: <AllServices />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
