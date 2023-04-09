import React from 'react';
import style from "./page.module.scss";

const ChangeItem = ({text, name, maxLength, type, setOne, one}) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setOne({ ...one, [name]: value });
    };

    const handleInputChangeArr = (event) => {
        const { name, value } = event.target;
        const valueArr = value.split(',')
        setOne({ ...one, [name]: valueArr });
    };

    if (maxLength !== "-") {
        return (
            <div className={style.blockInput}>
                <p>{text}</p>
                {
                    type === 'arr' ?
                        <input type={type} name={name} placeholder={`Указывать через ", ", до ${maxLength} символов`} value={one[name]} onChange={handleInputChangeArr} autoComplete='off' maxLength={maxLength}/>
                        :
                        <input type={type} name={name} placeholder={`до ${maxLength} символов`} value={one[name]} onChange={handleInputChange} autoComplete='off' maxLength={maxLength}/>
                }
            </div>
        );
    }
    else {
        return (
            <div className={style.blockInput}>
                <p>{text}</p>
                {
                    type === 'arr' ?
                        <input type={type} name={name} value={one[name]} onChange={handleInputChangeArr} autoComplete='off'/>
                        :
                        <input type={type} name={name} value={one[name]} onChange={handleInputChange} autoComplete='off'/>
                }
            </div>
        );
    }
};

export default ChangeItem;