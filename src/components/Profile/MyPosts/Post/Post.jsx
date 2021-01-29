import React from 'react';
import s from './Post.module.css';

let Post = (props) => {
  return (
      <div className={s.item}>
          <div className={s.image}><img src={props.avatar}/></div>
          <div className={s.author}>{props.username}</div>
          <div className={s.date}>{props.date}</div>
          <div className={s.message}>{props.message}</div>
          <div className={s.likeBlock}><img src="https://www.flaticon.com/svg/vstatic/svg/1077/1077035.svg?token=exp=1611859346~hmac=22eb9ca78747776db9cde9201ef206fb"/>
                                        {props.likeCounter}</div>
      </div>
  )
}
export default Post;