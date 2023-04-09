import React from 'react';
import style from './admin.module.scss'
import Login from "../../components/admin/login/Login";

const AdminLogin = () => {

    const review = document.querySelector('.myReviews__container')

    review.style.display = 'none'

    return (
        <div className={style.admin}>
            <Login/>
        </div>
    );
};

export default AdminLogin;