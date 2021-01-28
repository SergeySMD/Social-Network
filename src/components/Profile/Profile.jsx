import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


let Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                state={props.profilePage}
                dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;