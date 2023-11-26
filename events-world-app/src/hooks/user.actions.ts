import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function useUserActions() {
    
    const navigate = useNavigate();

    async function login(data: any) {
        if (data.user!=="" && data.password!=="") {
            const res=await axios.get('http://localhost:4040/login');
            setUserData({user: data.user, auth: res.data.success});
            navigate("/air-pollution");
        }
    }

    async function addNewUser(data:any) {
        if (data.user!=="" && data.password!=="" && data.email!=="") {
            await axios.post('http://localhost:4040/new-user', data);
            setUserData(data);
            navigate("/air-pollution");
        }
    }

    function logout() {
        localStorage.removeItem("username")
        localStorage.removeItem("auth")
        navigate("/login")
    }

    return {
        login,
        addNewUser,
        logout
    };
}

export function isAuthUser() {
    const isAuth = localStorage.getItem("auth");
    return isAuth!==null
}

export function setUserData(data:any) {
    console.log('set: '+data.user)
    localStorage.setItem("username", data.user)
    localStorage.setItem("auth", "true")
}