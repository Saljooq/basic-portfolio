import constructionImg from './underConstruction.jpg'
import { Tabs, Col, Row } from 'antd';
import React from 'react';
import './MainPage.css';
import Resume from '../Resume/Resume';
const { TabPane } = Tabs;

const MainPage: React.FC = () => (
  <Col span={24} className='outer'>
    <Row justify='center'>
      <Col xs={24} sm={24} md={22}  lg={20} xl={18} className="MainPage">
        <Row justify='center'>
          <Col span={22} >
            <Tabs defaultActiveKey="1">
              <TabPane tab="Resume" key="1">
                <Resume/>
              </TabPane>
              <TabPane tab="Projects" key="2">
                <div style={{marginBottom: '3%'}}>
                  <img src={constructionImg} alt="This part of the website is currently under construction"/>
                </div>  
              </TabPane>
              <TabPane tab="References" key="3" >
                <div style={{marginBottom: '3%' }}>
                  <img src={constructionImg} alt="This part of the website is currently under construction"/>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Col>
    </Row>
  </Col>
);

export default MainPage;