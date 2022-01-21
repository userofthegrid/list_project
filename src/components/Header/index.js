import React from 'react';
import Languages from '../Language';
import Logo from '../../assets/logo.png';
import './Header.scss'

export default function index() {
  return(
    <header className='header'>
        <img src={Logo} alt='FavMusicList logo' />
        <Languages />
    </header>
  );
}
