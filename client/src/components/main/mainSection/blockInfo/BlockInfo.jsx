import React from 'react';
import style from './block-info.module.scss'

const BlockInfo = ({mainTitle, mainSubtitle}) => {
    return (
        <div className={style.blockInfo}>
            <div>
                <h1>{mainTitle}</h1>
                <h2>{mainSubtitle}</h2>
            </div>
            <button>ОФОРМИТЬ ЗАКАЗ</button>
        </div>
    );
};

export default BlockInfo;