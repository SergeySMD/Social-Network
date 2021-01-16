import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let DialogItem = (props) => {
    let path = "/dialogs/"+ props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
}

let Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

let Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Sergey" id="1"/>
                <DialogItem name="Mihail" id="2"/>
                <DialogItem name="Andrey" id="3"/>
                <DialogItem name="Victor" id="4"/>
                <DialogItem name="Yuriy" id="5"/>

            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="What are you doing"/>
                <Message message="Website, bro"/>
                <Message message="Wow, cool"/>
            </div>
        </div>
    );
}
export default Dialogs;