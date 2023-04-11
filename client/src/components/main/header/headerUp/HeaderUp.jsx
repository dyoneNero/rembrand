import React from 'react';

import style from './header-up.module.scss'

import Logo from '../../../../assets/logo.svg'
import {Link} from "react-router-dom";

const HeaderUp = ({headerTel}) => {

    return (
        <div className={style.headerUp}>
            <div className={style.headerUpContainer}>
                <Link to="/">
                    <img src={Logo} alt=''/>
                </Link>
                <a href={`tel:${headerTel}`}>{headerTel}</a>
            </div>
        </div>
    );
};

export default HeaderUp;