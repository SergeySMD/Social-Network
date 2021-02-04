import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/User_avatar_placeholder.png"

class Users extends React.Component {

    constructor(props) {
        super(props);
            if (props.users.length === 0) {
                axios.get("https://social-network.samuraijs.com/api/1.0/users?count=3").then(response => {
                    props.setUsers(response.data.items)
                })
            }
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users?count=3").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                <div className={s.title}>Users</div>
                <div>
                    {
                        this.props.users.map(u => (
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
                                                this.props.unfollow(u.id)
                                            }}>Unfollow</button>
                                            : <button className={s.unfollow} onClick={() => {
                                                this.props.follow(u.id)
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
}
export default Users;