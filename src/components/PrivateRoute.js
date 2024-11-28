// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  // If there's no token, redirect to login page
  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
