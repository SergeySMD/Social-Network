import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, World", likeCounter: 3},
        {id: 2, message: "Welcome", likeCounter: 0},
        {id: 3, message: "Hi, how are you today?", likeCounter: 4324},
        {id: 4, message: "Khabib, you are next", likeCounter: 2}
    ];
    let postsElements = posts
        .map(p => <Post message={p.message} likeCounter={p.likeCounter}/>);

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
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;