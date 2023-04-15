import React, {useState} from 'react';

import style from './header-mobile.module.scss'
import Logo from "../../../../assets/logo.svg";

import RequestIcon from '../../../../assets/request.svg'
import {useCookies} from "react-cookie";
import {Link} from "react-router-dom";

const HeaderMobile = () => {

    const [cookies, setCookies] = useCookies(['_request_open'])

    return (
        <div className={style.headerMobile}>
            <Link to="/">
                <img src={Logo} alt=''/>
            </Link>
            <div className={style.requestBtn}>
                <img src={RequestIcon} alt="" onClick={() => setCookies('_request_open', 'true')}/>
            </div>
        </div>
    );
};

export default HeaderMobile;