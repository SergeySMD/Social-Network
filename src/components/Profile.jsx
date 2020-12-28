import React from 'react';
import s from './Profile.module.css';

let Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://creativo.one/lessons/les5669/01.jpg" />
      </div>
      <div>
        avatar + descript
      </div>
      <div>
        My post
        <div>
          new post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            post 1
          </div>
          <div className={s.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile;