import React from 'react';
import s from './ProfileInfo.module.css';

let ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://blog.pixlr.com/wp-content/uploads/2019/03/stars-pattern.png"/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + descript
            </div>
        </div>
    )
}
export default ProfileInfo;