import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GeoObject } from "../types/GeoObject";
import { AirPollutionData } from "../types/AirPollutionData";

export const airQualityApi = createApi({
    reducerPath: 'aipQualityApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://air-quality-api.open-meteo.com/v1/air-quality'
    }),
    endpoints: (builder) => ({
        getAirQuality: builder.query({
            query: (place: GeoObject) => `?latitude=${place.latitude}&longitude=${place.longitude}&hourly=pm10,pm2_5`,
            
            transformResponse: (json: any) => {
                const hourly: AirPollutionData = json.hourly
                
                const getAverage = (numbers: number[]) => {
                    const sum = numbers.reduce((acc:number, number:number) => acc + number, 0);
                    const length = numbers.length;
                    return sum / length;
                };
            
                const data: AirPollutionData = {time: [], pm10: [], pm2_5: []}
               
                const n=24
                for(let i=0;i<hourly.time.length;i+=n){
                    data.pm10.push(getAverage(hourly.pm10.slice(i, i+n-1)));
                    data.pm2_5.push(getAverage(hourly.pm2_5.slice(i, i+n-1)));
                    data.time.push(hourly.time[i].substring(0, 10));
                }
            
                return data
            },  

        })
    })
});

export const { useGetAirQualityQuery } = airQualityApi
