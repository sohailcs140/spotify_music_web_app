import React from "react";
import {Navigate } from "react-router";
import useAuth from "../context/AuthContext";

const ProtectedRoute = ({ element:Element, ...rest }) => {
  const {isAuthenticated,setIsAuthenticated, getToken} = useAuth();
  
  if(isAuthenticated || getToken()){
    return <Element {...rest}/>
  }else{
    return <Navigate to={"/login"} />
  }

};

export default ProtectedRoute;
