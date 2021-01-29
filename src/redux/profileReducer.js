const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = "ADD-POST";

const ProfileReducer = (state,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCounter: 0,
                date: postAddDate()
            }
            state.posts.unshift(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};
let postAddDate = () => {
    let date = new Date();
    return (date.getHours() + ":" + date.getMinutes() + ", " + date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear())
}
export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,newPostText: text});

export default ProfileReducer;