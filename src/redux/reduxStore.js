import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./dialogsReducer";
import ProfileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers(
    {
        profilePage: ProfileReducer,
        dialogsPage: DialogsReducer,
        usersPage: UsersReducer,
        auth: authReducer,
        form: formReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;
export default store;