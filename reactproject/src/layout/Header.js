
import React from 'react'
import { SearchBar, WhiteSpace, WingBlank } from 'antd-mobile';
import '../assets/css/header.css'



class Header extends React.Component {
  state = {
    value: '美食',
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
      <div>
        <SearchBar placeholder="Search" maxLength={8} style={{background:"#fff"}}/>
        
      </div>)}
}

export default Header;