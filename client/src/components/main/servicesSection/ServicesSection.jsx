import React, {useEffect, useState} from 'react';
import style from './services-section.module.scss'
import ItemServices from "./items/ItemServices";
import {getAllServices} from "./service";

const ServicesSection = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        getAllServices(setAllServices)
    }, [])

    return (
        <section id='services' className={style.servicesSection}>
            <h1>Тарифы</h1>
            <div className={style.servicesBlock}>
                {
                    allServices.map((item) => (
                        <ItemServices {...item}/>
                    ))
                }
            </div>
        </section>
    );
};

export default ServicesSection;