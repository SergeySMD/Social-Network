import React from "react";
import s from './preloader.module.css'

const Preloader = ({h,w}) => {
    return (
        <div className={s.preloader}>
            <svg id="Preloader" xmlns="http://www.w3.org/2000/svg" width={w+'px'} height={h+'px'} viewBox="0 0 128 128">
                <g>
                <path id="Контур_35" data-name="Контур 35" d="M64,0,40.08,21.9a10.98,10.98,0,0,0-5.05,8.75C34.37,44.85,64,60.63,64,60.63Z" fill="#ffb118"/>
                <path id="Контур_36" data-name="Контур 36" d="M128,64,106.12,40.1a10.97,10.97,0,0,0-8.75-5.05C83.17,34.4,67.4,64,67.4,64Z" fill="#80c141"/>
                <path id="Контур_37" data-name="Контур 37" d="M63.7,69.73a110.97,110.97,0,0,1-5.04-20.54c-1.16-8.7.68-14.17.68-14.17H97.37s-4.3-.86-14.47,10.1C79.84,48.42,63.7,69.7,63.7,69.7Z" fill="#cadc28"/>
                <path id="Контур_38" data-name="Контур 38" d="M64,128l23.9-21.88a10.97,10.97,0,0,0,5.05-8.75C93.6,83.17,64,67.4,64,67.4Z" fill="#cf171f"/>
                <path id="Контур_39" data-name="Контур 39" d="M58.27,63.7a110.97,110.97,0,0,1,20.54-5.04c8.7-1.16,14.17.68,14.17.68V97.37s.86-4.3-10.1-14.47C79.58,79.84,58.3,63.7,58.3,63.7Z" fill="#ec1b21"/>
                <path id="Контур_40" data-name="Контур 40" d="M0,64,21.88,87.9a10.97,10.97,0,0,0,8.75,5.05C44.83,93.6,60.6,64,60.6,64Z" fill="#018ed5"/>
                <path id="Контур_41" data-name="Контур 41" d="M64.3,58.27a110.97,110.97,0,0,1,5.04,20.54c1.16,8.7-.68,14.17-.68,14.17H30.63s4.3.86,14.47-10.1c3.06-3.3,19.2-24.58,19.2-24.58Z" fill="#00bbf2"/>
                <path id="Контур_42" data-name="Контур 42" d="M69.73,64.34a111.023,111.023,0,0,1-20.55,5.05c-8.7,1.14-14.15-.7-14.15-.7V30.65s-.86,4.3,10.1,14.5c3.3,3.05,24.6,19.2,24.6,19.2Z" fill="#f8f400"/>
                <circle id="Эллипс_6" data-name="Эллипс 6" cx="2.03" cy="2.03" r="2.03" transform="translate(61.97 61.97)" />
                <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="-360 64 64" dur="1800ms" repeatCount="indefinite"/>
                </g>
            </svg>

            {/*<svg width={w+'px'} height={h+'px'} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*    <g transform="rotate(0 50 50)">*/}
            {/*        <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9s" repeatCount="indefinite"></animate>*/}
            {/*        </rect>*/}
            {/*    </g><g transform="rotate(36 50 50)">*/}
            {/*    <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8s" repeatCount="indefinite"></animate>*/}
            {/*    </rect>*/}
            {/*</g><g transform="rotate(72 50 50)">*/}
            {/*    <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7s" repeatCount="indefinite"></animate>*/}
            {/*    </rect>*/}
            {/*</g><g transform="rotate(108 50 50)">*/}
            {/*    <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6s" repeatCount="indefinite"></animate>*/}
            {/*    </rect>*/}
            {/*</g><g transform="rotate(144 50 50)">*/}
            {/*    <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>*/}
            {/*    </rect>*/}
            {/*</g><g transform="rotate(180 50 50)">*/}
            {/*    <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4s" repeatCount="indefinite"></animate>*/}
            {/*    </rect>*/}
            {/*</g><g transform="rotate(216 50 50)">*/}
            {/*    <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3s" repeatCount="indefinite"></animate>*/}
            {/*    </rect>*/}
            {/*</g><g transform="rotate(252 50 50)">*/}
            {/*    <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2s" repeatCount="indefinite"></animate>*/}
            {/*    </rect>*/}
            {/*</g><g transform="rotate(288 50 50)">*/}
            {/*    <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.1s" repeatCount="indefinite"></animate>*/}
            {/*    </rect>*/}
            {/*</g><g transform="rotate(324 50 50)">*/}
            {/*    <rect x="46" y="21" rx="4" ry="4" width="8" height="8" fill="#2475f6">*/}
            {/*        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>*/}
            {/*    </rect>*/}
            {/*</g>*/}
            {/*</svg>*/}
            {/*<img className={s.preloader} src={PreloaderGIF} style={{height: h + 'px',width: w+ 'px'}}/>*/}
        </div>
    )
}
export default Preloader