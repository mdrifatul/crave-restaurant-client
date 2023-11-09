import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
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
import PrivateRouter from './PrivateRoute';
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
        loader: ({params}) => fetch(`https://crave-server.vercel.app/foods/${params.id}`)
      },
      {
        path:'/purchase/:id',
        element: <PrivateRouter><Purchase></Purchase></PrivateRouter>,
        loader: ({params}) => fetch(`https://crave-server.vercel.app/foods/${params.id}`)
      },
      {
        path:'/update/:id',
        element: <PrivateRouter><Update></Update></PrivateRouter>,
        loader: ({params}) => fetch(`https://crave-server.vercel.app/addfoodUpdate/${params.id}`)
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
        element: <PrivateRouter><Addfood></Addfood></PrivateRouter>
      },
      {
        path:'/addedfood',
        element: <PrivateRouter><AddedFood></AddedFood></PrivateRouter>
      },
      {
        path:'/order',
        element: <PrivateRouter><OrderFood></OrderFood></PrivateRouter>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      }
      

    ]
  },
]);
export default Router