import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


let MyPosts = (props) => {

    let postsElements = props.state.posts
        .map(p => <Post message={p.message} likeCounter={p.likeCounter}/>);

    let addPost = () => {
        if (props.state.newPostText === "")
            alert("Enter Message")
        else
            props.dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
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
                        value={props.state.newPostText}
                        placeholder="Your post message"/>
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