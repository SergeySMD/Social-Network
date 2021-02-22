import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH_ERROR_MESSAGE = "SET_AUTH_ERROR_MESSAGE";

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authErrorMessage: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true, authErrorMessage: ''}
        case SET_AUTH_ERROR_MESSAGE:
            return {...state, authErrorMessage: action.message}
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setAuthErrorMessage = (message) => ({type: SET_AUTH_ERROR_MESSAGE, message});
export let getAuth = () => (dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login));
            }
        })
}
export let getLogin = (login,password,rememberMe) => (dispatch) => {
    authAPI.login(login,password,rememberMe).then(response => {
        if(response.resultCode === 0) {
            dispatch(setAuthUserData(response.data.userId,login,''))
        } else dispatch(setAuthErrorMessage(response.messages[0]))
    })
}


export default authReducer;