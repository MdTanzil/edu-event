/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if (user) {
        return children
    }
    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }
    return (
        <div>
            <Navigate to={'/login'} state={location.pathname}></Navigate>
        </div>
    );
};

export default PrivateRoute;