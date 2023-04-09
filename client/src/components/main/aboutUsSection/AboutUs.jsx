import React from 'react';
import style from './about-us-section.module.scss'
import Advantages from "./advantages/Advantages";

const AboutUs = ({aboutUsSlogan}) => {
    return (
        <section id='about-us' className={style.aboutUs}>
            <h1>Почему стоит выбирать именно нас?</h1>
            <div className={style.slogan}>
                {aboutUsSlogan}
            </div>
            <div className={style.container}>
                <Advantages/>
            </div>
        </section>
    );
};

export default AboutUs;