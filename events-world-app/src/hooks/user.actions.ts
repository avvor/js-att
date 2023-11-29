import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function useUserActions() {
    
    const navigate = useNavigate();

    async function login(data: any) {
        if (data.user!=="" && data.password!=="") {
            await axios.post(`http://localhost:4040/login`, data) 
                       .then((res) => {
                            console.log(res.data.name)
                            setUserData({user: res.data.name});
                            navigate("/air-pollution");
                        })
                        .catch((res) => {
                            logout()
                        })
           
        }
    }

    async function addNewUser(data:any) {
        if (data.user!=="" && data.password!=="" && data.email!=="") {
            await axios.post('http://localhost:4040/new-user', data)
            .then((res) => {
                console.log(res.data.name)
                setUserData({user: res.data.name});
                navigate("/air-pollution");
            })
            .catch((res) => {
                logout()
            })

        }
    }

    function logout() {
        localStorage.removeItem("username")
        localStorage.removeItem("auth")
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