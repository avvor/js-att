import React, { useState } from "react";
import {Button, InputText} from "../../components";
import {TableAirPoll} from "../../components/table"
import {ChartAirPoll} from "../../components/chart"
import {Navigation} from "../../components/navbar"
import { Space, Spin } from "antd";

interface AirPollutionData {
    time: any;
    pm10: any;
    pm2_5: any;
}

export const AirPollution: React.FC = () => {
    const [spinner, setSpinner] = useState(false);
    const [loc, setLoc] = useState("");
    const [tableData, setTableData] = useState<AirPollutionData>();
    const [chartData, setChartData] = useState<AirPollutionData>();

    const locChange = (event: any) => {
        setLoc(event.target.value);
    };

    const API_KEY_YANDEX = "4c1c0bd1-f605-4dfd-afa4-d0770a7442a8";
    const API_URL_GEO_DATA = `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY_YANDEX}&geocode=${loc}&format=json`;

    const getAvgData = (data: AirPollutionData) => {
        
        const getAverage = (numbers: any) => {
            const sum = numbers.reduce((acc:any, number:any) => acc + number, 0);
            const length = numbers.length;
            return sum / length;
        };
    
        const pm10=[]
        const pm2_5=[]
        const time=[]
       
        const n=24
        for(let i=0;i<data.time.length;i+=n){
            pm10.push(getAverage(data.pm10.slice(i, i+n-1)))
            pm2_5.push(getAverage(data.pm2_5.slice(i, i+n-1)))
            time.push(data.time[i].substring(0, 10))
        }
    
        return  { time: time, pm2_5:pm2_5, pm10:pm10 }
    }

    const getAirPollution = (event: any) => {
        setSpinner(true);
        fetch(API_URL_GEO_DATA)
            .then((resp) => resp.json())
            .then(function (data) {
                let pos =
                    data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                let coordinates = pos.split(" ");

                if (coordinates) {
                    const API_OPEN_METEO = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${coordinates[0]}&longitude=${coordinates[1]}&hourly=pm10,pm2_5`;
                    fetch(API_OPEN_METEO)
                        .then((resp) => resp.json())
                        .then(function (data) {
                            let airPoll: AirPollutionData = {
                                time: data.hourly.time,
                                pm10: data.hourly.pm10,
                                pm2_5: data.hourly.pm2_5,
                            };
                            let avgAirPoll: AirPollutionData = getAvgData(airPoll)
                            console.log(avgAirPoll)
                            setTableData(avgAirPoll);
                            setChartData(avgAirPoll);
                        });
                }
            })
            .then(() => {
                setSpinner(false);
            })
            .catch((error) => {});
    };

    

    return (
        <>
            <Navigation />
            <h1>Загрязнение воздуха</h1>
            <div>
                <InputText type="text" placeholder="Название места" onChange={(e:any) => locChange(e)}></InputText>
                <Button text="Получить данные" onClick={(e:any) => getAirPollution(e)} />
            </div>
            <div>
                <TableAirPoll props={tableData} />
                <ChartAirPoll props={chartData} /> 
            </div>
        </>
    );
};
