import React from 'react';
import {
    addMessage
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        ...state.dialogsPage
    }
}
export default compose(connect(mapStateToProps, {addMessage}),
    // withAuthRedirect
)
(Dialogs);