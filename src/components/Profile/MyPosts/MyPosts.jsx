import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likeCounter={p.likeCounter}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            New post
            <div className={s.inputBlock}>
                <div>
                    <textarea placeholder="Your post message" ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Опубликовать</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;