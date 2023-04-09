import React from 'react';
import style from './advantages.module.scss'

import Hammer from '../../../../assets/hammer.svg'
import Medal from '../../../../assets/medal.svg'
import Hand from '../../../../assets/hand.svg'
import Bucket from '../../../../assets/bucket.svg'
import Car from '../../../../assets/car.svg'

import AdvantagesItem from "./AdvantagesItem";

const Advantages = () => {

    const ObjItem = [
        {
            text: 'Делаем ремонт за 45 дней',
            icon: Hammer
        },
        {
            text: 'Гарантия на материал и работы',
            icon: Medal
        },
        {
            text: 'Заключаем и соблюдаем договор',
            icon: Hand
        },
        {
            text: 'Делаем полный клининг квартиры перед сдачей',
            icon: Bucket
        },
        {
            text: 'Самостоятельно закупаем и доставляем материалы',
            icon: Car
        },
    ]

    return (
        <div className={style.advantages}>
            {
                ObjItem.map((item, key) =>
                    <AdvantagesItem {...item} key={key}/>
                )
            }
        </div>
    );
};

export default Advantages;