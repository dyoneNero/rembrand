import React, {useEffect} from 'react';
import style from './header-down.module.scss'

import RequestIcon from '../../../../assets/request.svg'
import setCookieRequest from "../../../cookies/setCookieRequest";
import {useCookies} from "react-cookie";

const HeaderDown = ({shadow}) => {


    const [cookies, setCookies] = useCookies(['_request_open'])

    useEffect(() => {
        const scrollHandler = () => {
            if (window.pageYOffset >= 100) {
                const header = document.querySelector('#header_down');

                if (shadow) {
                    header.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                }
                header.style.backdropFilter="blur(4px)"
                header.style.position = 'fixed'
                header.style.backgroundColor = "rgba(255,255,255,0.9)"
            }
            else {
                const header = document.querySelector('#header_down');
                header.style.position = 'static'
                header.style.backgroundColor = "rgba(255,255,255,0.8)"
                header.style.backdropFilter = 'blur(0)'
            }
        };
        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    });

    const nav = [
        {
            name: "Главная",
            link: "/#main"
        },
        {
            name: "О нас",
            link: "/#about-us"
        },
        {
            name: "Тарифы",
            link: "/#services"
        },
        {
            name: "Акции и скидки",
            link: "/#stocks"
        },
        {
            name: "Наши работы",
            link: "/#works"
        },
        {
            name: "Контакты",
            link: "/#contacts"
        },
    ]

    return (
        <>
            <header id="header_down" className={style.headerDown}>
                <div className={style.headerDownContainer}>
                    <nav className={style.headerDownNav}>
                        {
                            nav.map((item) => (
                                <a href={item.link}>
                                    {item.name}
                                </a>
                            ))
                        }
                    </nav>
                    <button onClick={() => setCookies('_request_open', 'true')}>
                        <img src={RequestIcon} alt=""/>
                        <p>Оставить заявку</p>
                    </button>
                </div>
            </header>
        </>

    );
};

export default HeaderDown;