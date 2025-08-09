import React from 'react';
import { Row, Col } from 'antd';
import HeroSection from '../MainComponents/HomeComponents/HeroSection';
import SpaceComponent from '../MainComponents/HomeComponents/SpaceComponent';

const Home = () => {
  return (
    <Row gutter={[0, 0]}>
      <Col span={24}>
        <HeroSection />
      </Col>
      <Col span={24}>
        <SpaceComponent />
      </Col>
    </Row>
  );
};

export default Home;
