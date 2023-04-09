import React from 'react';
import './location-block.scss'
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

const LocationBlock = () => {


    return (
        <div className="locationBlock">
            <YMaps>
                <Map width='100%' height='100%' defaultState={{ center: [43.603395, 39.735731], zoom: 16, controls: [] }}>
                    <Placemark defaultGeometry={[43.603395, 39.735731]} />
                </Map>
            </YMaps>
        </div>
    )
};

export default LocationBlock;