import React, {useEffect, useState} from 'react';
import style from "./page.module.scss";
import {deleteOneRequest, getAllRequest} from './service'

import {useNavigate} from "react-router-dom";
import TableItemRequest from "./TableItemRequest";
const Page = ({path, namePage}) => {

    const url = `${process.env.REACT_APP_SERVER_URL}${path}`

    const [all, setAll] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getAllRequest(setAll, url)
    }, [navigate])

    return (
        <div className={style.adminPartInfo}>
            <h1>
                {namePage}
            </h1>
            <div className={style.blockRequest}>
                {
                    all.length > 0 ?
                    all.map(item => (
                        <div className={style.tableRequest}>
                            <TableItemRequest {...item}/>
                            <div className={style.Cross} onClick={() => deleteOneRequest(item['id'], setAll, url)}></div>
                        </div>
                    ))
                        :
                        <div>Заявки отсутствуют</div>
                }
            </div>
        </div>
    );
};

export default Page;