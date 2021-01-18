import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let Dialogs = (props) => {

    let DialogsElements = props.Dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let MessageElements = props.Messages
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