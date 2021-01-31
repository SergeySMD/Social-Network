import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


let Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <div className={s.profileInfo}>
                <ProfileInfoContainer store={props.store}/>
            </div>
            <div className={s.myPosts}>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    )
}
export default Profile;