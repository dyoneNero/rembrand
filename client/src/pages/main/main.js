import React, {useEffect, useState} from 'react';
import BackGround from "../../components/main/background/BackGround";

import style from './main.module.scss'

import MainSection from "../../components/main/mainSection/MainSection";
import AboutUs from "../../components/main/aboutUsSection/AboutUs";
import ServicesSection from "../../components/main/servicesSection/ServicesSection";
import SectionWithSwiper from "../../components/main/SectionWithSwiper/SectionWithSwiper";
import stocksSettings from './sectionWithSwiper/stocks/settings.json'
import worksSettings from './sectionWithSwiper/works/settings.json'
import ContactLocationSection from "../../components/main/contactLocationSection/ContactLocationSection";

import Footer from "../../components/main/footer/Footer";
import Header from "../../components/main/header/Header";

import {getInfo} from "./service";
import Request from "../../components/main/requestPopup/Request";


const MainPage = () => {

    console.log(process.env.REACT_APP_SERVER_URL)
    console.log(process.env.NODE_ENV)

    const [info, setInfo] = useState({})

    useEffect(() => {
        getInfo(setInfo)
    }, [])

    return (
        <div className={style.main}>
            <Header headerTel={info.headerTel} shadow={true}/>
            <BackGround/>
            <div className={style.container}>
                <MainSection mainTitle={info.mainTitle} mainSubtitle={info.mainSubtitle}/>
                <AboutUs aboutUsSlogan={info.aboutUsSlogan}/>
                <ServicesSection/>
                <SectionWithSwiper path='stocks' setting={stocksSettings.swiperSettings} name={stocksSettings.name} type={stocksSettings.type} anchor={stocksSettings.anchor}/>
                <SectionWithSwiper path='services' setting={worksSettings.swiperSettings} name={worksSettings.name} type={worksSettings.type} anchor={worksSettings.anchor}/>
                <ContactLocationSection/>
            </div>
            <Footer copyright={info.copyright}/>
            <Request/>
        </div>
    );
};

export default MainPage;