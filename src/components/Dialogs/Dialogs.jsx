import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
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

    let DialogData = [
        {id: 1, name: "Sergey"},
        {id: 2, name: "Mihail"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Yuriy"}
    ];
    let MessageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "What are you doing"},
        {id: 4, message: "Website, bro"},
        {id: 5, message: "Wow, cool"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={DialogData[0].name} id={DialogData[0].id}/>
                <DialogItem name={DialogData[1].name} id={DialogData[1].id}/>
                <DialogItem name="Andrey" id="3"/>
                <DialogItem name="Victor" id="4"/>
                <DialogItem name="Yuriy" id="5"/>

            </div>
            <div className={s.messages}>
                <Message message={MessageData[0].message}/>
                <Message message={MessageData[1].message}/>
                <Message message="What are you doing"/>
                <Message message="Website, bro"/>
                <Message message="Wow, cool"/>
            </div>
        </div>
    );
}
export default Dialogs;