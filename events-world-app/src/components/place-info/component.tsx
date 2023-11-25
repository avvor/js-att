import React from "react";

export const PlaceInfo = ({ props }: { props: any }) => {
    let content: JSX.Element;
    if (props!==undefined)
    { 
        content=  
        <div>
            <h3>{props.name}, {props.description??"-"}</h3>
            <p>{props.latitude}, {props.longitude}</p>
        </div>      
    } else 
        content=<div></div>
    return  content!
};
