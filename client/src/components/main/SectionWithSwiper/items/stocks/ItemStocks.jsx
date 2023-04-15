import React from 'react';
import style from './item-stocks.module.scss'
import {useCookies} from "react-cookie";

const ItemStocks = ({name, description, image}) => {

    const [cookies, setCookies] = useCookies(['_request_open'])

    return (
        <div className={style.itemStocks}>
            <div className={style.itemStocksContent}>
                <div style={{ backgroundImage: 'url(' + image + ')'}}></div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <button onClick={() => setCookies('_request_open', 'true')}>Участвовать</button>
        </div>
    );
};

export default ItemStocks;