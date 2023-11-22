import React from "react";
import { Navigation } from "../../components/navbar";



export const Main = () => {
    
    return(
        <>
            <Navigation />
            <h1>
                Загрязнение воздуха частицами pm2.5 и pm10
            </h1>
            <h4>Добро пожаловать в сервис загрязнения вохдуха</h4>
            <h4>Для получения информации о загрязнениях войдите или зарегистрируйтесь</h4>
        </>
    );
}

export default Main;