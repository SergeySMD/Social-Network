import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPosts = () => {
  return (
      <div>
        New post
          <div>
          <textarea></textarea>
          <button>Опубликовать</button>
          </div>
        <div>
          My posts
        </div>
        <div className={s.posts}>
            <Post message='Hi, World'/>
            <Post message='Welcome'/>
        </div>
      </div>
  )
}
export default MyPosts;