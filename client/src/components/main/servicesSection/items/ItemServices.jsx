import React from 'react';
import style from './item-services.module.scss'
import {useCookies} from "react-cookie";

const ItemServices = ({name,description,price, image}) => {

    const [cookies, setCookies] = useCookies(['_request_open'])

    return (
        <div className={style.itemServices}>
            <div style={{ backgroundImage: 'url(' + image + ')'}} className={style.itemImage}></div>
            <div className={style.itemServicesContent}>
                <div className={style.itemServicesContentText}>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                <div className={style.itemServicesContentBtn}>
                    <p>{price}
                        {/*<span>за м²</span>*/}
                    </p>
                    <button onClick={() => setCookies('_request_open', 'true')}>Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default ItemServices;