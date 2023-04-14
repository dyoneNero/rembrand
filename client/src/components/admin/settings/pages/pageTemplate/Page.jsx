import React, {useEffect, useState} from 'react';
import style from "./page.module.scss";
import TableItem from "./TableItem";
import {addOne, deleteOne, getAccessRoute, getAll, getOne, updateOne} from './service'

import AddIco from "../../../../../assets/add.svg";
import DeleteIco from "../../../../../assets/delete.svg";
import OWIco from "../../../../../assets/overwrite.svg";
import ChangeItem from "./ChangeItem";
import {useNavigate} from "react-router-dom";




const Page = ({path,namePage, changeItemArr}) => {

    const url = process.env.REACT_APP_SERVER_URL + path

    const [all, setAll] = useState([])
    const [one, setOne] = useState({})
    const [change, setChange] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        getAll([])
        getAll(setAll, url, setOne)
    }, [navigate])


    return (
            <div className={style.adminPart}>
                <h1>
                    {namePage}
                </h1>
                <div className={style.adminPartdf}>
                    <div className={style.partTable}>
                        <div>
                            {
                                all.map(item =>
                                    <div onClick={() => {
                                        getOne(item.id, setOne, one, url)
                                        setChange(item.id)
                                    }}>
                                        <TableItem name={item.name} change={change} id={item.id}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={style.blockChanges}>
                        {
                            changeItemArr.map(item =>
                                <ChangeItem text={item.text} name={item.name} maxLength={item.maxLength} type={item.type} one={one} setOne={setOne}/>
                            )
                        }
                        <div className={style.menuChanges}>
                            <img src={AddIco} alt="" onClick={() => addOne(one, setAll, url, setOne)}/>
                            <img src={DeleteIco} alt="" onClick={() => deleteOne(one.id, setAll, url, setOne)}/>
                            <img src={OWIco} alt="" onClick={() => updateOne(one, setAll, url, setOne)}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Page;