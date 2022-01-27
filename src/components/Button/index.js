import React from 'react';
import './styles.scss';

const Button = ({children, type, onClick, btnStyle}) => {

    return (
        <button className={`btn ${btnStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
}

export default Button;