import s from "./UsersSearch.module.css";
import searchIcon from "../../../assets/images/search-icon.svg";
import React from "react";

let SearchUsersMenu = (props) => {
    return (
        <div className={s.searchBlock}>
            <div className={s.icon}>
                {/*<img src={searchIcon}/>*/}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" fill="#707070">
                    <path d="M10.5 0C11.0052 0 11.4922 0.0651042 11.9609 0.195312C12.4297 0.325521 12.8672 0.510417 13.2734 0.75C13.6797 0.989583 14.0495 1.27604 14.3828 1.60938C14.7161 1.94271 15.0052 2.3151 15.25 2.72656C15.4948 3.13802 15.6797 3.57552 15.8047 4.03906C15.9297 4.5026 15.9948 4.98958 16 5.5C16 6.00521 15.9349 6.49219 15.8047 6.96094C15.6745 7.42969 15.4896 7.86719 15.25 8.27344C15.0104 8.67969 14.724 9.04948 14.3906 9.38281C14.0573 9.71615 13.6849 10.0052 13.2734 10.25C12.862 10.4948 12.4245 10.6797 11.9609 10.8047C11.4974 10.9297 11.0104 10.9948 10.5 11C9.84896 11 9.22656 10.8906 8.63281 10.6719C8.03906 10.4531 7.48958 10.138 6.98438 9.72656L0.851562 15.8516C0.752604 15.9505 0.635417 16 0.5 16C0.364583 16 0.247396 15.9505 0.148438 15.8516C0.0494792 15.7526 0 15.6354 0 15.5C0 15.3646 0.0494792 15.2474 0.148438 15.1484L6.27344 9.01562C5.86198 8.51562 5.54688 7.96875 5.32812 7.375C5.10938 6.78125 5 6.15625 5 5.5C5 4.99479 5.0651 4.50781 5.19531 4.03906C5.32552 3.57031 5.51042 3.13281 5.75 2.72656C5.98958 2.32031 6.27604 1.95052 6.60938 1.61719C6.94271 1.28385 7.3151 0.994792 7.72656 0.75C8.13802 0.505208 8.57552 0.320312 9.03906 0.195312C9.5026 0.0703125 9.98958 0.00520833 10.5 0ZM10.5 10C11.1198 10 11.7031 9.88281 12.25 9.64844C12.7969 9.41406 13.2734 9.09115 13.6797 8.67969C14.0859 8.26823 14.4062 7.79167 14.6406 7.25C14.875 6.70833 14.9948 6.125 15 5.5C15 4.88021 14.8828 4.29688 14.6484 3.75C14.4141 3.20312 14.0911 2.72656 13.6797 2.32031C13.2682 1.91406 12.7917 1.59375 12.25 1.35938C11.7083 1.125 11.125 1.00521 10.5 1C9.88021 1 9.29688 1.11719 8.75 1.35156C8.20312 1.58594 7.72656 1.90885 7.32031 2.32031C6.91406 2.73177 6.59375 3.20833 6.35938 3.75C6.125 4.29167 6.00521 4.875 6 5.5C6 6.11979 6.11719 6.70312 6.35156 7.25C6.58594 7.79688 6.90885 8.27344 7.32031 8.67969C7.73177 9.08594 8.20833 9.40625 8.75 9.64062C9.29167 9.875 9.875 9.99479 10.5 10Z" />
                </svg>
            </div>
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