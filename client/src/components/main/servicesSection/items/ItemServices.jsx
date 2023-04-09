import React, {useState} from 'react';
import style from './item-services.module.scss'
import Request from "../../requestPopup/Request";

const ItemServices = ({name,description,price, image}) => {

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
                    <button>Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default ItemServices;