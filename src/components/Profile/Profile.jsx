import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


let Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <div className={s.profileInfo}>
                <ProfileInfo state={props.profilePage}/>
            </div>
            <div className={s.myPosts}>
                <MyPosts
                state={props.profilePage}
                dispatch={props.dispatch}/>
            </div>
        </div>
    )
}
export default Profile;