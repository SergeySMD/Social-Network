import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return (
        <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" className={s.top} activeClassName={s.activeLink}>My page</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news-feed" activeClassName={s.activeLink}>News feed</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings"  className={s.bottom} activeClassName={s.activeLink}>Settings</NavLink>
                </div>
        </nav>
    )
}
export default Navbar;