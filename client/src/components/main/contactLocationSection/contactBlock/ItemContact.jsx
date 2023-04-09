import React from 'react';
import style from "./contact-block.module.scss";

const ItemContact = ({contactTel}) => {
    return (
        <a href={`tel: ${contactTel}`} className={style.telephone}>
            <div></div>
            {contactTel}
        </a>
    );
};

export default ItemContact;