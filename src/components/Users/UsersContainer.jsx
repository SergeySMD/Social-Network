import React from 'react';
import {connect} from "react-redux";
import {
    following, getUsers,
    onSearchUsersChange,
    setPageSize,
    toggleFollowingProcess,
    updatePage
} from "../../redux/usersReducer";
import Users from "./Users";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage, this.props.searchUserString)
    }

    onPageClick = (page) => {
        this.props.updatePage(page);
        this.props.getUsers(this.props.pageSize, page, this.props.searchUserString)
    }
    onPageSizeClick = (pageSize) => {
        this.props.setPageSize(pageSize);
        this.props.getUsers(pageSize, this.props.currentPage, this.props.searchUserString)
    }
    onSearchUserClick = () => {
        this.props.getUsers(this.props.pageSize, this.props.currentPage, this.props.searchUserString)
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
(UsersContainer);