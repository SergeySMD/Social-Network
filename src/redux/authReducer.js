import {authAPI, profileAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH_ERROR_MESSAGE = "SET_AUTH_ERROR_MESSAGE";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH";

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    avatar: null,
    authErrorMessage: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true, authErrorMessage: ''}
        case SET_AUTH_ERROR_MESSAGE:
            return {...state, authErrorMessage: action.message}
        case SET_PROFILE_DATA:
            return {...state, login: action.login, avatar: action.avatar}
        case TOGGLE_IS_AUTH:
            return {...state, isAuth: action.isAuth}
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setAuthErrorMessage = (message) => ({type: SET_AUTH_ERROR_MESSAGE, message});
export const setProfileData = (login, avatar) => ({type: SET_PROFILE_DATA, login, avatar});
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth})
export let getAuth = () => (dispatch) => {
    authAPI.getAuth().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login));
        }
    })
}
export let getLogin = (login, password, rememberMe) => (dispatch) => {
    authAPI.login(login, password, rememberMe).then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(response.data.userId, login, ''))
        } else dispatch(setAuthErrorMessage(response.messages[0]))
    })
}
export let getLogout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, '', ''));
            dispatch(toggleIsAuth(false));
        } else dispatch(setAuthErrorMessage(response.messages[0]))
    })
}
export let getMyDataProfile = (userId) => (dispatch) => {
    getAuth();
    profileAPI.getProfile(userId).then(response => {
        dispatch(setProfileData(response.fullName, response.photos.small))
    })
}


export default authReducer;