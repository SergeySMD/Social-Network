import React from 'react';
import s from './ProfileInfo.module.css';

let ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://creativo.one/lessons/les5669/01.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + descript
            </div>
        </div>
    )
}
export default ProfileInfo;