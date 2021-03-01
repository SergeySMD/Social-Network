import React, {Component}from "react";
import TextareaAutosize from "react-textarea-autosize";
import s from './FormsControls.module.css'
import {createRef} from "react/cjs/react.production.min";


export const PostInputComponent = field => {
    return <div className={s.PostInputComponent}>
        <TextareaAutosize {...field.input} type="text" placeholder={"Your post message"} maxRows={16}/>
        {field.meta.touched && field.meta.active && field.meta.error &&
        <div className={s.error}>
            <span>{field.meta.error}</span>
        </div>}
    </div>
}
export const LoginInputComponent = field => {
    let hasError = field.meta.touched && field.meta.error;
    return (
        <div className={s.LoginInputComponent}>
            <div className={s.icon}>{!hasError ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 10C13.151 10 14 9.152 14 8C14 6.848 13.151 6 12 6C10.85 6 10 6.848 10 8C10 9.152 10.85 10 12 10ZM12 11C9.791 11 8 12.612 8 14.6V14.986H16V14.6C16 12.612 14.209 11 12 11Z"
                        fill="#C4C4C4"/>
                    <path
                        d="M19 2H5C3.897 2 3 2.897 3 4V17C3 18.103 3.897 19 5 19H9L12 22L15 19H19C20.103 19 21 18.103 21 17V4C21 2.897 20.103 2 19 2ZM14 17L12 19L10 17H5V4H19L19.002 17H14Z"
                        fill="#C4C4C4"/>
                </svg> :
                <span className={s.warningBlock} title={field.meta.error}><span title=''>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.001 10H13.001V15H11.001V10ZM11 16H13V18H11V16Z" fill="#FF0000"/>
                        <path d="M13.7679 4.19994C13.4199 3.54494 12.7419 3.13794 11.9999 3.13794C11.2579 3.13794 10.5799 3.54494 10.2319 4.20094L2.89395 18.0639C2.73112 18.3684 2.65046 18.71 2.65993 19.0551C2.6694 19.4002 2.76867 19.7369 2.94795 20.0319C3.12465 20.3283 3.37559 20.5735 3.676 20.7432C3.97641 20.913 4.3159 21.0015 4.66095 20.9999H19.3389C20.0469 20.9999 20.6879 20.6379 21.0529 20.0319C21.2319 19.7368 21.331 19.4001 21.3405 19.0551C21.35 18.71 21.2695 18.3685 21.1069 18.0639L13.7679 4.19994ZM4.66095 18.9999L11.9999 5.13694L19.3439 18.9999H4.66095Z" fill="#FF0000"/>
                    </svg>
                </span></span>}
            </div>
            <input className={hasError? s.error : ''} {...field.input} type="text" placeholder={"Login"}/>
        </div>
    )
}
export const PasswordInputComponent = field => {
    let hasError = field.meta.touched && field.meta.error;
    return (
        <div className={s.LoginInputComponent}>
            <div className={s.icon}>{!hasError ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H17ZM18 12L18.002 20H6V12H18Z" fill="#C4C4C4"/>
                </svg> :
                <span className={s.warningBlock} title={field.meta.error}><span title=''>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.001 10H13.001V15H11.001V10ZM11 16H13V18H11V16Z" fill="#FF0000"/>
                        <path d="M13.7679 4.19994C13.4199 3.54494 12.7419 3.13794 11.9999 3.13794C11.2579 3.13794 10.5799 3.54494 10.2319 4.20094L2.89395 18.0639C2.73112 18.3684 2.65046 18.71 2.65993 19.0551C2.6694 19.4002 2.76867 19.7369 2.94795 20.0319C3.12465 20.3283 3.37559 20.5735 3.676 20.7432C3.97641 20.913 4.3159 21.0015 4.66095 20.9999H19.3389C20.0469 20.9999 20.6879 20.6379 21.0529 20.0319C21.2319 19.7368 21.331 19.4001 21.3405 19.0551C21.35 18.71 21.2695 18.3685 21.1069 18.0639L13.7679 4.19994ZM4.66095 18.9999L11.9999 5.13694L19.3439 18.9999H4.66095Z" fill="#FF0000"/>
                    </svg>
                </span></span>}
            </div>
            <input className={hasError? s.error : ''} {...field.input} type="password" placeholder={"Password"}/>
        </div>
    )
}
export const RememberMeComponent = field => {
    let hasError = field.meta.touched && field.meta.error;
    return (
        <label className={s.rememberMeContainer}>
            <input className={s.rememberMeCheckbox} type={field.type}/>
            <span className={s.checkmark}> </span>
        </label>
    )
}
export const PostImageUploadComponent2 = field => {

    let onFileChange = (e) => {
        console.log(e.target.files[0])
    }
    return (
        <label className={s.PostImageUploadComponentLabel}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 612.675 612.675">
                <g fill="#707070">
                    <path d="M581.209,223.007L269.839,530.92c-51.592,51.024-135.247,51.024-186.839,0c-51.592-51.023-51.592-133.737,0-184.761
				L363.248,69.04c34.402-34.009,90.15-34.009,124.553,0c34.402,34.008,34.402,89.166,0,123.174l-280.249,277.12
				c-17.19,17.016-45.075,17.016-62.287,0c-17.19-16.993-17.19-44.571,0-61.587L394.37,161.42l-31.144-30.793L114.144,376.975
				c-34.402,34.009-34.402,89.166,0,123.174c34.402,34.009,90.15,34.009,124.552,0l280.249-277.12
				c51.592-51.023,51.592-133.737,0-184.761c-51.593-51.023-135.247-51.023-186.839,0L36.285,330.784l1.072,1.071
				c-53.736,68.323-49.012,167.091,14.5,229.88c63.512,62.79,163.35,67.492,232.46,14.325l1.072,1.072l326.942-323.31
				L581.209,223.007z"/>
                </g>
            </svg>
            <input type="file" onChange={onFileChange}/>
        </label>
    )
}
export class PostImageUploadComponent  extends Component{

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.InputRef = React.createRef();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let a= this.props
        if(this.props.clearImage!==prevProps.clearImage)
        {
            let b = this.InputRef
            this.InputRef.current.value = '';
            this.InputRef.current.files = undefined;
            debugger
        }
    }

    onChange(e) {
        this.props.input.onChange(e.target.files)

        if (this.props.clearImage) this.props();
        let tempArr = [];
        for (let i=0; i<e.target.files.length;i++)
            tempArr.push(e.target.files[i])
        this.props.setFiles(tempArr)
    }
    render(){
        const { input: { value } } = this.props
        const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field

        return(
                <label className={s.PostImageUploadComponentLabel}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 612.675 612.675">
                        <g fill="#707070">
                            <path d="M581.209,223.007L269.839,530.92c-51.592,51.024-135.247,51.024-186.839,0c-51.592-51.023-51.592-133.737,0-184.761
				L363.248,69.04c34.402-34.009,90.15-34.009,124.553,0c34.402,34.008,34.402,89.166,0,123.174l-280.249,277.12
				c-17.19,17.016-45.075,17.016-62.287,0c-17.19-16.993-17.19-44.571,0-61.587L394.37,161.42l-31.144-30.793L114.144,376.975
				c-34.402,34.009-34.402,89.166,0,123.174c34.402,34.009,90.15,34.009,124.552,0l280.249-277.12
				c51.592-51.023,51.592-133.737,0-184.761c-51.593-51.023-135.247-51.023-186.839,0L36.285,330.784l1.072,1.071
				c-53.736,68.323-49.012,167.091,14.5,229.88c63.512,62.79,163.35,67.492,232.46,14.325l1.072,1.072l326.942-323.31
				L581.209,223.007z"/>
                        </g>
                    </svg>
                    <input
                        ref={this.InputRef}
                        type='file'
                        accept='image/*'
                        multiple={false}
                        onChange={this.onChange}
                        onClick={this.props.setClearImage(false)}
                    />
                </label>
        )
    }
}