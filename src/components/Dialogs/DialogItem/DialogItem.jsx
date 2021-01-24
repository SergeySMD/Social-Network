import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

let DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img className={s.image} src="https://i.pinimg.com/originals/fc/72/64/fc7264aee3d47b8b8065a1903b71d9be.png"/>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;