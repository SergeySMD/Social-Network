import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        backgroundImage: state.profilePage.backgroundImageLink,
        avatar: state.profilePage.avatarImageLink,
        username: state.profilePage.userName,
        description: state.profilePage.userDescription
    }
}
export let ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;