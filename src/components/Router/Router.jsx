import { createBrowserRouter } from "react-router-dom";
import Details from "../Pages/Details/Details";
import Error from "../Pages/Error/Error";
import AddedFood from "../Pages/Food/AddedFood";
import Fooditems from "../Pages/Food/Fooditems";
import Addfood from "../Pages/Food/addfood";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Purchase from "../Pages/Purchase/Purchase";
import SignUp from "../Pages/SignUp/SignUp";
import Update from "../Pages/Update/Update";
import Root from "./Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/fooditems',
        element: <Fooditems></Fooditems>
      },
      {
        path:'/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path:'/purchase/:id',
        element: <Purchase></Purchase>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path:'/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/addfoodUpdate/${params.id}`)
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'/addfood',
        element: <Addfood></Addfood>
      },
      {
        path:'/addedfood',
        element: <AddedFood></AddedFood>
      },
      {
        path:'/order',
        element: <OrderFood></OrderFood>
      },
      

    ]
  },
]);
export default Router