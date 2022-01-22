import React, { useState, useEffect } from "react";
// import Placeholder from '../../assets/placeholder.webp';
import Form from '../Form';
import List from '../List';
import './styles.scss';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("albums")) || [];
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [tracks, setTracks] = useState('');
  const [image, setImage] = useState('');
  const [albums, setAlbums] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [albums]);

  return (
    <main className="app">
      <Form 
        title={title}
        setTitle={setTitle}
        year={year}
        setYear={setYear}
        tracks={tracks}
        setTracks={setTracks}
        image={image}
        setImage={setImage}
        albums={albums}
        setAlbums={setAlbums}
      />
      <List 
        albums={albums}
        setAlbums={setAlbums}
      />
    </main>
  );
}

export default App;
