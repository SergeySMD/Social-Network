const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = "ADD-POST";

let initState = {
        posts: [
            {id: 1, message: "Hi, World", likeCounter: 3,date: "21:00, 20/01/2021"},
            {id: 2, message: "Welcome", likeCounter: 0,date: "21:00, 20/01/2021"},
            {id: 3, message: "Hi, how are you today?", likeCounter: 4324,date: "21:00, 20/01/2021"},
            {id: 4, message: "Khabib, you are next", likeCounter: 2,date: "21:00, 20/01/2021"}
        ],
        newPostText: "New Post Message",

        backgroundImageLink:"https://blog.pixlr.com/wp-content/uploads/2019/03/stars-pattern.png",
        avatarImageLink: "https://ru.meming.world/images/ru/thumb/7/73/Шаблон_кот.jpg/300px-Шаблон_кот.jpg",
        userName: "Sergey Alekseev",
        userDescription: "My life, my rules, no wife, old schools!"
}

const ProfileReducer = (state = initState,action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCounter: 0,
                date: postAddDate()
            }
            state.posts.unshift(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};
let postAddDate = () => {
    let date = new Date();

    return (date.getHours() + ":" + date.getMinutes() + ", " + date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear())
}
export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,newPostText: text});

export default ProfileReducer;