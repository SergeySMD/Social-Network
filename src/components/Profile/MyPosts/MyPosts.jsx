import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPosts = (props) => {

    let postsElements = props.posts
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