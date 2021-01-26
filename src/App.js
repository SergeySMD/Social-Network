import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";


const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                               addPost={props.store.addPost.bind(props.store)}/>}/>

                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsPage={props.state.dialogsPage}
                               updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                               addMessage={props.store.addMessage.bind(props.store)}/>}/>

                    <Route path='/news-feed' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
