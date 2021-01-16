import React from 'react';
import s from './Post.module.css';

let Post = (props) => {
  return (
      <div className={s.item}>
          <div className={s.textBlock}>
          <img src='https://www.meme-arsenal.com/memes/e77529bc5454bebb776dbefd127f68f5.jpg'/>
          {props.message}
          </div>
          <div className={s.likeBlock}>
              {"Likes: " + props.likeCounter}
          </div>
      </div>
  )
}
export default Post;