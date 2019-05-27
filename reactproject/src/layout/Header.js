
import React from 'react'
import { SearchBar, Flex } from 'antd-mobile';
import '../assets/css/header.css'
import {withRouter} from 'react-router-dom'


class Header extends React.Component {
  state = {
    value: '美食',
  };

  goback=()=>{
    this.props.history.go(-1)
  };
  
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (
      <Flex>
        <p className="fhbtn" style={{display:"inlineBlock"}}><a href="javascript:;" onClick={this.goback}>返回</a></p>
        <SearchBar placeholder="Search" maxLength={8} style={{background:"#fff",flex:1}}/>
        
      </Flex>)}
}

export default withRouter(Header);