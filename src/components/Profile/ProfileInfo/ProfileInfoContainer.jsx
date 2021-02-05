import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {updateStatus} from "../../../redux/profileReducer";

class ProfileInfoContainer extends React.Component {
    onStatusChange = (e) => {
        this.props.updateStatus(e.target.value);
    }

    render() {

        return (
            <ProfileInfo backgroundImage={this.props.backgroundImage}
                         avatar={this.props.avatar}
                         username={this.props.username}
                         onStatusChange={this.onStatusChange}
                         description={this.props.description}/>
        )
    }
};
let mapStateToProps = (state) => {
    return {
        backgroundImage: state.profilePage.backgroundImageLink,
        avatar: state.profilePage.avatarImageLink,
        username: state.profilePage.userName,
        description: state.profilePage.userDescription
    }
}

export default connect(mapStateToProps, {updateStatus})(ProfileInfoContainer);