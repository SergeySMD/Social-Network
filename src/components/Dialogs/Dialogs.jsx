import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let Dialogs = (props) => {

    let Dialogs = [
        {id: 1, name: "Sergey"},
        {id: 2, name: "Mihail"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Yuriy"}

    ];
    let Messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "What are you doing"},
        {id: 4, message: "Website, bro"},
        {id: 5, message: "Wow, cool"}
    ]

    let DialogsElements = Dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let MessageElements = Messages
        .map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
            </div>
        </div>
    );
}
export default Dialogs;