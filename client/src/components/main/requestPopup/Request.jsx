import React, {useEffect, useState} from 'react';
import style from './request.module.scss'

import Phone from '../../../assets/phoneBlack.svg'
import User from '../../../assets/user.svg'

import {animated, useSpring} from "@react-spring/web";
import getCookie from "../../cookies/getCookie";
import {addRequest} from "./service";
import {useCookies} from "react-cookie";

import Cross from '../../../assets/cross.svg'

const Request = () => {

    const [name, setName] = useState('')
    const [num, setNum] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [numDirty, setNumDirty] = useState(false)
    const [nameError, setNameError] = useState('Поле не может быть пустым')
    const [numError, setNumError] = useState('Поле не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    const [cookies, setCookies] = useCookies(['_request_open'])
    const [isOpen, setIsOpen] = useState(false)

    const dataAdd = () => {
        close()
        addRequest(name, num)
    }


    const [transformRequestPopup, apiPopup] = useSpring(() => ({
        from: {
            opacity: 0.7
        }
    }))

    const [transformRequestBlock, apiBlock] = useSpring(() => ({
        from: {
            y: -400,
            opacity: 0
        }
    }))

    const open = () => {
        const html = document.querySelector('html')
        const review = document.querySelector('.myReviews__container')

        apiBlock.start({
            to: {
                y: 0,
                opacity: 1
            },
            config: {
                duration: 400
            }
        })

        apiPopup.start({
            to: {
                opacity: 1
            },
            config: {
                duration: 400
            },
        })

        html.style.overflowY = 'hidden'
        review.style.display = 'none'
    }


    const close = () => {
        const html = document.querySelector('html')
        const review = document.querySelector('.myReviews__container')

        apiBlock.start({
            to: {
                y: -400,
                opacity: 0
            },
            config: {
                duration: 400
            },
            onRest: () => setCookies("_request_open", "false")
        })


        apiPopup.start({
            to: {
                opacity: 0
            },
            config: {
                duration: 400
            },
        })

        html.style.overflowY = 'visible'
        review.style.display = 'flex'
    }

    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'num':
                setNumDirty(true)
                break
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        const re = /^[\p{L}\p{M}'`-]+$/u
        if (!re.test(e.target.value)) {
            setNameError('Некорректное имя')
        }else {
            setNameError('')
        }
    }

    const numHandler = (e) => {
        setNum(e.target.value)
        const re = /^((\+7|7|8)+([0-9]){10})$/
        if (!re.test(e.target.value)) {
            setNumError('Некорректный номер телефона')
        }else {
            setNumError('')
        }
    }

    useEffect(() => {
        if (numError || nameError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [nameError, numError])

    useEffect(() => {
        if(cookies._request_open === "true") {
            open()
            setIsOpen(true)
        }
        else if(cookies._request_open === "false"){
            setIsOpen(false)
        }
    }, [cookies])

    if (isOpen && getCookie('_request') !== 'true') {
        return (
            <animated.div className={style.requestPopup} style={transformRequestPopup}>
                <animated.div className={style.requestBlock} style={transformRequestBlock}>
                    <h1 className={style.requestTitle}>Оставить заявку</h1>
                    <div className={style.blockInput}>
                        {(nameDirty && nameError) && <div style={{color: "#8b0000", fontSize: "15px"}}>{nameError}</div>}
                        <div className={style.requestInput}>
                            <input className={style.inputRequest} onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name='name' placeholder='Ваше имя'/>
                            <img src={User} alt="" className={style.Image}/>
                        </div>
                        {(numDirty && numError) && <div style={{color: "#8b0000", fontSize: "15px"}}>{numError}</div>}
                        <div className={style.requestInput}>
                            <input className={style.inputRequest} onChange={e => numHandler(e)} value={num} onBlur={e => blurHandler(e)} type="tel" name='num' placeholder='Номер телефона'/>
                            <img src={Phone} alt="" className={style.Image}/>
                        </div>
                    </div>
                    <button className={style.buttonRequest} disabled={!formValid} onClick={() => dataAdd()}>Отправить</button>
                    <div onClick={() => close()} className={style.Cross} image={Cross}></div>
                </animated.div>
            </animated.div>
        );
    }
    else if (isOpen && getCookie('_request') === 'true'){
        return (
            <animated.div className={style.requestPopup} style={transformRequestPopup}>
                <animated.div className={style.requestBlockAccess} style={transformRequestBlock}>
                    <h1>Вы уже оставили заявку</h1>
                    <p>Повторно оставить заявку возможно через 24 часа</p>
                    <button onClick={() => close()}>Хорошо</button>
                </animated.div>
            </animated.div>
        )
    }
};

export default Request;