import React from "react";
import './style.css'

export const Button = ({ text, onClick }:{text: string, onClick:any}) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}