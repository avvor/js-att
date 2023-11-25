import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeoObject } from "../types/GeoObject";

const API_KEY_YANDEX = '4c1c0bd1-f605-4dfd-afa4-d0770a7442a8';

export const geocodeApi = createApi({
    reducerPath: 'geocodeApi',
    baseQuery: fetchBaseQuery({
            baseUrl: 'https://geocode-maps.yandex.ru/1.x/'
        }),
    endpoints: (builder) => ({
        getGeocode: builder.query<any, string>({
            query: (place) => `?apikey=${API_KEY_YANDEX}&geocode=${place}&format=json`,
            
            transformResponse: (json: any) => {
                if (json.response.GeoObjectCollection.featureMember.length)
                {
                    let obj = json.response.GeoObjectCollection.featureMember[0].GeoObject
                    let crd = obj.Point.pos.split(' ') 
                    let res: GeoObject = {
                        name: obj.name,
                        description: obj.description,
                        latitude: crd[1],
                        longitude: crd[0]
                    }
                    return res
                }
                else return undefined
            },             
        })
    })
})

export const { useGetGeocodeQuery } = geocodeApi



/* 


                            let airPoll: AirPollutionData = {
                                time: data.hourly.time,
                                pm10: data.hourly.pm10,
                                pm2_5: data.hourly.pm2_5,
                            };

export interface GeoObject {
    name: string,
    description: string, 
    latitude: number, 
    longitude: number
}
 const crd = x.GeoObject.Point.pos.split(' ') 
                if (crd !== 'undefined') {
                    const divPlace = createNode('div')
                    append(div, divPlace)

                    const h2=createNode('h2')
                    h2.innerHTML=`${x.GeoObject.name}, ${x.GeoObject.description??"-"}`
                    append(divPlace, h2)
                    
                    const p=createNode('p')
                    p.innerHTML=`${crd[0]}, ${crd[1]}`
                    append(divPlace, p)
                
                    // получение инфо о загрязнении
                    const url=`${API_OPEN_METEO}&latitude=${crd[1]}&longitude=${crd[0]}`  

*/