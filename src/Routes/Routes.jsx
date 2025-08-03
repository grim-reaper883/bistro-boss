import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/Secret";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "menu",
        element: <Menu/>
      },
      {
        path: "order",
        element: <Order/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "secret", 
        element: <PrivateRoute><Secret/></PrivateRoute>
      }
    ]
  },
]);
