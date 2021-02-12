import userPhoto from "../assets/images/User_avatar_placeholder.png";
import {usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = "ADD-POST";
const UPDATE_STATUS = "UPDATE-STATUS";
const SET_PROFILE = "SET_PROFILE";
const LIKE_POST = "LIKE_POST";


let initState = {
        posts: [],
        newPostText: "New Post Message",

        backgroundImage:"https://www.incimages.com/uploaded_files/image/1920x1080/westworld-2-hbo-background-1920_419617.jpg",
        avatar: "",
        username: "",
        status: "",
}

const ProfileReducer = (state = initState,action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCounter: 0,
                isLiked: false,
                date: postAddDate()
            }
            stateCopy = {
                ...state,
            }
            stateCopy.posts = [...state.posts]
            if (stateCopy.newPostText!=="")
            stateCopy.posts.unshift(newPost); else alert("Пустое поле. Введите текст")
            stateCopy.newPostText = "";
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy = {
                ...state
            }
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
        case UPDATE_STATUS:
            return {
                ...state, status: action.status
            }
        case SET_PROFILE:
            return {
                ...state,
                avatar: action.data.photos.small !== null ? action.data.photos.small : userPhoto,
                username: action.data.fullName,
                status: action.data.aboutMe!==null ? action.data.aboutMe : "Empty status"
            }
        case LIKE_POST:
            return {...state,
            posts: state.posts.map(p=>{
                if (p.id===action.postId) { return {
                    ...p,
                    isLiked: !p.isLiked,
                    likeCounter: p.isLiked===false ? p.likeCounter+1 : p.likeCounter-1};}
                return p })
            }
        default:
            return state;
    }
};

let postAddDate = () => {
    let date = new Date();
    let minutes; let months; let dates;

    if (date.getMinutes()<10) minutes = "0"+date.getMinutes(); else minutes = date.getMinutes();
    if (date.getMonth()<10) months = "0"+date.getMonth(); else months = date.getMonth();
    if (date.getDate()<10) dates = "0"+date.getDate(); else dates = date.getDate();

    return (date.getHours() + ":" + minutes + ", " + dates + "/" + months + "/" + date.getFullYear())

}
export let addPost = () => ({ type: ADD_POST });
export let onPostChange = (text) => ({type: UPDATE_NEW_POST_TEXT,newPostText: text});
export let updateStatus = (text) => ({type: UPDATE_STATUS, description: text})
export let setProfile = (data) => ({type: SET_PROFILE, data})
export let likePost = (postId) => ({type: LIKE_POST, postId})
export let getProfile = (userId) => (dispatch) => {
        if (!userId) userId = 14698;
        usersAPI.getProfile(userId).then(data => {
            dispatch(setProfile(data));
        })
}


export default ProfileReducer;