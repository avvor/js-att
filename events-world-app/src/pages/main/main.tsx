import React from "react";
import { Navigation } from "../../components/navbar";



export const Main = () => {
    
    return(
        <>
            <Navigation />
            <h1>Добро пожаловать <br/> в сервис загрязнения вохдуха</h1>
            <h3>Для получения информации о загрязнениях войдите или зарегистрируйтесь</h3>
        </>
    );
}

export default Main;