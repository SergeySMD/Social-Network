import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

let ProfileInfo = (props) => {
    return (
        <div className={s.content}>
            <div className={s.image}>
                <img src={props.backgroundImage}/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}><img src={props.avatar}/></div>
                <div className={s.userName}>{props.username}</div>
                <div>
                    <ProfileStatus status={props.status}
                                   onStatusChange={props.onStatusChange}/>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;