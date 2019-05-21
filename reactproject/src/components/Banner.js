import React from 'react';
import '../assets/css/banner.css'
import bjd from '../assets/images/bjd1.jpg'
function Banner(){
    return(
        <div className="banner">
            <img src={bjd} alt=""/>
        </div>
    )
}

export default Banner;