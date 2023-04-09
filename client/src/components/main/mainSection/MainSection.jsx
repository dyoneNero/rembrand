import React from 'react';
import style from './main-section.module.scss'
import ArrowDown from "./arrowDown/ArrowDown";
import BlockInfo from "./blockInfo/BlockInfo";

const MainSection = ({mainTitle, mainSubtitle}) => {
    return (
        <section id='main' className={style.mainSection}>
            <BlockInfo mainTitle={mainTitle} mainSubtitle={mainSubtitle}/>
            <ArrowDown/>
        </section>
    );
};

export default MainSection;