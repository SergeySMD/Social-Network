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
                <div className={props.link==props.id ? s.avatar : s.avatarOtherUser}>
                    {props.link==props.id ?
                    <label className={s.avatarIcon} title={'Загрузить фото'}><div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="76.232" height="60" viewBox="0 0 76.232 60" fill="black">
                        <g>
                            <path d="M73.7,54.148a8.2,8.2,0,0,0-6.014-2.536H55.652v-.145a6.506,6.506,0,0,0-1.957-4.71,6.63,6.63,0,0,0-4.71-1.957H27.246a6.68,6.68,0,0,0-6.739,6.667v.145H8.551a8.2,8.2,0,0,0-6.014,2.536A8.615,8.615,0,0,0,0,60.162V96.249a8.2,8.2,0,0,0,2.536,6.014A8.615,8.615,0,0,0,8.551,104.8h59.13a8.2,8.2,0,0,0,6.014-2.536,8.615,8.615,0,0,0,2.536-6.014V60.162A8.2,8.2,0,0,0,73.7,54.148Zm-1.232,42.1h-.072a4.7,4.7,0,0,1-4.71,4.71H8.551a4.7,4.7,0,0,1-4.71-4.71V60.162a4.7,4.7,0,0,1,4.71-4.71H22.536A1.948,1.948,0,0,0,24.493,53.5v-2.1a2.728,2.728,0,0,1,2.826-2.826H48.985a2.728,2.728,0,0,1,2.826,2.826v2.1a1.948,1.948,0,0,0,1.957,1.957H67.754a4.7,4.7,0,0,1,4.71,4.71Z" transform="translate(0 -44.8)"/>
                            <path d="M129.826,130.8a17.813,17.813,0,1,0,12.609,5.217A17.858,17.858,0,0,0,129.826,130.8Zm9.855,27.754a14,14,0,0,1-19.71,0,13.853,13.853,0,0,1-4.058-9.855,14.161,14.161,0,0,1,4.058-9.855,13.853,13.853,0,0,1,9.855-4.058,14.161,14.161,0,0,1,9.855,4.058,13.853,13.853,0,0,1,4.058,9.855A13.559,13.559,0,0,1,139.681,158.554Z" transform="translate(-91.71 -115.22)"/>
                            <circle cx="3.551" cy="3.551" r="3.551" transform="translate(60.362 15.507)"/>
                        </g>
                        </svg>
                    </div>
                        <input type="file" onChange={(event)=>{props.updateAvatar(event.currentTarget.files[0],props.id)}}/>
                    </label> : null }
                    <img src={props.avatar}/>
                </div>
                <div className={s.userName}>{props.username}</div>
                <div>
                    <ProfileStatus status={props.status}
                                   link={props.match.params.userId}
                                   id={props.id}
                                   updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;