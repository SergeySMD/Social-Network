import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/User_avatar_placeholder.png";
const User = ({user, followingProcess, following, ...props}) => {
    return (
    <div className={s.userBlock}>
        <div className={s.avatar}>
            <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
            </NavLink>
        </div>
        <div className={s.userInfoBlock}>
            <div className={s.name}>{user.name}</div>
            <div className={s.status}>{user.status != null ? user.status : "Empty status"}</div>
            <div className={s.button}>
                {user.followed
                    ? <button className={s.follow}
                              disabled={followingProcess.some(id => id === user.id)}
                              onClick={() => {
                                  following(user.id, false)
                              }}
                    >Unfollow</button>
                    : <button className={s.unfollow}
                              disabled={followingProcess.some(id => id === user.id)}
                              onClick={() => {
                                  following(user.id, true)
                              }}
                    >Follow</button>
                }
            </div>
        </div>
    </div>
    )
}
export default User