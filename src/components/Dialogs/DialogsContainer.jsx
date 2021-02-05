import React from 'react';
import {
    addMessage,
    onMessageChange
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let DialogsContainer = connect(mapStateToProps, {addMessage, onMessageChange})(Dialogs);
export default DialogsContainer;