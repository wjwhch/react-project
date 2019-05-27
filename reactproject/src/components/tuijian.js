import React from 'react';
import axios from 'axios'
import '../assets/css/tuijian.css'
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import querystring from 'query-string'
import {action3} from '../store/action'


class Tuijian extends React.Component{

    render(){  
        let data = this.props.tuijian
        console.log(data)
        return(
            <div className="tuijian">
                {
                    data && data.map((item,index)=>{
                        return(
                            <Link 
                              className="tjBox" 
                              key={item.id}
                              to={{
                                pathname:'/detail/'+item.id,
                                search:'?dataName=tuijian'
                            }}>
                                <div className="tjSmallBox">
                                    <img src={item.content_image}/>
                                    <p>{item.title}</p>
                                    <div className="tjUserBox"><img src={item.detail.auth_icon}/><em>{item.detail.auth}</em><b></b></div>
                                </div>
                            </Link>
                        )
                    })    
                } 
            </div>
        )
    }
    componentDidMount(){
        this.props.get({url:'/mock/tuijian',typename:'UPDATE_TUIJIAN'})
    }
}

const initMapStateToProps=state=>({
    tuijian:state.tuijian,
});
const initMapDispatchToProps=dispatch=>({
    get:({url,params,typename})=>dispatch(action3({
        dispatch,url,params,typename
    }))
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Tuijian);