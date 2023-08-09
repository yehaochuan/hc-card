import React from 'react';
import ReactDOM from 'react-dom'; 
import './style/index.css';
import App from './App';



ReactDOM.render(  //包裹React.StrictMode检查 代码是否有不合理的地方
  <App />,
  document.getElementById('root')
);
