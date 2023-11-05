import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";

const useAuth = () => {
  const authContext = useContext(AuthContext)
  return authContext

};

export default useAuth;