import React from 'react';
import './styles.scss';

export default function index() {
  return (
    <div className='languages'>
        <label htmlFor='languages-select' className='languages__label'>Język:</label>
        <select name="languages-select" className='languages__select'>
            <option value="pl">PL</option>
            <option value="en">EN</option>
        </select>
    </div>
  );
}
