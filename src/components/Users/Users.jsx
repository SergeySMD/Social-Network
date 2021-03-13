import React, {useEffect} from 'react';
import s from './Users.module.css';
import userPhoto from "../../assets/images/User_avatar_placeholder.png"
import UserPaginationMenu from "./usersPagination";
import SearchUsersMenu from "./UsersSearchMenu/usersSearchMenu";
import {NavLink} from "react-router-dom";
import Preloader from "../Commons/Preloader/Preloader";
import {
    following, getUsers,
    onSearchUsersChange,
    setPageSize,
    toggleFollowingProcess,
    updatePage
} from "../../redux/usersReducer";
import {compose} from "redux";
import {connect} from "react-redux";

let Users = ({search=true,title='Users',...props}) => {

    useEffect(() => {
        props.updatePage(1)
        props.getUsers(props.pageSize, props.currentPage, '', props.isFriends)
        return () => {
            props.onSearchUsersChange('')
        }
    }, [])

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const onPageClick = (page) => {
        props.updatePage(page);
        props.getUsers(props.pageSize, page, props.searchUserString, props.isFriends)
    }
    const onPageSizeClick = (pageSize) => {
        props.setPageSize(pageSize);
        props.updatePage(1);
        props.getUsers(pageSize, 1, props.searchUserString, props.isFriends)
    }
    const onSearchUserClick = () => {
        props.updatePage(1);
        props.getUsers(props.pageSize, 1, props.searchUserString, props.isFriends)
    }
    const onSearchUserChange = (e) => {
        let text = e.target.value;
        props.onSearchUsersChange(text);
        props.updatePage(1);
        props.getUsers(props.pageSize, 1, text, props.isFriends)
    }

    return (
        <div>
            {search ? <SearchUsersMenu searchUserString={props.searchUserString}
                                       onSearchChange={props.onSearchChange}
                                       onSearchUserClick={onSearchUserClick}
                                       onSearchUserChange={onSearchUserChange}
            /> : null}
            {pagesCount !== 0 ? <div>
                <div className={s.title}>{title}</div>

                <UserPaginationMenu pagesCount={pagesCount}
                                    pageSize={props.pageSize}
                                    currentPage={props.currentPage}
                                    onPageClick={onPageClick}
                                    onPageSizeClick={onPageSizeClick}
                />

                {props.isFetching ? <Preloader h={256} w={256}/> : null}

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
                                            ? <button className={s.follow}
                                                      disabled={props.followingProcess.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.following(u.id, false)
                                                      }}
                                            >Unfollow</button>
                                            : <button className={s.unfollow}
                                                      disabled={props.followingProcess.some(id => id === u.id)}
                                                      onClick={() => {
                                                          props.following(u.id, true)
                                                      }}
                                            >Follow</button>
                                        }
                                    </div>
                                </div>

                            </div>))
                    }
                </div>
                <UserPaginationMenu pagesCount={pagesCount}
                                    pageSize={props.pageSize}
                                    currentPage={props.currentPage}
                                    onPageClick={onPageClick}
                                    onPageSizeClick={onPageSizeClick}
                />

            </div> : <div className={s.noUsersText}>Пользователей не найдено, проверьте введённые данные</div>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {...state.usersPage}
}
let mapDispatchToProps = {
    following,
    updatePage,
    setPageSize,
    onSearchUsersChange,
    toggleFollowingProcess,
    getUsers
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps))
(Users);