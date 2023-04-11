import style from './section-with-swiper.module.scss'

import {A11y, Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ItemStocks from "./items/stocks/ItemStocks";
import ItemWorks from "./items/works/ItemWorks"

import './arrow.scss';
import {useState} from "react";
import {getAllStocks, getAllWorks} from "./service";

const SectionWithSwiper = ({path, setting, name, type, anchor}) => {

    const [allWorks, setAllWorks] = useState([])
    const [allStocks, setAllStocks] = useState([])
    const [stocks, setStocks] = useState(false)


    const settingSwiper = {
        modules: [Navigation, A11y, Autoplay],
        ...setting
    }

    if (type === 'works') {
        getAllWorks(setAllWorks)
        setStocks(false)
    }
    else {
        getAllStocks(setAllStocks)
        setStocks(true)
    }



    return (
        <section id={anchor} className={style.swiperSection}>
            <h1>{name}</h1>
            <div className={style.swiperBlock}>
                <Swiper {...settingSwiper}>
                    {
                        stocks ?
                            <div>
                                {
                                    allStocks && allStocks.map((item) => (
                                        <SwiperSlide>
                                            <ItemStocks {...item}/>
                                        </SwiperSlide>
                                    ))
                                }
                            </div>
                            :
                            <div>
                                {
                                    allWorks && allWorks.map((item) => (
                                        <SwiperSlide>
                                            <ItemWorks {...item}/>
                                        </SwiperSlide>
                                    ))
                                }
                            </div>
                    }
                </Swiper>
                <div className={`next-${path}`}></div>
                <div className={`prev-${path}`}></div>
            </div>
        </section>
    );
};

export default SectionWithSwiper;