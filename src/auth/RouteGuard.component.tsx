import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RouteGuard = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default React.memo(RouteGuard);
