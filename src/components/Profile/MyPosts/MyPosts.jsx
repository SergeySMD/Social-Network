import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            New post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Опубликовать</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, World'/>
                <Post message='Welcome'/>
            </div>
        </div>
    )
}
export default MyPosts;