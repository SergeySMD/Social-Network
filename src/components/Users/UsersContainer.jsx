import React from 'react';
import {connect} from "react-redux";
import {
    follow, setPageSize, setUsers, setUsersCount, toggleIsFetching, unfollow, updatePage
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items)
                    this.props.setUsersCount(response.data.totalCount)
                })
        }
    }

    onPageClick = (page) => {
        this.props.updatePage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }
    onPageSizeClick = (pageSize) => {
        this.props.setPageSize(pageSize);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageMenuClick={this.onPageClick}
                    onPageSizeClick={this.onPageSizeClick}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}/>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect
(mapStateToProps,{follow,unfollow,setUsers,updatePage,setUsersCount,setPageSize,toggleIsFetching})(UsersContainer);