import React from "react";

export const TableAirPoll = ({ props }: { props: any }) => {
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
                        <tr>
                            <td key={i}>{props.time[i]}</td>
                            <td key={i}>{props.pm10[i]}</td>
                            <td key={i}>{props.pm2_5[i]}</td>
                        </tr>
                    ),
                )}
            </tbody>
        </table>
    } else 
        content=<div></div>
    return  content!
};
