import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";
let Dialogs = (props) => {

    let DialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let MessageElements = props.messages.map(m => <Message message={m.message} key={m.id}/>)

    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    if(!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesItems}>
                    {MessageElements}
                </div>
                <div className={s.messageSendingBlock}>
                    <textarea
                        onChange={onMessageChange}
                        value={props.newMessageText}
                        placeholder="Enter new message"/>
                    <button onClick={addMessage}>Оправить</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;