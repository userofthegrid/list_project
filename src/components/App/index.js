import React, { Suspense } from "react";
import Form from '../Form';
import List from '../List';
import Header from '../Header';
import Footer from '../Footer';
import { Context } from '../Store';
import AppLogic from './AppLogic';
import './styles.scss';

const App = () => {

  const { langState, setLangState, inpState, setInpState, albums, setAlbums, sorting, setSorting, listLayout, setListLayout } = AppLogic();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Context.Provider value={{ langState, setLangState, sorting, setSorting, albums, setAlbums, inpState, setInpState, listLayout, setListLayout }}>
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