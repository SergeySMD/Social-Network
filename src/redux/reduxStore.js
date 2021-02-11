import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./dialogsReducer";
import ProfileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers(
    {
        profilePage: ProfileReducer,
        dialogsPage: DialogsReducer,
        usersPage: UsersReducer,
        auth: authReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;
export default store;