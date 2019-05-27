import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import querystring from 'query-string'
import '../assets/css/detail.css'
import connect from 'react-redux/es/connect/connect'
import {action3} from '../store/action'

class Detail extends React.Component {
    // constructor(){
    //     super()
    //     this.state={
    //         data:[]
    //     }
    // }
    
    render() {
      let data = this.props.detail
      console.log(data)
      return (
        <div className="Detail">
            <Carousel
            autoplay={false}
            infinite
            >
            {data && data.map(val => (
            <a
                key={val.id}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%'}}
            >
                <img
                src={val.content_image}
                alt=""
                style={{ width: '100%',height:"200px",display:"block"}}
                />
            </a>
            ))}
        </Carousel>
        
            {
                data && data.map(val=>{
                    return(
                        <div key={val.id} >
                            <div className="detailAuthBox">
                                <img src={val.detail.auth_icon} className="detailAuthIcon"/>
                                <div>
                                    <span>{val.detail.auth}</span>
                                    <p><i>{this.date(val.time)}</i><em></em></p>
                                </div>
                            </div>
                            <div className="detailAuthContent">
                                <p>{val.detail.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        
      </div>
          
      );
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        let dataName = querystring.parse(this.props.location.search).dataName;
        console.log(dataName)
        // let res = await axios({url:`/mock/${dataName}/${id}`});
        // this.setState({data:new Array(res.data.page_data)}) 
        this.props.get({url:`/mock/${dataName}/${id}`,typename:'UPDATE_DETAIL'})
    }
  }

  const initMapStateToProps=state=>({
    detail:state.detail
  });
  
  const initMapDispatchToProps=dispatch=>({
    get:({url,params,typename})=>dispatch(action3({
      dispatch,url,params,typename
    }))
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Detail)