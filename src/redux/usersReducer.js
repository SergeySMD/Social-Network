const USER_FOLLOW = "USER-FOLLOW";
const USER_UNFOLLOW = "USER-UNFOLLOW";
const SET_USERS = "SET-USERS";

let initState = {
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     name: "Sergey Alekseev",
        //     avatar: "https://www.meme-arsenal.com/memes/7496ced82ab2d16a0bdebc3d4c143d29.jpg",
        //     status: "Hello",
        //     location: {city: "London", country: "United Kingdom"}
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     name: "Mihail Alekseev",
        //     avatar: "https://www.meme-arsenal.com/memes/7496ced82ab2d16a0bdebc3d4c143d29.jpg",
        //     status: "Welcome",
        //     location: {city: "Moscow", country: "Russia"}
        // }
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
};

export let userFollowAC = (userId) => ({type: USER_FOLLOW, userId});
export let userUnfollowAC = (userId) => ({type: USER_UNFOLLOW, userId});
export let setUsersAC = (users) => ({type:SET_USERS, users});

export default UsersReducer;