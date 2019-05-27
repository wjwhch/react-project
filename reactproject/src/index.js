import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd-mobile/lib/date-picker/style/css';
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './layout/App';
import store from "./store";
import './assets/css/index.css'

import date from './api/date';
React.Component.prototype.date=date;
console.log(React)
let  local = JSON.parse(localStorage.getItem('rc_user'));
local && store.dispatch({type:'UPDATE_USER',payload:local})

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
