import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {addMessage} from "./redux/dialogsReducer";
import Preloader from "./components/Commons/Preloader/Preloader";

const App = ({isAuth,...props}) => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/login' render={() => <Login/>}/>

                    <Route path='/profile/:userId?' render={() => isAuth?<ProfileContainer/> : <Preloader/>}/>
                    <Route path='/dialogs' render={() => isAuth?<DialogsContainer/> : <Preloader/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>

                    <Route path='/news-feed' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = {
    addMessage
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps ))
(App);