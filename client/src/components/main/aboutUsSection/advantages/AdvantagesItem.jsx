import React from 'react';
import style from './advantages.module.scss'

const AdvantagesItem = ({text, icon}) => {
    return (
        <div className={style.advantagesItem}>
            <img src={icon} alt=""/>
            <p>{text}</p>
        </div>
    );
};

export default AdvantagesItem;