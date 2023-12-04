import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../Hooks/useAuth';
import Loading from './../Pages/Loading/Loading';


const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>
  }

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={location.pathname}></Navigate>
  // return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;


