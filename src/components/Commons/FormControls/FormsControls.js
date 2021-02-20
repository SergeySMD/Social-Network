import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import s from './FormsControls.module.css'


export const PostInputComponent = field => {
    return <div className={s.PostInputComponent}>
        <TextareaAutosize {...field.input} type="text" placeholder={"Your post message"} maxRows={16}/>
        {field.meta.touched && field.meta.active && field.meta.error &&
        <div className={s.error}><span>{field.meta.error}</span></div>}
    </div>
}