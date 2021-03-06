import React from "react";
import s from './Slider.module.css'

const Slider = ({isDarkTheme, callback, isThemeSlider, ...props}) => {
    return (
        <div>
            <label className={s.switch}>
                <input type="checkbox" checked={isDarkTheme}/>
                <span onClick={callback} className={`${s.slider} ${s.round}`}/>
                { isThemeSlider ? <div>
                    <svg onClick={callback} className={s.light} xmlns="http://www.w3.org/2000/svg" width="16"
                         height="16" viewBox="0 0 20 20" fill="black">
                        <g id="iconfinder_sun_light_mode_day_5402428" transform="translate(-2 -2)">
                            <circle id="Эллипс_1" data-name="Эллипс 1" cx="5" cy="5" r="5" transform="translate(7 7)"/>
                            <path id="Контур_1" data-name="Контур 1" d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"/>
                            <path id="Контур_2" data-name="Контур 2" d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z"/>
                            <path id="Контур_3" data-name="Контур 3"
                                  d="M17.66,7.34A1,1,0,0,1,17,5.64l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z"/>
                            <path id="Контур_4" data-name="Контур 4"
                                  d="M5.64,19.36a1,1,0,0,1-.71-1.7L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z"/>
                            <path id="Контур_5" data-name="Контур 5"
                                  d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z"/>
                            <path id="Контур_6" data-name="Контур 6"
                                  d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z"/>
                            <path id="Контур_7" data-name="Контур 7"
                                  d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1-.71,1.7Z"/>
                            <path id="Контур_8" data-name="Контур 8"
                                  d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a.948.948,0,0,1-.71,1.65Z"/>
                        </g>
                    </svg>
                    <svg onClick={callback} className={s.dark} xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         viewBox="0 0 20 20" fill="black">
                        <path id="iconfinder_moon_dark_mode_night_5402400"
                              d="M23.727,17.356a10.483,10.483,0,0,1-11.9,5.886A10.094,10.094,0,0,1,3.775,12.936,10.187,10.187,0,0,1,12.9,3.5a.612.612,0,0,1,.619.328.56.56,0,0,1-.109.668,7.442,7.442,0,0,0-2.318,5.451,7.656,7.656,0,0,0,3.927,6.576,8.222,8.222,0,0,0,7.859.129.649.649,0,0,1,.7.082A.6.6,0,0,1,23.727,17.356Z"
                              transform="translate(-3.761 -3.496)"/>
                    </svg>
                </div> : null}
            </label>
        </div>
    )
}
export default Slider;
