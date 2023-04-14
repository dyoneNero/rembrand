import React, {useEffect, useState} from 'react';
import style from "./page.module.scss";
import {getAll, getOne, updateOne} from './service'

import OWIco from "../../../../../assets/overwrite.svg";
import ChangeItem from "./ChangeItem";
import {useNavigate} from "react-router-dom";




const Page = ({path, namePage, changeItemArr}) => {

    const url = `${process.env.REACT_APP_SERVER_URL}${path}`

    const [one, setOne] = useState({})

    const navigate = useNavigate()

    const id = 1

    useEffect(() => {
        getOne(id, setOne, one, url)
    }, [navigate])



    return (
        <div className={style.adminPartInfo}>
            <h1>
                {namePage}
            </h1>
            <div className={style.blockChangesInfo}>

                {
                    changeItemArr.map(item =>
                            <ChangeItem text={item.text} name={item.name} maxLength={item.maxLength} type={item.type} one={one} setOne={setOne}/>
                    )
                }
            </div>
            <div className={style.menuChanges}>
                <img src={OWIco} alt="" onClick={() => updateOne(one, setOne, url)}/>
            </div>
        </div>
    );
};

export default Page;