import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
const TOGGLE_DARK_THEME = "TOGGLE_DARK_THEME";

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    avatar: null,
    load: false,
    captchaURL: null,
    isDarkTheme: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case SET_PROFILE_DATA:
            return {...state, login: action.login, avatar: action.avatar}
        case TOGGLE_IS_AUTH:
            return {...state, isAuth: action.isAuth}
        case SET_CAPTCHA_URL:
            return {...state, captchaURL: action.captcha}
        case TOGGLE_DARK_THEME:
            return {...state, isDarkTheme: action.theme}
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setProfileData = (login, avatar) => ({type: SET_PROFILE_DATA, login, avatar});
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth})
export const setCaptchaURL = (captcha) => ({type: SET_CAPTCHA_URL, captcha})
export const toggleDarkTheme = (theme) => ({type: TOGGLE_DARK_THEME, theme})
export let getAuth = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login));
        }
    })
}
export let getLogin = (login, password, rememberMe, captcha = false) => (dispatch) => {
    authAPI.login(login, password, rememberMe,captcha).then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(response.data.userId, login, ''))
            dispatch(setCaptchaURL(null))
        } else {
            dispatch(stopSubmit('login', {_error: response.messages[0]}));
        }
        if (response.resultCode === 10) {
            authAPI.getCaptchaURL().then(response => {
                dispatch(setCaptchaURL(response.data.url))
            })
        }
    })
}
export let getLogout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, '', ''));
            dispatch(toggleIsAuth(false));
        }
    })
}
export let getMyDataProfile = (userId) => (dispatch) => {
    getAuth();
    profileAPI.getProfile(userId).then(response => {
        dispatch(setProfileData(response.fullName, response.photos.small))
    })
}
export let getCaptchaURL = () => (dispatch) => {
}

export default authReducer;