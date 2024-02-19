import axios from 'axios';
import { useNavigate } from "react-router-dom";
import logger from '../logging/logger';

export function useUserActions() {
    
    const navigate = useNavigate();

    async function login(data: any) {
        if (data.user!=="" && data.password!=="") {
            await axios.post(`http://localhost:4040/login`, data) 
                       .then((res) => {
                            console.log(res.data.name)
                            setUserData({user: res.data.name});
                            logger.postMessage({user: res.data.name, action: `Пользователь ${res.data.name} залогинился`})
                            navigate("/air-pollution");
                        })
                        .catch((res) => {
                            logger.postMessage({user: res.data.name, action: `Пользователь ${res.data.name} не смог залогинится`})
                        })
           
        }
    }

    async function addNewUser(data:any) {
        if (data.user!=="" && data.password!=="" && data.email!=="") {
            await axios.post('http://localhost:4040/new-user', data)
            .then((res) => {
                setUserData({user: res.data});
                logger.postMessage({user: res.data, action: `Добавлен новый пользователь ${res.data}`})
                navigate("/air-pollution");
            })
            .catch((res) => {
                logout()
            })

        }
    }

    function logout() {
        const username=getUserName()
        localStorage.removeItem("username")
        localStorage.removeItem("auth")
        logger.postMessage({user: username, action: `Пользователь ${username} разлогинился`})
        navigate("/login")
    }

    return { login, addNewUser, logout
    };
}

export function isAuthUser() {
    const isAuth = localStorage.getItem("auth");
    return isAuth!==null
}

export function getUserName() {
    const username = localStorage.getItem("username");
    return username
}

export function setUserData(data:any) {
    localStorage.setItem("username", data.user)
    localStorage.setItem("auth", "true")
}