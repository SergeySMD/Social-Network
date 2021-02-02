import React from 'react';
import s from './ProfileInfo.module.css';

let ProfileInfo = (props) => {
    let onStatusChange = (e) => {
        props.updateStatus(e.target.value)
    }
    return (
        <div className={s.content}>
            <div className={s.image}>
                <img src={props.backgroundImage}/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}><img src={props.avatar}/></div>
                <div className={s.userName}>{props.username}</div>
                <div className={s.description}><textarea
                    onChange={onStatusChange}
                    value={props.description}
                    placeholder="Enter your status"
                    rows="1"
                    maxLength="60"
                /></div>
            </div>
        </div>
    )
}
export default ProfileInfo;