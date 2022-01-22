import React from 'react';
import TopBar from './ListSettings';
// import Card from './Card';
import Swipe from '../../assets/swipe-left.png'
import './styles.scss';

export default function index() {
  return (
    <div className='app__list'>
        <TopBar />
        <div className='list__cards-container'>
          {/* <Card /> */}
        </div>
        <img className='list__mobi-info' src={Swipe} alt='swipe left' />
    </div>
  );
}
