import React from 'react';
import style from './page.module.scss'

const TableItem = ({id, name, change}) => {

    if (change === id) {
        return (
            <div className={style.tableItemActive}>
                <p>
                    {name}
                </p>
            </div>
        );
    }
    else {
        return (
            <div className={style.tableItem}>
                <p>
                    {name}
                </p>
            </div>
        );
    }


};

export default TableItem;