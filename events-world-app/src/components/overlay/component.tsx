import React from "react";
import './style.css'

interface OverlayProps {
    active: boolean,
    setActive: (value: boolean) => void
}


export const Overlay:React.FC<OverlayProps> = (props) => {
    const {active, setActive} = props
    const onClickSignInHandler = () => {
        setActive(!active)
    }
    return (
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Уже зарегистрированы?</h1>
                    <p>Чтобы оставаться на связи с нами, пожалуйста, войдите</p>
                    <button className="ghost" id="signIn" onClick={onClickSignInHandler}>Вход</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Еще не регистрировались?</h1>
                    <p>Введите свои личные данные и начните путешествие вместе с нами</p>
                    <button className="ghost" id="signUp" onClick={onClickSignInHandler}>Регистрация</button>
                </div>
            </div>
    )
}

export default Overlay