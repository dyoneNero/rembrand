import React, {useEffect, useState} from 'react';
import style from './login.module.scss'
import {useNavigate} from "react-router-dom";
import getCookie from "../../cookies/getCookie";
import {signIn} from "./service";

const Login = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    })
    const [redirect, setRedirect] = useState(null)

    useEffect(() => {
        if (getCookie('_auth')) {
            setRedirect(true)
        }
    }, [])



    //инпуты обновляют стейт, который будет отправляется
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            {
                redirect ? navigate('/admin/settings/stocks') :
                    <div className={style.login}>
                        <div>
                            <input type="text" name="login" placeholder='Логин' value={formData.login} onChange={handleInputChange} autoComplete='off'/>
                            <input type="password" name="password" placeholder='Пароль' value={formData.password} onChange={handleInputChange} autoComplete='off'/>
                        </div>
                        <div>
                            <button onClick={() => signIn(formData, navigate)}>
                                Войти
                            </button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;