import React from "react";
import {Navigate } from "react-router";
import { checkToken } from "../utils/authLocalStorage";

const ProtectedRoute = ({ element:Element, ...rest }) => {
  const isAuthenticated = checkToken()
  
    return isAuthenticated?<Element {...rest}/>:<Navigate to={"/login"} />

};

export default ProtectedRoute;
