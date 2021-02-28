import userPhoto from "../assets/images/User_avatar_placeholder.png";
import {profileAPI, usersAPI} from "../api/api";
import {toggleIsFetching} from "./usersReducer";

const ADD_POST = "ADD-POST";
const SET_STATUS = "SET-STATUS";
const SET_PROFILE = "SET_PROFILE";
const LIKE_POST = "LIKE_POST";
const REMOVE_POST = 'REMOVE_POST';
const UPDATE_AVATAR = 'UPDATE_AVATAR';


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
        date: "21:00, 16/02/2021"
    }],
    backgroundImage: "https://www.incimages.com/uploaded_files/image/1920x1080/westworld-2-hbo-background-1920_419617.jpg",
    avatar: "",
    username: "",
    status: "",
    userId: null
}

const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts[0] !== undefined ? state.posts[0].id + 10 : 1,
                message: action.postText,
                likeCounter: 0,
                isLiked: false,
                date: postAddDate()
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
export const addPost = (postText) => ({type: ADD_POST, postText});
export const setStatus = (text) => ({type: SET_STATUS, text})
export const setProfile = (data) => ({type: SET_PROFILE, data})
export const likePost = (postId) => ({type: LIKE_POST, postId})
export const removePost = (postId) => ({type: REMOVE_POST, postId})
export const setAvatarLink = (avatar) => ({type: UPDATE_AVATAR, avatar})

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
export const updateAvatar = (avatar,id) => (dispatch) => {
    profileAPI.updateAvatar(avatar).then(response => {
        if(response.resultCode===0)
        dispatch(setAvatarLink(response.data.photos.small))
        dispatch(getProfile(id))
    })
}

export default ProfileReducer;