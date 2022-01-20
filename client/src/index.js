import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      <div id='count'>
        <span>Count: 10</span>
      </div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
