import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";

import { ROUTES } from "../../data/routes";

export const Navigation = () => {
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
                    Информация о городе
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
