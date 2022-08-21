import { Outlet, Navigate, useLocation } from "react-router";
import React from 'react';

import useAuth from './../Hooks/useAuth';


const PrivetRoute = () => {
    const location =useLocation()
    const { user } = useAuth()
    
    
    return (
        user.email ? <Outlet  /> : <Navigate to='/login' state={{ from: location }} />
    );
};

export default PrivetRoute;