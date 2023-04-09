import React from 'react';
import style from './page.module.scss'

const TableItemRequest = ({name, num}) => {

    return (
        <div className={style.tableItemRequest}>
            <p>
                {name}
            </p>
            <p>
                {num}
            </p>
        </div>
    );


};

export default TableItemRequest;