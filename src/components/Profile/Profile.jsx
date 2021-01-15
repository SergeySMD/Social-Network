import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

let Profile = () => {
  return (
    <div>
      <div>
        <img src="https://creativo.one/lessons/les5669/01.jpg" />
      </div>
      <div>
        avatar + descript
      </div>
    <MyPosts />
    </div>
  )
}
export default Profile;