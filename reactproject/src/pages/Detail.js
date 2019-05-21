import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import querystring from 'query-string'
import '../assets/css/detail.css'

class Detail extends React.Component {
    state = {
      data:[], 
    }
    render() {
      let data = this.state.data
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
                        <div>
                            <div key={val.id} className="detailAuthBox">
                                <img src={val.detail.auth_icon} className="detailAuthIcon"/>
                                <div>
                                    <span>{val.detail.auth}</span>
                                    <p><i>{val.time}</i><em></em></p>
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
    async componentDidMount(){
        let id = this.props.match.params.id;
        let dataName = querystring.parse(this.props.location.search).dataName;
        let res = await axios({url:`/mock/${dataName}/${id}`});
        this.setState({data:new Array(res.data.page_data)})
        console.log(this.state.data[0])
    }
  }

export default Detail;