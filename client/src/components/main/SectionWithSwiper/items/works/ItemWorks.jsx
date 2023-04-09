import React, {useState} from 'react';
import style from './item-works.module.scss'
import {Link} from "react-router-dom";

const ItemWorks = ({id, name, image}) => {

    return (
        <>
            <div className={style.itemWorks}>
                <div className={style.itemWorksContent}>
                    <div style={{ backgroundImage: 'url(' + image + ')'}}></div>
                    <h1>{name}</h1>
                </div>
                <Link to={`/works/${id}`}>Подробнее</Link>
            </div>
        </>
    );
};

export default ItemWorks;