import React, {useEffect, useState} from 'react';
import style from './settings.module.scss'
import Menu from "./menu/Menu";
import {Route, Routes, useNavigate} from "react-router-dom";
import Page from "./pages/pageTemplate/Page";

import pageArr from './pages/page.json'
import pageInfoArr from "./pages/pageInfo.json";
import pageRequestArr from "./pages/pageRequest.json";

import SettingPage from "./SettingPage";
import PageInfo from "./pages/pageTemplate/PageInfo";
import getCookie from "../../cookies/getCookie";
import {getAccessRoute} from "./pages/pageTemplate/service";
import pageRequest from "./pages/pageTemplate/PageRequest";
import PageRequest from "./pages/pageTemplate/PageRequest";

const Settings = () => {

    const [accessRoute, setAccessRoute] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (getCookie('_auth') !== undefined) {
            getAccessRoute(setAccessRoute)
        }
        else {
            navigate('/admin')
        }
    }, [navigate])

    if (accessRoute) {
        return (
            <div className={style.settings}>
                <Menu/>
                <Routes>
                    {
                        pageArr.map(item =>
                            <Route path={pageArr[item.id].path} element={<Page {...item}/>}/>
                        )
                    }
                    <Route path={pageInfoArr.path} element={<PageInfo {...pageInfoArr}/>}/>
                    <Route path={pageRequestArr.path} element={<PageRequest {...pageRequestArr}/>}/>
                    <Route path='/' element={<SettingPage/>}/>
                </Routes>
            </div>
        );
    }
    else {
        navigate('/admin')
    }
};

export default Settings;