import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import swDev from './swDev'

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

swDev();