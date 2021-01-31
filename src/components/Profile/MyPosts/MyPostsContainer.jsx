import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addPost = () => {
        if (state.newPostText === "")
            alert("Enter Message")
        else {
            props.store.dispatch(addPostActionCreator());
        }
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return <MyPosts addPost={addPost}
                    onPostChange={onPostChange}
                    posts={state.posts}
                    newPostText={state.newPostText}
                    avatar={state.avatarImageLink}
                    username={state.userName}
    />
}
export default MyPostsContainer;