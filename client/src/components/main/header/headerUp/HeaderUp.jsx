import React, {useContext, useEffect, useState} from 'react';

import style from './header-up.module.scss'

import Logo from '../../../../assets/logo.svg'
import {Link, useParams} from "react-router-dom";

const HeaderUp = ({headerTel}) => {

    return (
        <header className={style.headerUp}>
            <div className={style.headerUpContainer}>
                <Link to="/">
                    <img src={Logo} alt=''/>
                </Link>
                <a href={`tel:${headerTel}`}>{headerTel}</a>
            </div>
        </header>
    );
};

export default HeaderUp;