import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect'

//路由守卫 条件 同步    应用场景 本地存储|文本存储|
//流程: user里面 取localStorage 取不到 去向login->取数据->存取localStorage->跳转到user
let AuthRoute = ({ component: Component,user, ...rest }) => (
  <Route {...rest} render={props =>
    user.error === 0 ?
    // localStorage.getItem('rc_user') ?
      <Component {...props}  /> //data={JSON.parse(localStorage.getItem('rc_user'))}
      : <Redirect to="/login" />
  }
  />
);




const initMapStateToProps=state=>({
  user:state.user
});

const initMapDispatchToProps=dispatch=>({
  // get:({url,params,typename})=>dispatch(action2({
  //   url,params,typename
  // }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(AuthRoute)