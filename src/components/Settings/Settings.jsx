import React from 'react';
import s from './Settings.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import {getLogout, toggleDarkTheme} from "../../redux/authReducer";
import Slider from "../Commons/Slider/Slider";

let Settings = (props) => {

    const onToggleThemeClick = () => {
        if (!props.isDarkTheme) {
            props.toggleDarkTheme(!props.isDarkTheme)
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem('darkTheme', String(!props.isDarkTheme))
        } else {
            props.toggleDarkTheme(!props.isDarkTheme)
            localStorage.setItem('darkTheme', String(!props.isDarkTheme))
            document.documentElement.setAttribute('data-theme', 'light')
        }
    }

    return (
        <div>
            <div className={s.title}>Settings</div>
            <div className={s.settingsBlock}>
                <div className={s.settingsName}>Dark mode</div>
                <div className={s.switch}><Slider isDarkTheme={props.isDarkTheme} isThemeSlider={true} callback={onToggleThemeClick}/>
                </div>
            </div>
            <div className={s.exitBlock}>
                <button className={s.logOutButton} title={'Выйти из аккаунта'} onClick={props.getLogout}>Log out</button>
            </div>
        </div>
    );
}
let mapStateToProps = (state) => {
    return {
        isDarkTheme: state.auth.isDarkTheme
    }
}
let mapDispatchToProps = {
    toggleDarkTheme,
    getLogout
}
export default compose(connect(mapStateToProps, mapDispatchToProps))(Settings);