import React from "react";
import {AirPollutionData} from '../../types/AirPollutionData'

export const TableAirPoll = ({ props }: { props: AirPollutionData|undefined }) => {
    let content: JSX.Element;
    if (props!==undefined)
    { 
        content=        
        <table>
            <thead>
                <tr>
                    <th>time (iso8601)</th>
                    <th>pm10 (μg/m³)</th>
                    <th>pm2_5 (μg/m³)</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: props.time.length }).map(
                    (_, i) => (
                        <tr key={i}>
                            <td key={`time-${i}`}>{props.time[i]}</td>
                            <td key={`pm10-${i}`}>{props.pm10[i]}</td>
                            <td key={`pm2_5-${i}`}>{props.pm2_5[i]}</td>
                        </tr>
                    ),
                )}
            </tbody>
        </table>
    } else 
        content=<div></div>
    return  content!
};
