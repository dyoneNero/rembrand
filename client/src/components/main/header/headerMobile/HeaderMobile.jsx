import React, {useState} from 'react';

import style from './header-mobile.module.scss'
import Logo from "../../../../assets/logo.svg";

import RequestIcon from '../../../../assets/request.svg'
import {useCookies} from "react-cookie";

const HeaderMobile = () => {

    const [cookies, setCookies] = useCookies(['_request_open'])

    return (
        <div className={style.headerMobile}>
            <img src={Logo} alt=''/>
            <div className={style.requestBtn}>
                <img src={RequestIcon} alt="" onClick={() => setCookies('_request_open', 'true')}/>
            </div>
        </div>
    );
};

export default HeaderMobile;