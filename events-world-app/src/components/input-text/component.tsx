import React from 'react'
import './style.css'

export const InputText = ({type = 'text', placeholder, onChange, value} : {type: string, placeholder?: string, onChange?: any, value?: string}) => {

    return (
        <input className='input' type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    )
}