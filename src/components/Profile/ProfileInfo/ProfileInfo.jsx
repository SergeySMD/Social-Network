import React from 'react';
import s from './ProfileInfo.module.css';

let ProfileInfo = (props) => {
    return (
        <div className={s.content}>
            <div className={s.image}>
                <img src={props.state.backgroundImageLink}/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}><img src={props.state.avatarImageLink}/></div>
                <div className={s.userName}>{props.state.userName}</div>
                <div className={s.description}>{props.state.userDescription}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;