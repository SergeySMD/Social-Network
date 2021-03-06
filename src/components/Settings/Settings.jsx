import React from 'react';
import s from './Settings.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import {toggleDarkTheme} from "../../redux/authReducer";

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
                {/*<div className={s.settingsName}>Dark mode</div>*/}
                {/*<label className={s.switch}>*/}
                {/*    <input type="checkbox" checked={props.isDarkTheme}/>*/}
                {/*    <span onClick={onToggleThemeClick} className={`${s.slider} ${s.round}`}></span>*/}
                {/*</label>*/}
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
    toggleDarkTheme
}
export default compose(connect(mapStateToProps, mapDispatchToProps))(Settings);