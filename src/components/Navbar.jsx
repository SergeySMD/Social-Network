import React from 'react';
import s from './Navbar.module.css';

let Navbar = () => {
    return (
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <a>My page</a>
        </div>
        <div className={s.item}>
          <a>Friends</a>
        </div>
        <div className={s.item}>
          <a>Messages</a>
        </div>
        <div className={s.item}>
          <a>News feed</a>
        </div>
        <div className={s.item}>
          <a>Settings</a>
        </div>
      </nav>
    )
}
export default Navbar;