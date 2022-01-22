import React from 'react';
import List from '../../assets/list.svg';
import Grid from '../../assets/grid.svg';
import './styles.scss';

export default function index() {
  return (
    <div className='list__settings'>
      <h3 className='settings__list-title'>Lista albumów</h3>
      <div className='settings__options'>
        <label className='options__label' htmlFor='sorting'>Sortuj po:</label>
        
        <select name="sorting" className='options__sorting'>
            <option value="id">ID albumu</option>
            <option value="date">Data dodania</option>
            <option value="name">Nazwa albumu</option>
        </select>

        <button className='options__btn options__btn--active'>
          <img src={List} alt='Display as list' />
        </button>

        <button className='options__btn'>
          <img src={Grid} alt='Display as grid' />
        </button>
      </div>
    </div>
  );
}
