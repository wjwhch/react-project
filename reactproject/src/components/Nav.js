import React from 'react';
import { Tabs, Badge } from 'antd-mobile';
import '../assets/css/nav.css'
import Tuijian from './tuijian'
const tabs = [
    { title: <Badge>推荐</Badge> },
    { title: <Badge>520</Badge> },
    { title: <Badge>附近</Badge> },
    { title: <Badge>视频</Badge> },
    { title: <Badge>美食</Badge> },
  ];
  class Nav extends React.Component {
    render(){
        return(
            <div className="NavBox">
                <Tabs tabs={tabs}
                    initialPage={0}
                    prerenderingSiblingsNumber={0}
                    
                >
                    <Tuijian/>
                    <Tuijian/>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                      <div className="tjBox">
                          <img src="#"/>
                          <p></p>
                          <div className="tjUserBox"><i></i><em></em><b></b></div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                      <div className="tjBox">
                          <img src="#"/>
                          <p></p>
                          <div className="tjUserBox"><i></i><em></em><b></b></div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    
                    </div>
                </Tabs>
            </div>
        )
    }
    
}

  export default Nav;