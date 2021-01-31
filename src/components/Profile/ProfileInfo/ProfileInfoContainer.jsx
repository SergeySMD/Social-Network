import React from 'react';
import ProfileInfo from "./ProfileInfo";

let ProfileInfoContainer = (props) => {
    let state = props.store.getState().profilePage;

    return <ProfileInfo backgroundImage={state.backgroundImageLink}
                        avatar={state.avatarImageLink}
                        username={state.userName}
                        description={state.userDescription}/>
}
export default ProfileInfoContainer;