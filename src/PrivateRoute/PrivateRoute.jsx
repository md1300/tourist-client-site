import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    // console.log(location)

    if(loading){
      return <div className="text-center"><span className="loading loading-spinner loading-lg "></span></div>  
    }

    if(user){
        return children
    }

   return <Navigate state={location.pathname} to="/logIn" />

   
};

export default PrivateRoute;