import React from 'react';
import s from './Post.module.css';
import {Dropdown, DropdownItem, DropdownMenu} from "semantic-ui-react";

let Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.image}><img src={props.avatar}/></div>
            <div className={s.author}>{props.username}</div>
            <div className={s.menu}>
                <PostMenu postId={props.id} remove={props.removePost}/>
            </div>
            <div className={s.date}>{props.date}</div>
            <div className={s.message}>{props.message}</div>
            <div className={s.likeBlock}>
                <svg onClick={() => {
                    props.onLikeClick(props.id)
                }}
                     width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.99998 18.8873C9.71525 18.8873 9.44075 18.7841 9.22682 18.5968C8.41887 17.8903 7.63991 17.2264 6.95265 16.6407L6.94914 16.6377C4.93423 14.9206 3.19427 13.4378 1.98364 11.9771C0.630339 10.3441 0 8.79576 0 7.10433C0 5.46096 0.563506 3.94485 1.58661 2.83508C2.62191 1.71219 4.0425 1.09375 5.58715 1.09375C6.74163 1.09375 7.7989 1.45874 8.72954 2.1785C9.1992 2.54181 9.62492 2.98645 9.99998 3.50509C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46096 20 7.10433C20 8.79576 19.3698 10.3441 18.0165 11.9769C16.8058 13.4378 15.066 14.9205 13.0514 16.6374C12.363 17.2239 11.5828 17.8889 10.773 18.5971C10.5592 18.7841 10.2846 18.8873 9.99998 18.8873ZM5.58715 2.26532C4.37362 2.26532 3.25881 2.74963 2.44781 3.62915C1.62475 4.52194 1.17141 5.75606 1.17141 7.10433C1.17141 8.5269 1.70013 9.79918 2.88558 11.2295C4.03136 12.6121 5.73562 14.0645 7.70888 15.7461L7.71254 15.7492C8.40239 16.3371 9.1844 17.0036 9.9983 17.7153C10.8171 17.0022 11.6003 16.3347 12.2915 15.7458C14.2647 14.0642 15.9688 12.6121 17.1145 11.2295C18.2998 9.79918 18.8285 8.5269 18.8285 7.10433C18.8285 5.75606 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6263 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9871 3.10516C11.3449 3.60198 10.8975 4.23004 10.6352 4.66949C10.5003 4.89547 10.2629 5.03036 9.99998 5.03036C9.73707 5.03036 9.49965 4.89547 9.36476 4.66949C9.10261 4.23004 8.65523 3.60198 8.01283 3.10516C7.29216 2.54791 6.47597 2.26532 5.58715 2.26532Z"
                        fill={props.isLiked ? "red" : "black"}/>
                </svg>
                {props.likeCounter}</div>
        </div>
    )
}
export default Post;

const PostMenu = ({postId, remove}) => {
    return (
        <Dropdown upward
                  icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M2.00001 12C3.10459 12 4.00003 11.1046 4.00003 10C4.00003 8.89543 3.10459 8 2.00001 8C0.895437 8 0 8.89543 0 10C0 11.1046 0.895437 12 2.00001 12Z"
                          fill="black"/>
                      <path
                          d="M9.99996 12C11.1045 12 12 11.1046 12 10C12 8.89543 11.1045 8 9.99996 8C8.89539 8 7.99995 8.89543 7.99995 10C7.99995 11.1046 8.89539 12 9.99996 12Z"
                          fill="black"/>
                      <path
                          d="M18 12C19.1046 12 20 11.1046 20 10C20 8.89543 19.1046 8 18 8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12Z"
                          fill="black"/>
                  </svg>}>
            <Dropdown.Menu>
                <Dropdown.Item key="Edit post" text='Edit post' value='Edit post' icon={'edit outline'}
                               disabled={true}/>
                <Dropdown.Item key="Delete post" text='Delete post' value='Delete post'
                               icon={'trash alternate outline'} onClick={()=>remove(postId)}/>
            </Dropdown.Menu>
        </Dropdown>
    )
}