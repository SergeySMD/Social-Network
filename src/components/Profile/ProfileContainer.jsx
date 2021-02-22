import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPost, getProfile, getStatus, likePost, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Preloader from "../Commons/Preloader/Preloader";


let mapStateToProps = (state) => {
    return {
        ...state.profilePage,
        id: state.auth.id,
        isFetching: state.usersPage.isFetching
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; //15432
        if (userId === undefined) userId = this.props.id; //14854
        if (userId !== null) {
            this.props.getStatus(userId);
            this.props.getProfile(userId);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userId !== prevProps.userId) {
            console.log(this.props.match.params.userId+' '+prevProps.userId)
            //     this.props.getStatus(userId);
            //     this.props.getProfile(userId);
        }
    }

    onLikeClick = (postId) => {
        this.props.likePost(postId);
    }

    render() {
        return (
            <div>
                {!this.props.isFetching ?
                    <div className={s.profilePage}>
                        <div className={s.profileInfo}>
                            <ProfileInfo {...this.props}/>
                        </div>
                        <div className={s.myPosts}>
                            {this.props.match.params.userId === undefined ?
                                <MyPosts {...this.props}
                                         onLikeClick={this.onLikeClick}
                                /> : null}
                        </div>
                    </div>
                    : <Preloader h={256} w={256}/>}
            </div>
        )
    }
}


export default compose(
    connect(mapStateToProps, {
        addPost,
        getProfile,
        likePost,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)