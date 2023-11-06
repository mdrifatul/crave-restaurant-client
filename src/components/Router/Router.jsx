import { createBrowserRouter } from "react-router-dom";
import Details from "../Pages/Details/Details";
import Error from "../Pages/Error/Error";
import Fooditems from "../Pages/Food/Fooditems";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
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
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element: <SignUp></SignUp>
      },

    ]
  },
]);
export default Router