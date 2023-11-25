import React, { useState } from "react";
import {Navigation, Button, InputText, TableAirPoll, ChartAirPoll, PlaceInfo} from "../../components";

import { useGetGeocodeQuery }  from '../../services/geocode'
import { useGetAirQualityQuery }  from '../../services/air-quality'

export const AirPollution: React.FC = () => {

    const [loc, setLoc] = useState("");
    const [place, setPlace] = useState("");

    const locChange = (event: any) => {
        setLoc(event.target.value);
    };

    const handleClick = () =>  setPlace(loc);
	
	const { data: geocode} = useGetGeocodeQuery(place, {skip: !place})
	const { data: airPollutionData} = useGetAirQualityQuery(geocode, {skip: !geocode})

    return (
        <>
            <Navigation />
            <h1>Загрязнение воздуха</h1>
            <div>
                <InputText type="text" placeholder="Название места" onChange={(e:any) => locChange(e)}></InputText>
                <Button text="Получить данные" onClick={handleClick} /> 
                {geocode && <button onClick={handleClick}>Сохранить в БД</button>}
            </div>
            {geocode && <div>
                    <PlaceInfo props={geocode} /> 
                    <TableAirPoll props={airPollutionData} />
                    <ChartAirPoll props={airPollutionData} />  
            </div>}
        </>
    );
};
