import React from 'react';
import style from './block-info.module.scss'
import {useCookies} from "react-cookie";

const BlockInfo = ({mainTitle, mainSubtitle}) => {

    const [cookies, setCookies] = useCookies(['_request_open'])

    return (
        <div className={style.blockInfo}>
            <div>
                <h1>{mainTitle}</h1>
                <h2>{mainSubtitle}</h2>
            </div>
            <button onClick={() => setCookies('_request_open', 'true')}>ОФОРМИТЬ ЗАКАЗ</button>
        </div>
    );
};

export default BlockInfo;