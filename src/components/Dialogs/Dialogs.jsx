import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

let Dialogs = (props) => {


    let DialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let MessageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let addMessage = () => {
        if (props.dialogsPage.newMessageText === "")
            alert("Enter message")
        else
            props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

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
                        value={props.dialogsPage.newMessageText}
                        placeholder="Enter new message"/>
                        <button onClick={addMessage}>Оправить</button>
                    </div>
                </div>
        </div>
    );
}
export default Dialogs;