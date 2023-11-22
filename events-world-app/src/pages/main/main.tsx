import React from "react";
import { Navigation } from "../../components/navbar";



export const Main = () => {
    
    return(
        <>
            <Navigation />
            <h1>Добро пожаловать <br/> в сервис загрязнения вохдуха</h1>
            <h5>Для получения информации о загрязнениях войдите или зарегистрируйтесь</h5>
        </>
    );
}

export default Main;