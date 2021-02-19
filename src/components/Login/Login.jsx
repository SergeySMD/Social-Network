import React from 'react'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {getLogin} from "../../redux/authReducer";
import {withProfileRedirect} from "../../hoc/withProfileRedirect";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

class Login extends React.Component {

    onSubmit = (formData) => {
        this.props.getLogin(formData.login, formData.password, formData.rememberMe);
    }

    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login
    }
}
export default compose(
    connect(mapStateToProps, {getLogin}),withProfileRedirect)
(Login);