import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {updateStatusAC} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        backgroundImage: state.profilePage.backgroundImageLink,
        avatar: state.profilePage.avatarImageLink,
        username: state.profilePage.userName,
        description: state.profilePage.userDescription
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateStatus: (text) => {
            dispatch(updateStatusAC(text))
        }
    }
}

export let ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;