import { useContext, useState } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    const location = useLocation();
    console.log(location.pathname)
if (loading) {
    return <span className="loading loading-ring loading-lg"></span>
}




    if (user) {
        return children
        
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;