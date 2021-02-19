import userPhoto from "../assets/images/User_avatar_placeholder.png";
import {profileAPI, usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = "ADD-POST";
const SET_STATUS = "SET-STATUS";
const SET_PROFILE = "SET_PROFILE";
const LIKE_POST = "LIKE_POST";


let initState = {
        posts: [{
            id: 1,
            message:'Мой самый любимый💖самый лучший😚братишка✊ я поздравляю тебя С Днём Рождения🎁 тебе уже 20 даже не верится😱как всё таки быстро летит время😞ну знаешь твои года🙌 твоё богатство💫и твоя сила💪\n' +
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
        case SET_STATUS:
            return {
                ...state, status: action.text
            }
        case SET_PROFILE:
            return {
                ...state,
                avatar: action.data.photos.small !== null ? action.data.photos.small : userPhoto,
                username: action.data.fullName,
                // status: action.data.aboutMe!==null ? action.data.aboutMe : "Empty status"
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
export let setStatus = (text) => ({type: SET_STATUS, text})
export let setProfile = (data) => ({type: SET_PROFILE, data})
export let likePost = (postId) => ({type: LIKE_POST, postId})

export let getProfile = (userId) => (dispatch) => {
        if (!userId) userId = 14698;
        usersAPI.getProfile(userId).then(data => {
            dispatch(setProfile(data));
        })
}
export let getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export let updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode===0)
        dispatch(setStatus(status));
    })
}


export default ProfileReducer;