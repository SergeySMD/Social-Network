import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Sergey"},
                {id: 2, name: "Mihail"},
                {id: 3, name: "Andrey"},
                {id: 4, name: "Victor"},
                {id: 5, name: "Yuriy"},
                {id: 6, name: "Ivan"},
                {id: 7, name: "Anton"},
                {id: 8, name: "Vitaliy"},
                {id: 9, name: "Dmitriy"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hello"},
                {id: 3, message: "What are you doing"},
                {id: 4, message: "Website, bro"},
                {id: 5, message: "Wow, cool"}
            ],
            newMessageText: "New Message"
        }
    },
    _callSubscriber(state) {
        console.log("no subscribers (observers)");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;