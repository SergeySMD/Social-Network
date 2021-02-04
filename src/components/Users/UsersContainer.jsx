import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {setTotalUsersCountAC, setUsersAC, updatePageAC, userFollowAC, userUnfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(userFollowAC(userId))
        },
        unfollow: (userId) => {
            dispatch(userUnfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        updatePage: (pageId) => {
            dispatch(updatePageAC(pageId))
        },
        setUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        }

    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;