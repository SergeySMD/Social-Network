const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initState = {
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
};

export const DialogsReducer = (state = initState,action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
                likeCounter: 0
            }
            stateCopy = {
                ...state,
                messages: [...state.messages]
            }
            if (stateCopy.newMessageText!=="")
            stateCopy.messages.push(newMessage); else alert("Пустое поле. Введите текст")
            stateCopy.newMessageText = "";
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy = {
                ...state,
                newMessageText: action.newMessageText
            }
            return stateCopy;

        default:
            return state;
    }
}
export let addMessage = () => ({ type: ADD_MESSAGE });
export let onMessageChange = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT,newMessageText: text});

export default DialogsReducer;