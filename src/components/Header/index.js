import React from 'react';
import Languages from '../Language';
import Logo from '../../assets/logo.png';
import './styles.scss';

const Header = () => {
  return(
    <header className='header'>
        <img src={Logo} alt='FavMusicList logo' />
        <Languages />
    </header>
  );
}

export default Header;