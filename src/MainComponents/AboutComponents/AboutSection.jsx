import React from "react";
import { Row, Col, Typography, Space } from "antd";
import '../../Styles/About.css';

const HeroSection = () => {
  const { Title } = Typography;
  return (
    <Row className="about-bg" align="middle" justify="center" >
      <Col xs={24} md={20} lg={16} xl={12} className="about-col-fullwidth">
        <Space direction="vertical" align="center" className="about-space-fullwidth">
          <Title className="about-title">ABOUT</Title>
        </Space>
      </Col>
    </Row>
  );
};

export default HeroSection;
