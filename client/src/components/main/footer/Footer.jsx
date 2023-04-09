import React from 'react';
import style from './footer.module.scss'

const Footer = ({copyright}) => {
    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <p>{copyright}</p>
            </div>
        </div>
    );
};

export default Footer;