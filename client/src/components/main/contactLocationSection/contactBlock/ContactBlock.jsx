import React, {useEffect, useState} from 'react';
import style from './contact-block.module.scss'

import Vk from "../../../../assets/vk.svg"
import Tg from "../../../../assets/tg.svg"
import Wa from "../../../../assets/wa.svg"
import ItemContact from "./ItemContact";
import {getInfo} from "../../../../pages/main/service";
import axios from "axios";

const ContactBlock = () => {

    const [info, setInfo] = useState({})
    const [contactTel, setContactTel] = useState([])

    useEffect(() => {

        const url = process.env.REACT_APP_SERVER_URL + '/info/1'

        axios.get(url)
            .then(response => {
                setInfo(response.data);
                setContactTel(response.data.contactTel)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <div className={style.contactBlock}>
            <div className={style.contactInfoBlock}>
                <p>{info.contactLocation}</p>
                <div>
                    {
                        contactTel.length > 0
                            ?
                            (contactTel.map(item => <ItemContact contactTel={item}/>))
                            :
                            (<p></p>)
                    }
                </div>
            </div>
            <div className={style.socialBlock}>
                <a href={info.contactVK}>
                    <img src={Vk} alt=""/>
                </a>
                <a href={info.contactTg}>
                    <img src={Tg} alt=""/>
                </a>
                <a href={info.contactWA}>
                    <img src={Wa} alt=""/>
                </a>
            </div>
        </div>
    );
};

export default ContactBlock;