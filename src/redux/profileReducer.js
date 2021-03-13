import userPhoto from "../assets/images/User_avatar_placeholder.png";
import {profileAPI, usersAPI} from "../api/api";
import {toggleIsFetching} from "./usersReducer";
import {getMyDataProfile} from "./authReducer";
import {reset} from "redux-form";

const ADD_POST = "profile/ADD-POST";
const SET_STATUS = "profile/SET-STATUS";
const SET_PROFILE = "profile/SET_PROFILE";
const LIKE_POST = "profile/LIKE_POST";
const REMOVE_POST = 'profile/REMOVE_POST';
const UPDATE_AVATAR = 'profile/UPDATE_AVATAR';
const SET_NEW_EDIT_POST_TEXT = 'profile/SET_NEW_EDIT_POST_TEXT';
const SET_POST_IMAGE_PREVIEW = 'profile/SET_POST_IMAGE_PREVIEW';
const DELETE_POST_IMAGE = 'profile/DELETE_POST_IMAGE';


let initState = {
    posts: [{
        id: 1,
        message: 'Мой самый любимый💖самый лучший😚братишка✊ я поздравляю тебя С Днём Рождения🎁 тебе уже 20 даже не верится😱как всё таки быстро летит время😞ну знаешь твои года🙌 твоё богатство💫и твоя сила💪\n' +
            'Саш,в этот день☺ я хочу пожелать тебе конечно всего самого лучшего😍пусть у тебя будет всё!😉всё,что только можно☝\n' +
            'Конечно здоровья тебе💪 ну и счастья😂 вот знаю,что это так бонально🤔\n' +
            'Поэтому....\n' +
            'Мой братец, я желаю тебе много много удачи👏\n' +
            'Чтобы скорость интернета📱не падала☝\n' +
            'Успехов на работе💰и много много еды🍝🍞 т.к. закон 📝гласит "кто не поработал,то не поел"😄\n' +
            'Так же я очень хочу,чтобы идя👣 по своей дороге🚶в жизни🌍 ты всегда улыбался😄 чтоб тебя окружали самые достойные👍и верные👬самые искренние💑 и любящие💏\n' +
            'Оставайся самим собой😻ты лучший!!💋\n' +
            'Очень тебя люблю❤\n' +
            'P.s. пей🍻в меру❗😄',
        likeCounter: 4,
        isLiked: false,
        date: "21:00, 16/02/2021",
        PostImage: null
    }],
    backgroundImage: "https://www.incimages.com/uploaded_files/image/1920x1080/westworld-2-hbo-background-1920_419617.jpg",
    avatar: "",
    username: "",
    status: "",
    userId: null,
    imagePreview: null
}

const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts[0] !== undefined ? state.posts[0].id + 10 : 1,
                message: action.postText,
                likeCounter: 0,
                isLiked: false,
                date: postAddDate(),
                PostImage: action.PostImage
            }
            return {
                ...state, posts: [newPost, ...state.posts]
            }
        case SET_STATUS:
            return {
                ...state, status: action.text
            }
        case SET_PROFILE:
            return {
                ...state,
                avatar: action.data.photos.small !== null ? action.data.photos.small : userPhoto,
                username: action.data.fullName, userId: action.data.userId
            }
        case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.postId) {
                        return {
                            ...p,
                            isLiked: !p.isLiked,
                            likeCounter: p.isLiked === false ? p.likeCounter + 1 : p.likeCounter - 1
                        };
                    }
                    return p
                })
            }
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case UPDATE_AVATAR:
            return {...state, avatar: action.avatar}
        case SET_NEW_EDIT_POST_TEXT:
            return {
                ...state, posts: state.posts.map(p => {
                    if (p.id === action.id && p.message !== action.text) return {
                        ...p,
                        message: action.text,
                        date: 'edited. ' + postAddDate()
                    }
                    return p
                })
            }
        case SET_POST_IMAGE_PREVIEW:
            return {...state, imagePreview: action.imagePreview}
        case DELETE_POST_IMAGE:
            return {
                ...state, posts: state.posts.map(p => {
                    if (p.id === action.postId) return {...p, PostImage: null}
                    return p
                })
            }
        default:
            return state;
    }
};

let postAddDate = () => {
    let date = new Date();
    let minutes;
    let months;
    let dates;

    if (date.getMinutes() < 10) minutes = "0" + date.getMinutes(); else minutes = date.getMinutes();
    if (date.getMonth() < 10) months = "0" + (1 + date.getMonth()); else months = (1 + date.getMonth());
    if (date.getDate() < 10) dates = "0" + date.getDate(); else dates = date.getDate();

    return (date.getHours() + ":" + minutes + ", " + dates + "/" + months + "/" + date.getFullYear())

}
export const setStatus = (text) => ({type: SET_STATUS, text})
export const setProfile = (data) => ({type: SET_PROFILE, data})
export const likePost = (postId) => ({type: LIKE_POST, postId})
export const removePost = (postId) => ({type: REMOVE_POST, postId})
export const setAvatarLink = (avatar) => ({type: UPDATE_AVATAR, avatar})
export const setEditPostNewText = (id, text) => ({type: SET_NEW_EDIT_POST_TEXT, id, text})
export const setImagePreview = (imagePreview) => ({type: SET_POST_IMAGE_PREVIEW, imagePreview})
export const deletePostImage = (postId) => ({type: DELETE_POST_IMAGE, postId})

export const addPost = (postText, PostImage) => (dispatch) => {
    dispatch({type: ADD_POST, postText, PostImage})
    dispatch(setImagePreview(null))
    dispatch(reset('ProfilePostInputForm'))
};

export const getProfile = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getProfile(userId).then(data => {
        dispatch(setProfile(data));
        dispatch(toggleIsFetching(false));
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.resultCode === 0)
            dispatch(setStatus(status));
    })
}
export const updateAvatar = (avatar, id) => (dispatch) => {
    profileAPI.updateAvatar(avatar).then(response => {
        if (response.resultCode === 0)
            dispatch(setAvatarLink(response.data.photos.small))
        dispatch(getMyDataProfile(id))
        dispatch(getProfile(id))
    })
}
export const addImagePreview = (PostImageFiles) => (dispatch) => {
    const reader = new FileReader();
    reader.readAsDataURL(PostImageFiles);
    reader.onload = (event) => {
        const result = event.target.result;
    }
}
export default ProfileReducer;