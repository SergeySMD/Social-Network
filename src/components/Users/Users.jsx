import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../assets/images/User_avatar_placeholder.png"
import UserPaginationMenu from "./usersPagination";
import SearchUsersMenu from "./UsersSearchMenu/usersSearchMenu";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return (
        <div>
            <SearchUsersMenu searchUserString={props.searchUserString}
                             onSearchChange={props.onSearchChange}
                             onSearchUserClick={props.onSearchUserClick}
                             onSearchUserChange={props.onSearchUserChange}
            />
            <div className={s.title}>Users</div>

            <UserPaginationMenu pagesCount={pagesCount}
                                pageSize={props.pageSize}
                                currentPage={props.currentPage}
                                onPageClick={props.onPageMenuClick}
                                onPageSizeClick={props.onPageSizeClick}
            />
            {/*{props.isFetching ? <img className={s.fetching} src={Preloader}/> : null}*/}
            <div className={s.users}>
                {
                    props.users.map(u => (
                        <div className={s.userBlock} key={u.id}>
                            <div className={s.avatar}>
                                <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                </NavLink>
                            </div>
                            <div className={s.userInfoBlock}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.status}>{u.status != null ? u.status : "Empty status"}</div>
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
            <UserPaginationMenu pagesCount={pagesCount}
                                pageSize={props.pageSize}
                                currentPage={props.currentPage}
                                onPageClick={props.onPageMenuClick}
                                onPageSizeClick={props.onPageSizeClick}
            />

        </div>
    )
}
export default Users;