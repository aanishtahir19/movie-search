import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './Styles/tailwind.css';
import App from './App.js';
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
