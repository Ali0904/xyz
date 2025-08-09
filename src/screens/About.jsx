import React from 'react';
import { Row, Col } from 'antd';
import AboutSection from '../MainComponents/AboutComponents/AboutSection';
import AboutCoreContent from '../MainComponents/AboutComponents/AboutCoreContent';
import '../Styles/About.layout.css';

const About = () => {
  return (
    <Row gutter={[0, 0]} className="about-screen-bg">
      <Col span={24}>
        <AboutSection />
      </Col>
      <Col span={24}>
        <AboutCoreContent />
      </Col>
    </Row>
  );
};

export default About; 