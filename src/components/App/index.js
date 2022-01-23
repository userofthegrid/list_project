import React, { useState, useEffect, Suspense } from "react";
import Form from '../Form';
import List from '../List';
import Header from '../Header';
import Footer from '..//Footer';
import { Context } from '../Store';
import '../../i18n';
import './styles.scss';

const App = () => {

  const [langState, setLangState] = useState('pl');
  const initialState = JSON.parse(localStorage.getItem("albums")) || [];
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [tracks, setTracks] = useState('');
  const [image, setImage] = useState('');
  const [albums, setAlbums] = useState(initialState);
  const [sorting, setSorting] = useState(!localStorage.getItem('sorting') ? 'id' : localStorage.getItem('sorting'));

  useEffect(() => {
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [albums]);

  return (

    <Suspense fallback={<div>Loading...</div>}>
      <Context.Provider value={{ langState, setLangState, sorting, setSorting, albums }}>
        <Header />
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
        <Footer />
      </Context.Provider>
    </Suspense>
  );
}

export default App;