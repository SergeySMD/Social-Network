import {usersAPI} from "../api/api";

const USER_FOLLOW = "users/USER-FOLLOW";
const USER_UNFOLLOW = "users/USER-UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const UPDATE_CURRENT_PAGE = "users/UPDATE_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const SET_PAGE_SIZE = "users/SET_PAGE_SIZE";
const SEARCH_USER = "users/SEARCH_USER";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROCESS = "users/TOGGLE_FOLLOWING_PROCESS";

let initState = {
    users: [],
    pageSize: '10',
    totalUsersCount: 200,
    currentPage: 1,
    searchUserString: '',
    isFetching: false,
    followingProcess: []
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case USER_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true};
                    return u;
                })
            }
        case USER_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false};
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case UPDATE_CURRENT_PAGE:
            return {...state, currentPage: action.pageId}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SEARCH_USER:
            return {...state, searchUserString: action.text}
        case TOGGLE_FOLLOWING_PROCESS:
            return {
                ...state, followingProcess: action.process
                    ? [...state.followingProcess, action.userId]
                    : state.followingProcess.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export let follow = (userId) => ({type: USER_FOLLOW, userId});
export let unfollow = (userId) => ({type: USER_UNFOLLOW, userId});
export let setUsers = (users) => ({type: SET_USERS, users});
export let updatePage = (pageId) => ({type: UPDATE_CURRENT_PAGE, pageId});
export let setUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export let setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});
export let onSearchUsersChange = (text) => ({type: SEARCH_USER, text})
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let toggleFollowingProcess = (process, userId) => ({type: TOGGLE_FOLLOWING_PROCESS, process, userId});

export let getUsers = (pageSize, currentPage, searchUserString, isFriends) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setUsers([]));
    usersAPI.getUsers(pageSize, currentPage, searchUserString, isFriends).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersCount(data.totalCount));
    })
}
export let following = (id, status) => async (dispatch) => {
    dispatch(toggleFollowingProcess(true, id));
    if (status) {
        const data = await usersAPI.follow(id)
        if (data.resultCode === 0) dispatch(follow(id));
        dispatch(toggleFollowingProcess(false, id));
    } else {
        const data = await usersAPI.unfollow(id)
        if (data.resultCode === 0) dispatch(unfollow(id));
        dispatch(toggleFollowingProcess(false, id));
    }
}


export default UsersReducer;