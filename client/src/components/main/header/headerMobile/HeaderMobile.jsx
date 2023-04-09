import React, {useState} from 'react';

import style from './header-mobile.module.scss'
import Logo from "../../../../assets/logo.svg";
import Request from "../../requestPopup/Request";

import RequestIcon from '../../../../assets/request.svg'

const HeaderMobile = () => {

    const [showPopupRequest, setShowPopupRequest] = useState(false)

    return (
        <div className={style.headerMobile}>
            <img src={Logo} alt=''/>
            <div className={style.requestBtn}>
                <img src={RequestIcon} alt="" onClick={() => setShowPopupRequest(true)}/>
            </div>
            <Request showPopupRequest={showPopupRequest} setShowPopupRequest={setShowPopupRequest}/>
        </div>
    );
};

export default HeaderMobile;