import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { WinContext } from './components/Guess';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);