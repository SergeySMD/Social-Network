import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    const DialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const MessageElements = props.messages.map(m => <Message message={m.message} key={m.id}/>)
    const onSubmit = (formData) => {
        props.addMessage(formData.messageText)
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
                <NewMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}
const NewMessageForm = reduxForm({form: 'DialogsNewMessageForm'})((props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.messageSendingBlock}>
                    <Field
                        component={'textarea'}
                        name={'messageText'}
                        placeholder={'Enter new message'}/>
            <button>Отправить</button>
        </form>)

})
export default Dialogs;