import React, { useState } from "react";
import {Button, InputText, TableAirPoll, ChartAirPoll, PlaceInfo} from "../../components";

import { useGetGeocodeQuery }  from '../../services/geocode-api'
import { useGetAirQualityQuery }  from '../../services/air-quality-api'
import { useAddHistoryQueryRecordMutation }  from '../../services/history-query-api'


export const AirQuality: React.FC = () => {
    
    const [loc, setLoc] = useState("");
    const [place, setPlace] = useState("");

    const locChange = (event: any) => {
        setLoc(event.target.value);
    };

    const handleClick = () =>  setPlace(loc);
    
    const [addHistoryQueryRecord] = useAddHistoryQueryRecordMutation()  
    const handleSaveHistory = () => { 
        addHistoryQueryRecord({
            name: geocode?.name, 
            descr: geocode?.description, 
            latitude: geocode?.latitude, 
            longitude: geocode.longitude, 
            time: airPollutionData?.time, 
            pm10: airPollutionData?.pm10,
            pm2_5: airPollutionData?.pm2_5, 
});
        handleClick();
    }

	
	const { data: geocode} = useGetGeocodeQuery(place, {skip: !place})
	const { data: airPollutionData} = useGetAirQualityQuery(geocode, {skip: !geocode})

    return (
        <>
            <h1>Загрязнение воздуха</h1>
            <div>
                <InputText type="text" placeholder="Название места" onChange={(e:any) => locChange(e)}></InputText>
                <Button text="Получить данные" onClick={handleClick} /> 
                {geocode && <button onClick={handleSaveHistory}>Сохранить в БД</button>}
            </div>
            {geocode && 
            <div>
                <PlaceInfo props={geocode} /> 
                <TableAirPoll props={airPollutionData} />
                <br/>
                <ChartAirPoll props={airPollutionData} />  
            </div>}
        </>
    );
};
