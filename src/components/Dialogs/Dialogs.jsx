import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let Dialogs = (props) => {

    let DialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let MessageElements = props.state.messages
        .map(m => <Message message={m.message}/>)

    let newMessageText = React.createRef();

    let messageSend = () => {

        let text = newMessageText.current.value;
        alert(text);
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
                    <textarea ref={newMessageText}></textarea>
                    <button onClick={messageSend}>Оправить</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;