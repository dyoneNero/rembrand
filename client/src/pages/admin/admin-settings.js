import React from 'react';
import style from './admin.module.scss'
import Settings from "../../components/admin/settings/Settings";

const AdminSettings = () => {

    const review = document.querySelector('.myReviews__container')

    review.style.display = 'none'

    return (
        <div className={style.admin}>
            <Settings/>
        </div>
    );
};

export default AdminSettings;