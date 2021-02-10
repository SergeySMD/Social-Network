import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    onSearchUsersChange,
    setPageSize,
    setUsers,
    setUsersCount,
    toggleFollowingProcess,
    toggleIsFetching,
    unfollow,
    updatePage
} from "../../redux/usersReducer";
import Users from "./Users";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            usersAPI.getUsers(this.props.pageSize, this.props.currentPage, this.props.searchUserString).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setUsersCount(data.totalCount)
            })
        }
    }

    onPageClick = (page) => {
        this.props.updatePage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, page, this.props.searchUserString).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        })
    }
    onPageSizeClick = (pageSize) => {
        this.props.setPageSize(pageSize);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageSize, this.props.currentPage, this.props.searchUserString).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        })
    }
    onSearchUserClick = () => {
        this.props.toggleIsFetching(true);
        console.log(this.props);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage, this.props.searchUserString).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setUsersCount(data.totalCount)
        })
    }
    onSearchUserChange = (e) => {
        let text = e.target.value;
        this.props.onSearchUsersChange(text);
        console.log(this.props.searchUserString);
    }

    render() {
        return (
            <>
                <Users
                    {...this.props}
                    onPageMenuClick={this.onPageClick}
                    onPageSizeClick={this.onPageSizeClick}
                    onSearchUserClick={this.onSearchUserClick}
                    onSearchUserChange={this.onSearchUserChange}/>
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
        searchUserString: state.usersPage.searchUserString,
        isFetching: state.usersPage.isFetching,
        followingProcess: state.usersPage.followingProcess
    }
}

export default connect
(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    updatePage,
    setUsersCount,
    setPageSize,
    onSearchUsersChange,
    toggleIsFetching,
    toggleFollowingProcess
})(UsersContainer);