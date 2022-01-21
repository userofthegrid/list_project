import React from 'react';
import './Button.scss';

export default function Button({children, type, onClick, btnStyle}) {

    return (
        <button className={`btn ${btnStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
}
