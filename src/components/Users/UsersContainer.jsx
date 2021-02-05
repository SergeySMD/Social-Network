import React from 'react';
import {connect} from "react-redux";
import {
    setPageSizeAC,
    setTotalUsersCountAC,
    setUsersAC,
    updatePageAC,
    userFollowAC,
    userUnfollowAC
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setUsersCount(response.data.totalCount)
                })
        }
    }
    onPageClick = (page) => {
        this.props.updatePage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    onPageSizeClick = (pageSize) => {
        console.log(pageSize)
        this.props.setPageSize(pageSize);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageMenuClick={this.onPageClick}
                onPageSizeClick={this.onPageSizeClick}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}/>
        );
    }
}
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
        },
        setPageSize: (pageSize) => {
            dispatch(setPageSizeAC(pageSize))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);