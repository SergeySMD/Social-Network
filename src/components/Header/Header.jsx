import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://turbologo.ru/turbologo-logo.png"></img>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;