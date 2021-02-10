import React from 'react';
import s from './Header.module.css';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getAuth().then(response => {
                if (response.resultCode === 0) {
                    this.props.setAuthUserData(response.data.id, response.data.email, response.data.login)
                }
            })
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);