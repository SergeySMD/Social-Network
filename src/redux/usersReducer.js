
const USER_FOLLOW = "USER-FOLLOW";
const USER_UNFOLLOW = "USER-UNFOLLOW";
const SET_USERS = "SET-USERS";
const UPDATE_CURRENT_PAGE = "UPDATE_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";

let initState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 200,
    currentPage:1
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
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
        case SET_USERS:
            return {...state, users: [...action.users]}
        case UPDATE_CURRENT_PAGE:
            return {...state, currentPage: action.pageId}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}
        default:
            return state;
    }
};

export let userFollowAC = (userId) => ({type: USER_FOLLOW, userId});
export let userUnfollowAC = (userId) => ({type: USER_UNFOLLOW, userId});
export let setUsersAC = (users) => ({type:SET_USERS, users});
export let updatePageAC = (pageId) => ({type: UPDATE_CURRENT_PAGE, pageId});
export let setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export let setPageSizeAC = (pageSize) => ({type: SET_PAGE_SIZE, pageSize});

export default UsersReducer;