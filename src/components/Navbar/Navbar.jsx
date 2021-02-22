import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

let Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.navList}>
                <div className={s.item}>
                    <NavLink to={`/profile`} activeClassName={s.activeLink}>
                        <div className={s.indicator}>i</div>
                        <svg className={s.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M17.2253 3.07763C15.3376 1.10731 12.7258 -0.00463753 9.99717 0.000383139C4.48288 -0.00656212 0.00699895 4.45803 5.36927e-05 9.97235C-0.0033771 12.699 1.10845 15.3084 3.07731 17.1947C3.08304 17.2004 3.08517 17.209 3.09086 17.214C3.14868 17.2697 3.21152 17.3168 3.2701 17.3704C3.43076 17.5132 3.59142 17.661 3.76066 17.7988C3.85133 17.8702 3.94559 17.9416 4.03843 18.0073C4.19838 18.1265 4.35833 18.2458 4.52539 18.3558C4.63894 18.4272 4.75605 18.4986 4.8724 18.57C5.02662 18.6628 5.18017 18.7563 5.33941 18.8413C5.47438 18.9127 5.61216 18.9741 5.74926 19.0391C5.89921 19.1105 6.04703 19.1819 6.20054 19.2462C6.35404 19.3104 6.5083 19.3604 6.66395 19.4161C6.81959 19.4718 6.95385 19.5232 7.10309 19.5689C7.27161 19.6196 7.44441 19.6589 7.61578 19.701C7.75858 19.736 7.89711 19.776 8.04421 19.8045C8.24127 19.8438 8.44122 19.8688 8.64117 19.896C8.76472 19.9131 8.88538 19.9374 9.01031 19.9495C9.33737 19.9816 9.66723 19.9995 9.99997 19.9995C10.3327 19.9995 10.6626 19.9816 10.9896 19.9495C11.1146 19.9374 11.2353 19.9131 11.3588 19.896C11.5587 19.8688 11.7586 19.8438 11.9557 19.8045C12.0985 19.776 12.2414 19.7331 12.3842 19.701C12.5555 19.6589 12.7283 19.6196 12.8969 19.5689C13.0461 19.5232 13.1903 19.4675 13.336 19.4161C13.4817 19.3647 13.6473 19.309 13.7994 19.2462C13.9515 19.1833 14.1007 19.1098 14.2507 19.0391C14.3878 18.9741 14.5256 18.9127 14.6605 18.8413C14.8198 18.7563 14.9733 18.6628 15.1275 18.57C15.2439 18.4986 15.361 18.4336 15.4746 18.3558C15.6417 18.2458 15.8016 18.1266 15.9615 18.0073C16.0544 17.9359 16.1486 17.8716 16.2393 17.7988C16.4085 17.6631 16.5692 17.5189 16.7298 17.3704C16.7884 17.3168 16.8512 17.2697 16.9091 17.214C16.9148 17.209 16.9169 17.2004 16.9226 17.1947C20.9046 13.3799 21.04 7.05948 17.2253 3.07763ZM15.6204 16.4471C15.4904 16.5614 15.3561 16.6699 15.2205 16.7749C15.1405 16.8363 15.0606 16.8969 14.9784 16.9555C14.8492 17.0491 14.7178 17.1376 14.5843 17.2226C14.4872 17.2847 14.3879 17.3447 14.2879 17.4032C14.1622 17.4747 14.0344 17.546 13.9052 17.6174C13.7909 17.676 13.6745 17.731 13.5574 17.7853C13.4404 17.8395 13.3111 17.8974 13.1847 17.9481C13.0583 17.9988 12.9241 18.0466 12.792 18.0909C12.6713 18.1323 12.5506 18.1751 12.4285 18.2115C12.2857 18.2544 12.1365 18.2893 11.9887 18.3251C11.873 18.3522 11.7588 18.3829 11.6416 18.4058C11.4724 18.4386 11.2996 18.4615 11.1261 18.485C11.0276 18.4979 10.9298 18.5157 10.8305 18.5257C10.5563 18.5521 10.2785 18.5679 9.99788 18.5679C9.71727 18.5679 9.4395 18.5522 9.16528 18.5257C9.06604 18.5157 8.96822 18.4979 8.86965 18.485C8.69615 18.4615 8.52335 18.4386 8.35411 18.4058C8.237 18.3829 8.12274 18.3522 8.0071 18.3251C7.85928 18.2894 7.71218 18.2537 7.56725 18.2115C7.44516 18.1751 7.32446 18.1323 7.20379 18.0909C7.07171 18.0452 6.93958 17.9987 6.81105 17.9481C6.68252 17.8974 6.56115 17.8417 6.43831 17.7853C6.31547 17.7289 6.2048 17.676 6.09058 17.6174C5.96134 17.5503 5.83353 17.4796 5.70784 17.4032C5.60789 17.3447 5.50861 17.2847 5.4115 17.2226C5.27799 17.1376 5.14657 17.0491 5.01733 16.9555C4.9352 16.897 4.85525 16.8363 4.77525 16.7749C4.63957 16.6699 4.50535 16.5606 4.3754 16.4471C4.34398 16.4235 4.3154 16.3935 4.28473 16.3664C4.31666 13.9373 5.87712 11.7925 8.17847 11.0146C9.32917 11.5619 10.6652 11.5619 11.8159 11.0146C14.1172 11.7925 15.6776 13.9373 15.7096 16.3664C15.6796 16.3935 15.651 16.4207 15.6204 16.4471ZM7.50721 5.72554C8.28035 4.35054 10.0217 3.86266 11.3967 4.6358C12.7717 5.40894 13.2596 7.15032 12.4865 8.52531C12.2299 8.98152 11.853 9.35849 11.3967 9.61505C11.3932 9.61505 11.3889 9.61505 11.3846 9.61932C11.1952 9.72471 10.9951 9.80947 10.7876 9.87211C10.7505 9.88282 10.7162 9.89708 10.677 9.90637C10.6055 9.92495 10.5306 9.93779 10.457 9.95064C10.3185 9.97486 10.1784 9.98892 10.0379 9.99277H9.95646C9.81592 9.98892 9.6758 9.97486 9.53732 9.95064C9.4659 9.93779 9.39021 9.92495 9.31741 9.90637C9.27955 9.89708 9.24599 9.88282 9.20675 9.87211C8.99927 9.80947 8.79915 9.72475 8.60979 9.61932L8.59694 9.61505C7.22195 8.84191 6.73407 7.10053 7.50721 5.72554ZM16.9763 14.9505C16.5181 12.8132 15.1107 11.0013 13.1533 10.0285C14.7534 8.28549 14.6375 5.57529 12.8945 3.97516C11.1514 2.37503 8.44122 2.49093 6.84109 4.23398C5.33682 5.87264 5.33682 8.38992 6.84109 10.0285C4.88366 11.0013 3.47628 12.8132 3.01806 14.9505C0.279956 11.0936 1.18686 5.74738 5.04369 3.00927C8.90053 0.271165 14.2468 1.17806 16.9849 5.0349C18.0142 6.48474 18.5667 8.21901 18.5658 9.99708C18.5658 11.7736 18.01 13.5056 16.9763 14.9505Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={s.pageName}>My page</div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>
                        <div className={s.indicator}>i</div>
                        <svg className={s.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2422 2.96839H16.4844V2.38245C16.4844 1.41319 15.6959 0.624634 14.7266 0.624634H1.75782C0.788556 0.624634 0 1.41319 0 2.38245V11.7575C0 12.7267 0.788556 13.5153 1.75782 13.5153H3.51563V16.445C3.51563 16.9678 4.14931 17.2259 4.51587 16.8593L5.51614 15.859H12.1401L15.4841 19.203C15.8509 19.5699 16.4844 19.3124 16.4844 18.7887V15.859H18.2422C19.2114 15.859 20 15.0705 20 14.1012V4.7262C20 3.75694 19.2115 2.96839 18.2422 2.96839ZM4.68751 15.0304V12.9293C4.68751 12.6058 4.42517 12.3434 4.10157 12.3434H1.75782C1.43473 12.3434 1.17188 12.0806 1.17188 11.7575V2.38245C1.17188 2.05936 1.43473 1.79651 1.75782 1.79651H14.7266C15.0497 1.79651 15.3125 2.05936 15.3125 2.38245V11.7575C15.3125 12.0806 15.0497 12.3434 14.7266 12.3434H7.6172C7.46177 12.3434 7.31279 12.4052 7.20291 12.515L4.68751 15.0304ZM18.8282 14.1012C18.8282 14.4243 18.5653 14.6872 18.2422 14.6872H15.8985C15.5749 14.6872 15.3125 14.9495 15.3125 15.2731V17.3742L12.7971 14.8588C12.6873 14.7489 12.5382 14.6872 12.3828 14.6872H6.68802L7.8599 13.5153H14.7266C15.6959 13.5153 16.4844 12.7267 16.4844 11.7575V4.14027H18.2422C18.5653 4.14027 18.8282 4.40312 18.8282 4.7262V14.1012Z" fill="black"/>
                            <path d="M11.211 4.14026H2.92969C2.60609 4.14026 2.34375 4.4026 2.34375 4.7262C2.34375 5.04979 2.60609 5.31214 2.92969 5.31214H11.211C11.5345 5.31214 11.7969 5.04979 11.7969 4.7262C11.7969 4.4026 11.5345 4.14026 11.211 4.14026Z" fill="black"/>
                            <path d="M13.5547 6.48413H2.92969C2.60609 6.48413 2.34375 6.74648 2.34375 7.07007C2.34375 7.39366 2.60609 7.65601 2.92969 7.65601H13.5547C13.8783 7.65601 14.1406 7.39366 14.1406 7.07007C14.1406 6.74648 13.8783 6.48413 13.5547 6.48413Z" fill="black"/>
                            <path d="M8.8672 8.82788H2.92969C2.60609 8.82788 2.34375 9.09023 2.34375 9.41382C2.34375 9.73741 2.60609 9.99976 2.92969 9.99976H8.8672C9.19079 9.99976 9.45314 9.73741 9.45314 9.41382C9.45314 9.09023 9.19079 8.82788 8.8672 8.82788Z" fill="black"/>
                        </svg>
                        <div className={s.pageName}>Messages</div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}>
                        <div className={s.indicator}>i</div>
                        <svg className={s.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20">
                            <g id="users" transform="translate(-0.001 -25.494)">
                                <g id="Сгруппировать_83" data-name="Сгруппировать 83" transform="translate(0.001 25.494)">
                                    <path id="Контур_34" data-name="Контур 34" d="M19.458,35.239a5.328,5.328,0,0,0,.45-7.89,6.3,6.3,0,0,0-7.9-.832,6.271,6.271,0,0,0-8.35,1.344,5.324,5.324,0,0,0,.888,7.378A7.885,7.885,0,0,0,0,42.3v2.4a.83.83,0,0,0,.857.8H23.143a.83.83,0,0,0,.857-.8V42.3A7.885,7.885,0,0,0,19.458,35.239ZM15.429,27.1a4.144,4.144,0,0,1,4.284,3.988,3.988,3.988,0,0,1-2.523,3.645c-.066.028-.132.054-.2.08a4.426,4.426,0,0,1-.652.19c-.043.009-.086.014-.129.022a4.586,4.586,0,0,1-.754.071c-.114,0-.229-.008-.343-.018a.693.693,0,0,1-.129-.008,4.566,4.566,0,0,1-1.4-.385c-.016-.007-.035-.006-.051-.013-.086-.038-.171-.072-.248-.115.007-.008.011-.017.018-.025a5.508,5.508,0,0,0,.918-1.56l.027-.067a5.336,5.336,0,0,0,.227-.823c.008-.041.014-.08.021-.124a4.767,4.767,0,0,0,0-1.718c-.007-.042-.013-.08-.021-.124a5.337,5.337,0,0,0-.227-.823l-.027-.067a5.509,5.509,0,0,0-.918-1.56c-.007-.008-.011-.017-.018-.025A4.5,4.5,0,0,1,15.429,27.1Zm-11.143,4a4.137,4.137,0,0,1,4.264-4,4.443,4.443,0,0,1,2.97,1.11c.05.045.1.09.147.136a4.187,4.187,0,0,1,.406.46c.038.05.072.1.107.154a3.858,3.858,0,0,1,.315.54c.021.046.038.092.057.138a3.719,3.719,0,0,1,.213.64c.006.024.008.048.013.073a3.517,3.517,0,0,1,0,1.5c-.005.025-.007.049-.013.073a3.71,3.71,0,0,1-.213.64c-.019.046-.035.092-.057.138a3.873,3.873,0,0,1-.315.539c-.035.051-.069.1-.107.154a4.178,4.178,0,0,1-.406.46c-.048.046-.1.091-.147.136a4.308,4.308,0,0,1-1.184.745c-.069.03-.14.057-.211.08A4.542,4.542,0,0,1,9.489,35c-.054.011-.11.018-.165.026a4.548,4.548,0,0,1-.705.066H8.525a4.543,4.543,0,0,1-.705-.066c-.055-.009-.111-.015-.165-.026a4.54,4.54,0,0,1-.636-.184l-.211-.08A3.994,3.994,0,0,1,4.286,31.1ZM15.429,43.894H1.715V42.3a6.4,6.4,0,0,1,4.558-6.026,6.38,6.38,0,0,0,4.6,0,7.148,7.148,0,0,1,.835.345c.178.086.343.183.514.281.111.065.225.128.332.2.165.11.321.229.475.351.1.08.2.16.289.24.141.125.274.257.4.392.092.1.181.2.266.3.112.134.219.272.319.413.086.12.162.245.237.369s.165.275.237.418.135.3.2.453c.054.133.111.265.156.4.06.185.1.377.144.569.026.114.059.225.078.34a6.179,6.179,0,0,1,.078.956v1.6Zm6.857,0H17.143V42.3c0-.25-.015-.5-.039-.744-.007-.072-.019-.143-.027-.215-.023-.177-.05-.352-.086-.525q-.023-.111-.049-.223-.062-.267-.143-.529c-.018-.058-.034-.116-.053-.173a7.7,7.7,0,0,0-1.033-2.021l-.033-.046q-.221-.306-.472-.592L15.2,37.22a7.458,7.458,0,0,0-.553-.573h.035a6.5,6.5,0,0,0,.729.048h.047a6.492,6.492,0,0,0,.675-.041c.07-.008.14-.02.21-.03q.273-.039.54-.1c.051-.012.1-.023.153-.037a6.13,6.13,0,0,0,.686-.217A6.4,6.4,0,0,1,22.286,42.3v1.6Z" transform="translate(-0.001 -25.494)"/>
                                </g>
                            </g>
                        </svg>
                        <div className={s.pageName}>Users</div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>
                        <div className={s.indicator}>i</div>
                        <svg className={s.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M19.4926 6.77676C18.9056 5.57285 17.8973 4.89877 16.9219 4.24611C16.195 3.75912 15.5095 3.29926 15.0239 2.64089L14.934 2.5195C14.6483 2.13533 14.3227 1.69975 14.2727 1.33415C14.2228 0.964266 13.9314 0.707203 13.5173 0.718628C13.1431 0.744334 12.8532 1.05567 12.8532 1.43127V14.1559C12.2548 13.7932 11.5179 13.5704 10.711 13.5704C8.74302 13.5704 7.14066 14.8514 7.14066 16.4266C7.14066 18.0019 8.74302 19.2829 10.711 19.2829C12.6804 19.2829 14.2813 18.0019 14.2813 16.4266V8.1035C15.3538 8.51337 17.109 9.55733 17.5917 11.9952C17.5017 12.128 17.4161 12.2722 17.3161 12.385C17.0547 12.6807 17.0847 13.1319 17.3804 13.3919C17.6746 13.6546 18.1258 13.6232 18.3872 13.3276C19.2812 12.3122 19.8967 10.7041 19.9924 9.13175C20.0395 8.35628 19.8667 7.54224 19.4926 6.77676Z" fill="black"/>
                                <path d="M0.714066 2.14529H9.28285C9.67702 2.14529 9.99692 1.82539 9.99692 1.43123C9.99692 1.03706 9.67702 0.717163 9.28285 0.717163H0.714066C0.319901 0.717163 0 1.03706 0 1.43123C0 1.82539 0.319901 2.14529 0.714066 2.14529Z" fill="black"/>
                                <path d="M0.714066 6.42972H9.28285C9.67702 6.42972 9.99692 6.10982 9.99692 5.71565C9.99692 5.32149 9.67702 5.00159 9.28285 5.00159H0.714066C0.319901 5.00159 0 5.32149 0 5.71565C0 6.10982 0.319901 6.42972 0.714066 6.42972Z" fill="black"/>
                                <path d="M4.99847 9.28601H0.714067C0.319902 9.28601 0 9.60591 0 10.0001C0 10.3942 0.319902 10.7141 0.714067 10.7141H4.99847C5.39263 10.7141 5.71253 10.3942 5.71253 10.0001C5.71253 9.60591 5.39263 9.28601 4.99847 9.28601Z" fill="black"/>
                                <path d="M4.99847 13.5703H0.714067C0.319902 13.5703 0 13.8902 0 14.2844C0 14.6785 0.319902 14.9984 0.714067 14.9984H4.99847C5.39263 14.9984 5.71253 14.6785 5.71253 14.2844C5.71253 13.8902 5.39263 13.5703 4.99847 13.5703Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={s.pageName}>Music</div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news-feed" activeClassName={s.activeLink}>
                        <div className={s.indicator}>i</div>
                        <svg className={s.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.712 5.64075H8.74504C8.30727 5.64075 7.95242 5.99555 7.95242 6.43336C7.95242 6.87114 8.30723 7.22598 8.74504 7.22598H13.712C14.1501 7.22598 14.5046 6.87118 14.5046 6.43336C14.5046 5.99555 14.1498 5.64075 13.712 5.64075Z" fill="black"/>
                            <path d="M15.6143 9.47156H8.74504C8.30727 9.47156 7.95242 9.82637 7.95242 10.2642C7.95242 10.702 8.30723 11.0568 8.74504 11.0568H15.6143C16.052 11.0568 16.4069 10.702 16.4069 10.2642C16.4069 9.82637 16.052 9.47156 15.6143 9.47156Z" fill="black"/>
                            <path d="M19.2074 0.673706H5.17832C4.74055 0.673706 4.3857 1.02851 4.3857 1.46632V8.9432H2.98547C1.33922 8.9432 0 10.2827 0 11.9287V16.3408C0 17.9871 1.33922 19.3263 2.98547 19.3263C3.1202 19.3263 3.25285 19.3173 3.38258 19.2999H16.4597C18.4116 19.2999 20 17.7118 20 15.7596V1.46632C20 1.02851 19.6452 0.673706 19.2074 0.673706ZM4.38574 16.3408C4.38574 17.0201 3.89934 17.5881 3.25656 17.7146H2.98551V17.741C2.21324 17.741 1.58523 17.1128 1.58523 16.3408V11.9287C1.58523 11.1567 2.21352 10.5284 2.98551 10.5284H4.38578V16.3408H4.38574ZM18.4148 15.7596C18.4148 16.8193 17.5197 17.7146 16.4597 17.7146H5.63566C5.84992 17.3033 5.97094 16.8359 5.97094 16.3408V2.2589H18.4148V15.7596Z" fill="black"/>
                            <path d="M13.712 13.0649H8.74504C8.30727 13.0649 7.95242 13.4197 7.95242 13.8576C7.95242 14.2953 8.30723 14.6502 8.74504 14.6502H13.712C14.1501 14.6502 14.5046 14.2954 14.5046 13.8576C14.5046 13.4197 14.1498 13.0649 13.712 13.0649Z" fill="black"/>
                        </svg>
                        <div className={s.pageName}>News feed</div>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>
                        <div className={s.indicator}>i</div>
                        <svg className={s.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M10.6276 20H9.37238C8.35719 20 7.53121 19.1741 7.53121 18.1589V17.7342C7.09961 17.5963 6.68027 17.4223 6.27742 17.2138L5.97648 17.5147C5.24762 18.2445 4.08008 18.2231 3.37238 17.5145L2.48523 16.6273C1.77629 15.9192 1.7559 14.752 2.48547 14.0232L2.78617 13.7225C2.5777 13.3197 2.40367 12.9004 2.26574 12.4688H1.84113C0.825976 12.4688 0 11.6428 0 10.6276V9.37238C0 8.35719 0.825976 7.53125 1.84117 7.53125H2.26578C2.40371 7.09961 2.57773 6.68031 2.78621 6.27746L2.48527 5.97656C1.75613 5.2482 1.77625 4.08094 2.48551 3.37246L3.37273 2.48527C4.08207 1.77496 5.24934 1.75723 5.9768 2.48551L6.27746 2.78617C6.68031 2.57773 7.09965 2.40367 7.53125 2.26574V1.84113C7.53125 0.825937 8.35719 0 9.37242 0H10.6276C11.6428 0 12.4688 0.825937 12.4688 1.84113V2.26578C12.9004 2.40367 13.3197 2.57773 13.7225 2.78621L14.0235 2.48527C14.7523 1.75551 15.9199 1.77691 16.6276 2.48555L17.5147 3.37266C18.2237 4.08082 18.2441 5.24797 17.5145 5.97676L17.2138 6.27746C17.4223 6.68031 17.5963 7.09957 17.7342 7.53125H18.1588C19.174 7.53125 20 8.35719 20 9.37238V10.6276C20 11.6428 19.174 12.4688 18.1588 12.4688H17.7342C17.5963 12.9004 17.4223 13.3197 17.2138 13.7225L17.5147 14.0235C18.2439 14.7518 18.2237 15.9191 17.5145 16.6276L16.6273 17.5148C15.9179 18.2251 14.7507 18.2428 14.0232 17.5145L13.7225 17.2139C13.3197 17.4223 12.9004 17.5964 12.4688 17.7343V18.1589C12.4688 19.1741 11.6428 20 10.6276 20ZM6.47332 15.9832C7.03297 16.3142 7.63531 16.5642 8.26359 16.7264C8.52234 16.7931 8.70312 17.0265 8.70312 17.2937V18.1589C8.70312 18.5279 9.0034 18.8281 9.37242 18.8281H10.6276C10.9966 18.8281 11.2969 18.5279 11.2969 18.1589V17.2937C11.2969 17.0265 11.4777 16.7931 11.7364 16.7264C12.3647 16.5642 12.9671 16.3142 13.5267 15.9832C13.757 15.847 14.0502 15.8841 14.2393 16.0732L14.8521 16.6861C15.1164 16.9506 15.5407 16.9445 15.7984 16.6864L16.6862 15.7986C16.9433 15.5418 16.9519 15.1175 16.6864 14.8523L16.0733 14.2393C15.8842 14.0501 15.8471 13.7569 15.9833 13.5267C16.3143 12.9671 16.5643 12.3647 16.7264 11.7364C16.7932 11.4777 17.0266 11.2969 17.2938 11.2969H18.1589C18.5279 11.2969 18.8282 10.9967 18.8282 10.6277V9.37242C18.8282 9.0034 18.5279 8.70316 18.1589 8.70316H17.2938C17.0265 8.70316 16.7932 8.52238 16.7264 8.26367C16.5643 7.63535 16.3142 7.03301 15.9833 6.4734C15.8471 6.24316 15.8842 5.94996 16.0733 5.76082L16.6862 5.14797C16.9511 4.88336 16.9442 4.45914 16.6864 4.20168L15.7987 3.31398C15.5414 3.05633 15.117 3.04879 14.8524 3.31375L14.2394 3.92684C14.0502 4.11602 13.757 4.15305 13.5268 4.01688C12.9671 3.6859 12.3648 3.43586 11.7365 3.27371C11.4777 3.20695 11.297 2.97359 11.297 2.70637V1.84113C11.297 1.47211 10.9967 1.17188 10.6277 1.17188H9.37246C9.00344 1.17188 8.70316 1.47211 8.70316 1.84113V2.70629C8.70316 2.97352 8.52238 3.20688 8.26363 3.27363C7.63535 3.43578 7.03301 3.68582 6.47336 4.0168C6.24305 4.15293 5.94988 4.1159 5.76074 3.92676L5.14793 3.31391C4.88371 3.04938 4.45938 3.05551 4.20168 3.31363L3.31391 4.20137C3.0568 4.45816 3.0482 4.8825 3.31367 5.14766L3.92676 5.76074C4.1159 5.94988 4.15293 6.24309 4.0168 6.47332C3.68582 7.03293 3.43582 7.63527 3.27367 8.26359C3.20688 8.52234 2.97352 8.70309 2.70633 8.70309H1.84117C1.47215 8.70312 1.17188 9.00336 1.17188 9.37238V10.6276C1.17188 10.9966 1.47215 11.2969 1.84117 11.2969H2.70629C2.97352 11.2969 3.20684 11.4777 3.27363 11.7364C3.43578 12.3647 3.68582 12.967 4.01676 13.5266C4.15289 13.7569 4.11586 14.0501 3.92672 14.2392L3.31387 14.8521C3.04895 15.1167 3.05586 15.5409 3.31363 15.7984L4.20133 16.6861C4.45863 16.9437 4.88301 16.9513 5.14762 16.6863L5.76066 16.0732C5.90004 15.9339 6.19 15.8156 6.47332 15.9832Z" fill="black"/>
                                <path d="M10 14.3516C7.60054 14.3516 5.64847 12.3995 5.64847 10C5.64847 7.60055 7.60054 5.64844 10 5.64844C12.3995 5.64844 14.3516 7.60055 14.3516 10C14.3516 12.3995 12.3995 14.3516 10 14.3516ZM10 6.82031C8.24671 6.82031 6.82034 8.24672 6.82034 10C6.82034 11.7533 8.24675 13.1797 10 13.1797C11.7533 13.1797 13.1797 11.7533 13.1797 10C13.1797 8.24672 11.7533 6.82031 10 6.82031Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={s.pageName}>Settings</div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;