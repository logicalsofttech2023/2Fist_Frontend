import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Assuming AuthContext is in the same directory

const ProtectedRoute = ({ children }) => {
      const { isAuthenticated } = useAuth();
    // const isAuthenticated = localStorage.getItem("authToken") !== null;
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
