import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/Cart";
import AllUsers from "../pages/AllUsers";
import AddItems from "../pages/AddItems";
import AdminRoute from "../Routes/AdminRoute";
import ManageItems from "../pages/ManageItems";
import Payment from "../pages/Payment";

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
      
    ]
  },
  {
    path:'dashboard',
    element: <PrivateRoute><DashBoard/></PrivateRoute>,
    children:[
      //normal routes
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'payment',
        element: <Payment/>
      },
      //admin routes
      {
        path: 'addItems',
        element: <AdminRoute><AddItems/></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems/></AdminRoute>
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers/></AdminRoute>
      },
    ]
  }
]);
