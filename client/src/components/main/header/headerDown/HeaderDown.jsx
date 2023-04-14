import React, {useEffect, useState} from 'react';
import style from './header-down.module.scss'

import RequestIcon from '../../../../assets/request.svg'
import Request from "../../requestPopup/Request";

const HeaderDown = ({shadow}) => {

    const [showPopupRequest, setShowPopupRequest] = useState(false)

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
                    <button onClick={() => setShowPopupRequest(true)}>
                        <img src={RequestIcon} alt=""/>
                        <p>Оставить заявку</p>
                    </button>
                </div>
            </header>
            <Request showPopupRequest={showPopupRequest} setShowPopupRequest={setShowPopupRequest}/>
        </>

    );
};

export default HeaderDown;