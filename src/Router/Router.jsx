import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Menu from "../Page/Menu/Menu";
import Order from "../Page/Order/Order";
import Login from "../Page/Login/Login";
import Signup from "../Page/SignUp/Signup";
import Dashboard from "../MainLayout/Dashboard";
import Cart from "../Page/Dashboard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Page/Dashboard/AllUsers";
import AddItems from "../Page/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Page/Dashboard/ManageItem";
import UpdateItem from "../Page/Dashboard/UpdateItem";
import Payment from "../Page/Dashboard/Payment/Payment";
import PaymentHistory from "../Page/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Page/Dashboard/UserHome/UserHome";
import AdminHome from "../Page/Dashboard/AdminHome/AdminHome";




 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'signup',
                element:<Signup></Signup>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            // normal user
            {
                path: 'userHome',
                element : <UserHome></UserHome>
            },
            {
                path: 'cart',
                element : <Cart></Cart>
            },
            {
                path: 'payment',
                element : <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element : <PaymentHistory></PaymentHistory>
            },

            // admin routers
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader : ({params})=> fetch(`https://bistro-boss-server-roan-theta.vercel.app/menu/${params.id}`)
            },
        ]
    }
])

export default router;