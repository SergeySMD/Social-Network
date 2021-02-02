import {combineReducers, createStore} from "redux";
import DialogsReducer from "./dialogsReducer";
import ProfileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";

let reducers = combineReducers(
    {
        profilePage: ProfileReducer,
        dialogsPage: DialogsReducer,
        usersPage: UsersReducer
    }
);
let store = createStore(reducers);
window.store=store;
export default store;