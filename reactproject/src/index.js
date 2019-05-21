import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd-mobile/lib/date-picker/style/css';
import {BrowserRouter} from 'react-router-dom'
import App from './layout/App';
import './assets/css/index.css'
ReactDOM.render(  
  <BrowserRouter>
    <App/>
  </BrowserRouter>, 
  document.getElementById('root'));
