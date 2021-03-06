import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {
    addImagePreview,
    addPost, deletePostImage,
    getProfile,
    getStatus,
    likePost,
    removePost, setEditPostNewText, setImagePreview,
    updateAvatar,
    updateStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Preloader from "../Commons/Preloader/Preloader";
import {getIsFetching, getMyId} from "../../redux/profileSelectors";


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
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            console.log(this.props.match.params.userId+' '+prevProps.match.params.userId)
                this.props.getStatus(this.props.match.params.userId);
                this.props.getProfile(this.props.match.params.userId);
        }
        if (this.props.avatar !== prevProps.avatar) {
            this.props.getProfile(this.props.match.params.userId);
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
                            <ProfileInfo {...this.props} link={this.props.match.params.userId}/>
                        </div>
                        <div className={s.myPosts}>
                            {this.props.match.params.userId == this.props.id ?
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

// let mapStateToProps = (state) => {
//     return {
//         ...state.profilePage,
//         id: state.auth.id,
//         isFetching: state.usersPage.isFetching
//     }
// }

let mapStateToProps = (state) => {
    return {
        ...state.profilePage,
        id: getMyId(state),
        isFetching: getIsFetching(state)
    }
}
let mapDispatchToProps = {
    addPost,
    getProfile,
    likePost,
    getStatus,
    updateStatus,
    removePost,
    updateAvatar,
    setEditPostNewText,
    setImagePreview,
    deletePostImage
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)