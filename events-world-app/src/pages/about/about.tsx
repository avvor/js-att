import React from "react";
import { Navigation } from "../../components/navbar";
import image from "../../images/AQL_AirPollutionClimateChange.jpg";
import './style.css'


export const About = () => {
    
    return(
        <>
            <Navigation />
            <h1>
                Веб-сервис для получения информации <br /> по частицам pm2.5 и pm10 <br/> находящимся в воздухе
            </h1>
            <div className="img-container">
                <img src={image} alt="AirPollution" />   
            </div>
        </>
    );
}

export default About;