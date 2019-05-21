import React from 'react';
import '../assets/css/grids.css'
import axios from 'axios'


class Grids extends React.Component{
    async componentDidMount(){
        let res = await axios({url:`/mock/grid`})  
        this.setState({data:res.data.page_data})
    }
    state={
        data:[]
    }
    render(){
        let data = this.state.data
        return(
            <div className="gridsBox">
                {data && data.map(item=>{
                    return(                       
                        <div className="gridsSmallBox" key={item.id} onClick={()=>this.toDetail(item.dataName)}>
                            <p>{item.title}</p>
                            <span>{item.text}</span>
                        </div>
                    )
                })}
               
            </div>
        )
    }
    toDetail(dataName){
        this.props.history.push({pathname:'/follow',search:'?dataName='+dataName})
    }
    
}

export default Grids