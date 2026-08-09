import React from "react";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  if (Cookies.get("jwtToken") === undefined) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
