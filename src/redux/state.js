import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, World", likeCounter: 3},
                {id: 2, message: "Welcome", likeCounter: 0},
                {id: 3, message: "Hi, how are you today?", likeCounter: 4324},
                {id: 4, message: "Khabib, you are next", likeCounter: 2}
            ],
            newPostText: "New Post Message"
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