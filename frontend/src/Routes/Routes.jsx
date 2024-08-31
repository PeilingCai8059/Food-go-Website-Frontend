import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart/Cart"
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder"
import Home from "../pages/Home/Home";

const router =createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path:'/cart',
        element: <Cart />
    },
    {
        path: '/order',
        element : <PlaceOrder />   
    }
]);

export default router