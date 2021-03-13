import React, {useState} from 'react'
import s from './login.module.css'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {getLogin} from "../../redux/authReducer";
import {withProfileRedirect} from "../../hoc/withProfileRedirect";
import {maxLength, required} from "../../utils/validators";
import {
    CaptchaInputComponent, createField,
    LoginInputComponent,
    PasswordInputComponent,
    RememberMeComponent
} from "../Commons/FormControls/FormsControls";
import Preloader from "../Commons/Preloader/Preloader";


const maxLength100 = maxLength(100);

const LoginForm = reduxForm({form: 'login'})(
    (props) => {
        return (
            <form className={s.form} onSubmit={props.handleSubmit}>
                <div className={s.titleBLock}>
                    <div>Welcome to</div>
                    <svg className={s.logo} xmlns="http://www.w3.org/2000/svg" width="400" height="29.436"
                         viewBox="0 0 400 29.436" fill="var(--black-white-text-color)">
                        <g id="LOGO" transform="translate(0 0.08)">
                            <path id="Контур_9" data-name="Контур 9"
                                  d="M729.089,541.149a18.2,18.2,0,0,1-5.429-2.1l3.045-6.891a19.416,19.416,0,0,0,4.487,1.863,17.541,17.541,0,0,0,4.768.668,7.392,7.392,0,0,0,2.8-.381,1.222,1.222,0,0,0,.841-1.142q0-.881-1.1-1.335a23.68,23.68,0,0,0-3.626-.962,41.136,41.136,0,0,1-5.409-1.462,9.214,9.214,0,0,1-3.766-2.564,6.951,6.951,0,0,1-1.6-4.828,8.313,8.313,0,0,1,1.482-4.808,9.8,9.8,0,0,1,4.427-3.405,18.388,18.388,0,0,1,7.151-1.242,25.964,25.964,0,0,1,5.669.621A17.76,17.76,0,0,1,747.738,515l-2.845,6.851a17.361,17.361,0,0,0-7.812-2.083q-3.646,0-3.646,1.763,0,.841,1.082,1.262a22.906,22.906,0,0,0,3.566.9,36.661,36.661,0,0,1,5.409,1.382,9.409,9.409,0,0,1,3.826,2.544,6.824,6.824,0,0,1,1.623,4.808,8.226,8.226,0,0,1-1.482,4.788,9.976,9.976,0,0,1-4.427,3.406,18.129,18.129,0,0,1-7.125,1.309A29.428,29.428,0,0,1,729.089,541.149Z"
                                  transform="translate(-723.66 -512.63)" fill="#8683f8"/>
                            <path id="Контур_10" data-name="Контур 10"
                                  d="M771.682,540.074a14.376,14.376,0,0,1,0-25.561,18.5,18.5,0,0,1,16.266,0,14.376,14.376,0,0,1,0,25.561A18.5,18.5,0,0,1,771.682,540.074Zm11.352-6.631A6.17,6.17,0,0,0,785.3,531a8.581,8.581,0,0,0,0-7.412,6.17,6.17,0,0,0-2.264-2.444,6.317,6.317,0,0,0-6.37,0,6.169,6.169,0,0,0-2.264,2.444,8.58,8.58,0,0,0,0,7.412,6.17,6.17,0,0,0,2.25,2.444,6.317,6.317,0,0,0,6.37,0Z"
                                  transform="translate(-737.027 -512.656)" fill="#8683f8"/>
                            <path id="Контур_11" data-name="Контур 11"
                                  d="M822.549,540.106a13.928,13.928,0,0,1-5.556-5.182,15.258,15.258,0,0,1,0-15.184,13.929,13.929,0,0,1,5.589-5.208,17.041,17.041,0,0,1,8.013-1.863,17.587,17.587,0,0,1,7.292,1.442,13.535,13.535,0,0,1,5.289,4.167l-5.97,5.342a7.658,7.658,0,0,0-6.13-3.285,6.263,6.263,0,0,0-4.768,1.9,8.14,8.14,0,0,0,0,10.216,6.263,6.263,0,0,0,4.768,1.9,7.658,7.658,0,0,0,6.13-3.285l5.97,5.342a13.535,13.535,0,0,1-5.288,4.167,17.59,17.59,0,0,1-7.292,1.442A17.04,17.04,0,0,1,822.549,540.106Z"
                                  transform="translate(-753.999 -512.668)" fill="#8683f8"/>
                            <path id="Контур_12" data-name="Контур 12" d="M861.24,513.59H870.7v28.045H861.24Z"
                                  transform="translate(-769.373 -512.976)" fill="#8683f8"/>
                            <path id="Контур_13" data-name="Контур 13"
                                  d="M899.822,536.747H889.138l-1.883,4.888H877.64L889.9,513.59h9.348l12.26,28.045h-9.8Zm-2.6-6.811-2.724-7.051-2.724,7.051Z"
                                  transform="translate(-774.822 -512.976)" fill="#8683f8"/>
                            <path id="Контур_14" data-name="Контур 14" d="M930.6,513.59h9.455v20.7h12.687v7.345H930.6Z"
                                  transform="translate(-792.419 -512.976)" fill="#8683f8"/>
                            <path id="Контур_15" data-name="Контур 15"
                                  d="M1013.231,513.59v28.045h-7.772l-10.684-12.74v12.74H985.56V513.59h7.772l10.684,12.74V513.59Z"
                                  transform="translate(-810.68 -512.976)"/>
                            <path id="Контур_16" data-name="Контур 16"
                                  d="M1057.177,534.5v7.131H1033.86V513.59h22.8v7.131h-13.5v3.285h11.859v6.811h-11.859V534.5Z"
                                  transform="translate(-826.729 -512.975)"/>
                            <path id="Контур_17" data-name="Контур 17"
                                  d="M1079.273,520.915h-8.213V513.57h25.881v7.345h-8.213v20.7h-9.455Z"
                                  transform="translate(-839.089 -512.969)"/>
                            <path id="Контур_18" data-name="Контур 18"
                                  d="M1156.976,513.59,1148,541.635h-10.136l-4.527-14.984-4.768,14.984h-10.136l-8.974-28.045h9.709l4.888,15.945,5.168-15.945h8.681l4.888,16.146,5.168-16.146Z"
                                  transform="translate(-851.848 -512.976)"/>
                            <path id="Контур_19" data-name="Контур 19"
                                  d="M1189.122,540.074a14.376,14.376,0,0,1,0-25.561,18.5,18.5,0,0,1,16.266,0,14.376,14.376,0,0,1,0,25.561A18.5,18.5,0,0,1,1189.122,540.074Zm11.352-6.631a6.218,6.218,0,0,0,2.264-2.444,8.581,8.581,0,0,0,0-7.412,6.215,6.215,0,0,0-2.264-2.444,6.317,6.317,0,0,0-6.37,0,6.17,6.17,0,0,0-2.31,2.417,8.581,8.581,0,0,0,0,7.412,6.17,6.17,0,0,0,2.264,2.444,6.317,6.317,0,0,0,6.37,0Z"
                                  transform="translate(-875.727 -512.656)"/>
                            <path id="Контур_20" data-name="Контур 20"
                                  d="M1246.019,534.552h-2.564V541.6H1234V513.558h13.5a16.553,16.553,0,0,1,6.771,1.282,10.363,10.363,0,0,1,4.674,14.543,9.662,9.662,0,0,1-3.926,3.566l5.889,8.681h-10.1Zm3.766-12.841a4.206,4.206,0,0,0-2.885-.861h-3.446v6.571h3.446a4.207,4.207,0,0,0,2.885-.861,3.539,3.539,0,0,0,0-4.848Z"
                                  transform="translate(-893.228 -512.963)"/>
                            <path id="Контур_21" data-name="Контур 21"
                                  d="M1290.128,532.34,1288,534.7v6.931h-9.295V513.59H1288v10.176l9.215-10.176h10.3L1296.3,525.93l11.786,15.705H1297.14Z"
                                  transform="translate(-908.084 -512.975)"/>
                        </g>
                    </svg>
                </div>
                <div className={s.inputBlock}>
                    {createField('', 'login', LoginInputComponent, [required, maxLength100])}
                    {createField('', 'password', PasswordInputComponent, [required, maxLength100])}
                    {props.captchaURL !== null ? <div>
                        {createField(s.inputField, 'captcha', CaptchaInputComponent, [required, maxLength100], 'text', {captcha: props.captchaURL})}
                    </div> : null}
                    <div className={s.warning}>{props.error}</div>
                </div>
                <div className={s.buttonBlock}>
                    <button disabled={!props.valid || props.FetchingFlag}>{props.FetchingFlag ? <Preloader h={40} w={40}/> : 'Login'}</button>
                    <div className={s.rememberBlock}>
                        <Field component={RememberMeComponent} name={'rememberMe'} type={'checkbox'}/>
                        <span className={s.spanRemember}>Remember me</span>
                    </div>
                </div>
            </form>
        )
    })

const Login = (props) => {
    const [FetchingFlag,setFetchingFlag] = useState(false);
    let onSubmit = (formData) => {
        if (!formData.captcha)
            props.getLogin(formData.login, formData.password, formData.rememberMe, null, setFetchingFlag);
        else
            props.getLogin(formData.login, formData.password, formData.rememberMe, formData.captcha, setFetchingFlag);
    }

    return (
        <div>
            <LoginForm onSubmit={onSubmit} {...props} FetchingFlag={FetchingFlag}/>
            {props.isDarkTheme ? <div className={s.backgroundDark}/> : <div className={s.backgroundLight}/>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        authErrorMessage: state.auth.authErrorMessage,
        captchaURL: state.auth.captchaURL,
        isDarkTheme: state.auth.isDarkTheme
    }
}
const mapDispatchToProps = {
    getLogin
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps), withProfileRedirect)
(Login);