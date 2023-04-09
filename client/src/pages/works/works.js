import React, {useEffect, useState} from 'react';

import style from './works.module.scss'
import Header from "../../components/main/header/Header";
import {getInfo} from "../main/service";
import BlockVideo from "../../components/main/blockVideo/BlockVideo";
import BlockImages from "../../components/main/blockImages/BlockImages";
import Footer from "../../components/main/footer/Footer";
import {useLocation, useParams} from "react-router-dom";
import {getWork} from "./service";

const Works = () => {

    const [info, setInfo] = useState({})
    const [work, setWork] = useState({})

    let { id } = useParams()
    const { pathname } = useLocation();

    const url = `${process.env.REACT_APP_SERVER_URL}/works/${id}`

    console.log(url)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        getInfo(setInfo)
        getWork(url, setWork)
    }, [])

    console.log(work)

    return (
        <div className={style.works}>
            <Header headerTel={info.headerTel}/>
            <div className={style.container}>
                <BlockVideo name={work.name} video={work.video} description={work.description}/>
                <BlockImages image={work.image}/>
            </div>
            <Footer copyright={info.copyright}/>
        </div>
    );
};

export default Works;