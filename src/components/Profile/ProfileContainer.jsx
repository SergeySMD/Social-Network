import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPost, onPostChange, setProfile, updateStatus} from "../../redux/profileReducer";
import * as axios from "axios";
import { withRouter } from 'react-router';


let mapStateToProps = (state) => {
    return {
        backgroundImage: state.profilePage.backgroundImageLink,
        avatar: state.profilePage.avatarImageLink,
        username: state.profilePage.userName,
        description: state.profilePage.userDescription,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        login: state.auth.login
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = this.props.login;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data)
            })
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
        return (
            <div className={s.profilePage}>
                <div className={s.profileInfo}>
                    <ProfileInfo {...this.props}
                                 onStatusChange={this.onStatusChange}/>
                </div>
                <div className={s.myPosts}>
                    <MyPosts {...this.props}
                             addPost={this.addPost}
                             onPostChange={this.onPostChange}
                    />
                </div>
            </div>
        )
    }
}

let WithURLDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {addPost, onPostChange, updateStatus,setProfile})(WithURLDataContainerComponent);