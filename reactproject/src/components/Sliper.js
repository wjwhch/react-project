import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import '../assets/css/sliper.css'
import axios from 'axios';
import {Link} from 'react-router-dom'


class Sliper extends React.Component {
  async componentDidMount(){
    let res = await axios({url:`/mock/nav`})
    let newState=this.teamArr(res.data.page_data,10)
    this.setState({data:newState})

  }
  state={
    data:[],
    _limit:10
  }
    render() {
      let data = this.state.data
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
    toDetail(dataName,id){
      this.props.history.push({pathname:'/column/'+id,search:'?dataName='+dataName})
    }
    teamArr(arr,num){
      var l = arr.length;
      var result=[];
      for(var i=0;i<l;i+=num) {
        result.push(arr.slice(i,i+num))
      }
      return result;
    }
}

export default Sliper;