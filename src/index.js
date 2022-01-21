import React from 'react';
import ReactDOM from 'react-dom';
import './styles/general.scss';
import App from './components/App';
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);