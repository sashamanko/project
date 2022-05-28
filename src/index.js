// Imports | React
// __________________________________________________
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS | My
// __________________________________________________
import './index.css';

// Imports | App
// __________________________________________________
import App from './App';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);