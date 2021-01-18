import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let posts = [
    {id: 1, message: "Hi, World", likeCounter: 3},
    {id: 2, message: "Welcome", likeCounter: 0},
    {id: 3, message: "Hi, how are you today?", likeCounter: 4324},
    {id: 4, message: "Khabib, you are next", likeCounter: 2}
];

let Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}
export default Profile;