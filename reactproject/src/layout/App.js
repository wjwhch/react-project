import React from 'react';
import Header from './Header';
import Footer from './Footer'
import '../assets/css/app.css'

import Loading from '../components/Loading'
// import pubsub from 'pubsub-js';
import connect from "react-redux/es/connect/connect";
// import propTypes from "prop-types";
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
    //订阅
    // pubsub.subscribe('update_loading',(messname,data)=>{
      // console.log('订阅到')
      // this.setState({bLoading:data})//可以
      // this.state.bLoading=data;//不可以
    // })
 
  // setAppData = (bl)=>{
  //   this.setState({appData:bl})
  // }

  // static childContextTypes={
  //   setAppData : propTypes.func
  // }

  // getChildContext(){
  //   return {
  //     setAppData:this.setAppData
  //   }
  // }
  
  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname;
    this.checkRoute(path);
  }

  componentDidMount(){
    let path = this.props.location.pathname;
    this.checkRoute(path);
  }

  checkRoute = (path) => {
    let {viewHead,viewFoot} = this.props;
    if (/home|follow|column/.test(path)){
      // this.setState({bHead:true,bFoot:true})
      viewHead(true);viewFoot(true);
    }
    if (/login|reg|detail/.test(path)){
      // this.setState({bHead:false,bFoot:false})
      viewHead(false);viewFoot(false);
    }
    if (/user/.test(path)){
      // this.setState({bHead:false,bFoot:true})
      viewHead(false);viewFoot(true);
    }
  };

  render(){
    let {bHead,bFoot,bLoading} = this.props;
    return (
      <>
        {bLoading && <Loading />}
        {bHead && <Header/>}
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
        {bFoot && <Footer/>}
      </>
    );
  }
}


const initMapStateToProps=state=>({
  bHead:state.bHead,
  bFoot:state.bFoot,
  bLoading:state.bLoading,
});

const initMapDispatchToProps=dispatch=>({
  viewHead:(bl)=>dispatch({type:'VIEW_Head',payload:bl}),
  viewFoot:(bl)=>dispatch({type:'VIEW_FOOT',payload:bl}),
  viewLoading:(bl)=>dispatch({type:'VIEW_LOADING',payload:bl}),
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)
