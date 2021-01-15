import React from 'react';
import s from './Navbar.module.css';

let Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href="/profile">My page</a>
            </div>
            <div className={s.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={s.item}>
                <a href="/music">Music</a>
            </div>
            <div className={s.item}>
                <a href="/news-feed">News feed</a>
            </div>
            <div className={s.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}
export default Navbar;