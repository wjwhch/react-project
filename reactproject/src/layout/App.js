import React from 'react';
import Header from './Header';
import Footer from './Footer'
import '../assets/css/app.css'

import { Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import AuthRoute from "../guard/Auth";


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/follow" component={Follow}/>
          <AuthRoute path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/column/:id" component={Column}/>
          <Redirect exact from="/" to="/home"/>
          <Route component={Error}/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
