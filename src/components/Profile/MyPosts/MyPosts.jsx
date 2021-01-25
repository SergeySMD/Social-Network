import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likeCounter={p.likeCounter}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        if (props.newPostText === "")
            alert("Enter Message")
        else
            props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            New post
            <div className={s.inputBlock}>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        placeholder="Your post message"
                        ref={newPostElement}/>
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