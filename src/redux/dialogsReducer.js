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
};

export const DialogsReducer = (state = initState,action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.text,
                likeCounter: 0
            }
            stateCopy = {
                ...state,
                messages: [...state.messages]
            }
            if (action.text!=='')
                stateCopy.messages.push(newMessage); else alert("Пустое поле. Введите текст")
            return stateCopy;
        default:
            return state;
    }
}
export let addMessage = (text) => ({ type: ADD_MESSAGE, text});

export default DialogsReducer;