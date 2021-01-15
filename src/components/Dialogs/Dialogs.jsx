import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                   <NavLink to='/dialogs/1' activeClassName={s.activeLink}>Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.activeLink}>Mihail</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.activeLink}>Andrew</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={s.activeLink}>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={s.activeLink}>Yuriy</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>What are you doing</div>
                <div className={s.message}>Website, bro</div>
                <div className={s.message}>wow, cool</div>

            </div>
        </div>
    );
}
export default Dialogs;