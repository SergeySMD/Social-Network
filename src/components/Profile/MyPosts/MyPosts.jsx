import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import TextareaAutosize from 'react-textarea-autosize';


let MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post
            avatar={props.avatar}
            username={props.username}
            message={p.message}
            likeCounter={p.likeCounter}
            date={p.date}
            onLikeClick={props.onLikeClick}
            id={p.id}
            key={p.id}/>);

    return (
        <div className={s.postBlock}>
            <div className={s.inputBlock}>
                <div className={s.newPost}>
                    <TextareaAutosize
                        onChange={props.onPostChange}
                        maxRows="16"
                        value={props.newPostText}
                        placeholder="Your post message"/>
                </div>
                <div className={s.button}>
                    <button onClick={props.addPost}>
                        <svg width="20" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M7.29165 14.6766V18.5416C7.29165 18.8116 7.46498 19.0508 7.72165 19.1358C7.78581 19.1566 7.85165 19.1666 7.91665 19.1666C8.11165 19.1666 8.29998 19.075 8.41998 18.9116L10.6808 15.835L7.29165 14.6766Z"
                                    fill="#8683F8"/>
                                <path
                                    d="M19.7375 0.115907C19.5459 -0.0199262 19.2942 -0.0382595 19.0859 0.0709072L0.335833 9.86257C0.114166 9.97841 -0.0166678 10.2151 0.00166559 10.4642C0.0208323 10.7142 0.186666 10.9276 0.422499 11.0084L5.63501 12.7901L16.7359 3.29841L8.14584 13.6476L16.8817 16.6334C16.9467 16.6551 17.015 16.6667 17.0834 16.6667C17.1967 16.6667 17.3092 16.6359 17.4084 16.5759C17.5667 16.4792 17.6742 16.3167 17.7017 16.1342L19.9934 0.717574C20.0275 0.484241 19.9292 0.252574 19.7375 0.115907Z"
                                    fill="#8683F8"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={s.title}>
                My posts
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;