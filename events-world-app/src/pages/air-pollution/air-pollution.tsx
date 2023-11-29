import React from "react";
import {Navigation, AirQuality} from "../../components";

export const AirPollution: React.FC = () => {
    return (
        <>
            <Navigation />
            <h1>Загрязнение воздуха</h1>
            <AirQuality />
        </>
    );
};
