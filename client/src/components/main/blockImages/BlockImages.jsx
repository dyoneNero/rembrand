import React from 'react';

import './block-images.scss'
import {Swiper, SwiperSlide} from "swiper/react";

const BlockImages = ({image}) => {

        return (
            <div className="blockImages">
                <Swiper
                    slidesPerView={'auto'} spaceBetween={50} slidesPerColumn={1} centeredSlides={true}
                >
                    {
                        image && image.map(item => (
                            <SwiperSlide className="swiper-slide">
                                <div style={{ backgroundImage: 'url(' + item + ')'}} className="image"></div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        );
};

export default BlockImages;