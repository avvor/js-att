import React from "react";
import './style.css'

import {InputText} from "../input-text";
import {Button} from "../button"
import {SocialContainer} from "../social-container";

import { useState } from "react";
import { useUserActions } from "../../hooks";

export const Form = ({action = '#', type = 'login'}:{action: string, type: string}) => {
    
    const [userName, setUserName] = useState<string>("");
    const [userPass1, setUserPass1] = useState<string>("");
    const [isPassError, setPassError] = useState<boolean>(false);
    const [isPass2Error, setPass2Error] = useState<boolean>(false);
    const [isEmailError, setEmailError] = useState<boolean>(false);
    const [isLoginError, setLoginError] = useState<boolean>(false);
    
    const userActions = useUserActions();

    const isLoginValid = (str: string): boolean => /^[a-z0-9]+$/i.test(str);
    const isMailValid = (str: string): boolean => /^[a-z][a-z0-9._-]*@(?:[a-z0-9_-]+\.)*[a-z]{2,6}$/i.test(str);
    const isPassValid = (str: string): boolean => /^[a-z]+$/i.test(str)

    const onChangeEmailHandler = (e: any) => {
        const val = e.target.value;
        setUserName(val);
        setEmailError(!isMailValid(val));
    };
    
    const onChangePass1Handler = (e: any) => {
        const pass=e.target.value;
        setPassError(!isPassValid(pass));
        setUserPass1(pass)
    };

    const onChangePass2Handler= (e: any) => {
        console.log(userPass1)
        console.log(e.target.value)
        setPass2Error(userPass1 !== e.target.value);
    };

    const onChangeLoginHandler = (e: any) =>  setLoginError(!isLoginValid(e.target.value));

    const onSignInClickHandler = (e:any) => {
        e.preventDefault()
        const data={name: userName, password: userPass1}
        userActions.login(data).then();
    };

    const onSignUpClickHandler = (e:any) => {
        e.preventDefault()
        const data={name: userName, password: userPass1, email:userName};
        console.log(data)
        userActions.addNewUser(data).then()
    };

    let content: JSX.Element
    switch (type) {
        case 'login':
            content =
                <form action={action}>
                    <h1>Вход</h1>
                    <SocialContainer />
                    <InputText type="email" placeholder="Почта" onChange={onChangeEmailHandler} value={userName}/>
                    {isEmailError && (
                        <div className="error">Некорректный email</div>
                    )}
                    <InputText type="password" placeholder="Пароль" onChange={(e: any) => onChangePass1Handler(e)} />
                    {isPassError && (
                        <div className="error">Пароль должен содержать только английские символы</div>
                    )}
                    {!isEmailError && !isPassError &&
                        <Button text="Войти" onClick={onSignInClickHandler} /> }
                </form>
            break
        case 'signup':
            content = <form action={action}>
                <h1>Регистрация</h1>
                
                <InputText type="text" placeholder="Имя пользователя" onChange={onChangeLoginHandler}></InputText>
                {isLoginError && (
                    <div className="error">Имя пользователя может содержать только латинские буквы и цифры</div>
                )}
                <InputText type="email" placeholder="Почта" onChange={onChangeEmailHandler}/>
                {isEmailError && (
                    <div className="error">Некорректный email</div>
                )}
                <InputText type="password" placeholder="Пароль" onChange={(e: any) => onChangePass1Handler(e)} />
                {isPassError && (
                    <div className="error">Пароль должен содержать только английские символы</div>
                )}
                <InputText type="password" placeholder="Повторите пароль" onChange={(e: any) => onChangePass2Handler(e)} />
                {isPass2Error && (
                    <div className="error">Пароли не совпадают</div>
                )}
                {!isLoginError && !isEmailError && !isPassError && !isPass2Error &&
                    <Button text="Зарегистрироватьcя" onClick={onSignUpClickHandler} />}
            </form>
            break
    }
    return content!
}