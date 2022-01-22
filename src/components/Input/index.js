import React from 'react';
import './styles.scss';

export default function TextInput({children, inpName, type, onChange, inpStyle}) {

    return (
        <div className={`form__inp-box ${inpStyle}`}>
            <input className='inp' onChange={onChange} type={type} name={inpName} />
            <label htmlFor={inpName}>{children}</label>
        </div>
    );
}
