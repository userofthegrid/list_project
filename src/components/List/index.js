import React from 'react';
import Translate from '../../hooks/Translate';
import ListLogic from './ListLogic';
import ListSettings from './ListSettings';
import Star from '../../assets/star.svg';
import Remove from '../../assets/cross.png';
import Swipe from '../../assets/swipe-left.png';
import NoImg from '../../assets/placeholder.webp';
import './styles.scss';

const List = () => {

  const { t } = Translate();
  const { albums, listLayout, handleAlbumEdit, handleAlbumDelete } = ListLogic();

  return (
    <div className='app__list'>
        <ListSettings/>

        <div className={`list__cards-container ${listLayout}`} >

        {albums.map((album) => (
          <div className='card' key={album.id}>
            <div className='card__info'>
              <div className='info__img' style={{ backgroundImage: `url('${album.image[0] ? album.image : NoImg}')`}}></div>
              
              <div className='info__box'>
                  <p>
                      <span>Album:</span>
                      <span className='info-box__text'>{album.title}</span>
                  </p>
  
                  <p>
                      <span>{t("cardInfo.year")}:</span>
                      <span className='info-box__text'>{album.year}</span>
                  </p>
  
                  <p>
                      <span>{t("cardInfo.tracks")}:</span>
                      <span className='info-box__text'>{album.tracks}</span>
                  </p>
                  <p className={!album.favourite ? "box__favourite-item" : "box__favourite-item--active"}>
                      <span className='info-box__span--favourite'>{t("cardInfo.favourite")}:</span>
                      <span className='info-box__text info-box__text--favourite'>Best of the best <img src={Star} alt='Favourite' /></span>
                  </p>
              </div>
            </div>
  
            <div className='card__actions'>
                <button 
                  className={`actions__btn ${album.favourite === false ? 'img-favourite' : 'img-favourite--active'}`}
                  onClick={() => handleAlbumEdit(album)}
                >
                  <img src={Star} alt='Manage favourites' />
                </button>
  
                <button
                  className='actions__btn'
                  onClick={() => handleAlbumDelete(album)}
                >
                  <img src={Remove} alt='Remove album' />
                </button>
            </div>
          </div>
          ))}
        </div>

        <img className='list__mobi-info' src={Swipe} alt='swipe left' />
    </div>
  );
}

export default List;