import React from "react";
import { Navigation } from "../../components/navbar";
import image from "./AQL_AirPollutionClimateChange.jpg";


export const About = () => {
    
    return(
        <>
            <Navigation />
            <h1>
                Веб-сервис для получения информации <br /> по частицам pm2.5 и pm10 <br/> находящимся в воздухе
            </h1>
            <img src={image} alt="AirPollution" height="250px"/>
        </>
    );
}

export default About;