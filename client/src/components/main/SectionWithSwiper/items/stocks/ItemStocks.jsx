import React from 'react';
import style from './item-stocks.module.scss'

const ItemStocks = ({name, description, image}) => {
    return (
        <div className={style.itemStocks}>
            <div className={style.itemStocksContent}>
                <div style={{ backgroundImage: 'url(' + image + ')'}}></div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <button>Участвовать</button>
        </div>
    );
};

export default ItemStocks;