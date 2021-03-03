import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './styles/App.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );


serviceWorker.unregister();
