import React from 'react';
import axios from 'axios'
import '../assets/css/tuijian.css'
import {Link} from 'react-router-dom'

import querystring from 'query-string'

class Tuijian extends React.Component{
    state={
        data:[]
    }
    render(){  
        let data = this.state.data
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
    async componentDidMount(){
        let res = await axios({url:`/mock/tuijian`});
        console.log(res.data.page_data);
        this.setState({data:res.data.page_data})
    }
}
export default Tuijian;