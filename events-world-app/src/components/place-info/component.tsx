import React from "react";
import { GeoObject } from "../../types/GeoObject";

export const PlaceInfo = ({ props }: { props: GeoObject|undefined }) => {
    let content: JSX.Element;
    if (props!==undefined)
    { 
        content=  
        <div>
            <h3>{props.name}, {props.description??"-"}</h3>
            <p>{props.latitude}, {props.longitude}</p>
        </div>      
    } else 
        content=<div>Место не опредедено</div>
    return  content!
};
