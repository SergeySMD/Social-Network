import {combineReducers, createStore} from "redux";
import DialogsReducer from "./dialogsReducer";
import ProfileReducer from "./profileReducer";

let reducers = combineReducers(
    {
        profilePage: ProfileReducer,
        dialogsPage: DialogsReducer
    }
);
let store = createStore(reducers);
window.store=store;
export default store;