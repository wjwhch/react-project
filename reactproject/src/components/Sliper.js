import React from 'react'
import { Carousel } from 'antd-mobile';
import '../assets/css/sliper.css'
// import axios from 'axios';
import {Link} from 'react-router-dom'
// import propTypes from "prop-types";
// import pubsub from 'pubsub-js';
import connect from 'react-redux/es/connect/connect'
// import querystring from 'query-string'
import {action1} from '../store/action'


class Sliper extends React.Component {
  // static contextTypes={
  //   setAppData : propTypes.func
  // }
  
  // async componentDidMount(){
  //   // this.context.setAppData(true);
  //   pubsub.publish('update_loading',true)

  //   let res = await axios({url:`/mock/nav`})
  //   let newState=this.teamArr(res.data.page_data,10)
  //   this.setState({data:newState})
  //   // this.context.setAppData(false);
  //   pubsub.publish('update_loading',false)
  // }

  // state={
  //   data:[],
  //   _limit:10
  // }
  componentDidMount(){
    // let dataName = querystring.parse(this.props.location.search).dataName;
    this.props.get({url:`/mock/nav`,typename: 'UPDATE_NAV'})
  }
    render() {
      let data = this.props.data
        return ( 
              <Carousel className="sliper">
                {data && data.map((item,index)=>{
                  return(
                    <div className="sliperBox" key={index}>
                      {data[index] && data[index].map(item=>{
                        return(
                          <Link key={item.id} to={{pathname:'/column',search:"?dataname="+item.dataName}}>
                            <img src={item.icon} />
                            <span>{item.text}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )
                  })
                }  
              </Carousel> 
        );
    }
}

const initMapStateToProps=state=>({
  data:state.nav,
});

const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action1({
    dispatch,url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Sliper);