import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, World", likeCounter: 3},
        {id: 2, message: "Welcome", likeCounter: 0},
        {id: 3, message: "Hi, how are you today?", likeCounter: 4324},
        {id: 4, message: "Khabib, you are next", likeCounter: 2}
    ];

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
                <Post message={postData[0].message} likeCounter={postData[0].likeCounter}/>
                <Post message={postData[1].message} likeCounter={postData[1].likeCounter}/>
                <Post message={postData[2].message} likeCounter={postData[2].likeCounter}/>
                <Post message={postData[3].message} likeCounter={postData[3].likeCounter}/>
            </div>
        </div>
    )
}
export default MyPosts;