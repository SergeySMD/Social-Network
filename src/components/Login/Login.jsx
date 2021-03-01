import React from 'react'
import s from './login.module.css'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {getLogin} from "../../redux/authReducer";
import {withProfileRedirect} from "../../hoc/withProfileRedirect";
import {maxLength, required} from "../../utils/validators";
import {LoginInputComponent, PasswordInputComponent, RememberMeComponent} from "../Commons/FormControls/FormsControls";
import LoginBackground from '../../assets/images/login-background.png'


const maxLength100 = maxLength(100);
const LoginForm = reduxForm({form: 'login'})(
    (props) => {
        return (
            <form className={s.form} onSubmit={props.handleSubmit}>
                <div className={s.titleBLock}>
                    <div>Welcome to</div>
                    <div><img src="https://turbologo.ru/turbologo-logo.png"></img></div>
                </div>
                <div className={s.inputBlock}>
                    <div className={s.inputField}>
                        <Field component={LoginInputComponent} name={'login'}
                               validate={[required, maxLength100]}/>
                    </div>
                    <div className={s.inputField}>
                        <Field component={PasswordInputComponent} name={'password'}
                               validate={[required, maxLength100]}/>
                    </div>
                    <div className={s.warning}>{props.error}</div>
                </div>
                <div className={s.buttonBlock}>
                    <button disabled={!props.valid}>Login</button>
                    <div className={s.rememberBlock}>
                        <Field component={RememberMeComponent} name={'rememberMe'} type={'checkbox'}/>
                        <span className={s.spanRemember}>Remember me</span>
                    </div>
                </div>
            </form>
        )
    })

class Login extends React.Component {

    onSubmit = (formData) => {
        this.props.getLogin(formData.login, formData.password, formData.rememberMe);
    }

    render() {
        return (
            <div>
                <LoginForm onSubmit={this.onSubmit} {...this.props}/>
                <div className={s.background}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        authErrorMessage: state.auth.authErrorMessage
    }
}
export default compose(
    connect(mapStateToProps, {getLogin}), withProfileRedirect)
(Login);