import React, {useEffect} from 'react';
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
import {connect} from "react-redux";
import {compose} from "redux";
import {addMessage} from "./redux/dialogsReducer";
import Preloader from "./components/Commons/Preloader/Preloader";
import {authAPI} from "./api/api";
import {setAuthUserData} from "./redux/authReducer";
import Header from "./components/Header/Header";

const App = ({isAuth, ...props}) => {

    useEffect(() => {
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                props.setAuthUserData(response.data.id, response.data.email, response.data.login)
            }
        })
    }, [])
    return (
        <div>
            {isAuth ?
            <div className='app-wrapper'>
                <Header/>
                <Navbar id={props.id}/>
                <div className='app-wrapper-content'>

                    <Route path='/login' render={() =><Login/>}/>

                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => isAuth ? <DialogsContainer/> : <Preloader/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>

                    <Route path='/news-feed' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div> :
            <div className='app-wrapper'>
                <Header/>
                <Login/>
            </div>}
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}
const mapDispatchToProps = {
    addMessage,
    setAuthUserData
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps))
(App);