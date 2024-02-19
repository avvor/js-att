import React from "react";
import './style.css'
import { NavLink } from "react-router-dom";

import { ROUTES } from "../../data/routes";
import { isAuthUser, useUserActions } from "../../hooks";

import image from "../../images/logout.png";

export const Navigation = () => {
    const isAuth = isAuthUser();
    const userAction = useUserActions()
    const handleLogout = () => userAction.logout()
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
                {isAuth && <li>
                    <NavLink
                        to={ROUTES.historyquery}
                        style={({ isActive }) => ({
                            color: isActive ? "black" : "gray",
                        })} >
                        Сохраненные города
                    </NavLink>
                </li>}
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
                {isAuth && <li onClick={handleLogout}><div className="logout" ><img src={image} alt="Logout" /></div></li>}
            </ul>
    );
};
