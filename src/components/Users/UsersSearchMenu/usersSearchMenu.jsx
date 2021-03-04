import s from "./UsersSearch.module.css";
import searchIcon from "../../../assets/images/search-icon.svg";
import React from "react";

let SearchUsersMenu = (props) => {
    return (
        <div className={s.searchBlock}>
            <div className={s.icon}><img src={searchIcon}/></div>
            <div className={s.input}><input type="text"
                                            placeholder="Search User"
                                            maxLength="50"
                                            value={props.searchUserString}
                                            onChange={props.onSearchUserChange}
            /></div>
            {/*<button className={s.searchButton}*/}
            {/*        onClick={props.onSearchUserClick}>Search*/}
            {/*</button>*/}
        </div>
    );
}
export default SearchUsersMenu;