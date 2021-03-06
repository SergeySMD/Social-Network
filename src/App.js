import React, {useEffect, useState} from 'react';
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
import {getMyDataProfile, setAuthUserData, toggleDarkTheme} from "./redux/authReducer";
import Header from "./components/Header/Header";
import {Redirect, withRouter} from "react-router";
import Users from "./components/Users/Users";

const App = ({isAuth, ...props}) => {

    const [load, setLoad] = useState(true);

    useEffect(() => {
        props.toggleDarkTheme(localStorage.getItem('darkTheme') === 'true');
        if (localStorage.getItem('darkTheme') === 'true') {
            document.documentElement.setAttribute("data-theme", "dark");
        }
        authAPI.me().then(response => {
            if (response.resultCode === 0) {
                props.setAuthUserData(response.data.id, response.data.email, response.data.login)
            }
            setLoad(false);
        })
    }, [])

    useEffect(()=> {if (isAuth) props.getMyDataProfile(props.id)},[isAuth])

    return (
        load===false ? <div>
            {
                isAuth ?
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar id={props.id}/>
                    <div className='app-wrapper-content'>
                        <Route exact path='/' render={() => <Redirect to={'/profile/' + props.id}/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <Users title={'Users'}/>}/>
                        <Route path='/friends' render={() => <Users title={'Friends'} isFriends/>}/>
                        <Route path='/news-feed' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </div> :
                <div className='app-wrapper'>
                    <Header/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Redirect to={'/login'}/>
                </div>
            }
        </div> :
            <Preloader h={256} w={256}/>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
    }
}
const mapDispatchToProps = {
    addMessage,
    setAuthUserData,
    getMyDataProfile,
    toggleDarkTheme,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))
(App);