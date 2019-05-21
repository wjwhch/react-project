import React from 'react';
import '../assets/css/footer.css'
import {NavLink} from "react-router-dom";



class Footer extends React.Component {
  render(){
      return(
          <div className="footerFoot">
              <div>
                  <NavLink to="/home">
                    <img src="https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg" alt=""/>
                    <span>首页</span>
                  </NavLink>
              </div>
              <div>
                  <NavLink to="/gonglue">
                    <img src="https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg" alt=""/>
                    <span>攻略</span>
                  </NavLink>
              </div>
              <div>
                  <NavLink to="/follow">
                    <img src="https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg" alt=""/>
                    <span>关注</span>
                  </NavLink>
              </div>
              <div>
                  <NavLink to="/user">
                    <img src="https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg" alt=""/>
                    <span>我的</span>
                  </NavLink>
              </div>
          </div>
      )
  }
}

export default Footer;