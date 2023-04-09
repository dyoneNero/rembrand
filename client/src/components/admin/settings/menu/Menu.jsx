import React from 'react';
import MenuLink from "./MenuLink";
import style from './menu.module.scss'

import Logout from '../../../../assets/logout.svg'
import {useNavigate} from "react-router-dom";
import removeCookie from "../../../cookies/removeCookie";

const Menu = () => {

    const navigate = useNavigate()

    function logout() {
        removeCookie('_auth')
        navigate('/')
    }

    return (
        <div className={style.menu}>
            <div>
                <MenuLink path='/admin/settings/stocks' name='Акции и скидки'/>
                <MenuLink path='/admin/settings/services' name='Услуги'/>
                <MenuLink path='/admin/settings/works' name='Наши работы'/>
                <MenuLink path='/admin/settings/info' name='Информация'/>
                <MenuLink path='/admin/settings/request' name='Заявки'/>
            </div>
            <div>
                <button onClick={() => logout()}>
                    <img src={Logout} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default Menu;