import React from 'react';
import s from './Users.module.css';


let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: true,
                    name: "Sergey Alekseev",
                    avatar: "https://www.meme-arsenal.com/memes/7496ced82ab2d16a0bdebc3d4c143d29.jpg",
                    status: "Hello",
                    location: {city: "London", country: "United Kingdom"}
                },
                {
                    id: 2,
                    followed: false,
                    name: "Mihail Alekseev",
                    avatar: "https://www.meme-arsenal.com/memes/7496ced82ab2d16a0bdebc3d4c143d29.jpg",
                    status: "Welcome",
                    location: {city: "Moscow", country: "Russia"}
                }
            ]
        );
    }

return (
    <div>
        <div className={s.title}>Users</div>
        <div>
            {
                props.users.map(u => (
                    <div className={s.userBlock} key={u.id}>
                        <div className={s.avatar}><img src={u.avatar}/></div>
                        <div className={s.userInfoBlock}>
                            <div className={s.name}>{u.name}</div>
                            <div className={s.country}>{u.location.country},</div>
                            <div className={s.status}>{u.status}</div>
                            <div className={s.city}>{u.location.city}</div>
                            <div className={s.button}>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
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