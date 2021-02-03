import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/User_avatar_placeholder.png"


let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=5").then(response => {
            props.setUsers(response.data.items)
        })

    }

    return (
        <div>
            <div className={s.title}>Users</div>
            <div>
                {
                    props.users.map(u => (
                        <div className={s.userBlock} key={u.id}>
                            <div className={s.avatar}><img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </div>
                            <div className={s.userInfoBlock}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.country}>Russia,</div> {/*{u.location.country},*/}
                                <div className={s.status}>{u.status != null ? u.status : "Empty status"}</div>
                                <div className={s.city}>Moscow</div> {/*{u.location.city}*/}
                                <div className={s.button}>
                                    {u.followed
                                        ? <button className={s.follow} onClick={() => {
                                            props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button className={s.unfollow} onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>
                                    }
                                </div>
                            </div>

                        </div>))
                }
            </div>
        </div>
    );
}
export default Users;