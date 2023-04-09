import React from 'react';
import style from './arrow-down.module.scss'

const ArrowDown = () => {

    const arrow = window.innerWidth

    return (
        <div className={style.arrowDown}>
            {
                arrow >= 1320 ?
                    <svg width="127" height="45" viewBox="0 0 127 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.8078 39.318L125.36 3.60502C126.493 2.78876 125.915 1 124.519 1C124.219 1 123.926 1.09428 123.681 1.26958L77.4877 34.4057C69.0981 40.4238 57.7996 40.4018 49.4336 34.3509L3.73725 1.30051C3.46716 1.10516 3.14232 1 2.80899 1C1.27147 1 0.635584 2.97001 1.88288 3.86895L51.0693 39.318C58.4562 44.6418 68.4209 44.6418 75.8078 39.318Z" fill="white" stroke="white" strokeWidth="2"/>
                    </svg>
                    :
                    <svg width="127" height="45" viewBox="0 0 127 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.8078 39.318L125.36 3.60502C126.493 2.78876 125.915 1 124.519 1C124.219 1 123.926 1.09428 123.681 1.26958L77.4877 34.4057C69.0981 40.4238 57.7996 40.4018 49.4336 34.3509L3.73725 1.30051C3.46716 1.10516 3.14232 1 2.80899 1C1.27147 1 0.635584 2.97001 1.88288 3.86895L51.0693 39.318C58.4562 44.6418 68.4209 44.6418 75.8078 39.318Z" fill="black" stroke="black" strokeWidth="2"/>
                    </svg>
            }
        </div>
    );
};

export default ArrowDown;