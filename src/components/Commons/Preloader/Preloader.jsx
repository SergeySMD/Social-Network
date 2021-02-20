import React from "react";
import s from './preloader.module.css'
import PreloaderGIF from '../../../assets/images/Preloader.svg'

const Preloader = () => {
    return (
        <img className={s.preloader} src={PreloaderGIF}></img>
    )
}
export default Preloader