import React from 'react';
import {
    addPost, onPostChange
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


class MyPostsContainer extends React.Component {
    addPost = () => {
        this.props.addPost();
    }
    onPostChange = (e) => {
        let text = e.target.value;
        this.props.onPostChange(text);
    }


    render() {
        return (
            <MyPosts addPost={this.addPost}
                     onPostChange={this.onPostChange}
                     newPostText={this.props.newPostText}
                     avatar={this.props.avatar}
                     username={this.props.username}
                     posts={this.props.posts}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        avatar: state.profilePage.avatarImageLink,
        username: state.profilePage.userName
    }

}
export default connect(mapStateToProps, {addPost, onPostChange})(MyPostsContainer);