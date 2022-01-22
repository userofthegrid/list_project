import React from 'react';
import './styles.scss';

export default function Button({children, type, onClick, btnStyle}) {

    return (
        <button className={`btn ${btnStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
}
