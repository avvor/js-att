import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const ChartAirPoll = ({ props }: { props: any}) => {
    let content: JSX.Element;
    if (props!==undefined)
    {
        const data = {
            labels: props.time,
            datasets: [
                {
                    label: "pm10",
                    data: props.pm10,
                    backgroundColor: 'rgba(64,128,255,0.5)',
                    
                },
                {
                    label: "pm2_5",
                    data: props.pm2_5,
                    backgroundColor: 'rgba(128,255,64,0.5)',
                },
            ],
        };
        content= <Bar data={data} />;
    } else content=<div></div>
    return  content!
};
