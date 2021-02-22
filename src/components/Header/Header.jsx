import React from 'react';
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/User_avatar_placeholder.png";

const HeaderUserBlock = (props) => {
     return <div className={s.loginBlock}>
         <NavLink to={'/profile'}>{props.username}</NavLink>
         <img className={s.avatar} src={props.avatar!==''?props.avatar : userPhoto}/>
     </div>
}

class Header extends React.Component {

    render() {
        return (
            <header className={s.header}>
                <img className={s.logo} src="https://turbologo.ru/turbologo-logo.png"></img>
                {this.props.isAuth ? <HeaderUserBlock {...this.props}/> : null}
            </header>
        )
    }
}
let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
    username: state.auth.login,
    avatar: state.profilePage.avatar
})

export default connect(mapStateToProps,{setAuthUserData})(Header);
