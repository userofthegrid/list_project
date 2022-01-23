import { useState, useEffect } from 'react';
import ListSettings from './ListSettings';
import Star from '../../assets/star.svg';
import Remove from '../../assets/cross.png';
import Swipe from '../../assets/swipe-left.png';
import './styles.scss';

const List = ({albums, setAlbums}) => {

  const [sorting, setSorting] = useState(!localStorage.getItem('sorting') ? 'id' : localStorage.getItem('sorting'));

  useEffect(() => {
    localStorage.setItem("sorting", sorting);
    const currentSorting = localStorage.getItem('sorting');

    if (currentSorting === 'title') {
      albums.sort((a, b) => {
        let fa = a.title.toLowerCase(),
            fb = b.title.toLowerCase();
    
        if (fa < fb) { return -1;}
        if (fa > fb) { return 1;}
        return 0;
      });
    } else if(currentSorting === 'date') {
      albums.sort((a, b) => {
        return a.timeNow - b.timeNow;
      });
    } else if(currentSorting === 'id') {
      albums.sort((a, b) => {
        return a.id > b.id;
      });
    }

    const newAlbums = albums;
    setAlbums((newAlbums) => [...newAlbums]);
  }, [sorting]);

  const handleAlbumEdit = ({ id }) => {
    const findAlbum = albums.find((album) => album.id === id);

    updateAlbum(findAlbum.title, findAlbum.id, findAlbum.year, findAlbum.tracks, findAlbum.image, !findAlbum.favourite, findAlbum.timeNow)
  }

  const updateAlbum = (title, id, year, tracks, image, favourite, timeNow) => {
    const newAlbum = albums.map((album) =>
        album.id === id ? { title, id, year, tracks, image, favourite, timeNow } : album
    )
    setAlbums(newAlbum);
  }

  const handleAlbumDelete = ({ id }) => {
    setAlbums(albums.filter((album) => album.id !== id));
  }

  return (
    <div className='app__list'>
        <ListSettings
          sorting={sorting}
          setSorting={setSorting}
        />

        <div className='list__cards-container'>

        {albums.map((album) => (
          <div className='card' key={album.id}>
            <div className='card__info'>
              <div className='info__img' style={{ backgroundImage: `url('${album.image[0] ? album.image : 'https://raw.githubusercontent.com/userofthegrid/list_project/master/src/assets/no-picture.webp'}')`}}></div>
              
              <div className='info__box'>
                  <p>
                      <span>Album:</span>
                      <span className='info-box__text'>{album.title}</span>
                  </p>
  
                  <p>
                      <span>Wydano:</span>
                      <span className='info-box__text'>{album.year}</span>
                  </p>
  
                  <p>
                      <span>Utworów:</span>
                      <span className='info-box__text'>{album.tracks}</span>
                  </p>

                  <p className={`${album.favourite === false ? "box__favourite-item" : "box__favourite-item--active"}`}>
                      <span className='info-box__span--favourite'>Ulubiony:</span>
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