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
  const [listLayout, setListLayout] = useState('layout--list');

  useEffect(() => {
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [albums]);

  return (

    <Suspense fallback={<div>Loading...</div>}>
      <Context.Provider value={{ langState, setLangState, sorting, setSorting, albums, setAlbums, title, setTitle, year, setYear, tracks, setTracks, image, setImage, listLayout, setListLayout }}>
        <Header />
        <main className="app">
          <Form />
          <List />
        </main>
        <Footer />
      </Context.Provider>
    </Suspense>
  );
}

export default App;