import React from "react";
import './style.css'
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "../../data/routes";

export const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = localStorage.getItem("auth");

    // if (user === null) {
    //     return <></>;
    // }

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/login/");
    };

    const isThisPath = (pathname: string) => {
        return location.pathname.match(`^${pathname}$`);
    };
    

    return (
        <ul>
            <li>
                <NavLink
                    to={ROUTES.main}
                    style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                    })} >
                    Главная
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={ROUTES.airpollution}
                    style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                    })} >
                    Загрязнения
                </NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.about}
                    style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                    })} >
                    О сервисе
                </NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.login}
                    style={({ isActive }) => ({
                        color: isActive ? "black" : "gray",
                    })} >
                    Вход\Регистрация
                </NavLink>
            </li>
        </ul>
    );
};
