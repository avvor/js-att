import React from 'react'
import { Navigate } from "react-router-dom";

export const RequireAuth = (
    { children }: { children: any }) => {

    const isAuth = localStorage.getItem("auth");

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children;
};
