import React from 'react'
import { Navigate } from "react-router-dom";
import { isAuthUser } from '../hooks';

export const RequireAuth = (
    { children }: { children: any }) => {
    const isAuth=isAuthUser()
    if (!isAuth) {
        return <Navigate to="/login" />;
    }
    return children;
};
