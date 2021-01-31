import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let DialogsContainer = (props) => {
    let state=props.store.getState().dialogsPage;

    let addMessage = () => {
        if (state.newMessageText === "")
            alert("Enter message")
        else
            props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return <Dialogs addMessage={addMessage}
                    onMessageChange={onMessageChange}
                    dialogs={state.dialogs}
                    messages={state.messages}
                    newMessageText={state.newMessageText}/>
}
export default DialogsContainer;