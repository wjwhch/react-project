import React from 'react';
import Sliper from '../components/Sliper'
import Grid from '../components/Grids'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
class Home extends React.Component{
    render(){
        return(
            <div>
                <Sliper {...this.props}></Sliper>
                <Grid {...this.props}></Grid>
                <Banner></Banner>
                <Nav></Nav>
            </div>
        )
    }
}

export default Home