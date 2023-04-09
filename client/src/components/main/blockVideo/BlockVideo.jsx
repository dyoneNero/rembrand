import React from 'react';

import style from './block-video.module.scss'

const BlockVideo = ({video, name, description}) => {



    return (
        <div className={style.blockVideo}>
            <iframe
                    src={video}>
            </iframe>
            <div className={style.content}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlockVideo;