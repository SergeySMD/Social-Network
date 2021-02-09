const USER_FOLLOW = "USER-FOLLOW";
const USER_UNFOLLOW = "USER-UNFOLLOW";
const SET_USER_DATA = "SET_USER_DATA";

let initState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case USER_FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true};
                    return u;
                })}
        case USER_UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false};
                    return u;
                })}
        default:
            return state;
    }
};

export let follow = (userId) => ({type: USER_FOLLOW, userId});
export let unfollow = (userId) => ({type: USER_UNFOLLOW, userId});
export let setAuthUserData = (id,email,login) => ({type: SET_USER_DATA, data: {id,email,login}});

export default authReducer;