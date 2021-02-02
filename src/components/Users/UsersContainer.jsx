import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, userFollowAC, userUnfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;