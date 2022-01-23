import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './styles/general.scss';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './components/Store';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Store>
        <Header />
        <App />
        <Footer />
      </Store>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);