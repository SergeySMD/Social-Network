import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPost, getProfile, onPostChange, updateStatus} from "../../redux/profileReducer";
import * as axios from "axios";
import {withRouter} from 'react-router';
import {profileAPI} from "../../api/api";


let mapStateToProps = (state) => {
    return {
        backgroundImage: state.profilePage.backgroundImageLink,
        avatar: state.profilePage.avatarImageLink,
        username: state.profilePage.userName,
        description: state.profilePage.userDescription,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        id: state.auth.id
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId===null) userId=this.props.id;
        this.props.getProfile(userId);
    }

    onStatusChange = (e) => {
        this.props.updateStatus(e.target.value);
    }
    addPost = () => {
        this.props.addPost();
    }
    onPostChange = (e) => {
        let text = e.target.value;
        this.props.onPostChange(text);
    }

    render() {
        console.log(this.props.match.params.userId)
        return (
            <div className={s.profilePage}>
                <div className={s.profileInfo}>
                    <ProfileInfo {...this.props}
                                 onStatusChange={this.onStatusChange}/>
                </div>
                <div className={s.myPosts}>
                    {this.props.match.params.userId === undefined ?
                        <MyPosts {...this.props}
                                 addPost={this.addPost}
                                 onPostChange={this.onPostChange}
                        /> : null}
                </div>
            </div>
        )
    }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
    addPost,
    onPostChange,
    updateStatus,
    getProfile
})(WithURLDataContainerComponent);