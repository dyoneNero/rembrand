import React from 'react';

import style from './header.module.scss'
import HeaderUp from "./headerUp/HeaderUp";
import HeaderDown from "./headerDown/HeaderDown";
import HeaderMobile from "./headerMobile/HeaderMobile";

const Header = ({headerTel, shadow}) => {

    const windowWidth = window.innerWidth

    if (windowWidth >= 1100) {
        return (
            <div className={style.header}>
                <HeaderUp headerTel={headerTel}/>
                <HeaderDown shadow={shadow}/>
            </div>
        );
    }
    else {
        return (
            <HeaderMobile/>
        )
    }
};

export default Header;