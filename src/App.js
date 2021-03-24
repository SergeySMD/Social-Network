import React, {useEffect, useState,Suspense} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {addMessage} from "./redux/dialogsReducer";
import Preloader from "./components/Commons/Preloader/Preloader";
import {authAPI} from "./api/api";
import {getMyDataProfile, setAuthUserData, toggleDarkTheme} from "./redux/authReducer";
import {Redirect, withRouter} from "react-router";
import Login from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Header from "./components/Header/Header";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Settings from "./components/Settings/Settings";
// import Profile from "./components/Profile/Profile";
const Profile = React.lazy(() => import('./components/Profile/Profile'));
// import Users from "./components/Users/Users";
const Users = React.lazy(() => import('./components/Users/Users'));

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
                        <Suspense fallback={<div/>}>
                            <Route path='/profile/:userId?' render={() => <Profile/>}/>
                            <Route path='/users' render={() => <Users title={'Users'}/>}/>
                            <Route path='/friends' render={() => <Users title={'Friends'} isFriends/>}/>
                        </Suspense>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
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